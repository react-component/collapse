/* eslint-disable no-param-reassign */
import cssAnimation from '@ant-design/css-animation';

function animate(
  node: HTMLElement,
  show: boolean,
  transitionName: string | object,
  done: Function,
) {
  const height = show ? node.offsetHeight : 0;
  return cssAnimation(node, transitionName, {
    start() {
      if (!show) {
        node.style.height = `${node.offsetHeight}px`;
      } else {
        node.style.height = `0`;
      }
    },
    active() {
      node.style.height = `${show ? height : 0}px`;
    },
    end() {
      node.style.height = '';
      done();
    },
  });
}

function animation(prefixCls: string) {
  return {
    enter(node: HTMLElement, done: Function) {
      return animate(node, true, `${prefixCls}-anim`, done);
    },
    leave(node: HTMLElement, done: Function) {
      return animate(node, false, `${prefixCls}-anim`, done);
    },
  };
}

export default animation;
