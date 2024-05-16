import React from 'react'

const Alerts = (props) => {
    let capitalize = (str) => {
        let lower = str.toLowerCase();
        return lower.charAt(0).toUpperCase() + str.slice(1)
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{transition: 'opacity 0.5s ease'}}>
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
    </div>
  )
}

export default Alerts
