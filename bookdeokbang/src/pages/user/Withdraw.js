import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/commonTheme';
import Button from '@mui/joy/Button';

const Base = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding-bottom: 120px; /* 위쪽 여백 설정 */
    align-items: center;
    background-color: ${theme.colors.white};
`;
const Container = styled.div`
    width: 100%;
    margin-top: 0px;
    max-width: 1200px;
    padding: 20px;
    display: flex;
    flex-direction: column; /* 세로 방향으로 정렬 */
    justify-content: center; /* 수직 가운데 정렬 */
    align-items: center; /* 수평 가운데 정렬 */
`;

const ProfileBox = styled.div`
    width: 200px;
    height: 200px;
    background-color: #F0F0F0;
    margin-top: 20px; /* 위쪽 여백 */
    margin-bottom: 20px; /* 아래쪽 여백 */
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.black}; /* 테두리 추가 */
`;


const InputBox = styled(Button)`
    width: 100%; /* 최대 너비 설정 */
    height: 50px; /* 고정 높이값 */
    background-color: #111;
    margin-bottom: 20px; /* 틈을 주기 위한 마진 */
    border-radius: 8px; /* 둥근 모서리 추가 */
    box-sizing: border-box; /* 테두리를 포함한 전체 크기를 유지하도록 설정 */
    align-items: center; /* 텍스트를 수직 정렬하기 위해 추가 */
    justify-content: center; /* 텍스트를 수평 정렬하기 위해 추가 */
    &:hover {
        background-color: #333; /* 호버 시 배경색 변경 */
    }
`;


const Title=styled.div`
    margin-bottom:1vh;
    margin-top: 30px;
`;
const Body = styled.div`
    width: 100%; /* 최대 너비 설정 */
`;
const TransparentBox = styled.div`
    width: 100%;
    height: 250px;
    background-color: rgba(255, 255, 255, 0); /* 투명한 흰색 박스 */
    margin-bottom: 30px;
    box-sizing: border-box; /* 테두리를 포함한 전체 크기를 유지하도록 설정 */
`;
const Bottom=styled.div`
    height: 100px; /* 고정 높이값 */
    width: 100%; /* 최대 너비 설정 */
`;

const Font_Title = styled.h1`
    font-size: 25px;
    font-family: 'Logo';
    margin: auto; /* 수평 가운데 정렬 */
    text-align:center;
`;

const Font_Body = styled.h1`
    font-size: 20px;
    font-family: 'Logo';
    text-align: left;
`;
const Font_Content = styled.h1`
    font-size: 18px;
    font-family: 'Logo';
    text-align: left;
    color:white;
`;


const Withdraw = () => {
    return (
    <Base>
        <Container>
            <Title>
                <Font_Title>탈퇴하시겠습니까?</Font_Title>
            </Title>
            <ProfileBox>
            </ProfileBox>
            <TransparentBox /> {/* 투명한 박스 */}
            <Bottom>

            <InputBox>
                <Font_Content>Gramary 탈퇴하기</Font_Content>
            </InputBox>

        </Bottom>
        </Container>
    </Base>
    );
}


export default Withdraw;
