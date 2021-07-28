import React from 'react'

const LocationInfoBox = ({info}) => {
  return (
    <div className='location-info'>
      <h2>Wildfire Info</h2>
      <ul>
        <li> ID: <strong>{info.id}</strong></li>
        <li> TITLE: <strong>{info.title}</strong></li>
        <small>NASA</small>
      </ul>
    </div>
  )
}

export default LocationInfoBox
