import { styled } from "@mui/material/styles";
import { Box, Button } from '@mui/material';

export const HeaderContainer = styled(Box) ({
    backgroundColor: '#2b2b2b',
    minWidth: 500,
    padding: 8,
    borderRadius: 8,
    margin: '8px 0',
});

export const LevelBtn = styled(Button)(
    ({ isActive } : { isActive: boolean }) => ({
        backgroundColor: isActive ? '#6a7173' : 'transparent',
        textTransform: 'none',
        margin: '4px',

        '&:hover': {
            backgroundColor: '#6a7173',
        },
    })
);

export const RestartBtn = styled(Button)({
    color: '#fff',
    borderColor: '#8e8e8e',

    '&:hover': {
        borderColor: '#8e8e8e',
    }
});