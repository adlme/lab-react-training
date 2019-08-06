import React from 'react'

function Greetings(props) {
  const selectGreetings = (lang) => {
    if(lang ==='de'){
      return 'Hallo'
    } else if(lang ==='fr'){
      return 'Bonjour'
    } else if(lang ==='es'){
      return 'Hola'
    }
  }
  return (
    <div>
     <p>{ selectGreetings(props.lang) + ' ' + props.children }</p>

    </div>
  )
}



export default Greetings;