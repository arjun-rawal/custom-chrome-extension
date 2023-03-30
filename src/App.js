import "./App.css";
import { Button, Center, MantineProvider, Modal } from "@mantine/core";

import DateTime from "./components/dateTime";
import { Amplify } from "aws-amplify";

import {
  Authenticator,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { useDisclosure } from "@mantine/hooks";
Amplify.configure(awsExports);

function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  return (
    <MantineProvider>
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
          <Button style={{ position: "absolute" }} right={15} top={15}>
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

      {/* TODO:
      Sign in event closes modal and button name changes to sign out which leads to sign out function
      greeting on sign in
      amplify storage for quick links
      loading amplify storage on sign in
      using local storage if not signed in

    */}
    </MantineProvider>
  );
}

export default App;
