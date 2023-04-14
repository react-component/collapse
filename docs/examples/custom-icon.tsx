import Collapse from 'rc-collapse';
import * as React from 'react';
import '../../assets/index.less';
import type { ItemType } from '../../src/interface';
import motion from './_util/motionUtil';

const initLength = 3;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function random() {
  return parseInt((Math.random() * 10).toString(), 10) + 1;
}

const arrowPath =
  'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88' +
  '.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.' +
  '6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.' +
  '2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';

function expandIcon({ isActive }) {
  return (
    <i style={{ marginRight: '.5rem' }}>
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{
          verticalAlign: '-.125em',
          transition: 'transform .2s',
          transform: `rotate(${isActive ? 90 : 0}deg)`,
        }}
      >
        <path d={arrowPath} />
      </svg>
    </i>
  );
}

const App: React.FC = () => {
  const [, reRender] = React.useState({});
  const [accordion, setAccordion] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState<React.Key | React.Key[]>(['4']);

  const time = random();

  const panelItems = Array.from<object, ItemType>({ length: initLength }, (_, i) => {
    const key = i + 1;
    return {
      key,
      header: `This is panel header ${key}`,
      children: <p>{text.repeat(time)}</p>,
    };
  }).concat(
    {
      key: initLength + 1,
      header: `This is panel header ${initLength + 1}`,
      children: (
        <Collapse
          defaultActiveKey="1"
          expandIcon={expandIcon}
          items={[
            {
              key: '1',
              header: 'This is panel nest panel',
              id: 'header-test',
              children: <p>{text}</p>,
            },
          ]}
        />
      ),
    },
    {
      key: initLength + 2,
      header: `This is panel header ${initLength + 2}`,
      children: (
        <Collapse
          defaultActiveKey="1"
          items={[
            {
              key: '1',
              header: 'This is panel nest panel',
              id: 'another-test',
              children: (
                <form>
                  <label htmlFor="test">Name:&nbsp;</label>
                  <input type="text" id="test" />
                </form>
              ),
            },
          ]}
        />
      ),
    },
  );

  const tools = (
    <>
      <button type="button" onClick={() => reRender({})}>
        reRender
      </button>
      <br />
      <br />
      <button type="button" onClick={() => setAccordion((prev) => !prev)}>
        {accordion ? 'Mode: accordion' : 'Mode: collapse'}
      </button>
      <br />
      <br />
      <button type="button" onClick={() => setActiveKey(['2'])}>
        active header 2
      </button>
      <br />
      <br />
    </>
  );

  return (
    <>
      {tools}
      <Collapse
        accordion={accordion}
        onChange={setActiveKey}
        activeKey={activeKey}
        expandIcon={expandIcon}
        openMotion={motion}
        items={panelItems}
      />
    </>
  );
};

export default App;
