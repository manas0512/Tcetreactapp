import React from 'react'

export default function User(props) {
  const {id , name, email, avatar} = props.data;
  
    return (
    <>
    User Component
    <h3>{id} | {name} | {email} | <img src={avatar} /> </h3>
    </>
  )
}