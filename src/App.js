import "./App.css";
import { Button, MantineProvider } from '@mantine/core';

import DateTime from "./components/dateTime";
function App() {
  return (
      <MantineProvider>
      <div style={{ fontSize:'30px',fontWeight: "bold", fontFamily: "arial" }}>
        <DateTime type="date" />
      </div>
      <div style={{fontFamily: "arial", fontSize:'50px',marginTop:"20%"}} >
        <DateTime type="time" />
      </div>
      <Button>
        Sign in
      </Button>
      </MantineProvider>
  );
}

export default App;
