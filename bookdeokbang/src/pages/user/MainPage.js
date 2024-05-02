import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import theme from '../../styles/commonTheme';
import SvgIcon from "@mui/material/SvgIcon";
import { SvgIconComponent } from "@mui/icons-material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ContactsIcon from '@mui/icons-material/ImportContacts';
import ImageUploader from './ImageUploader';

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

const SmallWhiteBox = styled.div`
    width: 80px;
    height: 80px;
    background-color: #fff;
    margin-right: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; /* 마우스를 가져다 대면 커서 모양을 포인터로 변경 */
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

const Voca = styled.h1`
    font-size: 24px;
    font-family: 'engLogo';
    text-align: right;
    margin: 0;
`;

const MainPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showUploader, setShowUploader] = useState(false);
    const [image, setImage] = useState(null);
    const videoRef = useRef(null);

    const handleGalleryImage = () => {
        // 갤러리에서 이미지 가져오기
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const imageDataURL = reader.result;
                // 여기서 imageDataURL을 활용하여 원하는 동작 수행
                // 예: 이미지를 미리 보여주기, 업로드하기 등
                console.log('선택한 이미지 데이터 URL:', imageDataURL);
                setShowUploader(true);
            };
            reader.readAsDataURL(file);
        };
        input.click();
    };
    
    const handleCameraImage = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            setShowModal(true);
        } catch (error) {
            console.error('Error accessing webcam:', error);
        }
    };


    const handleModalOpen = () => {
        setShowModal(true);
    };

    return (
        <Base>
            <Container>
                <Container_Head>
                    <Title>Gramary</Title>
                    <Menu>
                        <MenuItem>마이페이지</MenuItem>
                        <MenuItem>공지사항</MenuItem>
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
                    <SmallWhiteBox onClick={handleModalOpen}>
                        <SvgIcon component={CameraAltIcon} fontSize="large" />
                    </SmallWhiteBox>
                </GrayBox>

                <GrayBox>
                    <SmallWhiteBox>
                        <SvgIcon component={ContactsIcon} fontSize="large" />
                    </SmallWhiteBox>
                </GrayBox>
            </Container>

            {/* 모달 */}
            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', maxWidth: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                    <button style={{ marginBottom: '10px' }} onClick={handleGalleryImage} >갤러리에서 가져오기</button>
                    <button style={{ marginBottom: '10px' }} onClick={handleCameraImage}>사진 촬영하기</button>
                </div>
            </div>
            
            )}
        </Base>
    );
}

export default MainPage;
