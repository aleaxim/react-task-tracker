//  ROOT APP COMPONENT 

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



const App = () => {
  // Global state
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    
    getTasks()
  }, []) // for dependencies

  // Fetch Tasks
  const fetchTasks = async() => {
    // res respond 
    // fetch returns a promise so we await 
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    // console.log(data)
    return data
  }

   // Fetch Task
   const fetchTask = async(id) => { 
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    // console.log(data)
    return data
  }

  // Add Task
  // const addTask = (task) => {
  //   // For generating unique id 
  //   const id = Math.floor(Math.random() * 10000) + 1
  
  //   const newTask = { id, ...task }
  //   setTasks([...tasks, newTask]) 
  // }

  // Delete Task
  const addTask = async(task) => {
    const res = await fetch('http://localhost:5000/tasks/', {
      method: 'POST',
      // Since we're adding data, we need to specify headers
      headers: {
        'Content-type': 'application/json',
      },
      // JS object to JSON string
      body: JSON.stringify(task)
    })
    // data returned is the new task added
    const data = await res.json()
    // add the new data that was created
    setTasks([...tasks, data])
  }

 


  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder }
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type' : "application/json"
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    // console.log('reminder', id)
    setTasks(tasks.map((task) => task.id === id ? 
      { ...task, reminder: data.reminder } 
      : 
      task
      )
    )
  }


  return (
    <div className="container">
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}
      />

      {/* Toggle of Add Task */}
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'You have no tasks'
      )}
    </div>
  )
}


export default App






// Example of a Class Component 
// import React from 'react' // for class component
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }