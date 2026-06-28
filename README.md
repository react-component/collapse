<div align="center">
  <h1>@rc-component/collapse</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Part of the Ant Design ecosystem.</sub></p>
  <p>🪗 A flexible collapse and accordion component for React.</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/collapse"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/collapse.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/collapse"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/collapse.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/collapse/actions/workflows/react-component-ci.yml"><img alt="build status" src="https://github.com/react-component/collapse/actions/workflows/react-component-ci.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/collapse"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/collapse/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/collapse"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/collapse?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>

## Highlights

- Supports accordion and multi-panel collapse modes.
- Prefer the `items` API for declarative panel configuration.
- Keeps `Collapse.Panel` for compatibility. It is deprecated and will be removed in v4.
- Supports custom expand icons, semantic class names, semantic styles, and motion.

## Install

```bash
npm install @rc-component/collapse
```

## Usage

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

## Examples

Run the local dumi site:

```bash
npm install
npm start
```

Then open `http://localhost:8000`.

## API

### Collapse

| Property | Description | Type | Default |
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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Panel key | `React.Key` | - |
| label | Panel header content | `React.ReactNode` | - |
| ref | Panel DOM ref | `React.RefObject<HTMLDivElement>` | - |
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

## Development

```bash
npm install
npm start
```

The dumi site runs at `http://localhost:8000` by default.

```bash
npm test
npm run tsc
npm run lint
npm run compile
npm run build
```

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command after the package build.

## License

@rc-component/collapse is released under the [MIT](./LICENSE) license.
