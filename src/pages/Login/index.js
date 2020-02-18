import React, { useState } from 'react'

import api from '../../services/api'

export default function Login({ history }) {

  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    //console.log(email)
    const response = await api.post('/users/session', {
      email
    })

    const { _id } = response.data

    localStorage.setItem('user', _id)

    history.push('/dashboard')
  }

  /*function handleEmailChange(e){
    setEmail(e.target.value)
  }*/
  return (
    <>
      <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}