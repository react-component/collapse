<div align="center">
  <h1>@rc-component/collapse</h1>
  <p><sub><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /> Ant Design 生态的一部分。</sub></p>
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

- 支持手风琴和多面板折叠模式。
- 推荐使用 `items` API 声明式配置面板。
- 保留 `Collapse.Panel` 以实现兼容性。它已被弃用，并将在 v4 中删除。
- 支持自定义展开图标、语义化类名、语义样式和动画。

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

运行本地 dumi 站点：

```bash
npm install
npm start
```

然后打开 `http://localhost:8000`。

## API

### Collapse

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| accordion | 一次只能打开一个面板 | boolean | false |
| activeKey | 当前活动面板键 | `React.Key \| React.Key[]` | - |
| className | 附加 className | string | - |
| classNames | 语义化类名 | `Partial<Record<SemanticName, string>>` | - |
| collapsible | 指定面板触发区域是否可折叠 | `header` \| `icon` \| `disabled` | - |
| defaultActiveKey | 初始活动面板键 | `React.Key \| React.Key[]` | - |
| destroyOnHidden | 销毁非活动面板内容 | boolean | false |
| expandIcon | 自定义展开图标 | `(props: object) => React.ReactNode` | - |
| items | 折叠条目内容 | `ItemType[]` | - |
| openMotion | 自定义展开动画 | `CSSMotionProps` | - |
| prefixCls | 组件 className 前缀 | string | `rc-collapse` |
| style | 内联样式 | object | - |
| styles | 语义化样式 | `Partial<Record<SemanticName, React.CSSProperties>>` | - |
| onChange | 活动面板更改时的回调 | `(key: React.Key[]) => void` | - |

### ItemType

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 面板键值 | `React.Key` | - |
| label | 面板标题内容 | `React.ReactNode` | - |
| ref | 面板 DOM 引用 | `React.RefObject<HTMLDivElement>` | - |
| children | 面板主体内容 | `React.ReactNode` | - |
| className | 附加面板 className | string | - |
| classNames | 语义化类名 | `Partial<Record<SemanticName, string>>` | - |
| collapsible | 指定面板是否可折叠 | `header` \| `icon` \| `disabled` | - |
| destroyOnHidden | 销毁非活动面板内容 | boolean | false |
| extra | 面板标题中的额外内容 | `React.ReactNode` | - |
| forceRender | 在打开面板之前渲染面板内容 | boolean | false |
| showArrow | 在标题旁边显示箭头 | boolean | true |
| style | 内联面板样式 | object | - |
| styles | 语义化样式 | `Partial<Record<SemanticName, React.CSSProperties>>` | - |
| onItemClick | 点击该面板时的回调 | `(panelKey: React.Key) => void` | - |

### 折叠面板

`Collapse.Panel` 已弃用。请改用 `items`。

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

包构建完成后，发布流程由 `@rc-component/np` 通过 `rc-np` 命令处理。

## 许可证

@rc-component/collapse 基于 [MIT](./LICENSE) 许可证发布。
