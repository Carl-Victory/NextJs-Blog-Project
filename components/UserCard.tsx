import Link from "next/link";

type UserCardProps = {
  id: number;
  name: string;
  email: string;
  company: string;
};

export default function UserCard({ id, name, email, company }: UserCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{email}</p>
      <p className="text-gray-500 text-sm italic mb-4">{company}</p>
      <Link href={`/users/${id}`} className="text-blue-600 hover:underline">
        View Profile
      </Link>
    </div>
  );
}
