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
