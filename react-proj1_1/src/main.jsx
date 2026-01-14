import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import Iron from './Iron.jsx'

// Types of creating elements in React 

// Direct Tag injection through object

const anotherElement = (
  <a href='https://google.com'>Visit Google</a>
)

// Use React.createElement

const reactElement = React.createElement(
  'a',
  {href: 'https://shaastrasamvad.com', target: '_blank'},
  'click me to visit google'
)

// Normal Function 

function MyApp()
{
  let a = Math.random();
  let b = Math.random();
  let sum = a+b
  return (
    <p>Her is the sum of {a} and {b}, that is {sum}</p>
  )
}

createRoot(document.getElementById('root')).render(
  <>
  <App/>
  <MyApp/>
  </>
)
