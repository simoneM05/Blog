export type IPost = {
  title: string;
  content: string;
  category: string;
  tags?: string[];
  createAt: Date;
  updateAt: Date;
};
