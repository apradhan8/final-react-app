import { useState } from "react"

const App = () => {
  
  const [tasks,setTasks] = useState([]);
  const [task,setTask] = useState("");

  const addTasks = () => {
    if(task !== ""){
      setTasks([...tasks,task])
      setTask("");
      console.log(tasks);
    }
  }

  const deleteTasks = (index) => {
    const updatedList = [...tasks];
    console.log('Automatic...')
    // delete updatedList[index];
    updatedList.splice(index,1)
    setTasks(updatedList)
  }

  return(
    <div className="flex flex-col bg-[#342019]  h-screen">
        <h1 className="text-4xl mt-10 font-semibold text-yellow-400 p-4">DoItNow</h1>
      <div className="">
        <input className=" bg-[#fbe9c5] text-[#342019]  rounded-md p-4 m-4" 
        type="text"
        value={task}
        onChange = {(e)=>{
          setTask(e.target.value);
        }}
        placeholder="Create a new todo"
        />
        <button onClick={addTasks} 
        className=" bg-yellow-400 text-black p-3 m-3 rounded-md font-semibold hover:bg-yellow-600">Add Tasks</button>
      </div>
      <div>
          {tasks?.length > 0 ? (
              <ul>
                {
                  tasks.map((task,index)=>(
                    <div className=" flex bg-[#fbe9c5] m-4 py-1 pl-12 pr-1
                     rounded-md" key={index}>
                      <li className="self-center font-semibold pr-10 mr-6 grow">{task}</li>
                      <button onClick={()=>{deleteTasks(index)}} 
                      className=" bg-red-500 text-white px-6 py-4  rounded-md  hover:bg-red-600">Delete</button>
                    </div>
                  ))
                }
              </ul>
          ):(
            <div>
              <p className="text-white px-4">No Task Found</p>
            </div>
          ) }
      </div>
    </div>
  )
}

export default App