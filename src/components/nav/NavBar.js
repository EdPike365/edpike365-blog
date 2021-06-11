import React, { useContext } from "react"
import { Nav, NavUL, SubUL, NavLI, NavLink } from "./NavBarComps"
import { NavSubMenu } from "./NavBarSubMenu"
import { NavContext } from "../../contexts/NavContext"

const NavBar = () => {
  const { showNavState } = useContext(NavContext)
  const [showNav] = showNavState
  
  // The line breaks at bottom are there to handle too short scroll bars on short screens
  return (
    <Nav showNav={showNav}>
      <NavUL>
        <NavLI>
          <NavLink to={"/"} itemProp="url">
            Home
          </NavLink>
        </NavLI>
        <NavLI>
          <NavLink to={"/settings/"} itemProp="url">
            Settings
          </NavLink>
        </NavLI>
        <NavLI>
          <NavLink to={"/about/"} itemProp="url">
            About
          </NavLink>
        </NavLI>
        <NavLI>
          <NavLink to={"/bloglist/"} itemProp="url">
            Blog
          </NavLink>
        </NavLI>
        <NavLI>
          <NavLink to={"/contact/"} itemProp="url">
            Contact
          </NavLink>
        </NavLI>
        <NavSubMenu
          title={"FRONT END"}
          uuid={"b2cea402-c66f-11eb-b8bc-0242ac130003"}
        >
          <NavLI>
            <NavLink to={"/frontend/"} itemProp="url">
              HTML, CSS, JS
            </NavLink>
          </NavLI>
          <NavLI>
            <NavLink to={"/frontend/"} itemProp="url">
              React, Emotion
            </NavLink>
          </NavLI>
          <NavLI>
            <NavLink to={"/frontend/"} itemProp="url">
              Gatsby
            </NavLink>
          </NavLI>
          <NavLI>
            <NavLink to={"/frontend/"} itemProp="url">
              SEO
            </NavLink>
          </NavLI>
        </NavSubMenu>
        <SubUL>
          BACK END
          <NavLI>
            <NavLink to={"/backend/"} itemProp="url">
              REST, GraphQL
            </NavLink>
          </NavLI>
          <NavLI>
            <NavLink to={"/backend/"} itemProp="url">
              Login and Auth
            </NavLink>
          </NavLI>
          <NavLI>
            <NavLink to={"/backend/"} itemProp="url">
              Java, JUnit, Selenium
            </NavLink>
          </NavLI>
          <NavLI>
            <NavLink to={"/backend/"} itemProp="url">
              CRUD Forms
            </NavLink>
          </NavLI>
          <NavLI>
            <NavLink to={"/backend/"} itemProp="url">
              SQL, RDMS
            </NavLink>
          </NavLI>
        </SubUL>
        <NavSubMenu
          title={"DEVOPS"}
          uuid={"b2cea402-c66f-11eb-b8bc"}
        >
          <NavLI>
            <NavLink to={"/devops/"} itemProp="url">
              Jenkins, GitHub Actions
            </NavLink>
          </NavLI>
          <NavLI>
            <NavLink to={"/devops/"} itemProp="url">
              Maven, Gradle, WebPack
            </NavLink>
          </NavLI>
          <NavLI>
          <NavLink to={"/devops/"} itemProp="url">
              AppDynamics
            </NavLink>
          </NavLI>
        </NavSubMenu>
      </NavUL>
      <br/>
      <br/>
      <br/>
      <br/>
    </Nav>
  )
}

export default NavBar