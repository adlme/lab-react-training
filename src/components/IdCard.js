import React from 'react';

function IdCard(props) {
  return (
      <li>
        <p>Last name ={props.lastName}</p>
        <p>First name = {props.firstName}</p>
        <p>Gender = {props.gender}</p>
        <p>Height = {props.height}</p>
        <p>Birth = {props.birth}</p>
        <img src={props.picture} alt='{props.picture}'/>
      </li>

  )
}


export default IdCard;