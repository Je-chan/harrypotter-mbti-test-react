import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { questions as curQ, result, page } from './data/question'
import styled from 'styled-components'
import Intro from './page/Intro'
import Question from './page/Question'
import Loading from './page/Loading'
import Result from './page/Result'

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Main = styled.div`
  position: relative;
  width: 35rem;
  height: ${(props) => (props.heightLong ? '45rem' : '100rem')};
  background-color: #fff;
  margin: 2.5rem auto;
  box-sizing: border-box;
`

function App() {
  const [curScore, setCurScore] = useState(result)
  const [curPage, setCurPage] = useState(page)
  const [isLoading, setIsLoading] = useState(true)

  const clickHandler = (e) => {
    const type = e.target.value
    const typeValue = curScore[type] + 1
    setCurPage((prev) => prev + 1)
    setCurScore({
      ...curScore,
      [type]: typeValue,
    })
    console.log(curScore)
  }
  console.log(curScore)

  const setLoading = () => {
    return setIsLoading(false)
  }

  console.log(isLoading)

  return (
    <Router>
      <Background>
        <Main heightLong={isLoading}>
          <Switch>
            <Route exact path='/'>
              <Intro />
            </Route>
            <Route path='/test'>
              <Question curQ={curQ} curPage={curPage} clickHandler={clickHandler} />
            </Route>
            <Route path='/result'>{isLoading ? <Loading setLoading={setLoading} /> : <Result curScore={curScore} />}</Route>
          </Switch>
        </Main>
      </Background>
    </Router>
  )
}

export default App
