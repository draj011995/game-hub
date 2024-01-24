import useData from "./useData"
import { Platform } from "./useGames";
import platforms from "../data/platforms";

//const usePlatform = () => useData<Platform>('/platforms/lists/parents')
const usePlatform = () => ({data: platforms, error: null});

export default usePlatform;