import { Button } from 'components/Button';

const buttons = [
  {
    id: '1',
    variant: 'red',
    children: 'Some text from red button',
  },
  {
    id: '2',
    variant: 'yellow',
    children: 'Some text from yellow button',
  },
  {
    id: '3',
    variant: 'blue',
    children: 'Some text from blue button',
  },
];

export const App = props => {
  return (
    <div>
      <h1>React homework template</h1>
      <div>
        {buttons.map(buttonProperties => {
          return (
            <Button
              key={buttonProperties.id}
              variant={buttonProperties.variant}
            >
              {buttonProperties.children}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

// ====================================
/* <div>
  <h1>React homework template</h1>
  <div>
    <Button variant="red">
      <span>
        Hello from first <b>button</b>
      </span>
    </Button>
    <Button variant="blue">
      <span>
        Hello from second <b>button</b>
      </span>
    </Button>
    <Button variant="yellow">
      <span>
        Hello from third <b>button</b>
      </span>
    </Button>
  </div>
</div>; */
// =====================================================
//  <div>
//    <h1>React homework template</h1>
//    <div>
//      <Button variant="red" discount={true}>
//        Some text 1
//      </Button>

//      <Button variant="blue">Some text 2</Button>

//      <Button variant="yellow" discount={true}>
//        Some text 3
//      </Button>
//    </div>
//  </div>;
// ===================================================
