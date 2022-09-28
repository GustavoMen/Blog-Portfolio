import { GraphQLClient, gql } from 'graphql-request';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

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

const Div = styled.div``
const H2 = styled.h2``

export default function Blog({ posts }) {
    console.log(posts)

return (
    <>
        <Div>
        <H2>Blog</H2>
        </Div>
        <Div>
            {posts.map(({ id, title, slug, coverPhoto }) => { 
                return (
                <Div key={id}>
                    <Div>
                        <Image src={coverPhoto.url} alt="Image Post" width={150} height={150} />
                    </Div>
                    <Div>
                        <H2>
                            <Link href={`/post/${slug}`}>
                                <a>{ title }</a>
                            </Link>
                        </H2>
                    </Div>
                    </Div>
                ) 
            })}
        </Div>
    </>
)
}
