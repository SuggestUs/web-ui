import React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import Button from '@mui/material/Button';

export default function Navbar() {

  const location = useLocation().pathname;
  console.log("location", useLocation())
  const isAuthentication = (location === '/WhoWeAre' || location === 'Mission' || location === '/JoinUs'
  || location === '/' )

  if (!isAuthentication) {

    return null
  }
  return (
    <nav aria-label="Site Nav" className=" mx-auto p-5 lg:w-1/2">
      <div className="flex flex-row justify-between">
        {/* Logo for project Hut */}
        <div className="item-navbar block md:hidden" id="dropdown-menu">
          {/* For Mobile UI */}
        </div>
        <div className="item-navbar" id="logo-ph">
          <Link to="/" className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[2rem] ">
            Suggest<span className="text-green-500">Us</span>
          </Link>
        </div>

        {/* Main element of navbar */}
        <div className="item-navbar hidden md:block" id="elements-of-navbar">
          <ul className="flex items-center gap-5  text-[1rem]">
            <li>
              <NavLink
                to="/Mission"
                className="inline-block py-2 px-3 text-center font-bold  rounded-md "
              >
                Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/WhoWeAre"
                className="inline-block py-2 px-3 text-center font-bold rounded-md  "
              >
                WhoWeAre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/JoinUs"
                className="inline-block py-2 px-3 text-center font-bold  rounded-md   "
              >
                JoinUs
              </NavLink>
            </li>

          </ul>
        </div>
        {/* Additional elemnt of navbar */}
        <div className="flex justify-center">
          <ul className="flex items-center gap-5  text-[1rem]">
            <Button variant="contained" color="success">
              <Link to='/Auth' >LogIn</Link>
            </Button>


          </ul>
        </div>
        {/* <Drawer
        className="block md:hidden"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "56%" },
        }}
      >
        <SideMenu handleDrawerToggle={handleDrawerToggle} />
      </Drawer> */}
      </div>
    </nav>
  )
}
