import { useContext } from "react";
import { Tile } from './Tile';
import { useDrop } from 'react-dnd';
import { PuzzleContext } from './PuzzleContext';
import { PuzzleRules } from './PuzzleRules';

export const PuzzleSquare = ({ id, position }) => {
  const { slideTile, legalMove } = PuzzleRules();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "Tile",
    drop: () => slideTile(id),
    canDrop: () => legalMove(id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Tile tileId={id} position={position}>{id}</Tile>
      {isOver && canDrop}
    </div>
  );
};

export default PuzzleSquare;
