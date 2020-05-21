import React from 'react'

export default function Error() {
  function closeError() {
    let error = document.getElementById('error')
    error.style.display = 'none'
  }
  return (
    <div id="error">
      <span className="closeerrorbtn" onClick={closeError}>&times;</span>
      <strong>Sorry, page not found!</strong>
    </div>

  )
};