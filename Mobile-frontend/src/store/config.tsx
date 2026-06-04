import { Platform } from "react-native";

export const BASE_URL = Platform.OS == 'android' ? 'http://10.114.23.7:3000' : 'http://localhost:3000'