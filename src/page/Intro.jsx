import React from 'react'
import styled from 'styled-components'

export const Title = styled.h1`
  margin-top: 5rem;
  font-weight: 700;
  text-align: center;
`
export const Description = styled.h3`
  font-weight: 400;
  text-align: center;
  color: #7d7d7d;
`

export default function Intro() {
  return (
    <div>
      <Title>해리포터 테스트</Title>
      <Description>당신에게 맞는 해리포터 캐릭터는?</Description>
    </div>
  )
}
