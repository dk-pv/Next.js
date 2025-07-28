import React from 'react'

const ItemsPage = ({params}) => {
  return (
    <div>
      <h1>
        this is your item {params.name}
      </h1>
    </div>
  )
}

export default ItemsPage
