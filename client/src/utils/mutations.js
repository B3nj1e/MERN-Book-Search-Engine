import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
  mutation saveBook: (author: String!, description: String!, bookId: String!, image: String!, image: String!, link: String!, title: String!) {
    saveBook(author: $author, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
      token
      user {
        savedBooks
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(bookId: String!) {
    removeBook(bookId: $bookId) {
    token
      user {
        savedBooks
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email:$email) {
      email
      username
      password
      savedBooks
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        savedBooks
      }
    }
  }
`;

export const GET_ME = gql`
  mutation getMe($me: User!) {
    getMe(me: $me) {
      User {
        username
        savedBooks
        email
      }
    }
  }
`;