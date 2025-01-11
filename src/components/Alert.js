
import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
  }


  return (
    
    // props.alert && means that if it is null, div will not be returned. if it is not null, then only div will be returned.
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  {capitalize(props.alert.type)} : {props.alert.msg}
  
</div>
   
  )
}
