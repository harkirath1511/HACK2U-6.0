import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import logo from '../assets/Logo.png'; 
import {NavLink} from 'react-router-dom'

export default function App() {
  return (
    <div>
      {/* Sticky Navbar */}
      <Navbar
        className="sticky top-0 left-0 w-full bg-white shadow-md px-4 bg-gradient-to-r from-custom-blue to-custom-pink z-50"
        style={{ position: 'sticky', top: 0 }}
      >
        <NavbarBrand className="ml-0">
          <img
            src={logo}
            alt="Logo"
            className="h-8"
          />
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-20" justify="center">
      
          <NavbarItem>
            <NavLink to={'/Articles'}>
            <Link color="foreground"  className="text-white text-xl">
              Articles
            </Link>
            </NavLink>
          </NavbarItem>
          <NavbarItem >
           <a href="/">
            <Link aria-current="page" color="secondary"  className="text-white text-xl">
              Home
            </Link>
            </a>
          </NavbarItem>
          <NavbarItem>
          <NavLink to={'/Policies'}>
            <Link color="foreground"  className="text-white text-xl">
              Policies
            </Link>
            </NavLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end" className="flex-grow flex justify-end mr-4">
          <Dropdown placement="right-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform w-14 h-14 rounded-full object-cover hover:scale-105"
                color="secondary"
                name="Jason Hughes"
                size="xl"
                src="https://miro.medium.com/v2/resize:fit:555/1*FjSkfan-Kh3vrgtlW8UP_g.png"
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Profile Actions"
              variant="flat"
              className="bg-slate-100 text-gray-500 shadow-lg rounded-lg w-64 py-3 px-5"
            >
              <DropdownItem key="profile" className="h-16 gap-2">
                <p className="font-semibold text-lg">Signed in as</p>
                <p className="font-semibold text-lg text-stone-600">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings" className="hover:bg-gray-400 text-black text-lg py-3 px-4">
                My Settings
              </DropdownItem>
              <DropdownItem key="team_settings" className="hover:bg-gray-400 text-black text-lg py-3 px-4">
                Team Settings
              </DropdownItem>
              <DropdownItem key="analytics" className="hover:bg-gray-400 text-black text-lg py-3 px-4">
                Analytics
              </DropdownItem>
              <DropdownItem key="system" className="hover:bg-gray-400 text-black text-lg py-3 px-4">
                System
              </DropdownItem>
              <DropdownItem key="configurations" className="hover:bg-gray-400 text-black text-lg py-3 px-4">
                Configurations
              </DropdownItem>
              <DropdownItem key="help_and_feedback" className="hover:bg-gray-400 text-black text-lg py-3 px-4">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger" className="hover:bg-red-700 text-black text-lg py-3 px-4">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
