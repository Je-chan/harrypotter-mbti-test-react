import React from 'react'
import styled from 'styled-components'
import { GlobalButton } from '../styles/Button'
import Image from '../styles/Image'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  position: relative;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
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

const FlexBox = styled.div`
  margin-top: 9rem;
  display: flex;
  justify-content: center;
`

const IntroButton = styled(GlobalButton)`
  position: relative;
  margin: 0;
  padding: 0;
  left: 0;
  bottom: 0;
`

export default function Intro() {
  return (
    <>
      <Wrapper>
        <Title>해리포터 테스트</Title>
        <Description>당신이 해리포터 속 인물이라면?</Description>
        <Image />
      </Wrapper>
      <FlexBox>
        <Link to='test' style={{ textDecoration: 'none' }}>
          <IntroButton>테스트하기!</IntroButton>
        </Link>
      </FlexBox>
    </>
  )
}
