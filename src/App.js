import "./App.css";
import { Button, Center, MantineProvider, Modal } from "@mantine/core";

import DateTime from "./components/dateTime";
import { Amplify } from "aws-amplify";

import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { useDisclosure } from "@mantine/hooks";
Amplify.configure(awsExports);

function App() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <MantineProvider>
      <Button
        onClick={open}
        style={{ position: "absolute" }}
        right={15}
        top={15}
      >
        Sign in
      </Button>
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
    </MantineProvider>
  );
}

export default App;
