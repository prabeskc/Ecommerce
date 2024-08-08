import React from 'react'

interface Props{
    FirstName:string
    Lastname:string
    onclick?:any
}

const Display = ({
    FirstName,
    Lastname,
    onclick
}: Props) => {
        

  return (
    <div>
      <p>{FirstName}</p>
      <p>{Lastname}</p>

      <button type="button" onClick={onclick}>Click me daddy</button>
    </div>
  )
}

export default Display
