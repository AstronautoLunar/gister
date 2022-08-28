
// Components
import { Screen, Text } from "./styles";
import Section from "../../components/Section";
import Card  from "../../components/Card";

export default function DealsScreen() {
  return (
    <Screen>
      <Section
        title="Recomendados"
        data={[
          {
            id: "01",
            src: "https://reactnative.dev/img/tiny_logo.png",
            title: "título",
            description: "descrição descrição descrição"
          },
          {
            id: "02",
            src: "https://reactnative.dev/img/tiny_logo.png",
            title: "título",
            description: "descrição descrição descrição"
          },
          {
            id: "03",
            src: "https://reactnative.dev/img/tiny_logo.png",
            title: "título",
            description: "descrição descrição descrição"
          },
          {
            id: "04",
            src: "https://reactnative.dev/img/tiny_logo.png",
            title: "título",
            description: "descrição descrição descrição"
          },
        ]}
        renderItem={({ item }) => {
          const { src, title, description } = item;

          return (
            <Card
              src={src}
              title={title}
              description={description}
            />
          )
        }}
      />
    </Screen>
  )
}