import { useQuery } from "@tanstack/react-query";
import api from "../../../service/api/api-instance";

interface CollectionData {
  code: string;
  cards: {
    imageUrl: string;
    name: string;
    manaCost: string;
    colorIdentity: string;
    text: string;
  }[];
}

interface useCollectionDataProps {
  code: string;
}

export function useCollectionData(code: string) {
  console.log("CODEE", code);
  const fetchCollectionData = async ({ code }: useCollectionDataProps) => {
    try {
      const response = await api.get(`/sets/${code}/booster`);
      console.log("RESP", response);
      return response.data as CollectionData;
    } catch (error) {
      throw new Error("Erro ao buscar dados da coleção.");
    }
  };

  const query = useQuery({
    queryKey: ["collection-data", code],
    queryFn: () => fetchCollectionData({ code }),
  });

  return query;
}
