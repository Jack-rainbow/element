import DragPanel from './src/main';

/* istanbul ignore next */
DragPanel.install = function(Vue) {
  Vue.component(DragPanel.name, DragPanel);
};

export default DragPanel;
