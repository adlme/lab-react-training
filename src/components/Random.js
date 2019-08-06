import React from 'react'

function Random(props) {
  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  return (
    <div>
      <p>Random value between {props.min} and {props.max} => {generateRandomNum(props.min, props.max)}</p>
    </div>
  )
}

export default Random;