import React from 'react';

const BlogPage = () => (
    <div className="blog_main">
        <div className="page__title__name">
            <h2>Blog</h2>
        </div>
        <section className="blog__content">
            <div className="blog__content__card_row">
                <div className="blog__content__card_colum">
                    <a className="blog__content__card_colum__img" href="">
                        <img className="blog__content__card_colum__img__blogPic" src="../assets/img/blog_post_1.jpg"
                             alt="blog1"/>
                        <div className="img__mask">
                            <img className="img__mask__icon" src="../assets/img/book-solid.svg" alt="blog icon"/>
                        </div>
                        <div className="blog__content__card_colum__post__Date">
                            <span className="blog__content__card_colum__post__Date__day">6</span>
                            <span className="blog__content__card_colum__post__Date__month">Dec</span>
                        </div>
                    </a>
                    <a className="blog__content__card_colum__category" href="#">Travel</a>
                    <a className="blog__content__card_colum__title" href="#">
                        <h4>Bootstrap is the Most Popular Framework</h4>
                    </a>
                </div>
                <div className="blog__content__card_colum">
                    <a className="blog__content__card_colum__img" href="">
                        <img className="blog__content__card_colum__img__blogPic" src="../assets/img/blog_post_2.jpg"
                             alt="blog1"/>
                        <div className="img__mask">
                            <img className="img__mask__icon" src="../assets/img/book-solid.svg" alt="blog icon"/>
                        </div>
                        <div className="blog__content__card_colum__post__Date">
                            <span className="blog__content__card_colum__post__Date__day">3</span>
                            <span className="blog__content__card_colum__post__Date__month">Nov</span>

                        </div>
                    </a>
                    <a className="blog__content__card_colum__category" href="#">jQuery</a>
                    <a className="blog__content__card_colum__title" href="#">
                        <h4>One Framework,Every Device</h4>
                    </a>
                </div>
            </div>
            <div className="blog__content__card_row">
                <div className="blog__content__card_colum">
                    <a className="blog__content__card_colum__img" href="">
                        <img className="blog__content__card_colum__img__blogPic" src="../assets/img/blog_post_3.jpg"
                             alt="blog1"/>
                        <div className="img__mask">
                            <img className="img__mask__icon" src="../assets/img/book-solid.svg" alt="blog icon"/>
                        </div>
                        <div className="blog__content__card_colum__post__Date">
                            <span className="blog__content__card_colum__post__Date__day">12</span>
                            <span className="blog__content__card_colum__post__Date__month">Oct</span>

                        </div>
                    </a>
                    <a className="blog__content__card_colum__category" href="#">Sport</a>
                    <a className="blog__content__card_colum__title" href="#">
                        <h4>Designed for Everyone, Everywhere</h4>
                    </a>
                </div>
                <div className="blog__content__card_colum">
                    <a className="blog__content__card_colum__img" href="">
                        <img className="blog__content__card_colum__img__blogPic" src="../assets/img/blog_post_4.jpg"
                             alt="blog1"/>
                        <div className="img__mask">
                            <img className="img__mask__icon" src="../assets/img/book-solid.svg" alt="blog icon"/>
                        </div>
                        <div className="blog__content__card_colum__post__Date">
                            <span className="blog__content__card_colum__post__Date__day">18</span>
                            <span className="blog__content__card_colum__post__Date__month">Aug</span>

                        </div>
                    </a>
                    <a className="blog__content__card_colum__category" href="#">CSS</a>
                    <a className="blog__content__card_colum__title" href="#">
                        <h4>An Introduction To PostCSS</h4>
                    </a>
                </div>
            </div>
            <div className="blog__content__card_row">
                <div className="blog__content__card_colum">
                    <a className="blog__content__card_colum__img" href="">
                        <img className="blog__content__card_colum__img__blogPic" src="../assets/img/blog_post_5.jpg"
                             alt="blog1"/>
                        <div className="img__mask">
                            <img className="img__mask__icon" src="../assets/img/book-solid.svg" alt="blog icon"/>
                        </div>
                        <div className="blog__content__card_colum__post__Date">
                            <span className="blog__content__card_colum__post__Date__day">2</span>
                            <span className="blog__content__card_colum__post__Date__month">Jul</span>

                        </div>
                    </a>
                    <a className="blog__content__card_colum__category" href="#">CSS3</a>
                    <a className="blog__content__card_colum__title" href="#">
                        <h4>Original and Innovation Web Layouts</h4>
                    </a>
                </div>
                <div className="blog__content__card_colum">
                    <a className="blog__content__card_colum__img" href="">
                        <img className="blog__content__card_colum__img__blogPic" src="../assets/img/blog_post_6.jpg"
                             alt="blog1"/>
                        <div className="img__mask">
                            <img className="img__mask__icon" src="../assets/img/book-solid.svg" alt="blog icon"/>
                        </div>
                        <div className="blog__content__card_colum__post__Date">
                            <span className="blog__content__card_colum__post__Date__day">8</span>
                            <span className="blog__content__card_colum__post__Date__month">May</span>
                        </div>
                    </a>
                    <a className="blog__content__card_colum__category" href="#">HTML5</a>
                    <a className="blog__content__card_colum__title" href="#">
                        <h4>Creative and Innovation Designs</h4>
                    </a>
                </div>
            </div>

        </section>

    </div>
)
export default BlogPage;