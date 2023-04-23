import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import {dragNdrop} from './dragNdrop'

export const Tower = () =>{
    return(
        <DndProvider backend={HTML5Backend}>
            <div>
                
            </div>
        </DndProvider>
    )
}