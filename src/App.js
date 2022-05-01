import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello world {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      <b>
        CRA2022 App created by <a href='https://github.com/parka01'>Me!</a>
      </b>
    </div>
  )
}
const Header = (props) => {
  console.log('props', props)
  return (
    <span
      style={{
        backgroundColor: '#AEFFDA',
        fontSize: 20,
        fontWeight: 'bold',
      }}
    >
      {props.course}
    </span>
  )
}
const Content = (props) => {
  console.log('content props: ', props)
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  )
}
const Part = (props) => {
  return (
    <p>
      {props.part}
      {props.exercises}
    </p>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}
// constants for Router
const Home = () => (
  <div>
    <h2>Main Home</h2>
  </div>
)
const Notes = () => (
  <div>
    <h2>Notes</h2>
  </div>
)
const Users = () => (
  <div>
    <h2>Users </h2>
  </div>
)
/*********************** Starting Point ***********************/
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const name = 'Pete'
  const age = 10
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  // const x = 1
  // let y = 5
  // console.log(x, y)
  // y += y
  // console.log(x, y)
  // y = 'text'
  // console.log(x, y)
  const t = [1, -1, 3]
  t.push(5)
  console.log('t.length', t.length)
  console.log('t[1]', t[1])
  t.forEach((value) => console.log(value))
  console.log('t'.t)
  const t2 = t.concat(100)
  console.log('t2', t2)
  const tTestMap = [1, 2, 3]
  const tTestMapResult = tTestMap.map((value) => <li> {value} </li>)
  console.log('tests', tTestMapResult)

  const destructuring = [1, 2, 3, 4, 5, 6, 7]
  const [seed, sprout, ...flowers] = destructuring
  //seed,sprout receive the first two integers as their values
  //the remaining integers are collected into an array by itself. then assigned to the variable(*flowers)

  console.log('destructuring: ', seed, sprout)
  console.log('destructuring: ', flowers)
  const testArray = [1, 2, 3]
  const arrayWithFunction = testArray.map((value) => value * value)
  console.log('arrayWithFunction', arrayWithFunction)

  function sameThing(a, b) {
    return a * b
  }
  const sameThing2 = function (a, b) {
    return a * b
  }

  const result = sameThing(2, 6)
  console.log('result', result)
  const result2 = sameThing2(2, 6)
  console.log('result2', result2)

  //state for Router
  const [page, setPage] = useState('home')

  const toPage = (page) => (event) => {
    event.preventDefault()
    setPage(page)
  }
  const content = () => {
    if (page === 'home') {
      return <Home />
    } else if (page === 'notes') {
      return <Notes />
    } else if (page === 'users') {
      return <Users />
    }
  }
  const navItemStyle = {
    backgroundColor: '#FFDDC7',
    fontSize: 20,
    fontWeight: 'bold',
  }
  const [counting, setCounting] = useState(0)
  useEffect(() => {
    document.title = `Clicked ${counting} times!!!`
  }, [counting, page])
  // Button for useEffect
  const Button = () => {
    return (
      <button
        onClick={() => setCounting(counting + 1)}
        style={{
          backgroundColor: '#aeffda',
          border: '5px solid #000',
          height: 50,
          width: 200,
          fontSize: 20,
        }}
      >
        {counting} times
      </button>
    )
  }
  //Button for useRef
  // useEffect(() => {
  //   if (reffff) {
  //     //console.log('ref test; ', reffff)
  //     reffff.current.click()
  //   }
  // })
  const reffff = useRef(null)
  const AndraButton = () => {
    return (
      <button onClick={() => alert('Clicked srsly!')} ref={reffff}>
        Click here
      </button>
    )
  }

  //ex. useRef
  const inputElement = useRef(null)
  const onButtonClick = () => {
    inputElement.current.blur()
  }

  return (
    <>
      <Button />
      <AndraButton />
      {/* Ex. useRef */}
      <input ref={inputElement} type='text' />
      <button onClick={onButtonClick}>Focus the input</button>
      {tTestMapResult}
      <i>Self-made routing</i>
      <div>
        <a
          href=''
          onClick={toPage('home')}
          style={{
            backgroundColor: '#AEFFDA',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          home
        </a>{' '}
        <a
          href=''
          onClick={toPage('notes')}
          style={{
            backgroundColor: '#AEFFDA',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          notes
        </a>{' '}
        <a
          href=''
          onClick={toPage('users')}
          style={{
            backgroundColor: '#AEFFDA',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          users
        </a>
      </div>
      {content()}
      <i>React-Router-Dom</i>
      <Router>
        <div>
          <Link to='/' style={navItemStyle}>
            home
          </Link>{' '}
          <Link to='/notes' style={navItemStyle}>
            notes
          </Link>{' '}
          <Link to='/users' style={navItemStyle}>
            users
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </Router>

      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <h1>Greetings</h1>
      <Hello name='Alicia' />
      <Hello name='Bill' age={24 + 100} />
      <Hello name={name} age={age} />
      <Footer />
      <br />
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  )
}

export default App
