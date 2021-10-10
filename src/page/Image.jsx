import React from 'react'
import styled from 'styled-components'

export const Frame = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 16rem;
  background: ${(props) => props.source ? `url(${props.source})` : `url('img/poster.jpeg')`};
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-box-reflect: below 5px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent) , to(rgba(250, 250, 250, 0.4)));
`

export default function Image({source}) {
  return (
    <Frame source={source}></Frame>
  )
}
