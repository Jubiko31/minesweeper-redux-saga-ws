import Board from '../common/ui/Board';
import Header from '../common/ui/Header';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { Container, BoardContainer, Message } from '../common/styles/App.styles';

const App = () => {
  const { status } = useSelector((state: RootState) => state.board);
  const message = status === 0 ? 'Game Over.' : status === 1 ? 'Victorious!' : '';
  return (
    <Container>
      <Header />
      <BoardContainer>
        <Message status={status}>{message}</Message>
        <Board />
      </BoardContainer>
    </Container>
  );
}

export default App;
