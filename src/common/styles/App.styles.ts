import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    height: '100vh',
});

export const BoardContainer = styled(Box)({
    maxWidth: 'calc(100vw - 80px)',
    overflow: 'auto',
    position: 'relative',
});

export const Message = styled(Box)(({ status }: { status: number }) => ({
    width: 240,
    position: 'absolute',
    top: 20,
    left: 'calc(50% - 120px)',
    textAlign: 'center',
    fontSize: 42,
    fontWeight: 'bold',

    color: status === 0 ? 'red' : 'blue',
}));