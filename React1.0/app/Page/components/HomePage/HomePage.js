import React from 'react';
import './HomePage.css';

const HomePage = () => (
    <div className="card">
        <div className="card-top">
            <img className="avatar" src="../../../../assets/img/photo.png" alt="photo"/>
            <div className="personal__info">
                <div className="personal__info__name">Lisa GU</div>
                <div className="personal__info__title">Frontend Developer</div>
                <div className="personal__info__contacts">
                    <img className="personal__info__contacts__icon" src="../../../../assets/img/facebook-brands.svg" alt=""/>
                    <img className="personal__info__contacts__icon" src="../../../../assets/img/square-instagram-brands.svg"
                         alt=""/>
                    <img className="personal__info__contacts__icon" src="../../../../assets/img/twitter-brands.svg" alt=""/>
                </div>
            </div>
        </div>
        <div className="card_bottom">
            <div className="card_bottom_AboutMe">
                <div className="card_bottom_AboutMe_title">
                    <span>About</span>
                    <apan className="card_bottom_AboutMe_Me">Me</apan>
                </div>
                <div className="card_bottom_AboutMe_introduction">
                    <p>Hello, I am Lisa GU. I am learning about the web development skills now. If you have any job
                        position, feel free to get in touch.
                        If you want to follow me in GitHub, please click the link in right->.
                        Wish we can work together in future.
                    </p>
                </div>

            </div>
            <div className="card_bottom__personalInfo">
                <table>
                    <tr>
                        <td className="key">Age</td>
                        <td className="value">29</td>
                    </tr>
                    <tr>
                        <td className="key">Residence</td>
                        <td className="value">Australian</td>
                    </tr>
                    <tr>
                        <td className="key">Address</td>
                        <td className="value"> 3 Finch Dr Eastgardens, Sydney</td>
                    </tr>
                    <tr>
                        <td className="key">e-mail</td>
                        <td className="value">guwenqian10@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="key">Phone</td>
                        <td className="value">0404148267</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
);
export default HomePage;