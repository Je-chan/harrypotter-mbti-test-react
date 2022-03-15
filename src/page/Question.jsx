import React from 'react'
import Button from '../styles/Button'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


export const QuestionTitle = styled.h1`
  position: absolute;
  top: 2rem;
  left: 3rem;
`

export const CurrentQuestion = styled.p`
  position: absolute;
  font-size: 1.5rem;
  top: 7rem;
  left: 3rem;
`

export default function Question({ curQ, curPage, clickHandler }) {
  console.log('curPage', curPage)
  let history = useHistory()
  if(!curPage) return history.push('/')
  const firstBtn = '19rem'
  const secondBtn = '10rem'
  const current = curQ[curPage]
  const length = curQ.length

  const textContent = () => {
    return { __html: current.q }
  }

  return (
    <>
      <QuestionTitle>Q{curPage + 1}</QuestionTitle>
      <CurrentQuestion dangerouslySetInnerHTML={textContent()}></CurrentQuestion>
      <Button
        position={firstBtn}
        text={current.a[0].text}
        value={current.a[0].value}
        clickHandler={clickHandler}
        curPage={curPage}
        length={length}
        absolute='absolute'
      ></Button>
      <Button
        color='#01471d'
        position={secondBtn}
        text={current.a[1].text}
        value={current.a[1].value}
        clickHandler={clickHandler}
        curPage={curPage}
        length={length}
        absolute='absolute'
      ></Button>
    </>
  )
}
