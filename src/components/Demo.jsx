import styled from 'styled-components'
import AllDemo from '../AllDemo';

export default function Demo() {

      return (
            <DemoBody>
                  {
                        AllDemo?.map(item => (
                              <a href={item.aTag}>
                                    <h1>{item.name}</h1>
                                    <ImgProject src={item.src} alt={item.src} />
                              </a>
                              // <Link key={item.id} to={item.aTag}>
                              // </Link>
                        ))
                  }
            </DemoBody>
      )
}

const DemoBody = styled.div`
    display: flex;
    width: 100%;
    min-height: 400px;
    justify-content: space-evenly;
    background-color: #ddd;
    color: #333;
    width: 100%;
    flex-wrap: wrap;
    padding: 7%;
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
    object-fit: cover;
    filter: grayscale(80%);
    :hover {
    filter: grayscale(0%);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    
    }

`
