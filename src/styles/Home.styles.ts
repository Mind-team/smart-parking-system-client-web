import styled from "styled-components";
import { useProportions } from "../hooks/windowProportions.hook";

const { wFullHD, hFullHD } = useProportions();

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.additionalBGColor};
  height: 100%;
`;

export const ContentWrapper = styled.div`
  width: calc(1015vw * ${wFullHD});
  height: 100%;
`;

export const TopicWrapper = styled.div`
  margin-top: calc(40vh * ${hFullHD});
`;

export const TopicTitle = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #191919;
  margin-bottom: calc(35vh * ${hFullHD});
`;

export const TopicBody = styled.div`
  box-shadow: 0px 0px 10px rgba(25, 25, 25, 0.15);
  border-radius: 35px;
`;

export const Line = styled.div`
  display: flex;
  padding: 26px 0;
`;

export const LineNumber = styled.p`
  font-weight: 400;
  font-size: 21px;
  color: #61A0EA;
  padding: 0 30px;
`;

export const LineContent = styled.p`
  font-weight: 400;
  font-size: 21px;
`;

export const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoLineContent = styled(LineContent)`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 16px;
`;

export const PriceLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(30vh * ${hFullHD});
`;

export const Price = styled.p`
  justify-self: center;
  font-weight: 500;
  font-size: 30px;
`;

export const Cheque = styled.p`
  margin-top: 8px;
  margin-bottom: calc(30vh * ${hFullHD});
  color: #61A0EA;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
`;

