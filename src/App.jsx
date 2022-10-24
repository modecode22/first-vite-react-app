import { useSelector, useDispatch } from "react-redux";
import "./App.css";

//*you should not repeat the name of the value of the reducer because when we despatch it we can not select the name of reducer (the name of the file of the reducer)


function App() {
  //4- access data from store reducer with useSelector
  const data = useSelector((state) => state.counter.counter);
  // console.log(data);//!test
    const isLog = useSelector((state) => state.auth.isLog);
  // console.log(isLog);//!test 

  //5- change data in reduser  with despatch
  const dispatchCounter= useDispatch()
  return (
    <div className="h-screen text-black flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold pb-10">
        Counter : <span>{data}</span>
      </h1>
      <div className="flex w-60 justify-between">
        <button
          onClick={() => {
            dispatchCounter({ type: "DECREMENT" });
          }}
          className="p-1 flex items-center justify-center rounded-xl h-6 bg-slate-600 hover:bg-black hover:text-white duration-300"
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatchCounter({ type: "RESET" });
          }}
          className="p-1 flex items-center justify-center rounded-xl h-6 bg-slate-600 hover:bg-black hover:text-white duration-300"
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatchCounter({ type: "INCREMENT" });
          }}
          className="p-1 flex items-center justify-center rounded-xl h-6 bg-slate-600 hover:bg-black hover:text-white duration-300"
        >
          Increment
        </button>
      </div>
      <div className="flex flex-col items-center justify-center bg-slate-300 mt-5 h-48 w-72 rounded-xl">
        { isLog === true ? ( <h1 className="text-3xl mb-5 font-black" >is <span className="text-green-500">log in</span> </h1>) : (<h1 className="text-3xl mb-5 font-black" >is <span className="text-red-500">not log in</span> </h1>) }
        <div className="w-full flex justify-evenly">
          <button
            className="p-1 bg-green-600 rounded-xl hover:text-white hover:bg-green-700 duration-300"
            onClick={() => {dispatchCounter({ type: "isLogIn" });}}
          >
            log in
          </button>
          <button
            className="p-1 bg-red-600 rounded-xl hover:text-white hover:bg-red-700 duration-300"
            onClick={() => {dispatchCounter({ type: "notLogIn" });}}
          >
            log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
