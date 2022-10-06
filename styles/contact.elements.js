import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const DivToCopy = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 320px;
  height: 140px;
  margin-right: 40px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid transparent;
  transition: border 0.2s;
  &:hover {
    border-color: #57bdd1;
  }
  @media screen and (max-width: 478px) {
    margin-right: 0;
    width: 250px;
  }
`;

export const CopyItem = styled.span`
  font-weight: bold;
  color: #fff;
  margin: 10px;
  font-size: 18px;
`;

export const ItemText = styled.span`
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
  font-size: 12px;
`;

export const SocialContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-top: 60px;
`;

export const BtnContact = styled.button`
  margin-top: 32px;
  margin-right: 40px;
  height: 60px;
  width: 300px;
  border: 2px solid #57bdd1;
  border-radius: 5px;
  background: none;
  color: #57bdd1;
  transition: ease-out 0.5s;
  font-size: 18px;
  padding-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #57bdd1;
    color: #fff;
  }
  @media screen and (max-width: 1000px) {
    margin-right: 0;
  }
  @media screen and (max-width: 478px) {
    width: 250px;
  }
`;

export const DivIconText = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const LinkedinIcon = styled(FaLinkedin)`
  font-size: 2rem;
  margin-right: 20px;
`;
export const GithubIcon = styled(FaGithubSquare)`
  font-size: 2rem;
  margin-right: 20px;
`;
export const EmailIcon = styled(MdEmail)`
  font-size: 2rem;
  margin-right: 20px;
`;
