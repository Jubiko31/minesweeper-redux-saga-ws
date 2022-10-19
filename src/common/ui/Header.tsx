import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { HeaderContainer, LevelBtn, RestartBtn } from '../styles/header.styles';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '../../store/reducers/startReducer';
import { initializeGame, restartGame } from '../../store/reducers/gameReducer';
import { clearFlags } from '../../store/reducers/playReducer';

const Header = () => {
    const dispatch = useDispatch();
    const optionState = useSelector((state: RootState) => state.option);

    useEffect(() => {
        dispatch(initializeGame());
    }, [dispatch]);

    const handleChooseLevel = (level: number) => {
        if (level === optionState.level) return;
        dispatch(startGame(level));
        dispatch(restartGame());
        dispatch(clearFlags());
    };
    
    const restart = () => {
        dispatch(startGame(optionState.level));
        dispatch(restartGame());
        dispatch(clearFlags());
    }

    return (
        <Box display='flex' flexDirection='column'>
            <Typography variant='h4' textAlign='center'>
                💣 Minesweeper
            </Typography>
            <HeaderContainer display='flex' justifyContent='space-between'>
                <Box margin="4px">
                    <LevelBtn
                        variant='contained'
                        isActive={optionState.level === 1}
                        onClick={() => handleChooseLevel(1)}
                    >
                        Eazy
                    </LevelBtn>
                    <LevelBtn
                        variant='contained'
                        isActive={optionState.level === 2}
                        onClick={() => handleChooseLevel(2)}
                    >
                        Hard
                    </LevelBtn>
                    <LevelBtn
                        variant='contained'
                        isActive={optionState.level === 3}
                        onClick={() => handleChooseLevel(3)}
                    >
                        Legend
                    </LevelBtn>
                </Box>
                <RestartBtn variant='outlined' onClick={() => restart()}>
                    Restart
                </RestartBtn>
            </HeaderContainer>
        </Box>
    );
};

export default Header;
