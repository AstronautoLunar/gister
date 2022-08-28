// Types
import { ListRenderItem } from "react-native";

// Components
import { 
  Container, 
  ListItems, 
  Title 
} from "./styles";

type SectionTypes<Data> = {
  title: string;
  data: Data[];
  renderItem: ListRenderItem<Data>;
}

export default function Section<Data>({ 
  title, 
  data, 
  renderItem 
}: SectionTypes<Data>) {
  return (
    <Container>
      <Title>{ title }</Title>
      <ListItems
        data={data}
        horizontal
        renderItem={renderItem}
      />
    </Container>
  )
}