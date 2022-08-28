// Components
import { Screen } from "./styles";
import SectionCard from "../../components/SectionCard";

export default function DealsScreen() {
  
  return (
    <Screen 
      contentContainerStyle={{
        paddingBottom: 150
      }}
    >
      <SectionCard title="Recente" type="recent"/>
      <SectionCard title="Título" type="Title"/>
      <SectionCard title="Preço" type="Price"/>
    </Screen>
  )
}