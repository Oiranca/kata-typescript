import {MouseEventType} from './mouseEvent';

export interface MouseEventListener {
  handleMouseEvent(type: MouseEventType): void;
}
