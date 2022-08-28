// Core
import { 
  useCallback, 
  useState, 
  useEffect 
} from "react";

// Components
import Section from "../Section";
import Card from "../Card";

// Services
import { dealsService, SortBy } from "../../services/deals.service";
import { Alert } from "react-native";

type SectionCardProps = {
  title: string;
  type: string;
};

export default function SectionCard({ title, type }: SectionCardProps) {
  const [ data, setData ] = useState([]);
  
  const fetchData = useCallback(async (sortBy: SortBy, textTypeData?: string) => {
    try {
      if (!sortBy) {
        return
      }

      const response = await dealsService.getListDeals({ sortBy });

      const dataConverted = response.data.map((item: any, index: number) => ({
        id: index,
        src: item.thumb,
        title: item.title
      }));

      setData(dataConverted);

    } catch(error) {
      console.log(error);
      Alert.alert(`Não foi possível buscar os dados ${textTypeData ? "do tipo " + textTypeData : ""}`);
    }
  }, []); 

  useEffect(() => {
    fetchData(type, title);
  }, []);

  return (
    <Section
      title={title}
      data={data}
      renderItem={({ item }) => {
        const { src, title } = item;

        return (
          <Card
            src={src}
            title={title}
          />
        )
      }}
    />
  )
}