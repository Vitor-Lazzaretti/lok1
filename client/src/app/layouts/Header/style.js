import React from "react";
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: #222;
  color: #FFF;
  padding: 0px 20px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  flex: 1;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
