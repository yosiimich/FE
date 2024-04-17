import React,{useState} from "react";
import styled from "styled-components";

//image
import kakao from '../../assets/images/kakao.png'
import backgroundimg from '../../assets/images/background.png';
//icon
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

//etc
import box from '../../components/atoms/input'
import korfonts from '../../assets/fonts/BMHANNAAir_ttf.ttf';
import engfonts from '../../assets/fonts/Schoolbell-Regular.ttf';
import theme from '../../styles/commonTheme'

const Page1 = styled.div`
width: 1920px;
height: 1080px;
display: flex;
justify-content: center; // 오타 수정: justify-contents -> justify-content
align-items: center;
background-image: url(${backgroundimg});
background-color: ${theme.colors.beige}; // 괄호 닫기 추가
background-size: cover;
    
`;





const Login =()=>{



return (
   <Page1>
        <p>22111</p>
    </Page1>
)



};

export default Login;