import React from "react";
import styled from "styled-components";
import { Input } from "@mui/material"; // 또는 from "@mui/material";

const StyledInput = styled(Input)`
  width: 100%;
  height: 20px; /* 높이 조정 */
  margin-bottom: 5px;
  border-radius: 30px;
  font-size: 10px; /* 폰트 크기 조정 */
`;

export const Main = styled(Input)`
  width: 120px;
  height: 50px;
  border-radius: 10px;
`;

export const Info = styled(Input)`
  width: 120px;
  height: 50px;
`;

export default StyledInput;
