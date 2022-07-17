import { Column, Table } from "./Components/Table";
import { Person } from "./domain/Person";

const people: Person[] = [
  {id: "1", name:"A", sex: "female", surname: "Aaaa", age: 123},
  {id: "2", name:"B", sex: "male", surname: "Zzzz"},
  {id: "3", name:"C", sex: "female", surname: "Xxxx", age: 34},
];
export const columns: Column<Person>[] = [
  {title: 'name', render: p => p.name},
  {title: 'surname', render: p => p.surname ?? "—"},
  {title: 'sex', render: p => p.sex === 'male' ? 'M' : 'Ж'},
  {title: 'age', render: p => p.age === undefined ? '-' : p.age.toString()}
]
// name | surname | sex | age
// A    | Aaaa    |  Ж  | 123
// B    | Zzzz    |  М  | —
// C    | Xxxx    |  Ж  | 34

export function PersonPage() {
  return (
    <div className="person-page">
      <Table data={people} columns={columns}/>
    </div>
  );
}
