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

function createData(No, name, ID) {
    return { No, name, ID };
}

const rows = [
    createData(1, 'A', 'A123'),
    createData(2, 'B', 'B456'),
    createData(3, 'C', 'C789'),
];

const handleNameClick = (ID) => {
    // 사용자에 대한 작업 수행
    console.log(`Clicked user ID: ${ID}`);
    // 예시: 사용자 프로필 표시 또는 수정
};

const Infoadmin = () => {
    return (
        <PageContainer>
            <TableContainer>
                <StyledTable>
                    <thead>
                        <tr>
                            <StyledTableCell>No</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>ID</StyledTableCell>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <StyledTableCell>{row.No}</StyledTableCell>
                                <StyledTableCell>
                                    <a href="#" onClick={() => handleNameClick(row.ID)}>
                                        {row.name}
                                    </a>
                                </StyledTableCell>
                                <StyledTableCell>{row.ID}</StyledTableCell>
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
                        size="lg">USER</MenuButton>
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
                    >DATA</MenuButton>
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
        </PageContainer>
    );
}

export default Infoadmin;
