// Core
import { useEffect, useRef } from "react";
import { Animated } from "react-native";

// Components
import { 
  Container, 
  Image, 
  Title, 
  Description 
} from "./styles";

const FIFTY_MILISECONDS = 500;

type CardTypes = {
  src: string;
  title: string;
}

export default function Card({ 
  src, 
  title
}: CardTypes) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: FIFTY_MILISECONDS,
      useNativeDriver: true,
    });
  }, []);

  return (
    <Animated.View>
      <Container>
        <Image
          source={{
            uri: src,
          }}
          resizeMode="cover"
          resuzeMethod="scale"
        />
        <Title>{ title }</Title>
      </Container>
    </Animated.View> 
  )
}