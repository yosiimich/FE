import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/system";

// 커스텀 스타일이 적용된 Switch
const StyledSwitch = styled(Switch)({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#FFBABB", // 원하는 색상으로 변경
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#ffffff", // 원하는 밝은 색상으로 변경
  },
});

// 부모 컴포넌트에 오른쪽 정렬 스타일 추가A
const StyledFormControlLabel = styled(FormControlLabel)({
  display: "flex",
  justifyContent: "flex-end",
  "& .MuiFormControlLabel-label": { // 라벨 스타일 설정
    fontFamily: "logo", // 원하는 폰트 설정
    fontSize: "10px", // 원하는 폰트 크기 설정
  },
});

export default function StyledSwitchLabels({ isAdminMode, onModeChange }) {
  const handleChange = () => {
    onModeChange(!isAdminMode);
  };

  return (
    <StyledFormControlLabel
      control={<StyledSwitch checked={isAdminMode} onChange={handleChange} />}
      label={isAdminMode ? "관리자 모드" : "사용자 모드"}
    />
  );
}