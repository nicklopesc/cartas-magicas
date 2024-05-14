import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface SearchFilters {
  block?: string;
}

const baseURL = "https://api.magicthegathering.io/v1/sets";

const fetchDataCard = async (filters: SearchFilters) => {
  try {
    const queryParams = new URLSearchParams(
      filters as Record<string, string>
    ).toString();
    const url = `${baseURL}?${queryParams}`;
    const apiRes = await axios.get(url);
    // console.log("BUSCA API", apiRes);
    return apiRes.data;
  } catch (error) {
    throw new Error("Erro ao buscar dados das coleções de cartas.");
  }
};

export function useCardData(filters: SearchFilters) {
  const query = useQuery({
    queryKey: ["cardData", filters],
    queryFn: () => fetchDataCard(filters),
  });
  return query;
}
