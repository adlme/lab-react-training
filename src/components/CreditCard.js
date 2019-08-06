import React from 'react'

function CreditCard(props) {
  return (
    <div className="credit-card" style={{backgroundColor:`${props.bgColor}`, color: `${props.color}`}}>
      <p id="type">{props.type}</p>
      <p id="number">{props.number}</p>
      <p> {props.expirationMonth}</p>
      <p> {props.expirationYear}</p>
      <p> {props.bank}</p>
      <p> {props.owner}</p>
    </div>
  )
}

export default CreditCard;