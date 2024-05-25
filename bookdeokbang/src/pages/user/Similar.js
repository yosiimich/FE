import React from "react";
import styled from "styled-components";
import theme from '../../styles/commonTheme';
import Button_main from "../../components/atoms/button";
import { Link } from 'react-router-dom';

const Base = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.beige};
`;

const Container = styled.div`
    width: 100%; /* 변경 */
    max-width: 1200px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* 변경 */
`;


const WhiteBox1 = styled.div`
    width: 100%;
    height: 150px;
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 8px; /* 둥근 모서리 추가 */
    border: 1px solid ${theme.colors.black}; /* 테두리 추가 */
    box-sizing: border-box; /* 테두리를 포함한 전체 크기를 유지하도록 설정 */
`;

const SaveBox = styled.div`
    width: 100%; /* 최대 너비 설정 */
    height: 50px; /* 고정 높이값 */
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 10px; /* 둥근 모서리 추가 */
    border: 1px solid ${theme.colors.black}; /* 테두리 추가 */
    box-sizing: border-box; /* 테두리를 포함한 전체 크기를 유지하도록 설정 */
    display: flex;
    align-items: center; /* 텍스트를 수직 정렬하기 위해 추가 */
    justify-content: center; /* 텍스트를 수평 정렬하기 위해 추가 */
    font-size: 16px; /* 고정된 글꼴 크기 설정 */

`;
const Title = styled.div`
    margin-bottom: 2vh;
`;


const Font_Title = styled.h1`
    font-size: 20px;
    font-family: 'Logo';
    margin: 0;
    text-align: left;
`;
const Font_Button = styled.h1`
    font-size: 15px;
    font-family: 'Logo';
    margin: 0;
    text-align: left;
`;
const Font_Body = styled.h1`
    font-size: 20px;
    font-family: 'engLogo';
    margin: 5;
    text-align: center;
    display: flex;
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    height: 100%; /* 부모 요소의 높이를 따라가도록 설정 */
`;
const Body = styled.div`
    width: 100%; /* 최대 너비 설정 */
`;

const Similar = () => {
    return (
        <Base>
            <Container>
                <Title>
                    <Font_Title>AI가 추천하는 유사문장</Font_Title>
                </Title>
                    
                <WhiteBox1>
                    <Font_Body>I finished reading the book.</Font_Body>
                </WhiteBox1>
                <WhiteBox1>
                    <Font_Body>She loves playing baseball with her family.</Font_Body>
                </WhiteBox1>
                <WhiteBox1>
                    <Font_Body>I enjoy listening to music</Font_Body>
                </WhiteBox1>

                <Body>
                    <SaveBox>
                        <Link to="/studynote">
                            <Font_Button>추천문장 저장하기</Font_Button>
                        </Link>
                    </SaveBox>
                    <SaveBox>
                        <Link to="/main">
                            <Font_Button>학습 종료</Font_Button>
                        </Link>
                    </SaveBox>
                </Body>
            </Container>
        </Base>
    );
}

export default Similar;


