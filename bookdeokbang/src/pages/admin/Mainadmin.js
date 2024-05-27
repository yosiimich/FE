import React from "react";
import styled from "styled-components";
import theme from '../../styles/commonTheme';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import Table from '@mui/joy/Table';
import { Link } from "react-router-dom"; 
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'; // 아이콘 추가
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined'; // 두 번째 아이콘 추가
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined'; // 세 번째 아이콘 추가

const PageContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;      
    background-color: ${theme.colors.beige};
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TopRightGroup = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-family: Logo;
`;

const Gramary = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 30px;
    font-family: englogo;
`;

const CenterGroup = styled.div`
    display: flex;
    align-items: center; /* 아이콘을 수직 가운데 정렬 */
`;

const StyledButtonGroup = styled(ButtonGroup)`
    background-color: transparent; // 배경색 투명
    border: 1px solid gray; // 테두리 색 회색
    margin-right: 30px; // 우측에 간격 설정
    display: flex;
    flex-direction: column;
    margin: 5px; /* 텍스트 주변의 마진 설정 */
    align-items: center; /* 아이콘을 수직 가운데 정렬 */
    height: 250px; /* 각 표의 높이 설정 */
    font-family: Logo;
`;

const StyledButton = styled(Button)`
    background-color: transparent !important; // 버튼 배경색 투명
    color: black !important; // 버튼 글자색 검정
    display: flex;
    flex-direction: column;
    justify-content: center; /* 내용을 수직 가운데 정렬 */
    align-items: center; /* 내용을 수평 가운데 정렬 */
    font-family: Logo;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Mainadmin = () => {
    return (
        <PageContainer>
            <Gramary>Gramary</Gramary>
            <CenterGroup>
                {/* 첫 번째 표 */}
                <StyledButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                    orientation="vertical"
                >
                    <StyledButton>
                        <IconWrapper>
                            <ManageAccountsOutlinedIcon />
                        </IconWrapper>
                        USER
                    </StyledButton>
                    <StyledButton>
                        사용자 정보 관리
                    </StyledButton>
                </StyledButtonGroup>

                {/* 두 번째 표 */}
                <StyledButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                    orientation="vertical"
                >
                    <StyledButton>
                        <IconWrapper>
                            <FolderCopyOutlinedIcon />
                        </IconWrapper>
                        DATA
                    </StyledButton>
                    <StyledButton>
                    
                        검색 내역 데이터 관리
                    </StyledButton>
                    <StyledButton>
                        학습 노트 내역 관리
                    </StyledButton>
                    <StyledButton>
                          유사 문장 데이터 관리
                    </StyledButton>
                    <StyledButton>
                        저장된 문장 데이터 관리
                    </StyledButton>
                    <StyledButton>
                        단어 데이터 관리
                    </StyledButton>
                </StyledButtonGroup>

                {/* 세 번째 표 */}
                <StyledButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                    orientation="vertical"
                >
                    <StyledButton>
                        <IconWrapper>
                            <DeveloperBoardOutlinedIcon />
                        </IconWrapper>
                        AI
                    </StyledButton>
                    <StyledButton>
                        모델 정보 및 관리
                    </StyledButton>
                </StyledButtonGroup>
            </CenterGroup>

            <TopRightGroup>
                <ButtonGroup
                    color="neutral"
                    orientation="horizontal"
                    size="lg"
                    spacing={0}
                    variant="soft"
                >
                    <Button>관리자 정보 수정</Button>
                    <Button>로그아웃</Button>
                </ButtonGroup>
            </TopRightGroup>
        </PageContainer>
    );
}

export default Mainadmin;
