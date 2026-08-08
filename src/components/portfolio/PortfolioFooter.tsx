import { useState } from "react";
import { Github, Linkedin } from "lucide-react";

function PortfolioFooter() {
    const [currentYear] = useState(new Date().getFullYear());

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Skills", href: "#" },
        { name: "Projects", href: "#" },
        { name: "Contact", href: "#" },
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <Linkedin size={20} />,
            href: "https://www.linkedin.com/in/manyabhatt9198/",
            color: "#0A66C2",
        },
        {
            name: "GitHub",
            icon: <Github size={20} />,
            href: "https://github.com/manya-bhatt",
            color: "#e3e3e3",
        },
    ];

    return (
        <footer
            className={`relative w-full bg-black text-white py-12 overflow-hidden transition-opacity duration-1000 `}>
            <div className='absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none'></div>

            <div className='flex flex-col space-y-10 justify-center  max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-4 sm:px-6'>
                <nav className='grid grid-cols-2 place-items-center sm:grid-cols-3 md:flex md:justify-center md:flex-wrap gap-4 md:gap-6 text-gray-400 font-medium'>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className='hover:text-indigo-400 transition-colors duration-300 text-center sm:text-left'>
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className='flex flex-wrap justify-center items-center gap-3 sm:space-x-5'>
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className=' w-10 h-10  rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
                            style={{ color: social.color }}
                            aria-label={social.name}>
                            {social.icon}
                        </a>
                    ))}
                </div>

            
                <div className='flex flex-col sm:flex-row items-center justify-center text-center sm:text-left'>
                    <div className='flex items-center space-x-3 mb-2 sm:mb-0 sm:mr-2'>
                        <div className='h-1 w-6 bg-indigo-500' />
                        <span className='text-indigo-400 uppercase text-xs tracking-widest font-medium'>
                            &copy; {currentYear}
                        </span>
                    </div>
                    <p className='text-gray-500 font-medium'>
                        Manya Bhatt. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default PortfolioFooter;