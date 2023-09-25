import React, { useState } from "react"

<h1> Quelle est la derniere Playstation ?</h1>

function Button1() {
   const [name, setName] = useState(PS3)
   const handleClick = () => (
    setName("Mauvaise réponse")
   )
  
    return <button onClick={handleClick}>{name}</button>;
  }
  
export default Button1;

function Button() {
  const [name, setName] = useState(PS4)
  const handleClick = () => (
   setName("Mauvaise réponse")
  )
 
   return <button onClick={handleClick}>{name}</button>;
 }
 
export default Button2;

function Button3() {
  const [name, setName] = useState(PS5)
  const handleClick = () => (
   setName("Bonne réponse")
  )
 
   return <button onClick={handleClick}>{name}</button>;
 }
 
export default Button3;