import {React, useState} from "react";
import styled from "styled-components";
import theme from '../../styles/commonTheme';
import Input from '@mui/joy/Input';

import Button from '../../components/atoms/button';
import Login_Input from "../../components/atoms/input";


import { DefaultAxios } from "../../apis/CommonAxios";
import { useForm} from "react-hook-form"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;      
    background-color: ${theme.colors.beige};
    justify-content: center;
    align-items: center;
    flex-direction: column; /* 세로 중앙 정렬 추가 */
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 200px; /* 아래 여백 추가 */
`;

const Title = styled.h1`
  font-size: 88px;
  font-family: 'engLogo';
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-family: 'Logo'; 
  margin: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center; /* 입력 상자 가운데 정렬 추가 */
`;

const Label = styled.label`
  font-size: 24px;
  font-family: 'engLogo'; 
  margin-right: 10px;
`;

const Loginadmin = () => {
  const {register, handleSubmit} = useForm();
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  //api 
  const signIn = async (data) => {
    try {
      if (role === "user") {
        const res = await DefaultAxios.post(`/v1/auth/local/login`, data);
        console.log(res.data.result.data);
        const token = res.data.result.data.accessToken;
        console.log(token);
        localStorage.setItem("accessToken", token);
        navigate("/");
      } else {
        const res = await DefaultAxios.post("/v1/admin/auth/local/login", data);
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
    <PageContainer>
      <Content>
      <form 
            onSubmit={handleSubmit((data) => {
              signIn(data)
            })} >
        <Title>Gramary</Title>
        <Subtitle>관리자 로그인 페이지</Subtitle>
        <InputContainer>
          <Login_Input
              id = "email"
              label = "이메일"
              placeholder="email을 입력하세요."
              {...register("email")}
              
            />
          
        </InputContainer>
        <InputContainer>

        <Login_Input
            id = "password"
            label = "비밀번호"
            placeholder="password를 입력하세요."
            {...register("password")}
       
          />
        </InputContainer>
        <Button color="warning" size="lg" onClick={() => {}}>Submit</Button> {/* 하나의 버튼 추가 */}
        </form>
      </Content>
    </PageContainer>
  );
}

export default Loginadmin;
