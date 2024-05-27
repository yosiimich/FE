import React, { useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/commonTheme';
import { Link } from 'react-router-dom';
import { TokenAxios } from '../../apis/CommonAxios';
import { Button } from '@mui/material';

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

const WhiteBox1 = styled.div`
    width: 100%;
    height: 200px;
    background-color: #fff;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.black};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Center vertically */
`;

const SaveBox = styled.div`
    width: 100%;
    height: 50px;
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.black};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`;

const Title = styled.div`
    margin-bottom: 1vh;
`;

const Font_Title = styled.h1`
    font-size: 20px;
    font-family: 'Logo';
    margin: auto;
    text-align: center;
`;

const CustomButton = styled(Button)`
    background-color: #00000;
    color: #000000;
    &:hover {
        background-color: #ffd465;
    }
    width: 150px;
    height: 50px;
    font-size: 15px;
    align-self: center;
`;

const Font_Body2 = styled.h1`
    font-size: 20px;
    font-family: 'Logo';
    margin: 5px;
    text-align: center;
`;

const Analyze = () => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const fetchData = async (sentenceId) => {
        console.log(sentenceId);
        try {
            const res = await TokenAxios.get(`${API_BASE_URL}/v1/sentences/123/info`); // "123" 대신에 실제 문장의 ID를 사용
            const data= res.data.result;
            console.log(data)
        } 
        catch (error) {
            console.error('Error fetching sentence info:', error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Base>
            <Container>
                <Title>
                    <Font_Title>분석 결과</Font_Title>
                </Title>
                <WhiteBox1>
                    {/* 여기에 결과 표시 */}
                </WhiteBox1>
                <SaveBox>
                    <Link to="/similar">
                        <CustomButton>유사 문장 추천받기</CustomButton>
                    </Link>
                </SaveBox>
                <SaveBox>
                    <Link to="/studynote">
                        <CustomButton>학습 노트 저장하기</CustomButton>
                    </Link>
                </SaveBox>
                <SaveBox>
                    <Link to="/main">
                        <CustomButton>분석 종료</CustomButton>
                    </Link>
                </SaveBox>
            </Container>
        </Base>
    );
};

export default Analyze;
