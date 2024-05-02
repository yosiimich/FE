import React from "react";
import styled from "styled-components";
import "../../assets/fonts/font.css";

// image
import kakao from '../../assets/images/kakao.png'
import backgroundimg from '../../assets/images/background.png';
// icon
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

// etc
import box from '../../components/atoms/input'
import korfonts from '../../assets/fonts/BMHANNAAir_ttf.ttf';
import engfonts from '../../assets/fonts/Schoolbell-Regular.ttf';
import theme from '../../styles/commonTheme'


const Body1 = styled.div`
  width: 80%; /* 반응형으로 변경 */
  max-width: 600px; /* 적절한 최대 너비 설정 */
  display: flex;
  flex-direction: column;
  gap: 20px; /* 간격 설정 */
  margin-left: 30%;
  margin-right: 30%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Title_Bottom = styled.div`
  margin-left: auto; // 자동으로 왼쪽 여백을 최대한 확보하여 오른쪽으로 이동
  text-align: right;
`;


const Text = styled.h1`
  font-size: 30px; /* 적절한 폰트 사이즈 설정 */
  font-family: 'engLogo'; /* 폰트 패밀리 설정 */
  margin: 0;
  text-align: center;
`;

const Text2 = styled.h1`
  font-size: 5px; /* 적절한 폰트 사이즈 설정 */
  font-family: 'Logo'; /* 폰트 패밀리 설정 */
  margin: 0;
  text-align: right;
`;
const BackgroundContainer = styled.div`
  background-image: url(${backgroundimg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

const Page1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.beige};
`;

const Login = () => {
  return (
    
      <Page1>
        <Body1>
          <Title>
            <Text> Gramary</Text>
            <Title_Bottom>
              <Text2>내 손 안의 영문법</Text2>
              <backgroundimg></backgroundimg>
            </Title_Bottom>

          </Title>  
        </Body1>
      </Page1>
  
  );
};
export default Login;