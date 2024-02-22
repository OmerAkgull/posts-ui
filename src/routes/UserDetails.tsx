import { useParams, useLoaderData } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export async function loader({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  const user = (await response.json()) as User;

  return { user };
}

export default function UserDetails() {
  const { user } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const { userId } = useParams();

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <Box>
      <Text fontWeight="bold" fontSize="24px" mb="4">
        User Details for ID {userId}
      </Text>
      <Text>Name: {user.name}</Text>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
    </Box>
  );
}