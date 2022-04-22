import {Mouse} from './mouseEvent';
import {MouseEventListener} from './mouseEventListener';
import {MouseEventType} from './mouseEventType';
jest.mock('./mouseEventListener');

describe('mouse event type', () => {
  it('is a single click', () => {
    const mouse = new Mouse();
    const mock = new MouseEventListener();
    mouse.subscribe(mock);

    mouse.pressLeftButton(10);
    mouse.releaseLeftButton(10);

    expect(mock).toHaveBeenCalledWith(MouseEventType.SingleClick);
  });
});
