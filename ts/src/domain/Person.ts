import { Identifiable } from "./Identifiable";

type Sex =
  | "male"
  | "female";
 
export interface Person extends Identifiable {
  name: string,
  surname: string | null,
  age?: number,
  sex: "male" | "female",
}
