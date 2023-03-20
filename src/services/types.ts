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
