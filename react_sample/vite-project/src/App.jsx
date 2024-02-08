import Greeting from "./component/Greeting";
import Greeting1 from "./component/Greeting1";
import Counter from "./component/counter";

function App() {
  return (
  <>
   <Greeting/>
   <Greeting1 name = {"bunny"}/>
  <Counter initialValue = {0}/>
  </>
  )
  
}

export default App
