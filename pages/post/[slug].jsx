import { GraphQLClient, gql } from "graphql-request"

const hygraph = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/cl8kkc90t1vjv01ulbzw4a0pj/master'
);

const QUERY = gql`
query Post($slug: String!) {
  post(where: { slug: $slug }) {
    id
    slug
    title
    author {
      name
    }
    content {
      html
    }
  }
}
`
export const SLUGLIST = gql`
{
  posts {
    slug
  }
}
`

export async function getStaticProps({ params }) { 
  const slug = params.slug;

  const data = await hygraph.request(QUERY, { slug });

  const post = data.post;

  return {
    props: {
      post,
    }
  }
}

export async function getStaticPaths() { 
  const { posts } = await hygraph.request(SLUGLIST);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: "blocking"
  }
}
  
export default function Post({ post }) {
return <>
    <div>
    <h2>{ post.title }</h2>
    </div>
    <div>Individual post content</div>
</>
}
