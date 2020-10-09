import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SideBtnWrap,
    SidebarRoute,
    SidebarLink,
    SidebarMenu  
} from './SidebarElements'


const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}  >
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle} >
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle} >
                        Services
                    </SidebarLink>
                    <SidebarLink to='sign-up' onClick={toggle} >
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/sign-in' onClick={toggle} >
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
