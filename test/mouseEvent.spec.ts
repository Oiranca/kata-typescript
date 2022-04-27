import {MouseEventListener} from '../src/mouseEvent/mouseEventListener';
import {MouseEventType} from '../src/mouseEvent/mouseEventType';
import {Mouse} from '../src/mouseEvent/mouse';

describe('mouse event type', () => {
  it('is a single click', () => {
    const mouse = new Mouse();
    const mockMouseEventListener = new MouseEventListener();
    const spyMouseEventListener = jest.spyOn(mockMouseEventListener, 'handleMouseEvent');

    mouse.subscribe(mockMouseEventListener);

    mouse.pressLeftButton(10);
    mouse.releaseLeftButton(10);


    expect(spyMouseEventListener).toHaveBeenCalledWith(MouseEventType.SingleClick);
  });
});
