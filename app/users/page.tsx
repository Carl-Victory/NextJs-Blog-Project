import axios from "axios";
import UserCard from "@/components/UserCard";

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

export default async function UsersPage() {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = response.data;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Users
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            company={user.company.name}
          />
        ))}
      </div>
    </div>
  );
}
