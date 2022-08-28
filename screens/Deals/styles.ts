// Core
import { StatusBar } from "react-native";
import styled from "styled-components/native";

// Styles
import colors from "../../styles/colors";

export const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${colors.dominat};

  padding-top: ${StatusBar.currentHeight}px;
`;

export const Text = styled.Text`
  color: ${colors.secondary};
`;