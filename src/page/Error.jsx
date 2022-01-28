import React from 'react'
import styled from 'styled-components'
import { GlobalButton } from '../styles/Button'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 3rem;
  > a {
    text-decoration: none;
  }
`

const Title = styled.h1`
  margin-top: 2rem;
  font-weight: 700;
  text-align: center;
`
const Description = styled.h3`
  margin-top: -1rem;
  font-weight: 400;
  text-align: center;
  color: #7d7d7d;
`

const ErrorBtn = styled(GlobalButton)`
  width: 20rem;
  position: relative;
  left: 0;
  margin: 8rem 0;
  padding: 0;
`

export default function Error() {
  return (
    <Wrapper>
      <Title> 잘못된 경로로 들어오셨어요 </Title>
      <Description>다시 문제를 풀러 가볼까요?</Description>
      <Link to='/'>
        <ErrorBtn>문제 풀러 가기</ErrorBtn>
      </Link>
    </Wrapper>
  )
}
