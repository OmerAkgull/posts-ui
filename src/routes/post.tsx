import { useLoaderData } from "react-router-dom";
import { Params } from "react-router-dom";
import { Card, CardHeader, CardBody, Text } from "@chakra-ui/react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function loader({ params }: { params?: Params }) {
  if (!params || !params.postId) {
    throw new Error("Invalid params or id");
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = (await response.json()) as Post;

  return { post };
}

const Post = () => {
  const { post } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
    <Card align="center" key={post.id} my={5}>
      <CardHeader fontWeight="medium">{post.title}</CardHeader>
      <CardBody>
        <Text>{post.body}</Text>
      </CardBody>
    </Card>
    </>
  );
};

export default Post;
