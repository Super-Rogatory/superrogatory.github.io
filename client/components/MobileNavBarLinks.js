import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import hamburger_icon from "../icons/hamburger_icon.png";
import x_icon from "../icons/nav_bar_x.png";
import { toggleMobileNavPopup } from "../store/actions/actionCreators";
import {
    MobileNavBarContainer,
    MobileNavBarBodyContainer,
    MobileNavBarImageContainer,
} from "../styles/MobileFullPage.style";
import { Button } from "../styles/NavBar.style";

class MobileNavBarLinks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { openSideBar, toggleSideBar } = this.props;
        return (
            <MobileNavBarContainer>
                    <MobileNavBarImageContainer imgType={openSideBar && "exit"}>
                        {openSideBar ? (
                            <img
                                onClick={() => toggleSideBar(openSideBar)}
                                src={x_icon}
                                alt="exit icon"
                                
                            ></img>
                        ) : (
                            <img
                                onClick={() => toggleSideBar(openSideBar)}
                                src={hamburger_icon}
                                alt="hamburger_icon"
                            ></img>
                        )}
                    </MobileNavBarImageContainer>
                    {openSideBar &&
                    <MobileNavBarBodyContainer>
                        <div>
                            <ul>
                                <li>
                                    <HashLink smooth to="/#home" onClick={() => toggleSideBar(openSideBar)}>
                                        <span>Home</span>                                
                                    </HashLink>
                                </li>                            
                                <li> 
                                    <HashLink smooth to="/#about" onClick={() => toggleSideBar(openSideBar)}>
                                        <span>About</span>
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/#projects" onClick={() => toggleSideBar(openSideBar)}>
                                        <span>Projects</span>
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/#contact" onClick={() => toggleSideBar(openSideBar)}>
                                        <span>Contact</span>
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/#socials" onClick={() => toggleSideBar(openSideBar)}>
                                        <span>Social</span>
                                    </HashLink>
                                </li>
                                <Link to="/resume.pdf" target="_blank">
                                    <li>
                                        <Button size="small">
                                            <span>Resume</span>
                                        </Button>
                                    </li>
                                </Link>
                            </ul>                             
                        </div>
                    </MobileNavBarBodyContainer>
                }
            </MobileNavBarContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        openSideBar: state.openNavSideBar,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSideBar: (status) => dispatch(toggleMobileNavPopup(status)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavBarLinks);
