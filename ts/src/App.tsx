import { Test } from "./Components/Test";
import { PersonPage } from "./PersonPage";
import { PointPage } from "./PointPage";
const papa = [
  {a:1, b:1, c:1},
  {a:2, b:2, c:2},
  {a:3, b:3, c:3},
]
function App() {


  return (
    <div className="App">
      {<PersonPage/> }
      {<PointPage/> }
      {/*<Test data={papa} />*/}
    </div>
  );
}

export default App;
