import "./App.css";
import {
  Button,
  Center,
  MantineProvider,
  Modal,
  Box,
  Blockquote,
} from "@mantine/core";
import DateTime from "./components/dateTime";
import { Amplify, Auth } from "aws-amplify";

import {
  Authenticator,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import ToDoListAuth from "./components/toDoListAuth";
import ToDoListLocal from "./components/toDoListLocal";
Amplify.configure(awsExports);

function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const { user } = useAuthenticator((context) => [context.user]);
    
  console.log(user);
  const [data, setData] = useState();
  var link = "https://api.api-ninjas.com/v1/quotes";
  async function FetchQuote() {
    try {
      const quoteObject = await fetch(link, {
        headers: {
          "X-Api-Key": "NE9j9kpzz9wwNpgxBhT5XA==NYRboJ18ccCs5Ecq",
        },
      });
      console.log(link);
      const json = await quoteObject.json();
      console.log(json);
      setData(json[0]);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    FetchQuote();
  }, []);

  return (
    <MantineProvider>
      <body>
        {authStatus === "authenticated" && (
          <Box style={{ position: "absolute" }} right={15} top={15}>
            Loading...
          </Box>
        )}
        {authStatus !== "authenticated" ? (
          <>
            <Modal
              opened={opened}
              onClose={close}
              title="Authentication"
              centered
              withCloseButton={false}
              size="auto"
            >
              <Authenticator />
            </Modal>
            <Button
              onClick={open}
              style={{ position: "absolute" }}
              right={15}
              top={15}
            >
              Sign in
            </Button>
            <ToDoListLocal width='25%'/>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                Auth.signOut();
              }}
              style={{ position: "absolute" }}
              right={15}
              top={15}
            >
              Sign out
            </Button>
            <Center>
              <Box
                style={{ position: "absolute", fontWeight: "bold" }}
                bottom={10}
              >
                <p style={{ fontSize: "15pt" }}>
                  Hello {user.attributes.name.split(" ")[0]}!
                </p>
              </Box>
            </Center>

            <ToDoListAuth width='25%' email={user.attributes.email}/>
          </>
        )}

        <Center
          style={{ fontSize: "30px", fontWeight: "bold", fontFamily: "arial" }}
        >
          <DateTime type="date" />
        </Center>
        <Center
          style={{ fontFamily: "arial", fontSize: "50px", marginTop: "13%" }}
        >
          <DateTime type="time" />
        </Center>
        {data && (
          <Center>
            <Blockquote cite={"-" + data.author}>{data.quote}</Blockquote>{" "}
          </Center> //TODO: calls twice for some reason
        )}

        {/* TODO:
      amplify storage for quick links
      loading amplify storage on sign in
      using local storage if not signed in

    */}

      </body>
    </MantineProvider>
  );
}

export default App;
