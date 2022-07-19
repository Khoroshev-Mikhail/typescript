import { Column, Table } from "./Components/Table";
import { Point } from "./domain/Point";
import { useState } from "react";
const points: Point[] = [
  {id: "1", coordinates: { x: 1, y: 2 }, color: "green"},
  {id: "2", coordinates: { x: 0, y: 0 }, color: "pink"},
  {id: "4", coordinates: { x: 3, y: 5 }, color: "blue"},
  {id: "3", coordinates: { x: 13, y: -2 }, color: "black"},
  {id: "6", coordinates: { x: 13, y: 1 }, color: "black"},
  {id: "5", coordinates: { x: 13, y: 3 }, color: "black"},
];
export const columns: Column<Point>[] = [
  {title: 'coordinates', render: p => `(${p.coordinates?.x}, ${p.coordinates?.y})`},
  {title: 'color', render: p => p.color},
]

export function PointPage() {
  const [sorter, setSorter] = useState('id')
  function mySort(a: Point, b: Point):number{
    switch(sorter){
        case 'id': return Number(a.id) - Number(b.id)
        case 'color': return a.color.charCodeAt(0) - b.color.charCodeAt(0)
        case 'coordinates': return (Math.abs(a.coordinates.x) + Math.abs(a.coordinates.y)) - (Math.abs(b.coordinates.x) + Math.abs(b.coordinates.y))
        default: return Number(a.id) -  Number(b.id)
    }
}
  return (
    <div className="point-page">
      <Table data={points.sort(mySort)} columns={columns} propsSort={setSorter} sorter={sorter}/>
    </div>
  );
}
