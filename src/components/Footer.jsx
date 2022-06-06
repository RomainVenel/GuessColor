import * as React from "react";
import './../App.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {

    return (
        <footer>
            <div className={'icon-wrap'}>
                <a href="https://www.linkedin.com/in/romain-venel-815098124">
                    <div className="flex icon" id="icon-2">
                        <FaLinkedin/>
                    </div>
                </a>
                <a href="https://github.com/RomainVenel">
                    <div className="flex icon" id="icon-2">
                        <FaGithub/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/mattwilliams85">
                    <div className="flex icon" id="icon-2">
                        <i className="mdi mdi-linkedin"></i>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/mattwilliams85">
                    <div className="flex icon" id="icon-2">
                        <i className="mdi mdi-linkedin"></i>
                    </div>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
