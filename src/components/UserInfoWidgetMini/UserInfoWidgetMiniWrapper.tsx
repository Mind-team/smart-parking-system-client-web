import { useTypedSelector } from "../../hooks/typedSelector.hook";
import { ThemeProvider } from "styled-components";
import { Props, UserInfoWidgetMini } from "./UserInfoWidgetMini";
import { FC } from "react";

export const UserInfoWidgetMiniWrapper: FC<Props> = (args) => {
  const { config } = useTypedSelector((state) => state.appearanceMode);
  return (
    <ThemeProvider theme={config}>
      <UserInfoWidgetMini {...args} />
    </ThemeProvider>
  );
};
