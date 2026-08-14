import { useState, useEffect } from "react";
import { Github, ExternalLink, ShoppingBag, FileText, Calendar, Sprout } from "lucide-react";
import { Card, CardBody, CardHeader } from "@traken-ui/react";

function PortfolioProjects() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projects = [
        {
            title: "ShopEasy Full-Stack E-Commerce",
            description: "A production-ready MERN e-commerce web application.",
            icon: <ShoppingBag className='w-5 h-5' />,
            githubUrl: "https://github.com/manya-bhatt",
            liveUrl: "https://ecommerce-app-manya24.vercel.app/",
            featured: true
        }
    ];

    return (
        <section className='bg-black text-white py-20'>
            <h2 className='text-center text-4xl font-bold'>Featured Projects</h2>
        </section>
    );
}

export default PortfolioProjects;