import styled from 'styled-components'
import AllProjects from '../AllProjects';
import { Link } from 'react-router-dom'



export default function Projects() {

    return (
        <ProjectsBody>
            {
                AllProjects?.map(item => (
                    <a href={item.aTag}>
                        <h1>{item.name}</h1>
                        <ImgProject src={item.src} alt={item.src} />
                    </a>
                    // <Link key={item.id} to={item.aTag}>
                    // </Link>
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
    background-color: #ddd;
    color: #333;
    width: 100%;
    flex-wrap: wrap;
    padding: 7%;
`
const ImgProject = styled.img`
`
