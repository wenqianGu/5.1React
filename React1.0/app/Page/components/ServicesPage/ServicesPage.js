import React from "react";

const ServicesPage = () => (
    <div id="SERVICES" className="page">
        <div className="page__title__name">
            <h2>Services</h2>
        </div>
        <div className="page__service">
            <h3>My <span>Services</span></h3>
        </div>
        <div className="page__service__type">
            <div className="page__service__type__items">
                <div className="page__service__type__icon">
                    <div className="hover__border">
                        <img src="../../../../assets/img/web_design_icon.png" alt="web_design_icon"/>
                    </div>
                </div>
                <div className="page__service__type__name">
                    <span>Web Design</span>
                </div>
                <div className="page__service__type__content">
                    <p>I have mastered the fundamental skills, including HTML, CSS, JavaScript etc.
                    </p>
                </div>
            </div>
            <div className="page__service__type__items">
                <div className="page__service__type__icon">
                    <div className="hover__border">
                        <img src="../../../../assets/img/photography_icon.png" alt="photography icon"/>
                    </div>
                </div>
                <div className="page__service__type__name">
                    <span>Photography</span>
                </div>
                <div className="page__service__type__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor.
                    </p>
                </div>
            </div>
            <div className="page__service__type__items">
                <div className="page__service__type__icon">
                    <div className="hover__border">
                        <img src="../../../../assets/img/creativity_icon.png" alt="management icon"/>
                    </div>
                </div>
                <div className="page__service__type__name">
                    <span>Management</span>
                </div>
                <div className="page__service__type__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor.</p>
                </div>
            </div>
            <div className="page__service__type__items">
                <div className="page__service__type__icon">
                    <div className="hover__border">
                        <img src="../../../../assets/img/advertising_icon.png" alt="advertising icon"/>
                    </div>
                </div>
                <div className="page__service__type__name">
                    <span>Advertising</span>
                </div>
                <div className="page__service__type__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor.
                    </p>
                </div>
            </div>
        </div>
        <div className="page__clients">
            <h3>Clients</h3>
        </div>
        <div className="page__clients__logo">
            <a href="React1.0/app/Page/components/ServicesPage/ServicesPage#" target="_blank">
                <img src="../../../../assets/img/client_1.png" alt="client 1"/>
            </a>
            <a href="React1.0/app/Page/components/ServicesPage/ServicesPage#" target="_blank">
                <img src="../../../../assets/img/client_2.png" alt="client 2"/>
            </a>
            <a href="React1.0/app/Page/components/ServicesPage/ServicesPage#" target="_blank">
                <img src="../../../../assets/img/client_3.png" alt="client 3"/>
            </a>
            <a href="React1.0/app/Page/components/ServicesPage/ServicesPage#" target="_blank">
                <img src="../../../../assets/img/client_4.png" alt="client 4"/>
            </a>
            <a href="React1.0/app/Page/components/ServicesPage/ServicesPage#" target="_blank">
                <img src="../../../../assets/img/client_5.png" alt="client 5"/>
            </a>
            <a href="React1.0/app/Page/components/ServicesPage/ServicesPage#" target="_blank">
                <img src="../../../../assets/img/client_6.png" alt="client 6"/>
            </a>
        </div>
    </div>
);
export default ServicesPage;