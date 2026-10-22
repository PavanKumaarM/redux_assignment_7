
 const {useSelector, useDispatch}= require("react-redux")
 import{CounterActions} from "./store/counterSlice/slice";

const { useSelector, useDispatch } = require("react-redux")

const App=()=>{
  const count= useSelector((state)=>state.counter.count);
  const dispatch=useDispatch()
  return(
    <div>
      {count}
      <button onClick={()=>dispatch(CounterActions.incrementFunction(count+1))}>increment</button>
          </div>
  )
  
}
export default App