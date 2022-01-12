import React from 'react'
import styled from 'styled-components'
import Button from '../styles/Button'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  position: relative;
  padding: 1rem 3rem;
`

export const Title = styled.h1`
  margin-top: 2rem;
  font-weight: 700;
  text-align: center;
`
export const Description = styled.h3`
  margin-top: -1rem;
  font-weight: 400;
  text-align: center;
  color: #7d7d7d;
`

export default function Intro() {
  return (
    <Wrapper>
      <Title> 잘못된 경로로 들어오셨어요 </Title>
      <Description>다시 문제를 풀러 가볼까요?</Description>
      <Link to='/'>
        <Button text='문제 다시 풀러 가기'></Button>
      </Link>
    </Wrapper>
  )
}
