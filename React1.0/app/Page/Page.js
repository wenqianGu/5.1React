import React from "react";
import HomePage from "./components/HomePage/HomePage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import BlogPage from "./components/BlogPage/BlogPage";

const Page = () => (
    <div className="pages">
        <HomePage />
        <div id="RESUME" className="page">Resume Page</div>
        <ServicesPage />
        <BlogPage />
        <div id="CONTACT" className="page">CONTACT Page</div>
    </div>

);

export default Page;