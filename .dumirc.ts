// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';
import path from 'path';

const basePath = process.env.GH_PAGES ? '/collapse/' : '/';
const publicPath = basePath;

export default defineConfig({
  outputPath: 'docs-dist',
  alias: {
    'rc-collapse$': path.resolve('src'),
    'rc-collapse/es': path.resolve('src'),
  },
  mfsu: false,
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Collapse',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  base: basePath,
  publicPath,
});
