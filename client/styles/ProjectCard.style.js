import styled from 'styled-components';

export const ProjectSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    & img.direction-arrow-left {
        position: absolute;
        width: 32px;
        height: 32px;
        top: 50%;  
        left: 5%; 
        transform: translate(-50%, -50%);
        filter: opacity(1) drop-shadow(0px 0px 1px #99a8e8); 
        cursor: pointer;
    }
    & img.direction-arrow-right  {
        position: absolute;
        width: 32px;
        height: 32px;
        top: 50%;  
        left: 95%; 
        transform: translate(-50%, -50%);
        filter: opacity(1) drop-shadow(0px 0px 1px #99a8e8); 
        cursor: pointer;       
    }

    & > img:hover {
        filter: opacity(1) drop-shadow(0px 0px 2px #99a8e8);
        transition: 0.3s;
    }   
`
export const Cards = styled.section`
    display: inline-flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
`

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 100%;
    max-height: 500px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px black;
    color: aliceblue;
    font-weight: 400;
`

export const ProjectCardImgSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75%;
    & img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 5px 5px 0px 0px;
        filter: opacity(1) brightness(75%); 
        transition: 0.5s ease-in-out;
    }

   ${props => props.dim ? 
        `
        & img {
            filter: opacity(1) brightness(15%) blur(10px);
        }
        `
        : 
        `
        & img {
            opacity(1) brightness(75%);
        }
        `
    }
`

export const ProjectCardDescription = styled.div`
    display: inline-flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 17%; 
    border-bottom: 1px solid black;
    background-color: rgba(153,168,232,0.1);
    color: #D3D3D3;  
    & h1 {
        margin: 5px 0px 0px 15px;
        padding: 0px;
        font-size: 22px;
        font-weight: 800;
        width: calc(100% - 15px);   
    }
    & span {   
        width: 100%;
        margin: 0px 0px 0px 15px; 
        padding: 0px 5px 0px 0px;
        font-size: 0.55rem;
        width: calc(100% - 20px);  
    }

`

export const ProjectCardTechnologiesList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8%; 
    font-size: 0.75rem;
    border-radius: 0px 0px 5px 5px;
    font-weight: 600;
    background-color: rgba(153,168,232,0.1);
    color: #D3D3D3;
`

export const SpecialButton = styled.label`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    border: 2px solid rgba(153,168,232,0.1);
    border-radius: 8px;
    width: 225px;
    height: 50px;
    transition: 0.5 ease-in;
    & a {
        margin: 0px;
        padding: 0px;
        width: 35px;
        height: 35px;
    }
    & img {
        width: 35px;
        height: 35px;
        filter: opacity(1) drop-shadow(0px 0px 1px #99a8e8);
        cursor: pointer;
    }

    & img:hover {
        filter: opacity(1) drop-shadow(0px 0px 2px #99a8e8);
        transition: 0.3s;
    }    
`