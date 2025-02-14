import React from 'react'
import Logo from './Logo'
import Button from './Button'
import { Link } from "react-router-dom"


function Nav() {
    const navItems = [
        { title: "Events", link: '/' },
        { title: "Tickets", link: '#' },
        { title: "About Project", link: '/about' },
    ]
    return (
        <ul className="sm:flex gap-10 hidden">
            {
                navItems.map((n, i) => (

                    <li key={i} >
                        <Link to={n.link} className="hover:text-white text-[#B3B3B3] text-[18px]">{n.title}</Link>
                    </li>
                ))

            }

        </ul>
    )
}


function Header() {
    return (
        <header className='bg-[#05252C]/40 px-6 py-4 max-w-[1200px] w-full rounded-[24px] mx-auto'>
            <div className='flex justify-between items-center'>
                <Logo />
                <Nav />
                <Button className='bg-white text-black  flex gap-2 group hover:text-white items-center hover:bg-[#24A0B5]' >
                    My Tickets <span>
                        <svg width="18" height="8" viewBox="0 0 18 8" className='group-hover:rotate-[-45deg]  transition-[200ms]' xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM1 4.5L17 4.5V3.5L1 3.5V4.5Z" fill="#0A0C11" className="group-hover:fill-white" />
                        </svg>
                    </span>
                </Button>
            </div>
        </header>
    )
}

export default Header