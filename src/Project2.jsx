import React from 'react'
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"

const Container = styled.div`
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
            <Box>
            <Swiper pagination={{clickable: true}} modules={[Pagination]}>
                <SwiperSlide>
                    <ImageBox><img src="images/무신사.png" alt='cafe'></img></ImageBox>
                    <ContentBox>무신사 클론페이지 입니다.</ContentBox>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageBox><img src="images/다음.png" alt='cafe'></img></ImageBox>
                    <ContentBox>다음 카페 (반응형) 클론페이지 입니다.</ContentBox>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageBox><img src="images/비쥬팝.png" alt='cafe' style={{height: '50%'}}></img></ImageBox>
                    <ContentBox>비쥬팝 클론페이지 입니다.</ContentBox>
                </SwiperSlide>
            </Swiper>
            </Box>
            <Box>
            <Swiper pagination={{clickable: true}} modules={[Pagination]}>
                <SwiperSlide>
                    <ImageBox><img src="images/맛집.png" alt='cafe'></img></ImageBox>
                    <ContentBox>다음 지도, 로드뷰, Postcode와 mySQL을 통한 경기도 맛집 api입니다. </ContentBox>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageBox><img src="images/여행경보.png" alt='cafe' style={{height: '50%'}}></img></ImageBox>
                    <ContentBox>공공 데이터포털에서 받아온 데이터로 <br/> 만든 나라별 여행 경보 api 입니다.</ContentBox>
                </SwiperSlide>
            </Swiper>
            </Box>
           
        </Project1>

    </Container>
  )
}

export default Project2