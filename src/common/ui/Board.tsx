import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { openCell, setFlag } from '../../store/reducers/playReducer';
import { RootState } from '../../store/store';
import Cell from './Cell';

const Board = () => {
  const dispatch = useDispatch();
  const { status, map } = useSelector((state: RootState) => state.board); 
  const { flags } = useSelector((state: RootState) => state.play);
  const handleCellClick = (row: number, col: number) => {
    dispatch(openCell({ row, col }));
  };

  const handleSetFlag = (row: number, col: number) => {
    dispatch(setFlag({ row, col }));
  }

  const renderMap = (rows: string[]) => {
    return rows.map((row: string, _rowIdx: number) => {
        const cells = row.split('');
        const renderRow = cells.map((cell: string, _colIdx: number) => {
            const isFlag = flags.find((flag: Array<number>) => 
                flag[0] === _rowIdx && flag[1] === _colIdx
            );
            return (
                <Cell
                    key={`cell-${_rowIdx}-${_colIdx}`}
                    text={cell}
                    disabled={status !== -1}
                    isFlag={Boolean(isFlag)}
                    onClick={() => handleCellClick(_rowIdx, _colIdx)}
                    onSetFlag={() => handleSetFlag(_rowIdx, _colIdx)}
                />
            );
        });
        return (
            <Box display='flex' key={`row-${_rowIdx}`}>
                {renderRow}
            </Box>
        );
    });
  };

  if (!map.length) {
    return (
        <Typography variant='h5' mt={3}>
            Select the level.
        </Typography>
    );
  }

  return (
    <>
        {renderMap(map)}
    </>
  )
}

export default Board