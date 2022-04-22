import {Mouse} from './mouseEvent';
import {MouseEventListener} from './mouseEventListener';
import {MouseEventType} from './mouseEventType';

class MockListener implements MouseEventListener {
  public lastEvent: MouseEventType | undefined = undefined;

  handleMouseEvent(type: MouseEventType): void {
    this.lastEvent = type;
  }
}

describe('mouse event type', () => {
  it('is a single click', () => {
    const mouse = new Mouse();
    const mock = new MockListener();
    mouse.subscribe(mock);

    mouse.pressLeftButton(10);
    mouse.releaseLeftButton(10);

    expect(mock.lastEvent).toBe(MouseEventType.SingleClick);
  });
});
