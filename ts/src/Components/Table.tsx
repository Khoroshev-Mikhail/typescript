import { useState } from "react";
import {Identifiable} from "../domain/Identifiable";

export interface Column<X> {
    title: string,
    render: (p: X) => string,
    comparator?: (a: X, b: X) => number,
}

interface TableProps<K> {
    data: K[]
    columns: Column<K>[],
    propsSort?: (str: string) => void
}

export function Table<K extends Identifiable>(props: TableProps<K>){
    const [sorting, setSotring] = useState('id')
    //let ara: K[] = props.data.sort((a: K, b: K) => a.id - b.id)  при арифметической операции ждёт только number, а id: number | string

    /*
    function mySort(a: any, b: any):number{
        switch(sorting){
            case 'age': {
                if(!a.age){ //age - не обязательный параметр
                    return 1
                }
                if(!b.age){
                    return -1
                }
                return Number(a.age) - Number(b.age);
            }
            case 'id': return Number(a.id) - Number(b.id)
            case 'color': return  Number(b.id) - Number(a.id)
            case 'name': return  Number(b.id) - Number(a.id)
            case 'surname': return  Number(a.id) - Number(b.id)
            case 'sex': return  Number(b.id) - Number(a.id)
            //Свойство coordintates отсутствует в типе K(person)
            case 'coordinates': return (Math.abs(a.coordinates.x) + Math.abs(a.coordinates.y)) - (Math.abs(b.coordinates.x) + Math.abs(b.coordinates.y))
            //Свойство age отстутствуют в типе K(point)
            default: return Number(a.id) -  Number(b.id)
        }
    }
    */
    return (
        <table>
            <thead>
                <tr>
                {props.columns.map(el => (
                    <th 
                        key={el.title} 
                        onClick={()=>/*setSotring(el.title)*/ props.propsSort ? props.propsSort(el.title) : {}} 
                        style={{cursor: 'pointer', borderBottom: '1px dashed black', background: sorting === el.title ? 'red' : 'none'}}
                    >
                        {el.title}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
               {props.data.map(el => (
                    <tr key={el.id}>
                        {props.columns.map(column => (
                            <td key={column.title}>{column.render(el)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}



// [8,6,7,89,9].sort((a, b) => a - b);

// type fnType = (a: number, b: number) => number;

// const fn: fnType = (x, y) => x + y;

// // fn(3, 4)
// // fn(3, "4")

// function zipWith<A, B, R>(fn: (a: A, b: B) => R, a0: A[], a1: B[]): R[] {
//     const newArray = []

//     for (let i = 0; i < a0.length; i++) {
//         newArray.push(fn(a0[i], a1[i]))
//     }

//     return newArray;
// }


// const result = zipWith(
//     (str, count) => str.repeat(count),
//     ["Ab", "xxx", "M"],
//     [3, 1, 10],
// )
// // ["AbAbAb", "xxx", "MMMMMMMMMM"]
// console.log(result);

// const result3 = zipWith(
//     (str, count) => Array(count).fill(str),
//     ["Ab", "xxx", "M"],
//     [3, 1, 10],
// ) // [["Ab","Ab","Ab"], ["xxx"], ["M","M","M","M","M","M","M","M","M","M"]]

// const result2 = zipWith(
//     (arr, num) => arr.length * num,
//     [[1,2,3], []],
//     [4, 6],
// )
// console.log(result2);

// //[12, 0]

function compose<A, B, C, D>(f: (x: C) => D, g: (x: B) => C, h: (x: A) => B): (x: A) => D {
    return x => f(g(h(x)));
}

// f  C -> D
// g  B -> C
// h  A -> B

const sssstr = compose(
    (x: string) => x + x,
    (x: string) => x + x,
    (x: string) => x + x,
)
sssstr("+") // "++++++++"

function a(n: number) {
    return n * 2; //a('ss')
}

function b(n: number) {
    return "x".repeat(n);
}

function c(n: string) {
    return [n, n, n];
}

const f = compose(c, b, a);

f(2); // ["xxxx", "xxxx", "xxxx"]
f(5); // ["xxxxxxxxxx", "xxxxxxxxxx", "xxxxxxxxxx"]


//Дз лобавить сортировку при клике по столбцу
//Координаты отсортировать по расстоянию от начала координат