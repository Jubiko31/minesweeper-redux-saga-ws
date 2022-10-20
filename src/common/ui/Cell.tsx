import React from 'react';
import { MouseEvent } from 'react';
import { CellBox } from '../styles/Cell.styles';

type Status = 'success' | 'failed' | 'default';
interface CellProps {
    key: string;
    text: string;
    disabled: boolean;
    isFlag: boolean;
    onClick: () => void;
    onSetFlag: () => void;
}

const Cell = ({
    key, text, disabled, isFlag, onClick, onSetFlag,
}: CellProps) => {
    const status: Status = text === '□' ? 'default' : text === '*' ? 'failed' : 'success';

    const renderText = () => {
      if (status === 'success') {
        return text === '0' ? null : <span> {text} </span>;
      }
      if (status === 'failed') {
        return '💣';
      }
      if (isFlag) {
        return '🚩';
      }
    
      return null;
    };
    
    const handleClick = () => {
        if (disabled) return;
        onClick();
    };
    const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        onSetFlag();
    };

    return (
        <CellBox
            data-testid={key}
            key={key}
            status={status}
            disabled={disabled}
            onContextMenu={handleContextMenu}
            onClick={handleClick}
        >
            {renderText()}
        </CellBox>
    );
};

export default React.memo(Cell);