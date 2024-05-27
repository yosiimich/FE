import React, { useState, useEffect } from "react";
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

const DropdownGroup = styled.div`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
    margin-top: 10px; /* 각 Dropdown 사이의 간격을 조절합니다. */
`;

const SearchContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const SearchInput = styled.input`
    padding: 8px;
    border: 1px solid ${theme.colors.gray};
    border-radius: 4px;
`;

const SearchButton = styled(Button)`
    margin-top: 10px;
`;

const ExampleText = styled.span`
    margin-top: 10px;
    font-size: 14px;
    color: ${theme.colors.black};
`;

const Searchadmin = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // 여기에 검색 처리 로직을 추가하세요
        console.log('검색어:', searchTerm);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <PageContainer>
           <Link to="/mainadmin">
                <Gramary>Gramary</Gramary>
            </Link>
        
            <TopRightGroup>
                <ButtonGroup
                    color="neutral"
                    orientation="horizontal"
                    size="lg"
                    spacing={0}
                    variant="soft"
                >
                    <Link to="/modifyadmin">
                        <Button>관리자 정보 수정</Button>
                    </Link>
                    <Button>로그아웃</Button>
                </ButtonGroup>
            </TopRightGroup>
            <DropdownGroup>
    <Dropdown>
        <MenuButton
            variant="plain"
            color="neutral"
            size="lg">USER</MenuButton>
        <Menu
            variant="plain"
        >
            <Link to="/infoadmin">
                <MenuItem color="neutral">사용자 정보 관리</MenuItem> 
            </Link>
        </Menu>
    </Dropdown>
    <Dropdown>
        <MenuButton
            variant="plain"
            color="neutral"
        >DATA</MenuButton>
        <Menu>
            <Link to="/searchadmin">
                <MenuItem color="neutral">검색 내역 데이터 관리</MenuItem> 
            </Link>
            <Link to="/studynoteadmin">
                <MenuItem color="neutral">학습 노트 내역 관리</MenuItem> 
            </Link>
            <Link to="/similaradmin">
                <MenuItem color="neutral">유사 문장 데이터 관리</MenuItem> 
            </Link>
            <Link to="/saveadmin">
                <MenuItem color="neutral">저장된 문장 데이터 관리</MenuItem> 
            </Link>
            <Link to="/wordadmin">
                <MenuItem color="neutral">단어 데이터 관리</MenuItem>
            </Link>
        </Menu>
    </Dropdown>
    <Dropdown>
        <MenuButton
            variant="plain"
            color="neutral"
            size="lg">AI
        </MenuButton>
        <Menu
            variant="plain"
        >
            <Link to="/aiadmin">
                <MenuItem color="neutral">모델 정보 및 관리</MenuItem>
            </Link>
        </Menu>
    </Dropdown>
            </DropdownGroup>
            <SearchContainer>
                <SearchInput 
                    type="text" 
                    placeholder="회원명을 입력하세요" 
                    value={searchTerm} 
                    onChange={handleInputChange} 
                />
                <SearchButton onClick={handleSearch}>검색</SearchButton>
                <ExampleText>예시: 김가천, 성+이름을 붙여서 검색</ExampleText>
            </SearchContainer>
        </PageContainer>
    );
}

export default Searchadmin;
