import React from 'react';
import TestComponent from './test'
import { connect } from 'react-redux'
import { actions as loadTopicItem } from '../redux/index/indexAction'
const mapStateToProps = (state) => ({
	IndexListItem: state.indexItem.topicdata
})
var data=[1,2,3,4,5,6]
class IndexComponent extends React.Component {
  componentDidMount () {
  		console.log(this.props.loadTopicItem())
  }
  render() {
    return (
      <div className="index" style={{clear: 'both', marginTop: '50px'}}>
        <div className="notice">首页开始啦！</div>
        <TestComponent datas={data}/>
      </div>
    );
  }
}

IndexComponent.defaultProps = {
};

export default connect(mapStateToProps, loadTopicItem)(IndexComponent);
