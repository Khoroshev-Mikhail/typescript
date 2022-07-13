type Sex =
  | "male"
  | "female";

export interface Identifiable {
  id: string;
}
 
export interface Person extends Identifiable {
  name: string,
  surname: string | null,
  age?: number,
  sex: "male" | "female",
}
