import React, { useEffect } from 'react';
import styled from "styled-components";
import theme from '../../styles/commonTheme';
import { Link } from 'react-router-dom';
import { TokenAxios } from "../../apis/CommonAxios";
import { Button } from "@mui/material";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';

const MySwal = withReactContent(Swal);

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
    height: 150px;
    background-color: #fff;
    margin-bottom: 15px;
    border-radius: 8px; /* 둥근 모서리 추가 */
    border: 1px solid ${theme.colors.black}; /* 테두리 추가 */
    box-sizing: border-box; /* 테두리를 포함한 전체 크기를 유지하도록 설정 */
`;

const Memo = styled.textarea`
    width: 100%;
    height: 300px;
    font-family: 'Logo';
    background-color: #fff;
    margin-bottom: 50px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.black};
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
    resize: vertical;
    &::placeholder { /* 힌트 텍스트 스타일링 */
        color: #a9a9a9;
    }
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

const CustomButton = styled(Button)`
    background-color: transparent;
    margin-top: -20px;
    color: #000000;
    &:hover {
        background-color: transparent;
    }
    width: 150px;
    height: 50px;
    font-size: 20px;
    align-self: center;
`;

const Title = styled.div`
    margin-bottom: 2vh;
`;

const Font_Title = styled.h1`
    font-size: 30px;
    font-family: 'Logo';
    margin: 0;
    text-align: left;
`;

const Font_Body = styled.h1`
    font-size: 16px;
    font-family: 'engLogo';
    margin: 5;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const StudyDetail = () => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const { contentAndSentenceId } = useParams();
    const [sentence, sentenceId] = contentAndSentenceId.split('&');

    const StudytNotewrite = async () => {
        try {
            const res = await TokenAxios.post(`${API_BASE_URL}/v1/notes/memo`);
            const data = res.data.result;
            console.log(data);
        } catch (e) {
            console.log("fail");
        }
    }

    const StudyNoteAll = async () => {
        try {
            const res = await TokenAxios.get(`${API_BASE_URL}/v1/notes/all`);
            const response = res.data.result;
        } catch (e) {
            console.log(e);
        }
    }
    
    const SaveSutdyNote = async() => {
        try {
            const [res1, res2] = await axios.all([
                TokenAxios.post(`${API_BASE_URL}/v1/sentences/note`, {},  {
                    params: {
                        sentenceId: sentenceId
                    },
                    responseType: 'json'
                }),
                TokenAxios.post(`${API_BASE_URL}/v1/notes/memo`, {
                    sentenceId: sentenceId,
                    title: '123', // 여기서 title 값을 설정
                    content: '2345' // 여기서 content 값을 설정
                },  {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    responseType: 'json'
                })
            ]);
            MySwal.fire({
                title: '저장되었습니다',
                icon: 'success',
                confirmButtonText: '확인'
            });
        }
        catch(e){
            console.error(e);
        }
    }

    useEffect(() => {
        StudyNoteAll();
    }, []);

    return (
        <Base>
            <Container>
                <Title>
                    <Font_Title>학습 노트</Font_Title>
                </Title>
                <WhiteBox1>
                    <Font_Body>{sentence}</Font_Body>
                </WhiteBox1>
                <Memo placeholder="메모를 입력하세요" />
                <CustomButton onClick={SaveSutdyNote}>
                    저장하기
                </CustomButton>
                <Link to="/main">
                    <CustomButton>
                        학습종료
                    </CustomButton>
                </Link>
            </Container>
        </Base>
    );
}

export default StudyDetail;
