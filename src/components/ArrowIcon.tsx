import React from 'react'
import styled from 'styled-components'

const ArrowIcon = () => (
  <Icon>
    <Arrow />
  </Icon>
)

const Icon = styled.div`
  position: relative;
  width: 36px;
  height: 24px;
  cursor: pointer;
  transition: transform 1s;

  &:hover,
  &:active {
    transform: translateX(-8px);
  }
`

const Arrow = styled.div`
  position: absolute;
  top: 10px;
  left: 8px;
  width: 28px;
  height: 4px;

  @media screen and (min-width: 600px) {
    background-color: #fff;
    box-shadow: 0.5px 2px 2px rgb(0, 0, 0, 0.5);
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 54%;
    height: 4px;
    left: -4px;
    top: -5px;
    background-color: white;
  }

  &::after {
    top: -4.5px;
    transform: rotate(-45deg);
  }

  &::before {
    top: 4px;
    transform: rotate(45deg);
    box-shadow: 0.5px 2px 2px rgb(0, 0, 0, 0.5);
  }
`

export default ArrowIcon
