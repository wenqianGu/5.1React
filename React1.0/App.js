import React from "react";
import Header from "./app/Header/Header";
import Footer from "./app/Footer/Footer";
import HomePage from "./app/Page/components/HomePage/HomePage";

const App = () => (
    <div className="main">
        <Header />
        <HomePage />
        <Footer />
    </div>
);

export default App;