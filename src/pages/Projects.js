import styled from "styled-components";
import { Footer } from "../Footer";
import { PageTitle } from "../PageTitle";
import bgImg1 from "../img/bg1.jpg";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${bgImg1}) no-repeat right bottom / cover;
`;

const Profile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #26b574;
  background: url("./KERMIT.png") no-repeat center / cover;
`;

const Name = styled.div`
  color: #26b574;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 8px;
`;

const Desc = styled.div`
  color: #26b574;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 30px;
`;

const LinkWrap = styled.div`
  a {
    width: 300px;
    height: 50px;
    background-color: #26b574;
    border-radius: 8px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
    &:hover {
      background-color: greenyellow;
      color: #26b574;
    }
  }
`;

export const Projects = () => {
  return (
    <>
      <PageTitle title={"Projects"} />

      <Wrap>
        <Profile />
        <Name>MINSEO</Name>
        <Desc>디자인 전공 개발자 💬</Desc>
        <LinkWrap>
          <a href="#" target="_blank"></a>
          <a href="#" target="_blank"></a>
          <a href="#" target="_blank"></a>
          <a href="#" target="_blank"></a>
          <a href="#" target="_blank"></a>
        </LinkWrap>

        <Footer />
      </Wrap>
    </>
  );
};
