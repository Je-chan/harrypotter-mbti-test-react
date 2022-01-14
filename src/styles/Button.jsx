import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten, darken } from 'polished'

export const GlobalButton = styled.button`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  width: ${(props) => (props.position ? '28rem' : ' 30rem')};
  height: ${(props) => (props.position ? '7rem' : ' 5rem')};
  left: ${(props) => (props.position ? '3rem' : '2.55rem')};
  bottom: ${(props) => props.position || '5rem'};
  margin: ${({ margin }) => margin || 'none'};
  border: none;
  border-radius: 50px;
  box-sizing: border-box;
  background-color: ${(props) => props.color || '#a50e11'};
  box-shadow: 0 6px ${(props) => (props.color ? darken(0.1, props.color) : darken(0.1, '#a50e11'))};
  transition: box-shadow 0.1s cubic-bezier(0, 0, 1, 1);
  font-size: ${(props) => (props.position === 'Intro' ? '20px' : '16px')};
  font-weight: 600;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.color ? lighten(0.1, props.color) : lighten(0.1, '#a50e11')};
    font-weight: 900;
  }

  &:active {
    box-shadow: 0 0 ${(props) => (props.color ? darken(0.1, props.color) : darken(0.1, '#a50e11'))},
      inset 0 6px ${(props) => (props.color ? darken(0.1, props.color) : darken(0.1, '#a50e11'))};
  }

  @media screen and (max-width: 768px) {
    width: 20rem;
  }
`

export default function Button({
  curPage,
  length,
  color,
  position,
  text,
  value,
  clickHandler,
  absolute,
  margin,
}) {
  const textContent = () => {
    return { __html: text }
  }

  return curPage === length - 1 ? (
    <Link to='/result'>
      <GlobalButton
        color={color}
        position={position}
        value={value}
        onClick={clickHandler}
        absolute={absolute}
        margin={margin}
        dangerouslySetInnerHTML={textContent()}
      ></GlobalButton>
    </Link>
  ) : (
    <GlobalButton
      color={color}
      position={position}
      value={value}
      onClick={clickHandler}
      absolute={absolute}
      margin={margin}
      dangerouslySetInnerHTML={textContent()}
    ></GlobalButton>
  )
}

Button.defaultProps = {}
