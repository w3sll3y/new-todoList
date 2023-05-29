import React from "react";

import * as Styled from './styles';
import { Image } from "react-native";

export default function FlatListEmpty() {
  return (
    <Styled.Container>
      <Image source={require('../../../assets/Clipboard.png')} />
      <Styled.TextEmpty>
        <Styled.TextEmptyBold>
          Você ainda não tem tarefas cadastradas {'\n'}
        </Styled.TextEmptyBold>
        Crie tarefas e organize seus itens a fazer
      </Styled.TextEmpty>
    </Styled.Container>
  )
}