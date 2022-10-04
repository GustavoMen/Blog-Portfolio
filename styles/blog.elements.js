import styled from "styled-components";

export const SectionOne = styled.section`
  max-width: 100vw;
  display: grid;
  grid-template-columns: 40vw 50vw;
  grid-gap: 5vw;
`;

export const DivImage = styled.img`
  width: 500px;
`;

export const DivText = styled.div`
  width: 55vw;
  margin-top: 40px;
  width: 70%;
`;

export const Title = styled.h1`
  color: #57bdd1;
  font-size: 38px;
`;

export const MainText = styled.h2`
  font-size: 32px;
`;

export const SubText = styled.span`
  font-size: 22px;
`;

export const SectionTwo = styled.section`
  width: 98vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const BackgroundContainer = styled.div`
  margin-top: 100px;
  background-color: rgba(38, 38, 42, 0.8);
  border-radius: 24px;
  max-width: 90%;
`;

export const PostContainer = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: space-around;
`;

export const DivTitle = styled.h2`
  color: #57bdd1;
  font-size: 38px;
  text-align: center;
`;

export const Post = styled.div`
  text-align: center;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const PostTitle = styled.h2`
  color: #57bdd1;
  text-align: center;
`;

export const DivPostBtn = styled.div``;

export const PostImg = styled.img`
  width: 90%;
  @media screen and (max-width: 978px) {
    width: 90%;
  }
`;

export const BtnContact = styled.button`
  height: 40px;
  width: 130px;
  border: 2px solid #fff;
  border-radius: 5px;
  background: none;
  color: #fff;
  transition: ease-out 0.5s;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #57bdd1;
    color: #fff;
    border: 2px solid #57bdd1;
  }
  @media screen and (max-width: 1000px) {
    margin-right: 0;
  }
`;
