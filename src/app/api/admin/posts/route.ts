import { NextRequest } from 'next/server';
import { createBlogPost, updateBlogPost, deleteBlogPost } from '@/src/lib/blog-data';
import { BlogPost } from '@/src/types/blog';

// For handling POST, PUT, and DELETE requests for blog posts
export async function POST(request: NextRequest) {
  try {
    // In a real app, you would check for authentication here
    // For now, we'll skip authentication for development
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'content', 'excerpt', 'author', 'category', 'slug'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return new Response(JSON.stringify({ error: `${field} is required` }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
    }
    
    // Create the new blog post
    const newPost = createBlogPost({
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      date: body.date || new Date().toLocaleDateString('ur-PK', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }),
      author: body.author,
      category: body.category,
      slug: body.slug,
      tags: body.tags || [],
      featured: body.featured || false,
      published: body.published || false,
    });
    
    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return new Response(JSON.stringify({ error: 'Failed to create blog post' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    // In a real app, you would check for authentication here
    const body = await request.json();
    
    if (!body.id) {
      return new Response(JSON.stringify({ error: 'ID is required for updating' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const updatedPost = updateBlogPost(body.id, {
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      date: body.date,
      author: body.author,
      category: body.category,
      slug: body.slug,
      tags: body.tags,
      featured: body.featured,
      published: body.published,
    });
    
    if (!updatedPost) {
      return new Response(JSON.stringify({ error: 'Post not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify(updatedPost), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return new Response(JSON.stringify({ error: 'Failed to update blog post' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // In a real app, you would check for authentication here
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required for deletion' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    const isDeleted = deleteBlogPost(id);
    
    if (!isDeleted) {
      return new Response(JSON.stringify({ error: 'Post not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new Response(JSON.stringify({ message: 'Post deleted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete blog post' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}