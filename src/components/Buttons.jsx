import React from 'react'

export const Buttons = (props) => {

    const styles = {
        backgroundColor: `#${props.color}`
    }

  return (
    <div className='Button-container' style={styles}>
        <a className='Button' href={props.link}>

            <p className='Button-name'>{props.name}</p>
            <img className='Button-icon' src={props.icon} />

        </a>
    </div>
  )
}
