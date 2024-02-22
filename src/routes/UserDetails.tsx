import { useLoaderData } from "react-router-dom";
import { Box, Text, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Params } from "react-router-dom";

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
export async function loader({ params }: { params?: Params }) {
  if (!params || !params.userId) {
    throw new Error("Invalid params or userId");
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const user = (await response.json()) as User;

  return { user };
}

export default function UserDetails() {
  const { user } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Tabs align="center">
      <TabList>
        <Tab>User</Tab>
        <Tab>Posts</Tab>
        <Tab>Albums</Tab>
        <Tab>Todos</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            py={10}
          >
            <Card
              size="lg"
              align="center"
              justify="center"
              colorScheme="green"
              my={5}
            >
              <CardHeader
                fontWeight="medium"
                fontSize={{ base: "16", md: "24" }}
              >
                {user.name}
              </CardHeader>
              <CardBody>
                <Text>Username: {user.username}</Text>
                <Text>Email: {user.email}</Text>
                <Text>Phone: {user.phone}</Text>
                <Text>Website: {user.website}</Text>
              </CardBody>
            </Card>
          </Box>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          <p>four!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
