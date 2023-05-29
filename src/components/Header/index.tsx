import React from "react";

import { Image } from "react-native";


import * as Styled from "./styles";
export default function Header() {
  return (
    <Styled.Container>
      <Image source={require('../../assets/Logo.png')} />
    </Styled.Container>
  )
}