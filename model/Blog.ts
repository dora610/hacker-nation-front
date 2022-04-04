export interface Blog {
  id?: string;
  title: string;
  subtitle: string;
  author: string;
  userName: string;
  published: string;
  tags: [string];
  profilePic: string;
  readTime: number;
  badges: [string];
  blogImg: string;
  likes: number;
}
