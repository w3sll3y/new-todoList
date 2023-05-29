import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: #333;
  padding: 20px;
  margin: 10px 20px;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
  `;

export const DescriptionTask = styled.Text<{ status: boolean }>`
  color: #fff;
  flex: 1;
  ${({ status }) =>
    status &&
    css`
      text-decoration: line-through;
      color: #808080;
    `}
`;

export const ButtonCheckTask = styled.TouchableOpacity<{ status: boolean }>`
  border-radius: 50px;
  height: 18px;
  width: 18px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ status }) =>
    status &&
    css`
      border-color: transparent;
    `}
`;

export const ButtonTrashTask = styled.TouchableOpacity``;

export const Teste = styled.View<{ status: boolean }>`
  display: none;

  ${({ status }) =>
    status &&
    css`
      display: flex;
    `
  }
`;

