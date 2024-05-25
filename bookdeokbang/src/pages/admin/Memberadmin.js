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

const TableContainer = styled.div`
    width: 80%;
    margin: 20px;
    overflow-x: auto;
`;

const StyledTable = styled(Table)`
    width: 100%;
    border-collapse: collapse;
`;

const StyledTableCell = styled.td`

    padding: 8px;
    border: 1px solid #dddddd;
    text-align: left;
    font-size: 14px;
`;

function createData(...data) {
    return data;
}

const rows = [
    createData('회원 No', ''),
    createData('ID', ''),
    createData('회원 이름', ''),
    createData('닉네임', ''),
    createData('회원 이메일', ''),
    createData('생년월일', ''),
    createData('문의 내역', '문의 내역 바로가기'),
    createData('검색 내역', '검색 내역 바로가기'),
    createData('저장 내역', '저장 내역 바로가기'),
    createData('학습 노트', '학습 노트 바로가기'),
];


const handleNameClick = (ID) => {
    // 사용자에 대한 작업 수행
    console.log(`Clicked user ID: ${ID}`);
    // 예시: 사용자 프로필 표시 또는 수정
};

const handleShortcutClick = (category) => {
    console.log(`Clicked ${category} 바로가기`);
    // 예시: 해당 카테고리에 대한 작업 수행
};

const handleDeleteClick = () => {
    console.log('삭제하기 버튼이 클릭되었습니다.');
    // 예시: 특정 동작 실행
};

const Memberadmin= () => {
    return (
        <PageContainer>
            <TableContainer>
                <StyledTable>
                    <thead>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <StyledTableCell>{row[0]}</StyledTableCell>
                                <StyledTableCell>
                                    <a href="#" onClick={() => handleNameClick(row[1])}>
                                        {row[1]}
                                    </a>
                                </StyledTableCell>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </TableContainer>
            <Gramary>Gramary</Gramary>
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
            <DropdownGroup>
                <Dropdown>
                    <MenuButton
                        variant="plain"
                        color="neutral"
                        size="lg">사용자</MenuButton>
                    <Menu
                        variant="plain"
                    >
                        <MenuItem
                            color="neutral">사용자 정보 관리</MenuItem>
                    </Menu>
                </Dropdown>
                <Dropdown>
                    <MenuButton
                        variant="plain"
                        color="neutral"
                    >데이터</MenuButton>
                    <Menu>
                        <MenuItem
                            color="neutral">검색 내역 데이터 관리</MenuItem>
                        <MenuItem
                            color="neutral">학습 노트 내역 관리</MenuItem>
                        <MenuItem
                            color="neutral">유사 문장 데이터 관리</MenuItem>
                        <MenuItem
                            color="neutral">저장된 문장 데이터 관리</MenuItem>
                        <MenuItem
                            color="neutral">단어 데이터 관리</MenuItem>
                    </Menu>
                </Dropdown>
                <Dropdown>
                    <MenuButton
                        variant="plain"
                        color="neutral"
                        size="lg">AI</MenuButton>
                    <Menu
                        variant="plain"
                    >
                        <MenuItem
                            color="neutral">모델 정보 및 관리</MenuItem>
                    </Menu>
                </Dropdown>
            </DropdownGroup>
            {/* 삭제하기 버튼 */}
            <Button variant="contained" color="secondary" onClick={handleDeleteClick}>삭제하기</Button>
        </PageContainer>
    );
}

export default Memberadmin;
