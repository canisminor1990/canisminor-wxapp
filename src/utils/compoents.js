import { join } from 'path';

const usingComponents = (components = []) => {
  const usingComponents = {};
  components.forEach(item => (usingComponents[item] = join('components', item, 'index')));
  return {
    usingComponents: usingComponents,
  };
};

const components = { component: true };

export { components, usingComponents };
