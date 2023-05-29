import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0 30px;
  `;

export const Input = styled.TextInput`
  width: 90%;
  height: 54px;
  background-color: #262626;
  border-radius: 5px;
  color: #FFF;
  margin-right: 7px;
  top: -20px;
  padding: 0 15px;
  border: 1px solid #0D0D0D;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: #1E6F9F;
  top: -20px;
  width: 54px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
