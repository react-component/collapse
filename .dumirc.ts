// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';
import path from 'path';

const isProdSite = process.env.GH_PAGES === '1';

const basePath = isProdSite ? '/collapse/' : '/';
const publicPath = isProdSite ? '/collapse/' : '/';

export default defineConfig({
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
