import React from 'react'
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"

const Container = styled.div`
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
const Main = styled.div`
    margin-top: 20px;
`
const SubHeader = styled.div`
    height: 50px;
`
const Project1 = styled.div`
    width: 80%;
    height: 500px;
    display: flex;
    margin: 0 0 100px 100px;
`
const InfoBox = styled.div`
    flex: 0 0 35%;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.5);
    border: 1px solid black;
`
const ImageBox = styled.div`
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    img{
        position: absolute;
        width: 100%;
        height: 100%;
    }
`

const InfoBox2 = styled.div`
    flex: 0 0 55%;
    padding: 30px;
    margin-left: 30px;
`
const InfoBox3 = styled(InfoBox)`
    flex: 0 0 30%;
`
const Content = styled.div`
    height: 250px;
`
const Skill = styled.div`
    display: flex;
    flex-wrap: wrap;

    div{
        padding: 0 5px 0px 5px;
        height: 30px;
        border-radius: 10px;
        background-color: #A3BA89;
        margin: 5px;
        line-height: 30px;
        text-align: center;
        color: white;
        box-shadow: 3px 3px 3px rgba(0,0,0,0.5);

    }
`
const Summary = styled.div`

    div{
        margin-bottom: 5px;
    }
`
const Address = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    button{
        width: 100px;
        font-weight: bold;
        box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
        cursor: pointer;
        border: 0px solid black;
        border-radius: 10px;
        transition: 1s;

        &:hover{
            background-color: green;
        }
    }
`

