import React from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';

const Home = () => (
  <Container>
    <Text>React-Native Boilerplate</Text>
    <Text>
      {' '}
      Includes packages like React-Navigation, ESLint(Airbnb), Prettier, PropTypes and
      React-Native-Extended-Stylesheet
    </Text>
  </Container>
);
export default Home;
