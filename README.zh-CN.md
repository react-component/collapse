<div align="center">
  <h1>@rc-component/collapse</h1>
  <p><sub>Ant Design 生态的一部分。</sub></p>
  <img alt="Ant Design" height="32" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
  <p>🪗 灵活的 React 折叠面板和手风琴组件。</p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>


<div align="center">

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![build status][github-actions-image]][github-actions-url] [![Codecov][codecov-image]][codecov-url] [![bundle size][bundlephobia-image]][bundlephobia-url] [![dumi][dumi-image]][dumi-url]

</div>

[npm-image]: https://img.shields.io/npm/v/@rc-component/collapse.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@rc-component/collapse
[github-actions-image]: https://github.com/react-component/collapse/actions/workflows/react-component-ci.yml/badge.svg
[github-actions-url]: https://github.com/react-component/collapse/actions/workflows/react-component-ci.yml
[codecov-image]: https://img.shields.io/codecov/c/github/react-component/collapse/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/react-component/collapse
[download-image]: https://img.shields.io/npm/dm/@rc-component/collapse.svg?style=flat-square
[download-url]: https://npmjs.org/package/@rc-component/collapse
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/%40rc-component%2Fcollapse?style=flat-square
[bundlephobia-url]: https://bundlephobia.com/package/@rc-component/collapse
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square
[dumi-url]: https://github.com/umijs/dumi

## 特性

- 支持 accordion and multi-panel collapse modes.
- 推荐使用 `items` API 声明式配置面板。
- 保留 `Collapse.Panel` for compatibility. It is deprecated and will be removed in v4.
- 支持 custom expand icons, semantic class names, semantic styles, and motion.

## 安装

```bash
npm install @rc-component/collapse
```

## 使用

```tsx | pure
import Collapse from '@rc-component/collapse';
import '@rc-component/collapse/assets/index.css';

export default function App() {
  return (
    <Collapse
      defaultActiveKey="1"
      items={[
        {
          key: '1',
          label: 'First panel',
          children: 'First panel content',
        },
        {
          key: '2',
          label: 'Second panel',
          children: 'Second panel content',
        },
      ]}
    />
  );
}
```

## 示例

```bash
npm install
npm start
```

然后打开 `http://localhost:8000`。

在线演示： https://collapse-react-component.vercel.app

## API

### Collapse

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| accordion | Only one panel can be opened at a time | boolean | false |
| activeKey | Current active panel key | `React.Key \| React.Key[]` | - |
| className | Additional class name | string | - |
| classNames | Semantic class names | `Partial<Record<SemanticName, string>>` | - |
| collapsible | Specify whether panel trigger area is collapsible | `header` \| `icon` \| `disabled` | - |
| defaultActiveKey | Initial active panel key | `React.Key \| React.Key[]` | - |
| destroyOnHidden | Destroy inactive panel content | boolean | false |
| expandIcon | Custom expand icon | `(props: object) => React.ReactNode` | - |
| items | Collapse items content | `ItemType[]` | - |
| openMotion | Custom open motion | `CSSMotionProps` | - |
| prefixCls | Component class name prefix | string | `rc-collapse` |
| style | Inline style | object | - |
| styles | Semantic styles | `Partial<Record<SemanticName, React.CSSProperties>>` | - |
| onChange | Callback when active panels change | `(key: React.Key[]) => void` | - |

### ItemType

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | Panel key | `React.Key` | - |
| label | Panel header content | `React.ReactNode` | - |
| children | Panel body content | `React.ReactNode` | - |
| className | Additional panel class name | string | - |
| classNames | Semantic class names | `Partial<Record<SemanticName, string>>` | - |
| collapsible | Specify whether the panel is collapsible | `header` \| `icon` \| `disabled` | - |
| destroyOnHidden | Destroy inactive panel content | boolean | false |
| extra | Extra content in the panel header | `React.ReactNode` | - |
| forceRender | Render panel content before it is opened | boolean | false |
| showArrow | Show arrow beside header | boolean | true |
| style | Inline panel style | object | - |
| styles | Semantic styles | `Partial<Record<SemanticName, React.CSSProperties>>` | - |
| onItemClick | Callback when this panel is clicked | `(panelKey: React.Key) => void` | - |

### Collapse.Panel

`Collapse.Panel` is deprecated. Use `items` instead.

## 本地开发

```bash
npm install
npm start
```

```bash
npm test
npm run tsc
npm run lint
npm run compile
npm run build
```

## 发布

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## 许可证

@rc-component/collapse is released under the [MIT](./LICENSE.md) license.
