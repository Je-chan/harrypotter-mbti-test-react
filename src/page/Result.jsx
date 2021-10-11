import React from 'react'
import styled from 'styled-components'
import {result} from '../data/result'
import { Wrapper } from './Intro'
import { Title } from './Intro'
import Image from './Image'

export const Description = styled.div`
  margin-left: 2rem;
  width: 100%;
  font-size: 16px;
  line-height: 1.3;
`

export default function Result({curScore}) {
  

  const mbti = `${curScore.e > 1 ? 'e' : 'i'}${curScore.n > 1 ? 'n' : 's'}${curScore.f > 1 ? 'f' : 't'}${curScore.j > 1 ? 'j' : 'p'}`
  const final = result[mbti]

  const textContent = () => {
    return {__html: final.description}
  }

  return (
    <>
    <Wrapper>
      <Title>
        {final.title}
      </Title>
      <Image source={final.img}/>
    </Wrapper>
    <Description
      dangerouslySetInnerHTML={textContent()}></Description>
    </>
  )
}
