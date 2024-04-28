import React from "react";
import styled from "styled-components";
import theme from '../../styles/commonTheme';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

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
    border: 1px solid ${theme.colors.black};
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
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    

`;

const MenuItem = styled.h2`
    font-size: 9px;
    font-family: 'Logo';
    margin: 0;
    text-align: right;
    width: fit-content;
    padding: 5px;
    margin-left: auto;
`;

const Title = styled.h1`
    font-size: 30px;
    font-family: 'engLogo';
    margin: 0;
    text-align: left;
`;

const Info = styled.h1`
    font-size: 24px;
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
                    <Info>공지사항</Info>
                </WhiteBox1> 



                <Spacer>
                    <Voca>Today's Vocabulary</Voca>
                </Spacer>
                <WhiteBox2 />

                <GrayBox>
                    <SmallWhiteBox>
                        
                    </SmallWhiteBox>
                </GrayBox>

                <GrayBox>

                    <SmallWhiteBox>
                        {/* 또 다른 SmallWhiteBox */}
                    </SmallWhiteBox>

                </GrayBox>
            </Container>
        </Base>
    );
}

export default MainPage;
