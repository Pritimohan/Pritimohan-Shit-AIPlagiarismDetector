import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon, ShieldIcon } from "lucide-react"
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'


function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div>
            <header className=" top-0 bg-white/80 backdrop-blur-md z-50 dark:bg-black sticky">
                <nav className="container mx-auto px-4 py-4 flex justify-center items-center gap-6">
                    <div className="text-2xl font-bold text-primary flex items-center flex-grow">
                        <ShieldIcon className="mr-2 " />
                        PlagiarismShield
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link smooth={true} to="hero" className="text-gray-600 hover:text-primary cursor-pointer">Home</Link>
                        <Link smooth={true} to='features' className="text-gray-600 hover:text-primary cursor-pointer">Features</Link >
                        <Link smooth={true} to='footer' className="text-gray-600 hover:text-primary cursor-pointer">Contact</Link >
                    </div>
                    <Link smooth={true} to='cta'> <Button className="hidden md:inline-flex">Try for Free</Button></Link>
                    <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </nav>
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white p-4">
                        <Link to='' className="block py-2 text-gray-600 hover:text-primary">Home</Link >
                        <Link to='' className="block py-2 text-gray-600 hover:text-primary">Features</Link >
                        <Link to='' className="block py-2 text-gray-600 hover:text-primary">Pricing</Link >
                        <Link to='' className="block py-2 text-gray-600 hover:text-primary">Contact</Link >
                        <Button className="mt-4 w-full">Try for Free</Button>
                    </div>
                )}
            </header>
        </div>
    )
}

export default NavBar