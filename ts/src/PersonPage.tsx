import { useState } from "react";
import { Column, Table } from "./Components/Table";
import { Person } from "./domain/Person";

const people: Person[] = [
  {id: "1", name:"A", sex: "female", surname: "Aaaa", age: 123},
  {id: "2", name:"B", sex: "male", surname: "Zzzz"},
  {id: "3", name:"C", sex: "female", surname: "Xxxx", age: 34},
];
export const columns: Column<Person>[] = [
  {
    title: 'name',
    render: p => p.name,
    comparator: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'surname', 
    render: p => p.surname ?? "—",
    comparator(a, b) {
      if (a.surname === null && b.surname === null) {
        return 0;
      }
      if (a.surname === null) {
        return 1;
      }
      if (b.surname === null) {
        return -1;
      }
      return a.surname.localeCompare(b.surname)
    },
  },
  {
    title: 'sex',
    render: p => p.sex === 'male' ? 'M' : 'Ж',
  },
  {
    title: 'age',
    render: p => p.age === undefined ? '-' : p.age.toString(),
    comparator(a, b) {
      if (a.age === undefined && b.age === undefined) {
        return 0;
      }
      if (a.age === undefined) {
        return 1;
      }
      if (b.age === undefined) {
        return -1;
      }
      return a.age - b.age;
  }
  }
]

export function PersonPage() {
  return (
    <div className="person-page">
      <Table data={people} columns={columns} />
    </div>
  );
}
