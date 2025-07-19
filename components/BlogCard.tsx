import Link from "next/link";

type BlogCardProps = {
  title: string;
  content: string;
  id: number;
};

export default function BlogCard({ title, content, id }: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
      <Link href={`/blogs/${id}`} className="text-blue-600 hover:underline">
        Read more
      </Link>
    </div>
  );
}
