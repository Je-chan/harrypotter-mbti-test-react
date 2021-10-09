import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import question from './data/question'
import styled from 'styled-components'
import Intro from './page/Intro'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('img/back.jpg');
  background-size: cover;
`

export const Main = styled.div`
  width: 35rem;
  height: 45rem;
  border: 3px solid red;
  background-color: #fff;
  margin: 2.5rem auto;
`

function App() {
  const [curQ, setCurQ] = useState(question)
  return (
    <Router>
      <Background>
        <Main>
          <Switch>
            <Route exact path='/'>
              <Intro />
            </Route>
            <Route></Route>
            <Route></Route>
          </Switch>
        </Main>
      </Background>
    </Router>
  )
}

export default App
