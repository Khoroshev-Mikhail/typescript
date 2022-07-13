// name | surname | sex | age
// A    | Aaaa    |  Ж  | 123
// B    | Zzzz    |  М  | —
// C    | Xxxx    |  Ж  | 34
import { columns } from '../App'
import { Person } from '../domain/Person'
export interface Column {
    title: string,
    render: (p: Person) => string,
}

interface TableProps {
    persons: Person[]
    columns: Column[],
}

//Прочитать про дженерики 
export function Table(props: TableProps){
    console.log(props.columns)
    return (
        <table>
            <thead>
                <tr>
                {props.columns.map(el => (
                    <th key={el.title}>{el.title}</th>
                ))}
                </tr>
            </thead>
            <tbody>
               {props.persons.map(el => (
                    <tr key={el.id}>
                        {props.columns.map(column => (
                            <td>{column.render(el)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}