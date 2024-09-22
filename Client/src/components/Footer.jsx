import React from 'react'

import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { ShieldIcon } from "lucide-react"

function Footer() {
    return (
        <footer id='footer' className="bg-gray-900 text-white py-5 px-12">
            <div className=' flex mb-24 flex-wrap gap-7 justify-center '>
                <div
                    className="text-2xl font-bold text-primary flex items-center text-white md:flex-grow ">
                    <ShieldIcon />
                    <Link to='/'>PlagiarismShield</Link>
                </div>

                <div className='flex gap-8'>
                    <Link to='https://github.com/Pritimohan' className="flex items-center justify-center gap-2"><FaGithub size={30} /></Link>
                    <Link to='mailto:pritimohanshit@gmail.com' className="flex items-center justify-center gap-2"><SiGmail size={30} /></Link>
                    <Link to='https://www.linkedin.com/in/pritimohan-shit/' className="flex items-center justify-center gap-2"><FaLinkedin size={30} />
                    </Link>
                    <Link to='https://x.com/pritimohanshit5?t=XI-4ki1Gh58Nds3F3wxA7Q&s=08 ' className="flex items-center justify-center gap-2"><FaXTwitter size={30} /></Link>
                    <Link to='https://www.instagram.com/milky______bar/' className="flex items-center justify-center gap-2"><FaSquareInstagram size={30} />
                    </Link>
                </div>
            </div>
            <div className="container text-center">
                <p>&copy; 2023 PlagiarismShield. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer