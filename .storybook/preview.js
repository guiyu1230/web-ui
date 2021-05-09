import { configure } from '@storybook/react';
import "../src/index.less";

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
// }

// 将welcome文档说明置于顶部
const loadFn = () => {
  const allExports = [require('../src/Welcome.stories.tsx')];
  const req = require.context('../src/stories', true, /\.stories\.tsx$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
}

// automatically import all files ending in *.stories.tsx
configure(loadFn, module);