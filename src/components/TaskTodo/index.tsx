import React, { useState } from "react";
import { Image, Text } from "react-native";

import * as Styled from './styles';

type Props = {
  status?: boolean,
  data: string,
  setTaskDone?: () => any,
  onRemove: () => any,
}

export function TaskTodo({ data, onRemove, setTaskFinish }: Props) {
  const [status, setStatus] = useState(false);
  const [statusDone, setStatusDone] = useState<Number>(0);

  function setTaskDone(statusDoned) {
    setStatus(!status)
    setTaskFinish(statusDoned)
  }

  return (
    <Styled.Container>
      <Styled.ButtonCheckTask onPress={() => setTaskDone(status)} status={status}>
        {status === !true && (
          <Image source={require('../../assets/check.png')} />
        )
        }
        {status === true && (
          <Image source={require('../../assets/Layer.png')} />
        )
        }
      </Styled.ButtonCheckTask>
      <Styled.DescriptionTask status={status}>
        {data}
      </Styled.DescriptionTask>
      <Styled.ButtonTrashTask onPress={onRemove}>
        <Image style={{ justifyContent: 'flex-end' }} source={require('../../assets/trash.png')} />
      </Styled.ButtonTrashTask>
    </Styled.Container >
  )
}