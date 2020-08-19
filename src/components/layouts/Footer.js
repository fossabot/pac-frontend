import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        { /* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li>Starine Novaka 23</li>
                                <li>Belgrade 11060</li>
                                <li>Serbia</li>
                                <li>some.email@prodyna.com</li>
                            </ul>
                        </div>
                        { /* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Blog</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/">How to become a full-stack developer</Link></li>
                                <li><Link to="/">Secrets of a JavaScript Ninja</Link></li>
                                <li><Link to="/">IT in your country</Link></li>
                                <li><Link to="/">Kubernetes the easy way</Link></li>
                                <li><Link to="/">Java vs .Net</Link></li>
                            </ul>
                        </div>
                        { /* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/">Lorem ipsum</Link></li>
                                <li><Link to="/">Lorem ipsum</Link></li>
                                <li><Link to="/">Lorem ipsum</Link></li>
                                <li><Link to="/">Lorem ipsum</Link></li>
                            </ul>
                        </div>
                        { /* Column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/">Lorem ipsum</Link></li>
                                <li><Link to="/">Lorem ipsum</Link></li>
                                <li><Link to="/">Lorem ipsum</Link></li>
                                <li><Link to="/">Lorem ipsum</Link></li>
                            </ul>
                        </div>
                    </div>
                    { /*Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} PRODYNA d.o.o - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}

ul li a:hover {
    color: var(--mainLightGrey);
}
`;