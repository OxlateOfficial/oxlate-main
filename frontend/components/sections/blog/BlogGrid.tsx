import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }: any) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {posts.map((post: any) => (
        <BlogCard
          key={post.id}
          slug={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          readingTime={post.readingTime}
        />
      ))}
    </div>
  );
}
