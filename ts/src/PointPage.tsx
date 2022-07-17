import { Column, Table } from "./Components/Table";
import { Point } from "./domain/Point";

const points: Point[] = [
  {id: "1", coordinates: { x: 1, y: 2 }, color: "green"},
  {id: "2", coordinates: { x: 0, y: 0 }, color: "pink"},
  {id: "3", coordinates: { x: 13, y: -2 }, color: "black"},
  {id: "4", coordinates: { x: 3, y: 5 }, color: "blue"},
];
export const columns: Column<Point>[] = [
  {title: 'coordinates', render: p => `(${p.coordinates.x}, ${p.coordinates.y})`},
  {title: 'color', render: p => p.color},
]

// coordinates | color
// (1, 2)      | green
// (1, 2)      | pink
// (1, 2)      | black
// (1, 2)      | blue

export function PointPage() {
  return (
    <div className="point-page">
      <Table data={points} columns={columns}/>
    </div>
  );
}
