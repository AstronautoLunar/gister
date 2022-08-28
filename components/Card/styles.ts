// Core
import styled from "styled-components/native";

// Styles
import colors from "../../styles/colors";

export const Container = styled.View`
  width: 125px;
  /* height: 200px; */

  margin-right: 24px;

  flex-direction: column;
  justify-content: flex-start;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100px;

  margin-bottom: 8px;

  border-radius: 16px;
`;

export const Title = styled.Text`
  color: ${colors.secondary};

  font-weight: bold;
  font-size: 16px;

  margin-bottom: 4px;
`;

export const Description = styled.Text`
  color: ${colors.secondary};

  font-size: 12px;

  text-align: justify;
`;