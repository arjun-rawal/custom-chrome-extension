import { Box, Button, Center, Flex, Grid, Stack, TextInput } from "@mantine/core";
import { IconListDetails,IconArrowNarrowDown} from "@tabler/icons-react";
import { useState } from "react";

function ToDoList(props) {
  const [tasks,setTasks] = useState([])
  const [value, setValue] = useState('');

  function newTask(){
    if (value.length !==0){
      let temp = [value]
      setTasks([...tasks,temp])
      setValue("")
    }
  }
  const listItems = tasks.map((task) =>
  <li key={task}>
    {task}
  </li>
);
  return (
    <Box style={{ width: props.width, position: "absolute", right: "10pt", bottom:0 }}>
      <Center>To Do List</Center>
      <Flex direction="row" justify='flex-end' gap={10} align="flex-start">
 
        <TextInput
          icon={<IconListDetails />}
          size="sm"
          placeholder="Task"
          variant="filled"
          style={{width:'100%'}}
          value={value} onChange={(event) => setValue(event.currentTarget.value)}
        />
        <Button onClick={newTask}>
          <IconArrowNarrowDown/>
        </Button>
      </Flex>
      <Grid columns={5}>
      <ul>{listItems}</ul>
      </Grid>
    </Box>
  );
}
export default ToDoList;
