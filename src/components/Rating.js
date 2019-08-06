import React from 'react'

 function Rating(props) {
   
   const rating = (children) => {
     return Math.floor(Math.random(children) * 5)
   }
     if(rating(props.children) === 1 ){
       return '&#9733 &#9734 &#9734 &#9734 &#9734'
      } else if(rating === 0){
        return '&#9733 &#9734 &#9734 &#9734 &#9734'
      } 
  
  return (
    <div>
      <p> {rating(props.children)} {props.rating} </p>
    </div>
  )
}

export default Rating;
