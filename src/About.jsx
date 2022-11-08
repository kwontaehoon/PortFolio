import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    border-bottom: 1px solid black;
    padding: 30px;
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
const Intro = styled.div`
    height: 250px;
    display: flex;
    margin-top: 20px;
`
const Image = styled.div`
    flex: 0 0 30%;
    display: flex;
    border-right: 1px solid black;
    justify-content: center;
    align-items: center;
`
const SubImage = styled.div`
    width: 50%;
    height: 65%;
    border-radius: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
const Content = styled.div`
    flex: 0 0 70%;
    padding: 20px;
`
const Main1 = styled.div`
    display: flex;
    margin-Top: 10px;
`
const Main2 = styled(Main1)``

const LeftBox = styled.div`
    width: 50%;
    height: 160px;
    padding: 20px;
`
const SubTitle = styled.div`
    height: 35px;
    border-bottom: 3px solid grey;
    border-radius: 2px;
    margin-bottom: 20px;
`
const SubContent = styled.div`

    li{
        margin-top: 10px;
    }
`
const RightBox = styled(LeftBox)``

const About = () => {

  return (
    <Container>
        <Header>
            <Title>Profile</Title>
            <Title2>프로필</Title2>
        </Header>
        <Intro>
            <Content>
                <p style={{fontWeight: 'bold', lineHeight: '25px', fontSize: '14px'}}>
                
 
 
                <i class="fa-solid fa-check" style={{fontSize: '15px'}}/> 안녕하세요! 프론트엔드 개발자를 희망하는 권태훈입니다. <br/>
                <br/>
                <i class="fa-solid fa-check" style={{fontSize: '15px'}}/> 성실하게 살기위해 1일 1커밋 이상을 준수하고 있습니다.  <br/>
                <br/>
                <i class="fa-solid fa-check" style={{fontSize: '15px'}}/> 국비지원교육 수료 후, 지속적으로 개발하기위해 개인 공부와 프로젝트를 병행하고 있습니다. <br/>
                <br/>
                <i class="fa-solid fa-check" style={{fontSize: '15px'}}/> 새로운 스킬을 배울 때 장단점을 따지고 리팩토링을 좋아합니다.  <br/>
                <br/>
                </p>
            </Content>
        </Intro>
        <Main1>
            <LeftBox>
                <SubTitle><i className="fa-solid fa-circle-info"></i> 인포</SubTitle>
                <SubContent>
                    <ul>
                        <li>이름: 권태훈</li>
                        <li>생년월일: 97.07.25</li>
                        <li>전화번호: 010 6672 4228</li>
                        <li>이메일: gju04195@gmail.com</li>
                    </ul>
                </SubContent>
            </LeftBox>
            <RightBox>
                <SubTitle><i className="fa-solid fa-pencil"></i> 자격증</SubTitle>
                <SubContent>
                    <li>정보처리기사 (21.03.07) 실기 준비중</li>
                    <li>정보처리산업기사 (19.01.03) 합격</li>
                    <li>컴퓨터활용능력 1급 (21.08.05) 실기 준비중</li>
                    <li>네트워크 관리사 2급 (18.08.17) 합격</li>
                </SubContent>
            </RightBox>
        </Main1>
        <Main2>
            <RightBox style={{width: '47%'}}>
                <SubTitle><i className="fa-brands fa-github"></i> Github</SubTitle>
                <SubContent>
                    <ul>
                        <li onClick={()=>{ window.open("https://github.com/kwontaehoon");}} style={{cursor: 'pointer'}}>https://github.com/kwontaehoon</li>
                    </ul>
                </SubContent>
            </RightBox>
        </Main2>
    </Container>
  )
}

export default About