import React from "react";
import styled from "styled-components";
import theme from '../../styles/commonTheme';

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

const Memo = styled.div`
    width: 100%;
    height: 300px;
    background-color: #fff;
    margin-bottom: 50px; /* 틈을 주기 위한 마진 조정 */
    border-radius: 8px; /* 둥근 모서리 추가 */
    border: 1px solid ${theme.colors.black}; /* 테두리 추가 */
    box-sizing: border-box; /* 테두리를 포함한 전체 크기를 유지하도록 설정 */
`;

const SaveBox = styled.div`
    width: 100%; /* 최대 너비 설정 */
    height: 50px; /* 고정 높이값 */
    background-color: #fff;
    margin-bottom: 15px; /* 틈을 주기 위한 마진 */
    border-radius: 8px; /* 둥근 모서리 추가 */
    border: 1px solid ${theme.colors.black}; /* 테두리 추가 */
    box-sizing: border-box; /* 테두리를 포함한 전체 크기를 유지하도록 설정 */
    display: flex;
    align-items: center; /* 텍스트를 수직 정렬하기 위해 추가 */
    justify-content: center; /* 텍스트를 수평 정렬하기 위해 추가 */
    font-size: 16px; /* 고정된 글꼴 크기 설정 */
`;

const Title=styled.div`
    margin-bottom:2vh;
`;

const Font_Title = styled.h1`
    font-size: 30px;
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

const Body = styled.div`
    width: 100%; /* 최대 너비 설정 */
`;

const StudyNote = () => {
    return (
        <Base>
            <Container>
                <Title>
                    <Font_Title>학습 노트</Font_Title>
                </Title>
                <WhiteBox1 />
                <Memo />
                <SaveBox>
                    <Font_Button>학습종료</Font_Button>
                </SaveBox>
            </Container>
        </Base>
    );
}

export default StudyNote;


