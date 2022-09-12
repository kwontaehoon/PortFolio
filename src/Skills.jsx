import React, {useEffect} from 'react'
import styled from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"

const Container = styled.div`
    height: 400px;
    padding: 30px;
    border-bottom: 1px solid black;
`
const Header = styled.div`
    height: 50px;
    font-size: 30px;
    display: flex;
`
const Title = styled.div`
    border-bottom: 3px solid black;
`
const Title2 = styled.div`
    font-size: 15px;
    color: grey;
    padding-top: 5px;
    padding-left: 5px;
    font-weight: bold;
`
const Main = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
`
const SubCircle = styled.div`
    border-radius: 50%;
    width: 0%;
    height: 0%;
    position: absolute;
    background-color: ivory;
    opacity: 0.5;
    transition: 0.5s;
`
const Icon = styled.div`
    img{
        width: 70px;
    }
`
const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    // 가상 선택자 ~ 다른 div
    // 가상 선택자 > 같은 div 부모자식
    &:hover > ${SubCircle}{
        width: 120%;
        height: 120%;
        transition: 0.3s;
    }
    &:hover > ${Icon}{
        position: relative;
        z-index: 100;
    }
`

const Skills = () => {

    useEffect(()=>{
        AOS.init();
    })


  return (
    <Container>
        <Header>
            <Title>Skills</Title>
            <Title2>스킬</Title2>
        </Header>
        <Main data-aos="fade-up" data-aos-duration="500">
            <Circle>
                <Icon><img src="images/html.png" alt='html'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/css.png" alt='css'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/js.png" alt='js' style={{width: "84px",paddingBottom: "7px"}}></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/jquery.png" alt='jquery' style={{width: "100px"}}></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/java.png" alt='java'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/react.png" alt='react'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/react-native.png" alt='react-native'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/bootstrap.png" alt='bootstrap'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="/images/git.png" alt='git'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/github.png" alt='github' style={{width: "100px"}}></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/mui.png" alt='mui'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="/images/markdown.png" alt='markdown'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/node.png" alt='node'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="/images/mysql.png" alt='mysql'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/php.png" alt='php'></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
            <Circle>
                <Icon><img src="images/aws.png" alt='aws' style={{width: "100px"}}></img></Icon>
                <SubCircle></SubCircle>
            </Circle>
        </Main>
        
    </Container>
  )
}

export default Skills