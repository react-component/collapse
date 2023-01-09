// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  alias: {
    'rc-collapse$': path.resolve('src'),
    'rc-collapse/es': path.resolve('src'),
  },
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Collapse',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  outputPath: '.doc',
  exportStatic: {},
});
