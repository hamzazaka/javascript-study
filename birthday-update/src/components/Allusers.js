import React from 'react'

export default function Allusers({people}) {
    console.log(people);
  return (
    <>
    
     <h1>{people.results[0].email}</h1>
    <h1>hello</h1>
    </>
      
  )
}
