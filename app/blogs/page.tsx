import axios from "axios";
import BlogCard from "@/components/BlogCard";

type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function BlogsPage() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.data;

  return (
    <main className="min-h-screen px-6 py-10 md:px-20 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Blog Posts
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 12).map((post: BlogPost) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.body}
          />
        ))}
      </div>
    </main>
  );
}
