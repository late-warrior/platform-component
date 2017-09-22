import React from 'react';
import ReactDOM from 'react-dom';
import ReactGridLayout from 'react-grid-layout';
import platform from 'platform';

const withPlatform = (config) => {
    // Check if there is a replacement component for this platform and use it if available
    const ReplacementComponent = config[platform.name];
    if (ReplacementComponent) {
        return (BaseComponent) => (props) => <ReplacementComponent {...props} />
    }
    return (BaseComponent) => (props) => <BaseComponent {...props} />
};

const OrigComponent = ({color}) => <div style={{color}}>Orig component</div>
const ReplaceComponent = ({color}) => <div style={{color: 'blue'}}>Replace component</div>

const BasicLayout = ({layout}) => (
  <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
      <div key={'a'}>a</div>
      <div key={'b'}>b</div>
      <div key={'c'}>c</div>
  </ReactGridLayout>
);

const ReplaceLayout = ({columns}) => (
  <table style={{width: 1200}}>
      <tbody>
      <tr>
          <td><div key={'a'}>A</div></td>
          <td><div key={'b'}>B</div></td>
          <td><div key={'c'}>C</div></td>
      </tr>
      </tbody>
  </table>
);

const NewComp = withPlatform({PhantomJS: ReplaceComponent})(OrigComponent);
const NewLayout = withPlatform({PhantomJS: ReplaceLayout})(BasicLayout);

export function constructComponent(id) {
    ReactDOM.render(<NewComp color="red"/>, document.getElementById(id));
}

/**
 * Constructs a layout at a particular dom element and with the elements passed to it
 * @param id {String} Identifier where the layout needs to be created
 * @param components {Array} Array of react components
 * @param options
 * @param options.columns Number of columns
 */
export function constructGrid(id, {columns=2} = {}) {
    const layout = generateLayout(columns);
    ReactDOM.render(<NewLayout layout={layout} columns={{columns}} />, document.getElementById(id));
}

function generateLayout(columns) {
    // Generate layout array based on columns
    const layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return layout;
}


