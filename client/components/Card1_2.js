import React from "react";
import {
    ProjectCard,
    ProjectCardImgSection,
    ProjectCardDescription,
    ProjectCardTechnologiesList,
    SpecialButton,
} from "../styles/ProjectCard.style";
import dinoguys from "../icons/dinoguys.png";
import chatterly from "../icons/chatterly.png";
import github from "../icons/github.png";
import external_link from "../icons/external_link.png";

class Cards1_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onImgHover: false,
            imageNumber: 1,
            showNextTwoProjects: false,
        };
    }

    hoverImage(isOn, imageNumber) {
        if (isOn) {
            this.setState({ onImgHover: true, imageNumber });
        } else {
            this.setState({ onImgHover: false, imageNumber });
        }
    }

    render() {
        const { imageNumber, onImgHover } = this.state;
        return (
            <>
                <ProjectCard>
                    <ProjectCardImgSection
                        dim={onImgHover && imageNumber === 1 ? 1 : 0}
                        onMouseLeave={() => this.hoverImage(false, 1)}
                    >
                        <img
                            src={dinoguys}
                            alt="picture of dino guys game"
                            onMouseEnter={() => this.hoverImage(true, 1)}
                        ></img>
                        {onImgHover && imageNumber === 1 && (
                            <SpecialButton>
                                <a
                                    href="https://github.com/potatoes-team/dinoguys"
                                    target="_blank"
                                >
                                    <img src={github} alt="github icon" />
                                </a>
                                <a
                                    href="https://dinoguys.herokuapp.com"
                                    target="_blank"
                                >
                                    <img
                                        src={external_link}
                                        alt="external link icon"
                                    />
                                </a>
                            </SpecialButton>
                        )}
                    </ProjectCardImgSection>
                    <ProjectCardDescription>
                        <h1>DinoGuys</h1>
                        <span>
                            DinoGuys is a 2D platformer battle royale style game
                            where friends can compete to see who can make it to
                            the finish line first!
                        </span>
                    </ProjectCardDescription>
                    <ProjectCardTechnologiesList>
                        <span>JavaScript Express Phaser3 Socket.IO Tiled</span>
                    </ProjectCardTechnologiesList>
                </ProjectCard>
                <ProjectCard>
                    <ProjectCardImgSection
                        dim={onImgHover && imageNumber === 2 ? 1 : 0}
                        onMouseLeave={() => this.hoverImage(false, 2)}
                    >
                        <img
                            src={chatterly}
                            alt="picture of chatterly application"
                            onMouseEnter={() => this.hoverImage(true, 2)}
                        ></img>
                        {onImgHover && imageNumber === 2 && (
                            <SpecialButton>
                                <a
                                    href="https://github.com/Super-Rogatory/chatterly"
                                    target="_blank"
                                >
                                    <img src={github} alt="github icon" />
                                </a>
                                <a
                                    href="https://wechatterly.herokuapp.com"
                                    target="_blank"
                                >
                                    <img
                                        src={external_link}
                                        alt="external link icon"
                                    />
                                </a>
                            </SpecialButton>
                        )}
                    </ProjectCardImgSection>
                    <ProjectCardDescription>
                        <h1>WeChatterly</h1>
                        <span>
                            WeChatterly is a web socket based chat application
                            that allows users to join rooms with friends and
                            talk online together.
                        </span>
                    </ProjectCardDescription>
                    <ProjectCardTechnologiesList>
                        <span>
                            React/Redux Express Socket.IO Sequelize(PostgreSQL)
                        </span>
                    </ProjectCardTechnologiesList>
                </ProjectCard>
            </>
        );
    }
}

export default Cards1_2;
