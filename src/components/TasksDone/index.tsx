import React from "react";

import * as Styled from './styles';

type Props = {
  status: Number;
}

export default function TasksDone({ status }: Props) {
  return (
    <Styled.Container>
      <Styled.CreatedTaskText>
        Concluídas
      </Styled.CreatedTaskText>
      <Styled.CreatedTaskQuantity>
        <Styled.CreatedTaskQuantityText>
          {status}
        </Styled.CreatedTaskQuantityText>
      </Styled.CreatedTaskQuantity>

    </Styled.Container>
  )
}