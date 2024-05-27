import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme from '../../styles/commonTheme';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate 사용
import SvgIcon from "@mui/material/SvgIcon";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ContactsIcon from '@mui/icons-material/ImportContacts';
import { Link } from 'react-router-dom';
import { TokenAxios } from "../../apis/CommonAxios"; // TokenAxios 추가

const Base = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.beige};
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Container_Head = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const WhiteBox1 = styled.div`
    width: 100%;
    height: 150px;
    background-color: #fff;
    margin-bottom: 15px;
    border: 0.5px solid ${theme.colors.black};
`;

const Spacer = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
`;

const WhiteBox2 = styled.div`
    width: 100%;
    height: 100px;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 8px;
`;

const GrayBox = styled.div`
    width: 100%;
    height: 100px;
    background-color: #ccc;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
`;

const InstructionText = styled.h3`
    font-size: 16px;
    font-family: 'Logo';
    margin: 0;
`;

const SmallWhiteBox = styled.div`
    width: 80px;
    height: 80px;
    background-color: #fff;
    margin-right: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const SmallBlackBox = styled.div`
    width: 80px;
    height: 80px;
    background-color: #000;
    margin-right: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
`;

const MenuItem = styled.h2`
    font-size: 13px;
    font-family: 'Logo';
    margin: 0;
    text-align: right;
    width: fit-content;
    padding: 5px;
    margin-left: auto;
`;

const Title = styled.h2`
    font-size: 40px;
    font-family: 'engLogo';
    margin: 0;
    text-align: left;
`;

const Info = styled.h1`
    font-size: 20px;
    font-family: 'Logo';
    text-align: center;
`;
const Info2 = styled.h1`
    font-size: 15px;
    font-family: 'Logo';
    text-align: center;

`;

const Voca = styled.h1`
    font-size: 24px;
    font-family: 'engLogo';
    text-align: right;
    margin: 0;
`;

const MainPage = () => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const [selectedImageUrl, setSelectedImageUrl] = useState('');
    const navigate = useNavigate(); 

    const handleGalleryImage = () => {
        const input = document.createElement('input');
      
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            setSelectedImageUrl(URL.createObjectURL(file));
            navigate(`/ocr?url=${selectedImageUrl}`);
        };
        input.click();
    };
    

    const handleContactsClick = () => {
        navigate('/studynote');
    };
    const fetchWords = async () => {
        try {
            const response = await TokenAxios.get(`${API_BASE_URL}/v1/words/all`);
            console.log(response.data.result); // API 응답 데이터 확인
        } catch (error) {
            console.error("Error fetching words:", error);
        }
    };

    fetchWords();

    useEffect(() => {
       
    }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

    return (
        <Base>
            <Container>
                <Container_Head>
                    <Title>Gramary</Title>
                    <Menu>
                        <MenuItem>
                        <Link to="/mypage">마이페이지</Link>
                        </MenuItem>
                        <MenuItem>
                        <Link to="/info">공지사항</Link>
                        </MenuItem>

                    </Menu>
                </Container_Head>

                <WhiteBox1>
                    <Info>공지사항 공지사항 공지사항</Info>
                    <Info>공지사항 공지사항 공지사항</Info>
                    <Info>공지사항 공지사항 공지사항</Info>
                    <Info>공지사항 공지사항 공지사항</Info>
                </WhiteBox1> 

                <Spacer>
                    <Voca>Today's Vocabulary</Voca>
                </Spacer>
                <WhiteBox2>
                    <Info>오늘의 영단어</Info>
                    <Info>보여주는 곳</Info>
                </WhiteBox2>
                <GrayBox>
                    
                    <SmallWhiteBox onClick={handleGalleryImage}>
                        <SvgIcon component={CameraAltIcon} fontSize="large" />
                    </SmallWhiteBox>
                    <Info2>모르는 영어 문장을 검색해보세요</Info2>
                </GrayBox>

                <GrayBox>
                    <SmallWhiteBox onClick={handleContactsClick}>
                        <SvgIcon component={ContactsIcon} fontSize="large" />
                    </SmallWhiteBox>
                    <Info2>나만의 영어 문장을 기록해보세요</Info2>
                </GrayBox>
            </Container>
        </Base>
    );
}

export default MainPage;
