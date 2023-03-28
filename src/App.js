import "./App.css";
import { NativeBaseProvider, Box, Center } from "native-base";
import DateTime from "./components/dateTime";
function App() {
  return (
    <NativeBaseProvider>
      <Center fontSize={30} style={{ fontWeight: "bold", fontFamily: "arial" }}>
        <DateTime type="date" />
      </Center>
      <Center style={{fontFamily: "arial"}} fontSize={50} marginTop={"13%"}>
        <DateTime type="time" />
      </Center>
    </NativeBaseProvider>
  );
}

export default App;
