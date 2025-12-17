import { loadBlogPosts } from "@/lib/cms/loadBlogPosts";
import Breadcrumbs from "@/components/layout/Header/Breadcrumbs";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import { getBlogSchema } from "@/lib/seo/schema/blog";

export const metadata = {
  title: "Blog | Oxlate",
  description:
    "Read practical insights on web development, automation, and modern software by Oxlate.",
};

export default function BlogPage() {
  const posts = loadBlogPosts();
  const blogSchema = getBlogSchema();
  return (
    <main className="px-4">
        {/* BLOG SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <BlogHero />
      <section className="max-w-4xl mx-auto pb-24">
        <BlogGrid posts={posts} />
      </section>
    </main>
  );
}
