import { Identifiable } from "./Identifiable";

export interface Person extends Identifiable {
  name: string,
  surname: string | null,
  age?: number,
  sex: 'male' | 'female',
}
