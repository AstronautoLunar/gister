// Core
import { useRef } from "react";
import { Animated } from "react-native";

// Components
import { 
  Container, 
  Image, 
  Title, 
  Description 
} from "./styles";

type CardTypes = {
  src: string;
  title: string;
  description?: string;
}

export default function Card({ 
  src, 
  title, 
  description
}: CardTypes) {
  const opacity = useRef(new Animated.Value(0)).current;



  return (
    <Container>
      <Image
        source={{
          uri: src,
        }}
        resizeMode="cover"
      />
      <Title>{ title }</Title>
      <Description>{ `${description?.slice(0, 48)}...` }</Description>
    </Container>
  )
}