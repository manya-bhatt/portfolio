import { useState, useEffect } from "react";
import {
    Github,
    ExternalLink,
    ShoppingBag,
    FileText,
    Calendar,
    Sprout,
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
            description: "A production-ready MERN e-commerce web application featuring secure JWT user authentication, a comprehensive admin dashboard, multi-image product uploading via Cloudinary, dynamic gallery views, order management, and responsive design.",
            image: "/smartShop.png",
            tags: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
            githubUrl: "https://github.com/manya-bhatt",
            liveUrl: "https://ecommerce-app-manya24.vercel.app/",
            featured: true,
            icon: <ShoppingBag className='w-5 h-5' />,
        },
        {
            title: "Crop Disease Detection & Advisory System",
            description: "An AI-powered web application built with Python, TensorFlow, and Streamlit to classify 38 crop leaf diseases using a fine-tuned MobileNetV2 CNN model. Features Grad-CAM heatmaps for explainable AI, multilingual treatment advice, downloadable PDF reports, and an interactive Groq-powered agricultural chatbot.",
            image: "/cropCare.png",
            tags: ["Python", "TensorFlow", "Streamlit", "Groq API", "OpenCV", "ReportLab"],
            githubUrl: "https://github.com/manya-bhatt/cropcare-ai",
            liveUrl: "https://cropcare-ai-manya.streamlit.app",
            featured: true,
            icon: <Sprout className='w-5 h-5' />,
        },
        {
            title: "AI Resume Analyzer",
            description: "An intelligent web application that evaluates and parses resumes, offering keyword optimization, skill matching feedback, and insights to help job seekers improve their resumes.",
            image: "/resumeAnalyzer.png",
            tags: ["React.js", "Python", "Flask", "Tailwind CSS"],
            githubUrl: "https://github.com/manya-bhatt",
            liveUrl: "https://manya-resume-analyzer.netlify.app/",
            featured: false,
            icon: <FileText className='w-5 h-5' />,
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
        <section id='projects' className='bg-black text-white py-16 md:py-24 lg:py-32 overflow-hidden relative'>
            <div className='max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
                        Featured <span className='text-indigo-400'>Projects</span>
                    </h2>
                </div>
                {/* Projects Grid content remains as per your original design */}
                <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
                    {projects.map((project, index) => (
                        <div key={index} className='border border-gray-800 p-6 rounded-xl'>
                            {project.icon}
                            <h3 className='text-xl font-bold mt-4'>{project.title}</h3>
                            <p className='text-gray-400 mt-2'>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PortfolioProjects;