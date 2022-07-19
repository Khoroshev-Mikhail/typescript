import { useState } from "react";
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

export function PersonPage() {
  const [sorter, setSorter] = useState('id')
  function mySort(a: Person, b: Person):number{
    switch(sorter){
        case 'age': {
            if(!a.age){ //age - не обязательный параметр
                return 1
            }
            if(!b.age){
                return -1
            }
            return a.age - b.age;
        }
        case 'id': return Number(a.id) - Number(b.id)
        case 'name': return  Number(a.name.charCodeAt(0)) - Number(b.name.charCodeAt(0))
        case 'surname': return  Number(a.surname?.charCodeAt(0)) - Number(b.surname?.charCodeAt(0)) //Добавить if
        case 'sex': return  Number(a.sex.charCodeAt(0)) - Number(b.sex.charCodeAt(0))
        default: return Number(a.id) -  Number(b.id)
    }
}
  return (
    <div className="person-page">
      <Table data={people.sort(mySort)} columns={columns} propsSort={setSorter} sorter={sorter}/>
    </div>
  );
}
