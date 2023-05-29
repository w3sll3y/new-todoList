import React from 'react';

import { FlatList } from 'react-native';
import * as Styled from './styles';
import FlatListEmpty from './components/FlatListEmpty';

export default function FlatListTasks({ data }) {
  return (
    <Styled.Container>
      <FlatList
        data={data}
        ListEmptyComponent={FlatListEmpty}
      />
    </Styled.Container>
  )
}