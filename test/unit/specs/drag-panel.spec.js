import { createTest, destroyVM } from '../util';
import DragPanel from 'packages/drag-panel';

describe('DragPanel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(DragPanel, true);
    expect(vm.$el).to.exist;
  });
});

