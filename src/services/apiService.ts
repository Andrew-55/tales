import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {getTokenStore} from '@app/lib';
import {GQL_BASE_URL} from 'react-native-dotenv';

const httpLink = createHttpLink({
  uri: GQL_BASE_URL,
});

const authLink = setContext(async (_, {headers}) => {
  const token = await getTokenStore();
  console.log('getStore ' + token);

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
