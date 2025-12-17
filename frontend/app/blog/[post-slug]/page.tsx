import { loadBlogPost } from "@/lib/cms/loadBlogPost";
import BlogContent from "@/components/sections/blog/BlogContent";
import { notFound } from "next/navigation";
import { getBlogPostSchema } from "@/lib/seo/schema/blogPost";
import Breadcrumbs from "@/components/layout/Header/Breadcrumbs";
import { getBlogBreadcrumbSchema } from "@/lib/seo/schema/blogBreadCrumb";
import LazySection from "@/components/performance/LazySection";
import BlogInternalLinks from "@/components/sections/blog/BlogInternalLinks";
import { mapServicesToLinks } from "@/lib/seo/internalLinks";
import BlogCTA from "@/components/sections/blog/BlogCTA";
type Props = {
  params: Promise<{ "post-slug": string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { "post-slug": slug } = await params;
  const post = loadBlogPost(slug);

  if (!post) return notFound();

  const postSchema = getBlogPostSchema({
    title: post.seo.title,
    description: post.seo.description,
    slug: post.slug,
    publishedAt: post.publishedAt,
  });

  const breadcrumbSchema = getBlogBreadcrumbSchema({
    postTitle: post.title,
    postSlug: post.slug,
  });

  const serviceLinks = mapServicesToLinks(
    post.relatedServices || []
  );
  const primaryService =
    post.relatedServices?.[0];
  

  return (
    <main className="px-4 py-20 max-w-3xl mx-auto">
      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(postSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* UI Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <h1 className="text-3xl font-semibold mb-6">
        {post.title}
      </h1>
      <LazySection>
        <BlogContent content={post.content} />
      </LazySection>
      <BlogInternalLinks links={serviceLinks} />
      <BlogCTA serviceId={primaryService} />
    </main>
  );
}
