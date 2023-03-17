import "./App.css";
import { NativeBaseProvider, Box, Center } from "native-base";
import DateTime from "./components/time";
function App() {
  return (
    <NativeBaseProvider>
      <Center paddingTop='20%'>
        
        <DateTime />
      </Center>
    </NativeBaseProvider>
  );
}

export default App;
