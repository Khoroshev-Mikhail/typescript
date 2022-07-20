import { useState } from "react";
import {Identifiable} from "../domain/Identifiable";

type Comparator<T> = (a: T, b: T) => number;

export interface Column<T> {
    title: string,
    render: (p: T) => string,
    comparator?: Comparator<T>,
}

interface TableProps<T> {
    data: T[]
    columns: Column<T>[],
}

export function Table<T extends Identifiable>(props: TableProps<T>){
    const [comparator, setComparator] = useState<{fn: Comparator<T> | undefined, increase: boolean}>({fn: undefined, increase: true});
    const sorted = comparator.fn 
        ? comparator.increase 
            ? [...props.data].sort(comparator.fn)
            : [...props.data].sort(comparator.fn).reverse()
        : props.data
    function toggleComparator(elComparator: Comparator<T> | undefined){
        setComparator(({fn, increase}) => {
            return {
                fn: elComparator,
                increase: fn === elComparator ? !increase : true
            };
        })
    }
    return (
        <table>
            <thead>
                <tr>
                {props.columns.map(el => (
                    <th 
                        key={el.title} 
                        onClick={el.comparator === undefined ? undefined : () => toggleComparator(el.comparator)} 
                        style={el.comparator && {cursor: 'pointer', borderBottom: '1px dashed black', background: el.comparator === comparator.fn ? 'red' : 'none'}}
                    >
                        {el.title}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
               {sorted.map(el => (
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