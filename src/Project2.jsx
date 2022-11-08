import React from 'react'
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"


const Container = styled.div`
    padding-bottom: 20px;
`
const Header = styled.div`
    height: 50px;
    margin-left: 30px;
`
const Project1 = styled.div`
    width: 80%;
    height: 500px;
    display: flex;
    margin: 0 0 100px 100px;
    justify-content: space-around;
    align-items: center;
    position: relative;
`
const Arrow = styled.div`
    position: absolute;
    width: 200px;
    height: 100px;
    top: -120px;
    left: 30%;
`
const Top = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 50%;
    font-size: 23px;
    font-family: 'Cafe24Ssurround';
`
const Bottom = styled.div`
    flex: 0 0 50%;
    height: 50%;
    display: flex;

    img{
        width: 50%;
        transform: rotate(150deg);
    }
`
const Box = styled.div`
    width: 38%;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
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
const ContentBox = styled.div`
    width: 90%;
    height: 100px;
    background-color: black;
    opacity: 0.8;
    position: absolute;
    bottom: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-weight: '900';
`

const Project2 = () => {


  return (
    <Container>
        <Header>그 외</Header>
        <Project1>
            <Arrow>
                <Top>클릭해주세요!</Top>
                <Bottom>
                    <img src="images/arrow.png" alt='arrow' style={{transform: 'rotate(130deg)'}}></img>
                    <img src="images/arrow.png" alt='arrow' style={{position: 'absolute', left: 50}}></img>
                </Bottom>
            </Arrow>
            <Box>
            <Swiper pagination={{clickable: true}} modules={[Pagination]}>
                <SwiperSlide onClick={()=>{ window.open("http://3.34.255.132/musinsa");}} style={{cursor: 'pointer'}}>
                    <ImageBox><img src="images/무신사.png" alt='musinsa'></img></ImageBox>
                    <ContentBox>무신사 메인 클론페이지 입니다.</ContentBox>
                </SwiperSlide>
                <SwiperSlide onClick={()=>{ window.open("http://3.34.255.132/daum");}} style={{cursor: 'pointer'}}>
                    <ImageBox><img src="images/다음.png" alt='daum_cafe'></img></ImageBox>
                    <ContentBox>다음 카페 (반응형) 클론페이지 입니다.</ContentBox>
                </SwiperSlide>
                <SwiperSlide onClick={()=>{ window.open("http://3.34.255.132/myshop");}} style={{cursor: 'pointer'}}>
                    <ImageBox><img src="images/비쥬팝.png" alt='bijoupop' style={{height: '40%'}}></img></ImageBox>
                    <ContentBox>비쥬팝 클론페이지 입니다.</ContentBox>
                </SwiperSlide>
            </Swiper>
            </Box>
            <Box>
            <Swiper pagination={{clickable: true}} modules={[Pagination]}>
                <SwiperSlide>
                    <ImageBox><img src="images/맛집.png" alt='경기도 맛집'></img></ImageBox>
                    <ContentBox>다음 지도, 로드뷰, PostCode와 MySQL을 통한 경기도 맛집 API입니다.</ContentBox>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageBox><img src="images/weather_app.png" alt='weather_app' style={{width: '60%', height: '80%', borderRadius: 10}}></img></ImageBox>
                    <ContentBox>OpenWeather과 Cordova를 이용한 <br /> 날씨 APP 입니다. </ContentBox>
                </SwiperSlide>
            </Swiper>
            </Box>
           
        </Project1>

    </Container>
  )
}

export default Project2