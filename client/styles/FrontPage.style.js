import styled from 'styled-components';

export const Container = styled.div`
    font-weight: 900;
    ${(props) => props.type !== 'mobile' ? `height: 100vh;` : `height: auto;`}
    width: 100vw;
    background-color: rgba(41,45,62,1);
`;

export const MainSection = styled.div`
    ${(props) => props.type === 'mobile' && `    
        padding: 0 25px;
    `}
`;

export const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    ${(props) => props.type !== 'mobile' ? `height: 70vh;` : `min-height: 65vh;`}
    ${(props) => props.type === 'mobile' && `
        display: flex;
        flex-direction: column;
        position: relative;
        top: 20vh;
        justify-content: flex-start;
        width: 100%;
        overflow: hidden;
        & h6 {
            margin-top: 0px;
            margin-bottom: 25px;
            font-size: 16px;
            font-size: .6rem;
            font-weight: 400;
            color: #99a8e8;
        }
        & h1 {    
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 50px;                   
            font-weight: 800;
            white-space: nowrap;
        }
        & h2 {    
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 34px;                   
            font-weight: 800;
            white-space: nowrap;
        }        
        & p {
            margin-top: 20px;
            margin-bottom: 40px;
            font-size: 14px;
            line-height: 1.2rem;
            font-weight: 400;
            color: #D3D3D3;
        }

        @media only screen and (max-width: 465px) {
            & h6 {
                font-size: 0.5rem;
            }
        
            & p {
                font-size: 0.5rem;
            }
        }
                  
        @media only screen and (max-width: 560px) {
            & p {
                font-size: 0.55rem;
            }
            & h1 {    
                font-size: 34px;                   

            }
            & h2 {    
                font-size: 20px;                   
            }              
        }       
    `
}

`
export const BodySectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    ${(props) => props.type !== 'mobile' ? `width: 65%;` : `width: 100%;`}
    height: 100%;
    justify-content: ${(props) => props.type !== 'mobile' ? `center;` : `flex-start;`}
    ${(props) => 
        props.type !== 'mobile' ?
    `
        & h6 {
            margin-top: 20px;
            margin-bottom: 0px;
            font-size: .8rem;
            font-weight: 400;
            color: #99a8e8;
        }
        & h1 {
            margin-top: 40px;
            margin-bottom: 0px;
            font-size: 2em;
            font-weight: 400;
        }
        & p {
            margin-top: 30px;
            margin-bottom: 20px;            
            font-size: 0.6em;
            max-width: 500px;
            height: 100px;
            line-height: 0.8rem;
            font-weight: 400;
            color: #D3D3D3;
        }
        
        @media only screen and (max-width: 1381px) {
            & h1 {
                font-size: 2rem;
            }
        }

        @media only screen and (max-width: 1176px) {
            & h6 {
                margin-top: 15px;
                margin-bottom: 0px;
                font-size: .7rem;
            }
            & h1 {
                margin-top: 35px;
                margin-bottom: 0px;
                font-size: 1.4rem;
            }
            & p {
                font-size: 0.6em;
                width: 100%;
                height: 95px;
            }      
        }
        @media only screen and (min-width: 1176px) and (max-height: 700px) {
            & h6 {
                margin-top: 15px;
                margin-bottom: 0px;
                font-size: 0.7rem;
                font-weight: 400;
                color: #99a8e8;
            }
            & h1 {
                margin-top: 35px;
                margin-bottom: 0px;
                font-size: 1.7rem;
                font-weight: 400;
            }
            & p {
                margin-top: 30px;
                font-size: 0.6em;
                width: 80%;
                height: 100px;
                line-height: 0.8rem;
                font-weight: 400;
                color: #D3D3D3;
            }        
        }

        @media only screen and (max-width: 1060px) {
            padding-left: 30px;
        }

        @media only screen and (max-height: 550px) {
            overflow: hidden;
        }
           
    `
    :
    `
        & span {
            color: #99a8e8;
        }
    `
}
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    & img {
        filter: opacity(1) drop-shadow(-5px 9px 5px #D3D3D3) brightness(${(props) => props.dim ? 25 : 100}%) blur(${(props) => props.dim ? 10 : 0}px);
    }

    & img {
        width: 315px;
        height: 450px; 
    }

    @media only screen and (max-width: 1020px)   {
        & img {
            width: 100%;
            height: 75%;
        }
    } 

    @media only screen and (max-width: 975px) {
        & img {
            height: 60%;
        }
    }    

    @media only screen and (max-height: 570px) {
        & img {
            width: 100%;
            height: 75%;
        }
    }    
`