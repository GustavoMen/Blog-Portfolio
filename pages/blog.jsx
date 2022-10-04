import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { SectionOne,DivImage, DivText, Title, MainText, SubText, SectionTwo, BackgroundContainer, PostContainer, Post, PostImage, PostTitle, DivPostBtn, PostImg, BtnContact, DivTitle} from '../styles/blog.elements'

const hygraph = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/cl8kkc90t1vjv01ulbzw4a0pj/master'
);

const QUERY = gql`
{
    posts {
        id
        slug
        title
        coverPhoto {
        url
        }
    }
}
`

export async function getStaticProps() {
  const { posts } = await hygraph.request(QUERY)

  return {
    props: {
      posts
    }
  }
}

const Div = styled.div`
`
const H2 = styled.h2``

export default function Blog({ posts }) {
    console.log(posts)

return (
    <>
        <SectionOne>
            <DivImage src='./blogimage.png'></DivImage>
            <DivText>
                <Title>Um blog feito de Dev para Dev, com intuito de compartilhar informações</Title>
                <MainText>Veja alguns Posts abaixo.</MainText>
                <SubText>Este blog se trata de um projeto pessoal, você pode sempre entrar em contato comigo pelo linkedin.</SubText>
            </DivText>
            
            
        </SectionOne>
        
    <SectionTwo>
    <BackgroundContainer>
      <DivTitle>Publicações</DivTitle>
      <PostContainer>
           {posts.map(({ id, title, slug, coverPhoto }) => { 
                return (
                <Post key={id}>
                  <PostImg src={ coverPhoto.url }></PostImg>
                    <PostTitle>
                      { title }
                    </PostTitle>
                    <Link href={`/post/${slug}`}>
                      <BtnContact>Veja mais</BtnContact>
                    </Link>
                    
                </Post>
                ) 
            })}
      </PostContainer>      
    </BackgroundContainer>        
    </SectionTwo>
    </>
)
}
