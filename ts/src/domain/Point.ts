import { Identifiable } from "./Identifiable";


export interface Point extends Identifiable {
  coordinates: {
    x: number,
    y: number,
  },
  color: string,
}