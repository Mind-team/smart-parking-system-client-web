import styled from "styled-components";

// TODO: box shadow не работает
export const MiniWidgetWrapper = styled.div`
  cursor: pointer;
  width: 220px;
  height: 220px;
  border-radius: 29px;
  box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MediumWidgetWrapper = styled(MiniWidgetWrapper)`
  height: 220px;
  width: 440px;
`;

export const SmallContent = styled.span`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  height: 24px;
  width: 67px;
`;

export const MediumContent = styled(SmallContent)`
  height: 24px;
  width: 99px;
`;
