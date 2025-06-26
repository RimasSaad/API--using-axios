export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface NewPost {
  title: string;
  body: string;
  userId: number;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
