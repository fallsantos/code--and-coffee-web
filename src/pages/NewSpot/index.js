import React, { useState, useMemo } from 'react'

import camera from '../../assets/camera.svg'

import './styles.css'

import api from '../../services/api'

export default function NewSpot({ history }) {

  const [company, setCompany] = useState('')
  const [techs, setTechs] = useState('')
  const [price, setPrice] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  const previw = useMemo(// Observa o valor de uma outra variável, e toda vez que alterada, ele gera um novo valor para uma outra variável.
    () => {
      return thumbnail ? URL.createObjectURL(thumbnail) : null
    },
    [thumbnail]
  )

  async function hadleSubmit(event) {
    event.preventDefault()
    const data = new FormData()

    const user_id = localStorage.getItem('user')

    data.append('thumbnail', thumbnail)
    data.append('company', company)
    data.append('techs', techs)
    data.append('price', price)

    await api.post('/spot', data, {
      headers: { user_id }
    })

    history.push('/user/dashboard')
  }

  return (
    <form onSubmit={hadleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${previw})` }}
        className={thumbnail ? 'has-thumbnail' : ''}>
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="company">EMPRESA * </label>
      <input
        type="text"
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={event => setCompany(event.target.value)} />

      <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
      <input
        type="text"
        id="techs"
        placeholder="Quais tecnologias usa?"
        value={techs}
        onChange={event => setTechs(event.target.value)} />

      <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATÚITO)</span></label>
      <input
        type="text"
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)} />

      <button type="submit" className="btn">Cadastrar</button>
    </form>
  )
}