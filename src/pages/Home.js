import { PageTitle } from "../PageTitle";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImg1 from "../img/bg1.jpg";
import bgImg2 from "../img/bg2.jpg";
import profile from "../img/KERMIT.png";
import { Footer } from "../Footer";
import { mainStyle } from "../styles/Globalstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
library.add(fab);

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bgImg2}) no-repeat center / cover;
`;

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 70%;
  }
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const Headcopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    color: ${mainStyle.textcolor};
    font-size: 27px;
    size: 20px;
    font-weight: 800;
    margin: 0%;
    line-height: 35px;
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }
  span {
    color: ${mainStyle.maincolor};
  }
  p {
    color: ${mainStyle.textcolor};
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
    opacity: 0.7;

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

const Img = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid ${mainStyle.maincolor};
  background: url(${profile}) no-repeat center / cover;
  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

const Text = styled.h3`
  width: 100%;
  color: ${mainStyle.textcolor};
  text-align: left;
  font-size: 15px;
  margin-left: 10px;
  margin-bottom: 8px;
`;

const Social = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-bottom: 50px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
  a {
    width: 100%;
    height: 45px;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    white-space: pre-wrap;
    background: linear-gradient(
        287.96deg,
        rgba(0, 0, 0, 0.16) 15.1%,
        rgba(0, 0, 0, 0) 83.32%
      ),
      ${mainStyle.maincolor};
    color: #fff;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;

const CVPortfolioWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  a {
    padding: 20px;
    box-sizing: border-box;
    width: 50%;
    height: 30vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    border-radius: 8px;
    @media screen and (max-width: 500px) {
      height: 25vh;
    }
  }
  h3 {
    height: 35%;
    font-size: 22px;
    font-weight: 700;
    color: ${mainStyle.textcolor};
  }
  p {
    height: 15%;
    font-size: 13px;
    font-weight: 500;
    color: ${mainStyle.textcolor};
    opacity: 0.7;
    @media screen and (max-width: 500px) {
      font-size: 12px;
    }
  }
  div {
    width: fit-content;
    font-size: 13px;
    font-weight: 700;
    color: #ffffff;
    background-color: ${mainStyle.maincolor};

    border-radius: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px) {
      font-size: 12px;
    }
  }
`;

export const Home = () => {
  return (
    <>
      <PageTitle title={"ABOUT"} />

      <Wrap>
        <Container>
          <Profile>
            <Headcopy>
              <h1>
                ??????????????? ?????????
                <br />
                <span>?????????</span> ?????????.
              </h1>
              <p>UX /UI ???????????? ????????? ?????? ?????? ??????????????????.</p>
            </Headcopy>
            <Img />
          </Profile>
          <Text>Social Links</Text>

          <Social>
            <a href="https://github.com/ming-sil" target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} /> Github???
            </a>
            <a
              href="https://www.notion.so/mingsil/36818f7cafe544e6880c35b8e56c5f3b?v=22849f67a29a43cca4c6e2b5c323ee65"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFile} /> Notion???
            </a>
            <a href="https://www.instagram.com/ming_sil_/" target="_blank">
              <FontAwesomeIcon icon={["fab", "instagram"]} /> Instagram???
            </a>
          </Social>
          <Text> ?????? ???????????????.</Text>
          <CVPortfolioWrap>
            <a href="#" target="_blank">
              <h3>????????? ??? ???????????????</h3>
              <p>???????????? ??????????????? ?????????.</p>
              <div>???????????? ???</div>
            </a>
            <Link to="/projects">
              <h3>???????????????</h3>
              <p>2022??? 4???????????? ???????????? ????????? ???????????? ????????? ?????????.</p>
              <div>???????????? ???</div>
            </Link>
          </CVPortfolioWrap>
          <Footer />
        </Container>
      </Wrap>
    </>
  );
};
