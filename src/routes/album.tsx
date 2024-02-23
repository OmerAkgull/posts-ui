import { useLoaderData } from "react-router-dom";
import { Params } from "react-router-dom";
import { Card, CardHeader, CardBody, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export async function loader({ params }: { params?: Params }) {

    if (!params || !params.albumId) {
        throw new Error("Invalid params or id");
      }
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`)
    const album = await response.json();

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const user = await userResponse.json();

    return {album, user};
}

const Album = () => {

    const {album} = useLoaderData() as Awaited<ReturnType<typeof loader>>;
    const { user } = useLoaderData() as Awaited<ReturnType<typeof loader>>; 


  return (
    <>
    <Center as={Link} to={`/users/${user.id}`} fontSize={36} color='green' fontWeight='bold' pt={5}>{user.name}</Center>
    <Card align="center" key={album.id} my={5}>
      <CardHeader fontWeight="medium">{album.id}</CardHeader>
      <CardBody>
        <Text>{album.title}</Text>
      </CardBody>
    </Card>
    </>
  )
}

export default Album;