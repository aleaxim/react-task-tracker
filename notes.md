# Notes and References 
!(React JS Crash Course by Traversy Media)[https://www.youtube.com/watch?v=w7ejDZ8SWv8]


# What is React?

    * Single page application (SPA) 
    * "view" layer like as in MVC (Model View Controller)
        - Model: Data
        - View: UI
        - Controller: Requests and Routing

    * JSX (Javascript Syntax Extension)
        - Virtual DOM (Document Object Model) 
        - allows to update a page without reloading it 
    * One-way data binding, can't mutate directly 
     

# Coding in React 
     <></> or <div></div>

     actions get passed down, state gets passed up


     With backend, we'll be making http or fetch request

     Use && to make a ternary without else 


     useEffect - side effect; something to happen like when a page loads

# Build for Production 

    npm run build
    - build folder containing static assets, what u push for production 
    
    to deploy locally 
        sudo npm i -g serve         this will install globally
        serve -s build -p 8000      made up port 
    ctrl + c to stop 


    install locally
    npm i json-server
    configured package.json
    npm run server                  created a db.json

# JSON

    MUST BE IN " " and no trailing commas

# React Router

    npm i react-router-dom
