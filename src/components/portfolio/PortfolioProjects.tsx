import { useState, useEffect } from "react";
import {
    Github,
    ExternalLink,
    ShieldAlert,
    ShoppingBag,
    FileText,
    Calendar,
} from "lucide-react";
import { Card, CardBody, CardHeader } from "@traken-ui/react";

function PortfolioProjects() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projects = [
        {
            title: "ShopEasy Full-Stack E-Commerce",
            description:
                "A production-ready MERN e-commerce web application featuring secure JWT user authentication, a comprehensive admin dashboard, multi-image product uploading via Cloudinary, dynamic gallery views, order management, and responsive design.",
            image: "/smartShop.png",
            tags: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
            githubUrl: "https://github.com/manya-bhatt",
            liveUrl: "https://ecommerce-app-manya24.vercel.app/",
            featured: true,
            icon: <ShoppingBag className='w-5 h-5' />,
        },
        {
            title: "AI Resume Analyzer",
            description:
                "An intelligent web application that evaluates and parses resumes, offering keyword optimization, skill matching feedback, and insights to help job seekers improve their resumes.",
            image: "/resumeAnalyzer.png",
            tags: ["React.js", "Python", "Flask", "Tailwind CSS"],
            githubUrl: "https://github.com/manya-bhatt",
            liveUrl: "https://manya-resume-analyzer.netlify.app/",
            featured: true,
            icon: <FileText className='w-5 h-5' />,
        },
        {
            title: "Deepfake Detection using CNN and GAN",
            description:
                "Developed a model to detect AI-generated deepfake images and videos using Convolutional Neural Networks and Generative Adversarial Networks. Implemented and trained models on Google Colab using Python and TensorFlow, achieving accurate classification by analyzing visual artifacts.",
            image: "/deepfakeDetection.png",
            tags: ["Python", "TensorFlow", "Google Colab", "CNN", "GAN"],
            githubUrl: "https://github.com/manya-bhatt",
            liveUrl: "",
            featured: false,
            icon: <ShieldAlert className='w-5 h-5' />,
        },
        {
            title: "College Event Management System",
            description: "A comprehensive platform to manage college events, handle registrations, schedule activities, and coordinate fest details seamlessly.",
            tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
            image: "/images/event-management.png",  
            githubUrl: "https://github.com/manya-bhatt",
            liveUrl: "",
            featured: false,
            icon: <Calendar className='w-5 h-5' />
        },
    ];

    return (
        <section
            id='projects'
            className='bg-black text-white py-16 md:py-24 lg:py-32 overflow-hidden relative'>
            <div className='max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <div className='flex items-center justify-center space-x-3 mb-6'>
                        <div className='h-1 w-10 bg-indigo-500' />
                        <span className='text-indigo-400 uppercase text-sm tracking-widest font-medium'>
                            My Work
                        </span>
                        <div className='h-1 w-10 bg-indigo-500' />
                    </div>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
                        Featured{" "}
                        <span className='text-indigo-400'>Projects</span>
                    </h2>
                    <p className='text-gray-300 max-w-3xl mx-auto text-base md:text-lg'>
                        A collection of projects showcasing my expertise in
                        full-stack web development, machine learning, and software engineering.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 mb-20'>
                    {projects
                        .filter((project) => project.featured)
                        .map((project, index) => (
                            <Card
                                key={index}
                                className={`group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 transform hover:border-indigo-500 p-0 ${
                                    isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-12 opacity-0"
                                }`}>
                                <CardHeader className='p-6 bg-transparent'>
                                    <div className='absolute top-4 right-4 flex space-x-2'>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='bg-black/50 hover:bg-indigo-600 p-2 rounded-full backdrop-blur-sm transition-colors duration-300'>
                                                <Github
                                                    size={18}
                                                    className='text-white'
                                                />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='bg-black/50 hover:bg-indigo-600 p-2 rounded-full backdrop-blur-sm transition-colors duration-300'>
                                                <ExternalLink
                                                    size={18}
                                                    className='text-white'
                                                />
                                            </a>
                                        )}
                                    </div>
                                </CardHeader>

                                <CardBody className='p-4 sm:p-6 bg-transparent text-gray-300'>
                                    <div className='flex items-center mb-3'>
                                        <div className='bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mr-3'>
                                            {project.icon}
                                        </div>
                                        <h3 className='text-lg sm:text-xl md:text-2xl font-bold truncate'>
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className='text-gray-300 mb-4 text-sm sm:text-base'>
                                        {project.description}
                                    </p>
                                    <div className='flex flex-wrap gap-2'>
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className='bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                </div>

                <h3 className='text-xl sm:text-2xl font-bold mb-6 text-center text-gray-200'>
                    Other Projects
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                    {projects
                        .filter((project) => !project.featured)
                        .map((project, index) => (
                            <div
                                key={index}
                                className={`group border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:border-indigo-500 transition-all duration-500 transform text-gray-200 ${
                                    isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-12 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: `${(index + 2) * 200}ms`,
                                }}>
                                <div className='flex items-center justify-between mb-4'>
                                    <div className='flex items-center'>
                                        <div className='bg-indigo-500/20 text-indigo-400 p-2 rounded-lg mr-3'>
                                            {project.icon}
                                        </div>
                                        <h3 className='font-bold text-base sm:text-lg truncate text-gray-200'>
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className='flex space-x-2'>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'>
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-gray-400 hover:text-indigo-400 transition-colors duration-300'>
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className='text-gray-300 mb-4 text-xs sm:text-sm line-clamp-3'>
                                    {project.description}
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className='bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className='absolute top-20 right-0 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none'></div>
            <div className='absolute bottom-20 left-0 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none'></div>
        </section>
    );
}

export default PortfolioProjects;