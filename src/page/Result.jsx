import React from 'react'
import styled from 'styled-components'
import {result} from '../data/result'
import { Wrapper } from './Intro'
import { Title } from './Intro'
import {Frame} from './Image'


const PersonImage = styled(Frame)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Result(curScore) {

  const mbti = `${curScore.e > 1 ? 'e' : 'i'}${curScore.n > 1 ? 'n' : 's'}${curScore.f > 1 ? 'f' : 't'}${curScore.j > 1 ? 'j' : 'p'}`
  const final = result[mbti]

  return (
    <Wrapper>
      <Title>
        {final.title}
      </Title>
      <PersonImage source={final.img}/>
    </Wrapper>
  )
}
