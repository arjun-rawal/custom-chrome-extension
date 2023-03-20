import "./App.css";
import { NativeBaseProvider, Box, Center } from "native-base";
import DateTime from "./components/dateTime";
import ChatGPT from "./components/chatGpt";
function App() {
  return (
    <NativeBaseProvider>
      {/* <Center fontSize={30} style={{ fontWeight: "bold", fontFamily: "arial" }}>
        <DateTime type="date" />
      </Center>
      <Center style={{fontFamily: "arial"}} fontSize={50} marginTop={"13%"}>
        <DateTime type="time" />
      </Center> */}
    <ChatGPT />
    </NativeBaseProvider>
  );
}

export default App;
