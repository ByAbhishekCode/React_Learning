import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return(
//         <div>
//             <h1>
//                 this is in function 
//             </h1>
//         </div>
//     )
// } 
// const reactElement1 = React.createElement(
//     'a',
//     {
//         href: 'https://google.com',
//         target: 'black'
//     },
//     'click me to visit google'
// )
createRoot(document.getElementById("root")).render(

    <App />

);
