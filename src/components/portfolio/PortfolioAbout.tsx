import { useState, useEffect } from "react";
import { Code, Server, Layers, Lightbulb, ArrowRight } from "lucide-react";

function PortfolioAbout() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { name: "Frontend Development", icon: <Code className='w-5 h-5' /> },
        { name: "Backend Development", icon: <Server className='w-5 h-5' /> },
        {
            name: "Full-Stack Applications",
            icon: <Layers className='w-5 h-5' />,
        },
        {
            name: "Creative Problem Solving",
            icon: <Lightbulb className='w-5 h-5' />,
        },
    ];

    const experiences = [
        {
            year: "March 2025 - May 2025",
            position: "Frontend Web Development Intern",
            company: "CODTECH IT SOLUTIONS (Virtual)",
            description:
                "Developed responsive web pages using HTML5, CSS3, and JavaScript, applied interactive UI components, and improved overall user experience by fixing UI issues, debugging frontend code, and optimizing webpage performance.",
        },
        {
            year: "Sep 2024 - Dec 2024 | June 2025 - Nov 2025",
            position: "Full-Stack Web Development Intern",
            company: "YHills Edtech Pvt. Ltd. (Virtual)",
            description:
                "Enhanced multiple full-stack web applications using HTML5, CSS3, JavaScript, and React.js with responsive UI design. Built backend services using Node.js and Express.js, integrated database operations using MongoDB/MySQL, and designed RESTful APIs.",
        },
        {
            year: "2022 - 2026",
            position: "Bachelor of Technology",
            company: "PSIT Kanpur",
            description:
                "Completed Bachelor of Technology in Computer Science Engineering, building a strong foundation in core programming principles, software development, data structures, and algorithms.",
        },
    ];

    return (
        <section
            id='about'
            className='bg-black text-white py-16 md:py-20 lg:py-24 overflow-hidden relative'>
            
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none' />

            <div className='max-w-[768px] w-full xl:max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                
                <div className='text-center mb-16'>
                    <div className='flex items-center justify-center space-x-3 mb-4'>
                        <div className='h-0.5 w-8 bg-indigo-500' />
                        <span className='text-indigo-400 uppercase text-xs tracking-widest font-semibold'>
                            About Me
                        </span>
                        <div className='h-0.5 w-8 bg-indigo-500' />
                    </div>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4'>
                        My Journey & Expertise
                    </h2>
                    <p className='text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed'>
                        Passionate Computer Science Engineering graduate and developer, combining technical expertise with creative design to build robust web applications.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start'>
                    
                    <div
                        className={`transition-all duration-700 ease-out transform bg-zinc-950/40 border border-zinc-800/80 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-xl w-full ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}>
                        
                        <div className='text-xl md:text-2xl font-bold mb-8 flex items-center text-gray-100 border-b border-zinc-800/60 pb-4'>
                            <span className='bg-indigo-500/10 text-indigo-400 p-2.5 rounded-xl mr-3.5 border border-indigo-500/20'>
                                <Layers className='w-6 h-6' />
                            </span>
                            Education & Experience
                        </div>

                        <div className='space-y-8'>
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className='relative pl-8 border-l-2 border-indigo-500/30 group'>
                                    <div className='absolute left-[-9px] top-1.5 bg-indigo-600 w-4 h-4 rounded-full border-4 border-black group-hover:scale-125 transition-transform'></div>
                                    <span className='inline-block text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20'>
                                        {exp.year}
                                    </span>
                                    <h4 className='font-bold text-lg text-gray-100 mt-1'>
                                        {exp.position}
                                    </h4>
                                    <span className='text-indigo-300/80 text-sm font-medium block mb-2'>
                                        {exp.company}
                                    </span>
                                    <p className='text-gray-400 text-sm leading-relaxed'>
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                 
                    <div
                        className={`transition-all duration-700 ease-out delay-200 transform bg-zinc-950/40 border border-zinc-800/80 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-xl w-full ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}>
                        
                        <div className='mb-8 pb-6 border-b border-zinc-800/60 flex items-center gap-5'>
                            <div
                                className='w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-1 flex-shrink-0 shadow-md shadow-indigo-500/10'
                                style={{
                                    backgroundImage: "url(./IMG20250403155540.jpg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}></div>
                            <div>
                                <h3 className='text-xl md:text-2xl font-bold text-gray-100 mb-1'>
                                    Manya Bhatt
                                </h3>
                                <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
                                    Creative developer crafting functional, scalable, and modern web applications.
                                </p>
                            </div>
                        </div>

                        <div className='mb-6'>
                            <h3 className='text-lg font-bold mb-4 text-gray-200'>
                                Core Skills
                            </h3>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className='flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 transition-colors rounded-xl p-3 border border-zinc-800/80 text-gray-300'>
                                        <div className='bg-indigo-500/10 text-indigo-400 p-2 rounded-lg flex-shrink-0 border border-indigo-500/20'>
                                            {skill.icon}
                                        </div>
                                        <span className='font-medium text-xs md:text-sm'>
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className='text-lg font-bold mb-3 text-gray-200'>
                                Technologies
                            </h3>
                            <div className='flex flex-wrap gap-2 mb-6'>
                                {[
                                    "React",
                                    "JavaScript",
                                    "Node.js",
                                    "Express.js",
                                    "Tailwind CSS",
                                    "HTML/CSS",
                                    "MongoDB",
                                    "MySQL",
                                    "Git",
                                ].map((tech, index) => (
                                    <span
                                        key={index}
                                        className='bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <a href='#contact' className='block w-full'>
                                <button className='group flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/20 cursor-pointer'>
                                    Get In Touch
                                    <ArrowRight
                                        size={18}
                                        className='ml-2 transform group-hover:translate-x-1.5 transition-transform'
                                    />
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PortfolioAbout;