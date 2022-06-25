import React from 'react'

const Loading = () => {
  return (
    <div className="text-center">
    <div
      class="spinner-grow"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}

export default Loading