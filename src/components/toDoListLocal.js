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

function ToDoListLocal(props) {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  function newTask() {
    if (value.length !== 0) {
      let temp = [value];
      setTasks([...tasks, temp]);
      setValue("");
      if (props.type === "authenticated") {
        storeTask(value);
      }
    }
  }
  async function storeTask(task) {
    await DataStore.save(
      new Tasks({
        task: task,
      })
    );
  }
  useEffect(() => {
    console.log(props);
    if (props.type === "authenticated") {
      loadTasks();
    }
  }, []);

  async function loadTasks() {
    const models = await DataStore.query(Tasks);
    console.log(models);
    setTasks([...tasks, models[0].task]);
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
      <Center><p className="font-face-inter">To Do List </p></Center>
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
export default ToDoListLocal;
