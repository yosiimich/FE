
import {React, useState} from "react";
import styled from "styled-components";
import "../../assets/fonts/font.css";

// image
import kakao from '../../assets/images/kakao.png'
import backgroundimg from '../../assets/images/background.png';
import logo from '../../assets/images/logo.png';

// icon
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

// etc
import box from '../../components/atoms/input'
import korfonts from '../../assets/fonts/BMHANNAAir_ttf.ttf';
import engfonts from '../../assets/fonts/Schoolbell-Regular.ttf';
import theme from '../../styles/commonTheme'
import { Container } from "@mui/material";
import Button from '../../components/atoms/button';
import { useNavigate } from "react-router-dom";
import Login_Input from "../../components/atoms/input";
import StyledSwitchLabels from '../../components/atoms/SwitchLabel';


//axios
import { DefaultAxios } from "../../apis/CommonAxios";
import { useForm} from "react-hook-form"
import Swal from "sweetalert2";




const Text = styled.h1`
  font-size: 50px; /* 적절한 폰트 사이즈 설정 */
  font-family: 'engLogo'; /* 폰트 패밀리 설정 */
  margin: 0;
  text-align: center;
  
`;


const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.beige}; /* 배경 색상을 베이지로 설정 */

`
const Body = styled.div`
  height: 100%;
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  flex-direction: column;
  gap: 30px; /* 간격 설정 */
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin_bottom: 30%;
`;

const Title_Bottom = styled.div`
  margin-left: auto; // 자동으로 왼쪽 여백을 최대한 확보하여 오른쪽으로 이동
  text-align: right;
`;

const Text2 = styled.h1`
  font-size: 16px; /* 적절한 폰트 사이즈 설정 */
  font-family: 'Logo'; /* 폰트 패밀리 설정 */
  margin: 0;
  text-align: right;
  margin-bottom: 30px;
`;
const Text3 = styled.h1`
  font-size: 10px; /* 적절한 폰트 사이즈 설정 */
  font-family: 'Logo'; /* 폰트 패밀리 설정 */
  margin: 0;
  text-align: right;
  
`;

const TextContatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:  flex-start; 
  align-items: flex-end;
  text-align: right;
  margin-bottom: 5px; 
  margin-left: auto;
`
const Logo = styled.img`
  float: right;
  width: 20%;
  height:auto;
`

const LoginContainer = styled.div`

`
const Login = () => {
  const {register, handleSubmit} = useForm();
  const [mode, setMode] = useState('user');
  const handleModeChange = (isAdmin) => {
    setMode(isAdmin? "admin": "user");
  }
  const handleButtonClidk = () => {
    console.log("Clicked");
  }
  const handleSignUp = () => {
    navigate("/signUp");
  }

  const navigate = useNavigate();

  const signIn = async (data) => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  
    try {
      if (mode === "user") {
        const res = await DefaultAxios.post(`${API_BASE_URL}/v1/auth/local/login`, data);
        console.log(res.data.result.data);
        const token = res.data.result.accessToken;
        console.log(token);
        console.log("success")
        localStorage.setItem("accessToken", token);
        navigate("/main");
      } else {
        const res = await DefaultAxios.post(`${API_BASE_URL}/v1/admin/auth/local/login`, data);
        const tokenData = res.data.result.data;
        console.log(data);
        localStorage.setItem("accessToken", tokenData.accessToken);
        localStorage.setItem("role", tokenData.role);
        navigate("/admin");
      }
    } catch (e) {
      Swal.fire({
        icon: "warning",
        title: "로그인에 실패했습니다.",
        showConfirmButton: true,
        confirmButtonColor: "black",
        confirmButtonText: "확인",
      });
      console.log(e);
    }
  };
  

  return (
    <MainContainer>
        <Body>
        <form 
            onSubmit={handleSubmit((data) => {
              signIn(data)
            })} >
          <Title>
          <TextContatiner></TextContatiner>
            <Text> Gramary</Text>
            <Title_Bottom>
              <Text2>내 손 안의 영문법</Text2>
            </Title_Bottom>
          </Title>  
          <TextContatiner>
          <Logo src={logo}/>
          </TextContatiner>
          <TextContatiner>
            <Text3>아이디/비밀번호 찾기</Text3>

            <StyledSwitchLabels
            isAdminMode = {mode === "admin"}
            onModeChange={handleModeChange}/>
          </TextContatiner>
          <LoginContainer>

        
          <Login_Input
            id = "email"
            label = "이메일"
            placeholder="email을 입력하세요."
            {...register("email")}
            
          />
          
          <Login_Input
            id = "password"
            label = "비밀번호"
            placeholder="password를 입력하세요."
            {...register("password")}
       
          />


          </LoginContainer>
          <Button type = "submit" onClick={handleButtonClidk()}>
            로그인
          </Button>
          <Button variant="text" onClick={handleSignUp}>
            회원가입
          </Button>
        </form>
        </Body>
    </MainContainer>
  );
};

export default Login;
