import React from 'react';
import Header from '../common/ui/Header';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { Container, Board, Message } from '../common/styles/App.styles';

const App = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
