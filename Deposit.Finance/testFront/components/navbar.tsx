import Link from "next/link";
import { useEffect, useState } from "react"
import ModalConnect from "./modal_connect";

export const Navbar = () => {
  

  const [dropdownConnect, setDropdownConnect] = useState(false);
  const [mobileDropDown, setMobileDropDown] = useState(false);
  const [nav, setNav] = useState("/");

  // useEffect(() => {
  //   setNav(window.location.pathname)
  // }, [])

  return (
    <nav>
            {dropdownConnect && <ModalConnect setDropdownConnect={setDropdownConnect}/>}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button onClick={() => setMobileDropDown(!mobileDropDown)} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href="/">
            <div className="flex flex-shrink-0 items-center">
              <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href="/" onClick={() => setNav("/")} className={` text-gray-300 ${nav === "/" ? ("border-b-2 border-pink-500 text-white") : ("")} hover:border-b-2 hover:border-pink-500 hover:text-white px-3 py-2 text-sm font-medium`} aria-current="page">Home</Link>

                <Link href="invest" onClick={() => setNav("/invest")} className={`text-gray-300 ${nav === "/invest" ? ("border-b-2 border-pink-500 text-white") : ("")} hover:border-b-2 hover:border-pink-500 hover:text-white px-3 py-2  text-sm font-medium`}>Invest</Link>

                <Link href="stake" onClick={() => setNav("/stake")} className={`text-gray-300 ${nav === "/stake" ? ("border-b-2 border-pink-500 text-white") : ("")} hover:border-b-2 hover:border-pink-500 hover:text-white px-3 py-2 text-sm font-medium`}>Stake</Link>

                <Link href="more" onClick={() => setNav("/more")} className={`text-gray-300 ${nav === "/more" ? ("border-b-2 border-pink-500 text-white") : ("")} hover:border-b-2 hover:border-pink-500 hover:text-white px-3 py-2 text-sm font-medium`}>More</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <div>
                <button onClick={() => setDropdownConnect(true)} type="button" className="flex px-3 py-2 font-medium hover:border-b-2 hover:border-pink-500 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  {/* <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/> */}
                  <span className="text-white">Connect</span>
                </button>
              </div>

              {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
              {/* {dropdownConnect ?
                (<div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Balance : N/A</Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Stake : N/A</Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</Link>
                </div>) : (<></>)
              } */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {mobileDropDown ? (
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>

          <Link href="invest" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Invest</Link>

          <Link href="stake" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Stake</Link>

          <Link href="more" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">More</Link>
        </div>
      </div>
      ) : (<></>)}
    </nav>
  )
}