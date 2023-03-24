export type PostType = {
  id: string;
  author: {
    avatarUrl: string;
    firstName: string;
    lastName: string;
  };
  createdAt: string;
  title: string;
  description: string;
  mediaUrl: string;
  isLiked: boolean;
  likesCount: number;
};

export type PostsType = {
  posts: {
    data: PostType[];
  };
};

export type CreatePostType = {
  postCreate: PostType[];
};

export type DeletePostType = {
  postDelete: {
    id: string;
  };
};

export type MyPostsType = {
  myPosts: {
    data: PostType[];
  };
};

export type FavoritePostsType = {
  favouritePosts: {
    data: PostType[];
  };
};

export type DataPostType = {
  post: PostType;
};

export type PostLikeType = {
  postLike: PostType;
};

export type PostUnlikeType = {
  postUnlike: {
    id: string;
  };
};
