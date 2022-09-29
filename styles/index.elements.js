import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";

export const SectionOne = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const ContainerText = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;

export const FristText = styled.span`
  color: #fff;
  font-size: 18px;
`;

export const MainText = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 72px;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (max-width: 750px) {
    font-size: 62px;
  }
  @media screen and (max-width: 650px) {
    font-size: 54px;
  }
  @media screen and (max-width: 530px) {
    font-size: 46px;
  }
  @media screen and (max-width: 479px) {
    font-size: 38px;
  }
`;

export const SecundaryText = styled.p`
  font-size: 32px;
  color: #57bdd1;
`;

export const AboutText = styled.span`
  font-size: 18px;
  color: #fff;
`;

export const ProjectsCall = styled.h2`
  color: #fff;
  font-size: 32px;
  text-align: center;
`;

export const GifScroll = styled.img`
  width: 80px;
  align-self: center;
`;

export const SectionTwo = styled.section`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ContainerProject = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;

  @media screen and (max-width: 978px) {
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
`;

export const ProjectImg = styled.img`
  width: 55%;
  @media screen and (max-width: 978px) {
    width: 90%;
  }
`;

export const ProjectText = styled.div`
  width: 40%;
  margin-left: 15px;
  @media screen and (max-width: 978px) {
    width: 90%;
    text-align: center;
  }
`;

export const ProjectName = styled.h2`
  color: #57bdd1;
`;

export const ProjectDescription = styled.p`
  color: #fff;
`;

export const TextWarning = styled.p`
  color: #696969;
`;

export const BtnContact = styled.button`
  margin-right: 40px;
  height: 40px;
  width: 130px;
  border: 2px solid #57bdd1;
  border-radius: 5px;
  background: none;
  color: #57bdd1;
  transition: ease-out 0.5s;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #57bdd1;
    color: #fff;
  }
  @media screen and (max-width: 1000px) {
    margin-right: 0;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 978px) {
    justify-content: space-evenly;
  }
`;
