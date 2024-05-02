import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/commonTheme';
import { Link } from 'react-router-dom';


const Base = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
`;

const Container = styled.div`
    width: 100%; /* 변경 */
    max-width: 1200px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* 변경 */
`;

const GrayBox = styled.div`
    width: 100%;
    height: 80px;
    background-color: #F0F0F0; /* 연한 그레이색 */
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 15px; /* 둥근 모서리 추가 */
    box-sizing: border-box; /* 테두리를 포함한 전체 크기를 유지하도록 설정 */
`;

const SmallWhiteBox = styled(Link)`
    width: 60px;
    height: 60px;
    background-color: #fff;
    margin: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const SmallGrayBox = styled.div`
    width: 100%;
    height: 10px;
    background-color: #F0F0F0; /* 연한 그레이색 */
    margin-bottom: 20px;
    border-radius: 8px; /* 둥근 모서리 추가 */
    box-sizing: border-box; /* 테두리를 포함한 전체 크기를 유지하도록 설정 */
`;

const Box = styled.div`
    width: 100%; /* 최대 너비 설정 */
    height: 40px; /* 고정 높이값 */
    background-color: #fff;
    margin-bottom: 0px; /* 틈을 주기 위한 마진 */
    box-sizing: border-box; /* 테두리를 포함한 전체 크기를 유지하도록 설정 */
    display: flex;
    align-items: center; /* 텍스트를 수직 정렬하기 위해 추가 */
    justify-content: flex-start; /* 텍스트를 왼쪽으로 정렬하기 위해 수정 */
    font-size: 16px; /* 고정된 글꼴 크기 설정 */
`;
const Title=styled.div`
    margin-bottom:1vh;
`;
const Body = styled.div`
    width: 100%; /* 최대 너비 설정 */
`;
const Bottom=styled.div`
    background-color: #fff;
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
    font-size: 13px;
    font-family: 'Logo';
    text-align: left;
`;


const MyPage = () => {
    return (
        <Base>
            <Container>
                <Title>
                    <Font_Title>마이페이지</Font_Title>
                </Title>
                <GrayBox>
                    <SmallWhiteBox to="/profile">
                        {/* 프로필 페이지로 이동 */}
                    </SmallWhiteBox>
                </GrayBox>
                <Box>
                    <Font_Body>나의 질문</Font_Body>
                </Box>
                <Box>
                     <Link to="/search">
                         <Font_Content>최근 검색 내역</Font_Content>
                    </Link>
                </Box>

                <Box>
                    <Font_Body>프로필 수정</Font_Body>
                </Box>
                <Box>
                    <Link to="/profile">
                        <Font_Content>회원 정보 수정</Font_Content>
                    </Link>
                </Box>
                <Box>
                    <Link to="/withdraw">
                        <Font_Content>서비스 탈퇴</Font_Content>
                    </Link>
                </Box>
                <Box>
                    <Link to="/question">
                        <Font_Body>자주 묻는 질문</Font_Body>
                    </Link>
                </Box>
                <Box>
                    <Link to="/inquiry">
                        <Font_Body>1:1 문의 내역</Font_Body>
                    </Link>
                </Box>
                <Box>
                    <Link to="/info">
                        <Font_Body>공지사항</Font_Body>
                    </Link>
                </Box>
                <Bottom/>
            </Container>
        </Base>
    );
}


export default MyPage;
