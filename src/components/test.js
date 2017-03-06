require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class TestComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">{
        	this.props.datas.map((item, index)=>{
        		return (
        			<div key={index}>{item}</div>
        			)
        	})
        }</div>
      </div>
    );
  }
}

TestComponent.defaultProps = {
};

export default TestComponent;
