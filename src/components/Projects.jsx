import styled from 'styled-components'
import AllProjects from '../AllProjects';

export default function Projects() {

    return (
        <ProjectsBody>
            {
                AllProjects?.map(item => (
                    <a href={item.aTag}>
                        <h1>{item.name}</h1>
                        <ImgProject src={item.src} alt={"webdesign sandvika oslo"} />
                    </a>
                ))
            }
        </ProjectsBody>
    )
}

const ProjectsBody = styled.div`
    display: flex;
    width: 100%;
    min-height: 400px;
    justify-content: space-evenly;
    background-color: #6667ab;
    color: #333;
    width: 100%;
    flex-wrap: wrap;
    padding: 7%;
    padding-top: 150px;

    a {
        text-decoration: none;
        padding: 0px 3px;
    }
    h1 {
        color : black;
    }
`
const ImgProject = styled.img`
    width: 350px;
    height: auto;
    object-fit: cover;
    filter: grayscale(80%);
    :hover {
    filter: grayscale(0%);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    
    }

`
