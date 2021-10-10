import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Image from './Image'
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



export default function Intro({curQ}) {
  return (
    <>
      <Wrapper>
        <Title>해리포터 테스트</Title>
        <Description>당신이 해리포터 속 인물이라면?</Description>
        <Image />
      </Wrapper>
      <Link to = 'test'><Button text='테스트 시작!'></Button></Link>
    </>
  )
}
