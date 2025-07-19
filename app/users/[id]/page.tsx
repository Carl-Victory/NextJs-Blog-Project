import axios from "axios";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { city: string; street: string };
};

export default async function UserDetailPage({ params }: Props) {
  const { id } = await params;

  try {
    const res = await axios.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = res.data;

    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{user.name}</h1>
        <p className="text-gray-700 text-lg mb-2">Username: {user.username}</p>
        <p className="text-gray-700 text-lg mb-2">Email: {user.email}</p>
        <p className="text-gray-700 text-lg mb-2">Phone: {user.phone}</p>
        <p className="text-gray-700 text-lg mb-2">Website: {user.website}</p>
        <p className="text-gray-700 text-lg">Company: {user.company.name}</p>
        <p className="text-gray-500 mt-2 text-sm">
          Address: {user.address.street}, {user.address.city}
        </p>
      </div>
    );
  } catch {
    return notFound();
  }
}
