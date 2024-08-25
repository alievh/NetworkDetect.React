import React from 'react'
import Container from '../Bootstrap/Container.tsx'
import Row from '../Bootstrap/Row.tsx'
import SignIn from './SignIn.tsx'
import SignUp from './SignUp.tsx'

const Authorization = () => {
  return (
    <Container>
        <Row className="d-flex align-items-center">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </Row>
    </Container>
  )
}

export default Authorization