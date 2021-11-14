import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 114px;
  width: 928px;
  background-color: #ffffff;
  border-radius: 29px;
  box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.08);
  font-size: 36px;
  color: #000000;
  font-weight: 400;
  align-items: center;
  transition: 0.3s;
  &:hover {
    &:nth-child(n) {
      cursor: pointer;
      color: #ffffff;
    }
    background-color: #886dec;
  }
`;

export const Title = styled.div`
  margin-left: 40px;
`;

export const Date = styled.div`
  margin-right: 40px;
`;
