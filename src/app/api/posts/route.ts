import { NextRequest } from 'next/server';
import { getAllBlogPosts, getBlogPostsByCategory, getFeaturedPosts } from '@/src/lib/blog-data';
import { BlogCategory } from '@/src/types/blog';

export async function GET(request: NextRequest) {
  try {
    // Check for category parameter
    const category = request.nextUrl.searchParams.get('category');
    const featured = request.nextUrl.searchParams.get('featured');
    
    let posts;
    
    if (category) {
      // Convert string category to enum
      let categoryEnum: BlogCategory | undefined;
      switch(category) {
        case 'stories':
          categoryEnum = BlogCategory.STORIES;
          break;
        case 'history':
          categoryEnum = BlogCategory.HISTORY;
          break;
        case 'updates':
          categoryEnum = BlogCategory.UPDATES;
          break;
        default:
          break;
      }
      
      if (categoryEnum) {
        posts = getBlogPostsByCategory(categoryEnum);
      } else {
        posts = getAllBlogPosts();
      }
    } else if (featured === 'true') {
      posts = getFeaturedPosts();
    } else {
      posts = getAllBlogPosts();
    }
    
    // Return the posts
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch blog posts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}