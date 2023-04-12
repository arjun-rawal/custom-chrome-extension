import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  TextInput,
} from "@mantine/core";
import { IconListDetails, IconArrowNarrowDown } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Tasks } from "../models";

function ToDoListAuth(props) {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  function newTask() {
    if (value.length !== 0) {
      let temp = [value];
      setTasks([...tasks, temp]);
      setValue("");
      storeTask(value);
    }
  }
  async function storeTask(task) {
    await DataStore.save(
      new Tasks({
        task: task,
        email: props.email,
      })
    );
  }
  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const models = await DataStore.query(Tasks, (c)=> c.email.eq(props.email));
    console.log(models);
    var authList = [];
    for (var i = 0; i < models.length; i++) {
      authList.push(models[i].task);
    }
    setTasks([...tasks, ...authList]);
  }
  const listItems = tasks.map((task) => <li key={task}>{task}</li>);
  return (
    <Box
      style={{
        width: props.width,
        position: "absolute",
        right: "10pt",
        bottom: 0,
      }}
    >
      <Center><p className="font-link" style={{fontSize:"16px"}}>To Do List</p></Center>
      <Flex direction="row" justify="flex-end" gap={10} align="flex-start">
        <TextInput
          icon={<IconListDetails />}
          size="sm"
          placeholder="Task"
          variant="filled"
          style={{ width: "100%" }}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        <Button onClick={newTask}>
          <IconArrowNarrowDown />
        </Button>
      </Flex>
      <Grid columns={5}>
        <ul>{listItems}</ul>
      </Grid>
    </Box>
  );
}
export default ToDoListAuth;
