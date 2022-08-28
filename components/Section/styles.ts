// Core
import styled from "styled-components/native";

// Styles
import colors from "../../styles/colors";

export const Container = styled.View`
  /* height: 200px; */

  flex-direction: column;

  margin-left: 24px;
  margin-top: 24px;
`;

export const ListItems = styled.FlatList`
  padding-left: 16px;
`;

export const Title = styled.Text`
  color: ${colors.secondary};

  font-size: 30px;
  font-weight: bold;

  margin-bottom: 16px;
`;