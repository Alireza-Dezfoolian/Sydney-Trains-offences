import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import  Chart from './components/Chart';
import { chartSetting } from './chartSetting';

const App = props => {
  const { chartData } = props.data;
  return (
    <div className="chart" style={{width : chartSetting.width}}>
      <Chart
        setting = { chartSetting }  
        data = { chartData } 
        chart = { props.data.switchChartData }/> 
    </div>
  )
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(App);
