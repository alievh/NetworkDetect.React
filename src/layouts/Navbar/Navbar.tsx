import React from 'react'

// Bootstrap imports
import Row from '../../components/Bootstrap/Row.tsx'
import Col from '../../components/Bootstrap/Col.tsx'
import ContainerFluid from '../../components/Bootstrap/ContainerFluid.tsx'

// Components imports
import NavbarMenu from '../../components/Navbar/NavbarMenu.tsx'
import NavbarLogo from '../../components/Navbar/NavbarLogo.tsx'


const Navbar = () => {
  return (
    <nav>
        <ContainerFluid>
            <Row>
                <Col lg="3">
                    <NavbarLogo />
                </Col>
                <Col lg="3">
                    <NavbarMenu />
                </Col>
            </Row>
        </ContainerFluid>
    </nav>
  )
}

export default Navbar