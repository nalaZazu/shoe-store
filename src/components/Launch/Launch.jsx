import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function Launch() {
  return (
    <>
      <Container>
        <h1>Launch Product</h1>
      </Container>
      <Outlet />
    </>
  )
}

export default Launch