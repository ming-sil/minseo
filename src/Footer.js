import styled from "styled-components";

const Wrap = styled.footer`
  height: 100px;
  font-size: 13px;
  font-weight: 100;
  letter-spacing: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Footer = () => {
  return <Wrap>© Ming-sil {new Date().getFullYear()}</Wrap>;
};
