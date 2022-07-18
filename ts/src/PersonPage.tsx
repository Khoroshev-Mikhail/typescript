import { useState } from "react";
import { Column, Table } from "./Components/Table";
import { Person } from "./domain/Person";

const people: Person[] = [
  {id: "3", name:"C", sex: "female", surname: "Xxxx", age: 34},
  {id: "1", name:"A", sex: "female", surname: "Aaaa", age: 123},
  {id: "2", name:"B", sex: "male", surname: "Zzzz"},
];
export const columns: Column<Person>[] = [
  {title: 'name', render: p => p.name},
  {title: 'surname', render: p => p.surname ?? "—"},
  {title: 'sex', render: p => p.sex === 'male' ? 'M' : 'Ж'},
  {title: 'age', render: p => p.age === undefined ? '-' : p.age.toString()}
]

export function PersonPage() {
  const [sortBy, setSortBy] = useState('id')
  return (
    <div className="person-page">
      <Table data={people} columns={columns} sortBy={sortBy}/>
    </div>
  );
}
