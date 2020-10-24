import React ,{useContext, Fragment} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,NavItem,NavLink,NavbarText
} from "reactstrap"
import {Link} from "react-router-dom"
import { UserContext } from '../../context/UserContext'

const Header =()=>{
    const context = useContext(UserContext)
    return(
        <Navbar color='info' light expand='md'>
            <NavbarBrand>
                LCGM Technologies Pvt.Ltd
            </NavbarBrand>
            <NavbarText className='text-white'>
                {
                    context.user ? context.user.email : ""
                }
            </NavbarText>
            <NavbarToggler />
            <Collapse navbar>
                <Nav className='ml-auto' navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink tag={Link} to='/home' className='text-white'>
                                Logout
                            </NavLink>
                            </NavItem>
                        ) : (
                            <Fragment>
                            <NavItem>
                                <NavLink tag={Link} to='/signin' className='text-white'>
                                Signin
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to='/signup' className='text-white'>
                                Signup
                            </NavLink>
                            </NavItem>
                            </Fragment>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header