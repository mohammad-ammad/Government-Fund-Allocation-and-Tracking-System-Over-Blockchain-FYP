import React from 'react'

const Card = ({title, icon, num}) => {
  return (
    <div className='card__wrapper'>
        <div>
            {title}
        </div>
        <div>
            <div>{num}</div>
            <div>{icon}</div>
        </div>
    </div>
  )
}

export default Card