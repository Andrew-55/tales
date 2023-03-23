export type UserType = {
  userMe: {
    avatarUrl: string | null;
    email: string | null;
    firstName: string | null;
    birthDate: string | null;
    country: string | null;
    lastName: string | null;
    middleName: string | null;
    phone: string | null;
    gender: string | null;
  };
};

export type UserSignInResponseType = {
  userSignIn: {
    token: string;
  };
};

export type UserSignUpResponseType = {
  userSignUp: {
    token: string;
    problem: {
      message: string;
    };
  };
};

export type UserEditProfile = {
  userEditProfile: {
    problem: {
      message: string;
    };
  };
};

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
