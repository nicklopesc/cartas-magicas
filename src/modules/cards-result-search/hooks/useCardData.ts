import { useQuery } from "@tanstack/react-query";
import api from "../../../service/api/api-instance";

interface SearchFilters {
  block?: string;
}

const fetchDataCard = async (filters: SearchFilters) => {
  try {
    const queryParams = new URLSearchParams(
      filters as Record<string, string>
    ).toString();
    const url = `/sets?${queryParams}`; // Inclua /sets no caminho aqui
    const apiRes = await api.get(url); // Use a instância da API aqui
    return apiRes.data;
  } catch (error) {
    throw new Error("Erro ao buscar dados das coleções de cartas.");
  }
};

export function useCardData(filters: SearchFilters) {
  const query = useQuery({
    queryKey: ["card-data", filters],
    queryFn: () => fetchDataCard(filters),
  });
  return query;
}
