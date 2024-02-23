import { useLoaderData } from "react-router-dom";
import { Params } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Center,
  Image,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export async function loader({ params }: { params?: Params }) {
  if (!params || !params.albumId) {
    throw new Error("Invalid params or id");
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumId}`
  );
  const album = await response.json();

  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const user = await userResponse.json();

  const photosResponse = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`
  );
  const photos: Photo[] = await photosResponse.json();

  return { album, user, photos: photos || [] };
}

const Album = () => {
  const { album } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const { user } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const { photos } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
      <Center
        as={Link}
        to={`/users/${user.id}`}
        fontSize={36}
        color="green"
        fontWeight="bold"
        pt={5}
      >
        {user.name}
      </Center>
      <Card align="center" key={album.id} my={5}>
        <CardHeader fontWeight="medium">{album.id}</CardHeader>
        <CardBody>
          <Text>{album.title}</Text>
        </CardBody>
      </Card>
      <Container>
        {photos && photos.length > 0 ? (
          photos.map((photo) => (
            <Image key={photo.id} src={photo.url} alt={photo.title} my={3} />
          ))
        ) : (
          <Text>No photos available</Text>
        )}
      </Container>
    </>
  );
};

export default Album;
