//  ROOT APP COMPONENT 

import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



const App = () => {
  // Global state
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // Add Task
  const addTask = (task) => {
    // For generating unique id 
    const id = Math.floor(Math.random() * 10000) + 1
  
  
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]) 

  }

  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log('reminder', id)
    setTasks(tasks.map((task) => task.id === id ? 
      { ...task, reminder: !task.reminder } 
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
        'You got no task.'
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