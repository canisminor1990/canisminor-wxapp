import { join } from 'path';

const component = { component: true };
const usingComponents = (components = []) => {
  const usingComponents = {};
  components.forEach(item => (usingComponents[item] = join('../../components', item, 'index')));
  return {
    usingComponents: usingComponents,
  };
};

export { component, usingComponents };
