import styled from "styled-components";

const Wrap = styled.footer`
  font-size: 13px;
  font-weight: 100;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Footer = () => {
  return <Wrap>© Ming-sil {new Date().getFullYear()}</Wrap>;
};
