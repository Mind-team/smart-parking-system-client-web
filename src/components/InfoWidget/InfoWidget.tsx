import * as S from "./InfoWidget.styles";
import { FC } from "react";

export enum GradientBackground {
  RedNBlue = "linear-gradient(229.27deg, #003AFF -20.08%, #FF0000 151.7%)",
  LightPink = "linear-gradient(225.64deg, #EAB496 3.52%, #EF81F8 100%)",
  Purple = "linear-gradient(225.64deg, #886DEC 3.52%, #56439E 100%)",
  YellowNOrange = "linear-gradient(225deg, #FB8383 0%, #FFE480 100%)",
}

export interface Props {
  size: "mini" | "medium";
  content: string;
  gradientBackground?: string;
  onClick?: any;
}

export const InfoWidget: FC<Props> = ({
  size,
  content,
  gradientBackground = GradientBackground.RedNBlue,
  onClick,
}) => {
  if (size === "mini") {
    return (
      <S.MiniWidgetWrapper
        style={{ background: gradientBackground }}
        onClick={onClick}
      >
        <S.SmallContent>{content}</S.SmallContent>
      </S.MiniWidgetWrapper>
    );
  }
  return (
    <S.MediumWidgetWrapper style={{ background: gradientBackground }}>
      <S.MediumContent>{content}</S.MediumContent>
    </S.MediumWidgetWrapper>
  );
};
