import { NextRequest } from 'next/server';
import { getBlogPostBySlug } from '@/src/lib/blog-data';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const post = getBlogPostBySlug(slug);
    
    if (!post) {
      return new Response(JSON.stringify({ error: 'Post not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify(post), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch blog post' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}