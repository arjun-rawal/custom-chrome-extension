import "./App.css";
import { Button, Center, MantineProvider, Modal, Box, Blockquote } from "@mantine/core";
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
Amplify.configure(awsExports);

function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [data,setData]=useState();
  var link = "https://api.api-ninjas.com/v1/quotes"
  async function FetchQuote() {
    try {
      const quoteObject = await fetch(
        link
      ,{
        headers: {
          "X-Api-Key": "NE9j9kpzz9wwNpgxBhT5XA==NYRboJ18ccCs5Ecq"
        }
      }
      )
      console.log(link)
      const json = await quoteObject.json();
      console.log(json);
      setData('"' + json[0].quote + '"\n -' + json[0].author);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {

    FetchQuote();
  }, []);




  return (
    <MantineProvider >
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
      <Blockquote>
      {/* {
       data && data.length>0 && data.map((item)=><p>{item.Quote}</p>)
     } */}
     {data}
      </Blockquote>
      {/* TODO:
      problem with sign in-> browser remembers signed in and authStatus doesn't work which keeps the sign in button
      greeting on sign in
      amplify storage for quick links
      loading amplify storage on sign in
      using local storage if not signed in

    */}
    </body>
    </MantineProvider>
  );
}

export default App;
