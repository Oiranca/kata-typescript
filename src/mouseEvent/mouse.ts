import {MouseEventListener} from './mouseEventListener';
import {MousePointerCoordinates} from './MousePointerCoordinates';
import {MouseEventType} from './mouseEventType';


export class Mouse {
  private listeners: MouseEventListener[] = [];
  private readonly timeWindowInMillisecondsForDoubleClick = 500;

  public pressLeftButton(_currentTimeInMilliseconds: number) {
  }

  public releaseLeftButton(_currentTimeInMilliseconds: number) {
    this.notifySubscribers(MouseEventType.SingleClick);
  }

  public move(_from: MousePointerCoordinates, _to: MousePointerCoordinates,
    _currentTimeInMilliseconds: number) {
  }

  public subscribe(listener: MouseEventListener) {
    this.listeners.push(listener);
  }

  private notifySubscribers(eventType: MouseEventType) {
    this.listeners.forEach((listener) => listener.handleMouseEvent(eventType));
  }
}
