import styled from 'styled-components'
import AllDemo from '../AllDemo';

export default function Demo() {

      return (
            <DemoBody>
                  {
                        AllDemo?.map(item => (
                              <a href={item.aTag} target="_blank">
                                    <h1>{item.name}</h1>
                                    <ImgProject src={item.src} alt={"webdesign oslo sandvika"} />
                              </a>
                        ))
                  }
            </DemoBody>
      )
}

const DemoBody = styled.div`
    display: flex;
    width: 100%;
    min-height: 400px;
    padding: 7%;
    padding-top: 150px;
    justify-content: space-evenly;
    background-color: #DCDCDC;
    color: #333;
    width: 100%;
    flex-wrap: wrap;
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
    :hover 
    {
      filter: grayscale(0%);
      box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 20%);
      transition: box-shadow 0.5s;
    }

`
