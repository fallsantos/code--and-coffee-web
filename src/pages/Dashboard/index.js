import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default function Dashboard() {

  const [spots, setSpots] = useState([])

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user')
      const response = await api.get('/user/dashboard', {
        headers: { user_id }
      })
      // console.log(user_id)
      setSpots(response.data)
    }

    loadSpots()
  }, [])

  return (
    <>
      <ul className="spotList">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>

      <Link to='/user/dashboard/spot/novo'>
        <button className="btn">Novo spot</button>
      </Link>
    </>
  )
}