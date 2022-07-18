import { useState } from "react";
import { Column, Table } from "./Components/Table";
import { Point } from "./domain/Point";

const points: Point[] = [
  {id: "1", coordinates: { x: 1, y: 2 }, color: "green"},
  {id: "2", coordinates: { x: 0, y: 0 }, color: "pink"},
  {id: "4", coordinates: { x: 3, y: 5 }, color: "blue"},
  {id: "3", coordinates: { x: 13, y: -2 }, color: "black"},
];
export const columns: Column<Point>[] = [
  {title: 'coordinates', render: p => `(${p.coordinates.x}, ${p.coordinates.y})`},
  {title: 'color', render: p => p.color},
]
export function mySort(a: Point, b: Point):number{
  return Number(a.id) - Number(b.id)
}
/*
.sort((a: Point, b: Point):number => {
        //a[sortBy] - b[sortBy] не работает!!!
        switch(sortBy){
          case 'id':{
            return Number(a.id) - Number(b.id)
          }
          case 'color': {
            return Number(a.color) - Number(b.color)
          }
          default: return Number(a.id) - Number(b.id)
        }
      }
      )
*/
export function PointPage() {
  const [sortBy, setSortBy] = useState('color')
  return (
    <div className="point-page">
      <Table data={points} columns={columns} sortBy={sortBy}/>
    </div>
  );
}
