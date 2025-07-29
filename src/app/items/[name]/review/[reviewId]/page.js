import React from 'react'

const reviewId = ({params}) => {
  return (
    <div>
        items {params.name} review id {params.reviewId}
    </div>
  )
}

export default reviewId
