import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

type Status = 'success' | 'failed' | 'default';
export const CellBox= styled(Box)(
  ({ status, disabled }: { status: Status; disabled: boolean }) => ({
    width: 30,
    height: 30,
    minWidth: 30,
    border: `${
      status === 'success' ? '1px solid #C0C0C0 !important' : '1px solid'
    }`,
    borderTopColor: '#ffffff',
    borderRightColor: '#7B7B7B',
    borderBottomColor: '#7B7B7B',
    borderLeftColor: '#ffffff',
    borderRadius: 4,
    margin: 0.5,
    backgroundColor:
      status === 'failed'
        ? '#ff0000'
        : status === 'success'
        ? '#ffffff'
        : '#C0C0C0',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.4 : 1,

    '&:hover':
      disabled || status !== 'default' ? {} : { backgroundColor: '#dcdcdc', },
  })
);
