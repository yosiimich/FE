import React from "react";
import styled from "styled-components";


const Base = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImgContainer = styled.div`
    max-width: 80%;
    padding: 20px;
    text-align: center;
`;

const Ocr = ({ locaion }) => {
    // URL에서 이미지 URL을 가져옵니다.

    const urlParams = new URLSearchParams(locaion.search);
    const imageUrl = urlParams.get('url');
    

    // imageUrl가 없으면 에러 메시지를 표시합니다.
    if (!imageUrl) {
        return (
            <Base>
                <ImgContainer>
                    <p>이미지를 찾을 수 없습니다.</p>
                </ImgContainer>
            </Base>
        );
    }

    return (
        <Base>
            <ImgContainer>
                <img src={imageUrl} alt="Selected" />
            </ImgContainer>
        </Base>
    );
}

export default Ocr;
