import { useLoaderData } from "react-router-dom";

interface Users   {
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
      name: string,
      catchPhrase: string,
      bs: string,
    };
}

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await response.json() as Users;

  return { user };
}

export default function Homepage() {
  const {user} = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <>
      <div>
        dfsdsffds
        <p>{JSON.stringify(user)}</p>
      </div>
    </>
  );
}
