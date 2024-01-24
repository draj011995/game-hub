import useData from "./useData";
import genres from "../data/genres";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
  }

// Loading data from server on runtime
//const useGenres = () => useData<Genre>('/genres')

// Shipping static data from server
const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;
