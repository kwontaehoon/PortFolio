import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 500px;
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
const Box1 = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    padding: 10px;
`
const Left1 = styled.div`
    width: 40%;
    height: 100%;
`
const Right1 = styled.div`
    width: 50%;
    height: 100%;

    li {
        padding: 5px;
        font-size: 14px;
    }
`

const Education = () => {
  return (
    <Container>
        <Header>
            <Title>Educations</Title>
            <Title2>교육</Title2>
        </Header>
        <Main>
            <Box1>
                <Left1>
                    <h2>FullStack with React&NodeJs</h2>
                    <h4 style={{color: 'grey'}}>2022.01.27 ~ 2022.07.27</h4>
                </Left1>
                <Right1>
                    <ul>
                        <li>퍼블리셔부터 백엔드까지의 풀스택 교육과정 (6개월)</li>
                        <li>Javascript (ES6+) / Typescript 문법 학습</li>
                        <li>ReactJS / NodeJS / ExpressJS 서버 구축</li>
                        <li>HTTP, RESTful API 웹 서버 구현 </li>
                        <li>MySQL DB 연동</li>
                        <li>OpenWeather API를 이용한 날씨 프로젝트</li>
                    </ul>
                </Right1>
            </Box1>
            <Box1>
                <Left1>
                    <h2>React Native App 개발 프로젝트</h2>
                    <h4 style={{color: 'grey'}}>2022.08.03 ~ 2022.09.30</h4>
                </Left1>
                <Right1>
                    <ul>
                        <li>React Native 앱개발 프로젝트 (2개월)</li>
                        <li>React Native 크로스 플랫폼 구조 이해</li>
                        <li>골프장 공공 API 연동</li>
                        <li>SQLite, Firebase AUTH / RealTime DB / Storage 연동</li>
                    </ul>
                </Right1>
            </Box1>
        </Main>
    </Container>
  )
}

export default Education