const Project = () => {
  return (
    <Container>
        <Header>
            <Title>Project</Title>
            <Title2>프로젝트</Title2>
        </Header>
        <Main>
            <SubHeader>팀 프로젝트</SubHeader>
            <Project1 data-aos="" data-aos-duration="">
                <InfoBox>
                <Swiper pagination={{clickable: true}} modules={[Pagination]}>
                    <SwiperSlide>
                        <ImageBox><img src="images/movie.png" alt='movie'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/movie2.png" alt='movie'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/movie3.png" alt='movie'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/movie4.png" alt='movie' style={{height: '60%'}}></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/movie5.png" alt='movie' style={{height: '60%'}}></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/movie6.png" alt='movie'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/movie7.png" alt='movie'></img></ImageBox>
                    </SwiperSlide>
                </Swiper>
                </InfoBox>
                <InfoBox2>
                    <div style={{fontSize: 20}}>CHK-Movie</div>
                    <Content>
                        <p style={{fontWeight: 'bold', lineHeight: '30px'}}>
                        React 입문으로 첫 번째 프로젝트에서는 이미 상용화 된 영화를 주제로 영화 웹 사이트를 제작했습니다.
                        영화, 날짜, 인원 수 등을 선택하면 <br/> 결제금액이 나오기까지의 예매페이지를 맡았습니다. <br/>
                        예매페이지의 논리적인 구조를 다양한 React Hook을 사용하여 <br/> 구현하였고,
                        비록 백엔드 부분이 없지만 전반적인 React의 구조, <br/> git을 활용한 협업구조까지 다양하게
                        학습 할 수 있었습니다.
                        </p>
                    </Content>
                    <Summary>
                        <div>22.04.25 ~ 22.05.13</div>
                        <Skill>
                            <div>HTML5</div>
                            <div>CSS3</div>
                            <div>JavaScript</div>
                            <div>Jquery</div>
                            <div>Bootstrap</div>
                            <div>React</div>
                            <div>Styled Component</div>
                            <div>Material UI</div>
                            <div>AWS(EC2)</div>
                            <div>Nginx</div>
                            <div>Git</div>
                        </Skill>
                        <Address>
                            <button onClick={()=>{ window.open("https://github.com/HHeeW/CHK_Movie");}}>GitHub</button>
                            <button onClick={()=>{ window.open("http://3.39.240.168");}}>Live</button>
                        </Address>
                    </Summary>
                </InfoBox2>
            </Project1>
            <Project1 data-aos="" data-aos-duration="">
                <InfoBox>
                <Swiper pagination={{clickable: true}} modules={[Pagination]}>
                    <SwiperSlide>
                        <ImageBox><img src="images/cafe.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/cafe2.png" alt='cafe2'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/cafe3.png" alt='cafe3' style={{height: '60%'}}></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/cafe4.png" alt='cafe4' style={{height: '60%'}}></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/cafe5.png" alt='cafe5' style={{height: '60%'}}></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/cafe6.png" alt='cafe5'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/cafe7.png" alt='cafe5'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/cafe8.png" alt='cafe5'></img></ImageBox>
                    </SwiperSlide>
                </Swiper>
                </InfoBox>
                <InfoBox2>
                    <div style={{fontSize: 20}}>CHK-Cafe</div>
                    <Content>
                        <p style={{fontWeight: 'bold', lineHeight: '30px'}}>
                        두 번째 프로젝트에서는 백엔드를 포함하기위해 카페를 주제로 한 <br/> 웹 사이트를 한 개 더 제작했습니다.
                        최대한 서버를 활용하기위해서<br/> 다음과 카카오 API로 로그인/회원가입 페이지 구현과 DB(MySQL)<br/> 연결을 통한
                        게시판, 댓글, 회원등급제 구현, NodeJS / ExpressJS<br/> 서버 구축부터 배포까지 백엔드 역할을 중심으로 수행했습니다. <br/>
                        클라이언트와 서버간의 통신방법과 가상머신을 통한 인프라를 <br/> 이해하는데 큰 도움이 되었습니다.
                        </p>
                    </Content>
                    <Summary>
                        <div>22.05.16 ~ 22.07.27</div>
                        <Skill>
                            <div>HTML5</div>
                            <div>CSS3</div>
                            <div>JavaScript</div>
                            <div>Jquery</div>
                            <div>Bootstrap</div>
                            <div>React</div>
                            <div>Styled Component</div>
                            <div>NodeJS</div>
                            <div>Restful API</div>
                            <div>MySQL</div>
                            <div>AWS(EC2, RDS)</div>
                            <div>Nginx</div>
                            <div>PM2</div>
                            <div>Git</div>
                        </Skill>
                        <Address>
                            <button onClick={()=>{ window.open("https://github.com/kwontaehoon/CHK-cafe");}}>GitHub</button>
                            <button onClick={()=>{ window.open("http://3.36.131.255");}}>Live</button>
                        </Address>
                    </Summary>
                </InfoBox2>
            </Project1>
            <SubHeader>개인 프로젝트</SubHeader>
            <Project1 data-aos="" data-aos-duration="">
                <InfoBox>
                <Swiper pagination={{clickable: true}} modules={[Pagination]}>
                    <SwiperSlide>
                        <ImageBox><img src="images/tour9.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/tour7.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/tour8.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/tour6.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/tour2.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/tour1.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/tour5.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/tour4.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/tour3.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                </Swiper>
                </InfoBox>
                <InfoBox2>
                    <div style={{fontSize: 20}}>My Tour</div>
                    <Content>
                        <p style={{fontWeight: 'bold', lineHeight: '30px'}}>
                            세 번째 프로젝트에서는 React-Native UI를 이해하기위해 간단한 관광 어플을 제작했습니다.
                            React-Native 내부의 AsyncStorage와 DB(SQLite) 연결을 통해 관광지 위치에 따른 Google Maps와<br/> 검색 기능,
                            주요 도시에 따른 날씨 앱, 좋아요 기능까지 가지각색으로 구현해봤습니다. <br />
                            프로젝트라고 하기엔 부족한 부분이 많지만 Android와 IOS를 동시<br/>개발 가능한 하이브리드 (크로스플랫폼) 개발 환경에 대한 전반적인<br/>
                            구조를 이해할 수 있었습니다.
                        </p>
                    </Content>
                    <Summary>
                        <div>22.08.20 ~ 22.09.20</div>
                        <Skill>
                            <div>HTML5</div>
                            <div>CSS3</div>
                            <div>JavaScript</div>
                            <div>Android Studio</div>
                            <div>React-Native</div>
                            <div>SQLite</div>
                            <div>Git</div>
                        </Skill>
                        <Address>
                            <button onClick={()=>{ window.open("https://github.com/kwontaehoon/My-Tour");}}>GitHub</button>
                        </Address>
                    </Summary>
                </InfoBox2>
            </Project1>
            <Project1 data-aos="" data-aos-duration="">
                <InfoBox>
                <Swiper pagination={{clickable: true}} modules={[Pagination]}>
                <SwiperSlide>
                        <ImageBox><img src="images/golf1.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf2.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf3.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf4.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf5.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf6.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf7.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf8.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf9.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf10.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf11.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImageBox><img src="images/golf12.png" alt='cafe'></img></ImageBox>
                    </SwiperSlide>
                </Swiper>
                </InfoBox>
                <InfoBox2>
                    <div style={{fontSize: 20}}>Golf Booking App</div>
                    <Content>
                        <p style={{fontWeight: 'bold', lineHeight: '30px'}}>
                            네 번째 프로젝트에서는 세 번째 프로젝트를 바탕으로 골프 부킹 <br/>
                            어플을 제작 중 입니다. Firebase의 클라우드 호스팅을 통한 Auth, <br/>실시간 데이터베이스를 이용한 채팅서비스,
                            Storage의 갤러리까지<br/> 계획하고 있습니다. 

                        </p>
                    </Content>
                    <Summary>
                        <div>22.09.20 ~ </div>
                        <Skill>
                            <div>HTML5</div>
                            <div>CSS3</div>
                            <div>JavaScript</div>
                            <div>Android Studio</div>
                            <div>React-Native</div>
                            <div>SQLite</div>
                            <div>Firebase</div>
                            <div>Figma</div>
                            <div>Git</div>
                        </Skill>
                        <Address>
                            <button onClick={()=>{ window.open("https://github.com/kwontaehoon/Golf_App");}}>GitHub</button>
                        </Address>
                    </Summary>
                </InfoBox2>
            </Project1>
        </Main>
    </Container>
  )
}

export default Project