import "./App.css";
import { Button, Center, MantineProvider } from '@mantine/core';

import DateTime from "./components/dateTime";
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
      <MantineProvider>
      <Button style={{position:'absolute'}} right={15} top={15}>
        Sign in
      </Button>
      <Center style={{ fontSize:'30px',fontWeight: "bold", fontFamily: "arial" }}>
        <DateTime type="date" />
      </Center>
      <Center style={{fontFamily: "arial", fontSize:'50px',marginTop:"13%"}} >
        <DateTime type="time" />
      </Center>

      </MantineProvider>
  );
}

export default withAuthenticator(App);
