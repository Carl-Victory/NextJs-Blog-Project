import axios from "axios";
import { notFound } from "next/navigation";

type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  params: {
    id: string;
  };
};

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;

  try {
    const response = await axios.get<BlogPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = response.data;

    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg">{post.body}</p>
      </div>
    );
  } catch {
    return notFound();
  }
}
