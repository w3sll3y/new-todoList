import React, { useState } from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";

import * as Styled from "./styles";
import TasksCreated from "../../components/TasksCreated";
import TasksDone from "../../components/TasksDone";
import FlatListTasks from "../../components/FlatListTasks";
import { Alert, FlatList, Text } from "react-native";
import FlatListEmpty from "../../components/FlatListTasks/components/FlatListEmpty";
import { TaskTodo } from "../../components/TaskTodo";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksDescription, setTasksDescription] = useState('');
  const [tasksDone, setTasksDone] = useState<Number>(0);
  const [statusTask, setStatusTask] = useState<boolean>(false);

  function handleAddTask() {
    setTasks(prevState => [...prevState, tasksDescription])
    setTasksDescription('');
  }

  function handleCheck(status: any) {
    if (status === !true) {
      setTasksDone(tasksDone + 1);
    }
    if (status === !false) {
      setTasksDone(tasksDone - 1);
    }
  }

  function handleRemoveDone(description: string) {
    setTasks(prevState => prevState.filter(desc => desc !== description))
    if (tasksDone > 0) {
      setTasksDone(tasksDone - 1);
    }
    else {
      return
    }
  }

  function onRemove(description: string) {
    Alert.alert("Remover", `Deseja remover a tarefa ${description}?`, [
      {
        text: "Sim",
        onPress: () => handleRemoveDone(description)
      },
      {
        text: "Nao",
        style: 'cancel'
      }
    ])
  }

  return (
    <>
      <Header />
      <Styled.Container>
        <Input
          addTask={handleAddTask}
          value={tasksDescription}
          onChangeText={setTasksDescription}
        />
        <Styled.StatusTaskContainer>
          <TasksCreated status={tasks.length} />
          <TasksDone status={tasksDone} />
        </Styled.StatusTaskContainer>
        <Styled.Separator />
        <FlatList
          data={tasks}
          ListEmptyComponent={FlatListEmpty}
          renderItem={({ item }) => (
            <TaskTodo
              status={statusTask}
              data={item}
              onRemove={() => onRemove(item)}
              setTaskFinish={handleCheck}
            />
          )}
        />
      </Styled.Container>
    </>
  )
}