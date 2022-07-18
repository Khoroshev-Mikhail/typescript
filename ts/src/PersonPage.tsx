import { useState } from "react";
import { Column, Table } from "./Components/Table";
import { Person } from "./domain/Person";
import { Point } from "./domain/Point";

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
let man: Person | Point = people[0]
console.log(man)
export function PersonPage() {
  const [sortBy, setSortBy] = useState('id')
  return (
    <div className="person-page">
      <Table data={people} columns={columns} sortBy={sortBy}/>
    </div>
  );
}
