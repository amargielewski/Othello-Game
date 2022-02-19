import { PropsWithChildren } from "react";

import { Navbar } from "../../components/Navbar/Navbar";
import { StyledContentContainer, StyledWrapper } from "./MainLayout.styled";

type MainLayoutProps = PropsWithChildren<{}>;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledWrapper>
      <Navbar />
      <StyledContentContainer>{children}</StyledContentContainer>
      {/* Footer Here */}
    </StyledWrapper>
  );
};
