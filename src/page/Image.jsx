import React from 'react'
import styled from 'styled-components'

export const Frame = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 16rem;
  display: flex;
  justify-content: center;
  -webkit-box-reflect: ${(props)=> props.source 
  ? 'none'
  : 'below 5px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent) , to(rgba(250, 250, 250, 0.4)))'
  }; 
`

export default function Image({source}) {
  return (

    <Frame source={source}>
      <img src={source || 'img/poster.jpeg'} alt={source ? source.title : 'poster'}/>
    </Frame>
  )
}
