import axios from 'axios';

// Posts interface
import { Post, NewPost, Comment } from './type';

// Base URL with optional environment config
const BASE_URL = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

// 1.Function to get all posts
async function getAllPosts(): Promise<Post[]> {
  try {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
    console.log('All Posts:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    throw error;
  }
}

// 2.Function to get a post by ID
async function getPostById(id: number): Promise<Post> {
  try {
    const response = await axios.get<Post>(`${BASE_URL}/posts/${id}`);
    console.log(`Post #${id}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post #${id}:`, error);
    throw error;
  }
}

// 3. Function to get comments with nested route
async function getPostComments(postId: number): Promise<Comment[]> {
  try {
    const response = await axios.get<Comment[]>(`${BASE_URL}/posts/${postId}/comments`);
    console.log(`Comments for Post #${postId}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for post #${postId}:`, error);
    throw error;
  }
}

// 4.Function to get comment with query format
async function getCommentsWithQuery(postId: number): Promise<Comment[]> {
  try {
    const response = await axios.get<Comment[]>(`${BASE_URL}/comments`, {
      params: { postId },
    });
    console.log(`Comments for Post #${postId} (query):`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments with query for post #${postId}:`, error);
    throw error;
  }
}

// 5.Function to create a new post
async function createPost(newPost: NewPost): Promise<Post> {
  try {
    const response = await axios.post<Post>(`${BASE_URL}/posts`, newPost);
    console.log('Created Post:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

// 6.Function to update a post using PUT
async function updatePost(id: number, updatedPost: Post): Promise<Post> {
  try {
    const response = await axios.put<Post>(`${BASE_URL}/posts/${id}`, updatedPost);
    console.log(`Using PUT - Updated Post #${id}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error updating (PUT) post #${id}:`, error);
    throw error;
  }
}

// 7.Function to update a post using PATCH
async function patchPost(id: number, partialUpdate: Partial<Post>): Promise<Post> {
  try {
    const response = await axios.patch<Post>(`${BASE_URL}/posts/${id}`, partialUpdate);
    console.log(`Using PATCH - Updated Post #${id}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error patching post #${id}:`, error);
    throw error;
  }
}

// 8.Function to delete a post
async function deletePost(id: number): Promise<boolean> {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${id}`);
    const success = response.status === 200;
    console.log(`Deleted Post #${id}:`, success ? 'Success' : 'Failed');
    return success;
  } catch (error) {
    console.error(`Error deleting post #${id}:`, error);
    throw error;
  }
}


// Testing the functions
async function runTests() {
    // 1. Get all posts
    // await getAllPosts();

    // 2. Get a post by ID
    // await getPostById(1);

    // 3. Get comments for a post using nested route
    // await getPostComments(1);

    // 4. Get comments for a post using query format
    // await getCommentsWithQuery(1);

    // 5. Create a new post
    /* await createPost({ 
        title: 'New Post', 
        body: 'This is a new post.', 
        userId: 1 
    }); */

    // 6. Update a post using PUT
    /* await updatePost(1, {
        userId: 1,
        id: 1,
        title: 'Replaced by PUT',
        body: 'This post has been updated.'
    }); */

    // 7. Update a post using PATCH
    // await patchPost(1, { title: 'Updated by PATCH' }); 

    // 8. Delete a post
    // await deletePost(1);
}

// call the test function
runTests();

