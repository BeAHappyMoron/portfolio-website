import React, { useState } from 'react'
import Logo from '../../../src/assets/icons/logo.png';
import {
  CCollapse, CContainer, CNavbar, CNavbarBrand,
  CNavbarNav, CNavbarToggler, CNavItem, CNavLink,
} from '@coreui/react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CNavbar expand="lg" className="bg-body-transparent me-5 text-white">
      <CContainer fluid>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CNavbarBrand href="#" className='mx-4 my-3'>
              <img src={Logo} alt="MTHO." width="70" height="70" />
        </CNavbarBrand>
        <CCollapse className="navbar-collapse justify-content-end" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" className="mx-5 mt-3 text-white" active>
                ABOUT ME
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#" className="mx-5 mt-3 text-white">PROJECTS</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#" className="mx-5 mt-3 text-white">JUST YAP</CNavLink>
            </CNavItem>
            <CNavItem>
                <button className='round-outline-btn'>DOWNLOAD CV</button>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}

export default Navbar