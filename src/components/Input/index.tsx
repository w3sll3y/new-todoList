import React from "react";
import * as Styled from './styles';
import { Image } from "react-native";

type Props = {
  data: string,
  addTask: () => void,
}

export default function Input({ data, addTask, ...props }: Props) {
  return (
    <Styled.Container {...props}>
      <Styled.Input  {...props}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor='#6B6C6B'
      />
      <Styled.ButtonAdd onPress={addTask}>
        <Image source={require('../../assets/Plus.png')} />
      </Styled.ButtonAdd>
    </Styled.Container>
  )
}