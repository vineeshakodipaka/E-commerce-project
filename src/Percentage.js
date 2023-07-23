import React from 'react'
function Percentage(props){
 let res=Math.floor(((props.or-props.of)/props.or)*100)
  return(
   <>
   <h5>Save-{res}%off</h5>
   
   </>
 )
}
export default Percentage