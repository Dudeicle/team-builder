import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';

import Form from './Components/Form'
import Team from './Components/Team'


const initialTeamMembers = [
  {
    id: uuid(),
    name: 'JimBillyBob JoJo',
    email: 'BillyBob@gmail.com',
    role: 'Designer',
  }
]

const initialFormValues = [
  {
    id: uuid(),
    name: '',
    email: '',
    role: '',
  }
]



export default function App() {
  const [team, setTeam] = useState(initialTeamMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState('')


  const onInputChange = evt => {
    const {name, value} = evt.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  
  const onSubmit = evt => {

    evt.preventDefault()

    if (!formValues.name || !formValues.email || !formValues.role) {
      setError('You need to fill out all the info!')
      return
    }
  

    const newMember = { ...formValues, id: uuid() }
    // const newMember = {
    //   id: uuid(),
    //   name: formValues.name.trim(),
    //   email: formValues.email.trim(),
    //   role: formValues.role
    // }

    setTeam(team => [newMember, ...team])
    setFormValues(initialFormValues)
  }
  



  return (
    <div className="App">
      <Form 
      values = {formValues}
      onInputChange = {onInputChange}
      onSubmit = {onSubmit}
      
      />

      {
        team.map(teamMember => {
          return (
            <Team key={teamMember.id} details={teamMember} />
          )
        })

      }
    </div>
  );
}

