import { Column, Table } from "./Components/Table";
import { Point } from "./domain/Point";
const points: Point[] = [
  {id: "1", coordinates: { x: 1, y: 2 }, color: "green"},
  {id: "2", coordinates: { x: 0, y: 0 }, color: "pink"},
  {id: "4", coordinates: { x: 3, y: 5 }, color: "blue"},
  {id: "3", coordinates: { x: 13, y: -2 }, color: "black"},
  {id: "6", coordinates: { x: 13, y: 1 }, color: "black"},
  {id: "5", coordinates: { x: 13, y: 3 }, color: "black"},
];
export const columns: Column<Point>[] = [
  {title: 'coordinates', 
  render: p => `(${p.coordinates?.x}, ${p.coordinates?.y})`,
  comparator: (a, b) => (Math.abs(a.coordinates.x) + Math.abs(a.coordinates.y)) - (Math.abs(b.coordinates.x) + Math.abs(b.coordinates.y))
},
  {title: 'color', 
  render: p => p.color,
  comparator: (a, b) => a.color.localeCompare(b.color)
},
]

export function PointPage() {
  return (
    <div className="point-page">
      <Table data={points} columns={columns}/>
    </div>
  );
}
