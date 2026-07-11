import { reader } from '@/lib/keystatic';
import BlogList from '@/components/BlogList';

export default async function BlogPage() {
  const posts = await reader.collections.posts.all();
  
  const formattedPosts = posts
    .map(post => ({
      id: post.slug,
      title: post.entry.title,
      date: post.entry.date,
      category: post.entry.category,
      readTime: post.entry.readTime,
      description: post.entry.description,
      tags: post.entry.tags,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return <BlogList posts={formattedPosts} />;
}
