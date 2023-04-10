import { Box, Button, Center, Flex, TextInput } from "@mantine/core";
import { IconListDetails,IconArrowNarrowDown} from "@tabler/icons-react";

function ToDoList(props) {
  return (
    <Box style={{ width: props.width, position: "absolute", right: "10pt" }}>
      <Center>To Do List</Center>
      <Flex direction="row" justify='flex-end' gap={10} align="flex-start">
 
        <TextInput
          icon={<IconListDetails />}
          size="sm"
          placeholder="Task"
          variant="filled"
          style={{width:'100%'}}
       
        />
        <Button>
          <IconArrowNarrowDown/>
        </Button>
      </Flex>
    </Box>
  );
}
export default ToDoList;
