import {React, useEffect} from 'react';
import styled from "styled-components";
import theme from '../../styles/commonTheme';
import {Link} from 'react-router-dom';
import { TokenAxios } from "../../apis/CommonAxios";

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

const TransparentBox = styled.div`
    width: 90%;
    height: 150px;
    background-color: rgba(255, 255, 255, 0);
    margin-bottom: 30px;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
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

const Font_Button = styled.h1`
    font-size: 15px;
    font-family: 'Logo';
    margin: 0;
    text-align: left;
`;

const Font_Body = styled.h1`
    font-size: 20px;
    font-family: 'engLogo';
    margin: 5px 3px; /* Add margin between words */
    text-align: center;
`;

const Font_Body2 = styled.h1`
    font-size: 20px;
    font-family: 'Logo';
    margin: 5px;
    text-align: center;
`;
const Font_Body3 = styled.h1`
    font-size: 10px;
    font-family: 'Logo';
    margin: 5px;
    text-align: center;
    justify-content: center; /* Center vertically */
`;

const WordCategory2 = styled.span`
    margin: -8px; /* Adjust margin as needed */
`;



const Analyze = () => {
    const Analzeshow = async (data) => {
        console.log(data);
        try{
            const res = await TokenAxios.get('http://34.22.93/v1/sentences/{sentenceId}/info');
            const result = res.data;
        }
        catch(e) {

        }
    }
    useEffect(()=>{
        Analzeshow("infoId")
         },[]);


    return (
        <Base>
            <Container>
                <Title>
                    <Font_Title>분석 결과</Font_Title>
                </Title>
                <WhiteBox1>
                    <Font_Body></Font_Body>
             
                    <Font_Body3>
                   
                    </Font_Body3>
                </WhiteBox1>
                <TransparentBox>
                    <Font_Body2></Font_Body2>
                </TransparentBox>
                <SaveBox>
                    <Link to="/similar">
                        <Font_Button>유사 문장 추천받기</Font_Button>
                    </Link>
                </SaveBox>
                <SaveBox>
                    <Link to="/studynote">
                        <Font_Button>학습 노트 저장하기</Font_Button>
                    </Link>
                </SaveBox>
                <SaveBox>
                    <Link to="/main">
                        <Font_Button>분석 종료</Font_Button>
                    </Link>
                </SaveBox>
            </Container>
        </Base>
    );
}

export default Analyze;
