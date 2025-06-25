import axios from 'axios';

// Server URL
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Posts interface
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// New Post interface: without the id field
interface NewPost {
  title: string;
  body: string;
  userId: number;
}

// Comments interface
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// 1.Function to get all posts
async function getAllPosts() : Promise<void> {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
    console.log('All Posts:', response.data);
}

// 2.Function to get a post by ID
async function getPostById(id:number): Promise<void> {
    const response = await axios.get<Post>(`${BASE_URL}/posts/${id}`);
    console.log(`Post #${id}:`, response.data);
}

// 3.Function to get commenst with nested route
async function getPostComments(postId: number): Promise<void> {
    const response = await axios.get<Comment[]>(`${BASE_URL}/posts/${postId}/comments`);
    console.log(`Comments for Post #${postId}:`, response.data);
}

// 4.Function to get comment with query format
async function getCommentsWithQuery(postId: number): Promise<void> {
    const response = await axios.get<Comment[]>(`${BASE_URL}/comments`, { params: {postId} });
    console.log(`Comments for Post #${postId} with query:`, response.data);
}

// 5.Function to create a new post
async function createPost(newPost: NewPost): Promise<void> {
    const response = await axios.post<Post>(`${BASE_URL}/posts`, newPost);
    console.log('Created Post:', response.data);
}

// 6.Function to update a post using PUT
async function updatePost(id: number, updatedPost: Post): Promise<void> {
  const response = await axios.put<Post>(`${BASE_URL}/posts/${id}`, updatedPost);
  console.log(`using PUT - Updated Post #${id}:`, response.data);
}

// 7.Function to update a post using PATCH
async function patchPost(id: number, partialUpdate: Partial<Post>): Promise<void> {
  const response = await axios.patch<Post>(`${BASE_URL}/posts/${id}`, partialUpdate);
  console.log(`using PATCH - Updated Post #${id}:`, response.data);
}

// 8.Function to delete a post
async function deletePost (id: number): Promise<void> {
    const response = await axios.delete(`${BASE_URL}/posts/${id}`);
    console.log(`Deleted Post #${id}:`,  response.status === 200 ? 'Success' : 'Failed');
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

