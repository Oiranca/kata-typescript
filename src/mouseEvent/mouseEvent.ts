import {MouseEventListener} from './mouseEventListener';
import {MousePointerCoordinates} from './MousePointerCoordinates';
import {MouseEventType} from './mouseEventType';


export class Mouse {
  private listeners: MouseEventListener[] = [];
  private readonly timeWindowInMillisecondsForDoubleClick = 500;

  public pressLeftButton(currentTimeInMilliseconds: number) {
    /* ... implement this method ...*/
  }

  public releaseLeftButton(currentTimeInMilliseconds: number) {
    /* ... implement this method ...*/
  }

  public move(from: MousePointerCoordinates, to: MousePointerCoordinates,
    currentTimeInMilliseconds: number) {
    /* ... implement this method ...*/
  }

  public subscribe(listener: MouseEventListener) {
    this.listeners.push(listener);
  }

  private notifySubscribers(eventType: MouseEventType) {
    this.listeners.forEach((listener) => listener.handleMouseEvent(eventType));
  }
}
