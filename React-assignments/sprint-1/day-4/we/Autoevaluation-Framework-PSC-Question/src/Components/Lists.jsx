import React from 'react'

const Lists = ({todos}) => {
  const list=todos.map((el)=>(
    <li  key={el.id}>{el.title}</li>
  ))
  return (
    <div data-testid="list-component" style={{ width: 'fit-content', margin: 'auto', textAlign: 'left'}}>
        <ul >
        {/* Map the todos here inside the ul tag, with the li items, showing just the todo title */}
        {list}
        </ul>
    </div>
  )
}

export default Lists