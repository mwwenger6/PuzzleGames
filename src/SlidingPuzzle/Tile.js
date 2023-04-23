import React from 'react'
import { useDrag } from 'react-dnd'

export const Tile =({ tileId, position }) => {
  
    const id = tileId;
    const pos = position;
    let color = 'teal'
    if (id == null){
        color = ''
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'Tile',
        item: { id, pos }, 
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))
      

    return (
    <div
        ref={drag}
        style={{
        backgroundColor: color,
        width: '100%',
        height: '100%',
        opacity: isDragging ? 0.5 : 1,
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        }}
    >
        {id}
    </div>
    )
}

export default Tile