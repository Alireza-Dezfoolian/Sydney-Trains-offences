import React from 'react';

const Toggle = props => {
  return (
    <div className='button-wrapper'>
      {props.buttons.map(d => <button
        className={props.dataType === d ? "button active" : "button"}
        name={d} key={d} onClick={props.onClick}>{d}</button>)}
    </div>
  )
}

export default Toggle;