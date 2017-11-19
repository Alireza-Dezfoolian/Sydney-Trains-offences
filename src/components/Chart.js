import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import C3Chart from 'react-c3js';
import { prepareChartData, setAxis, getTotal } from '../services/prepareChartDataService';
import { chartDataChangedAction } from './../actions/chartDataChangedAction';
import { chartSetting } from '../chartSetting';
import Total from './Total';
import Toggle from './Toggle';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { dataType: chartSetting.buttons && chartSetting.buttons[0]};
    this.onClick = this.onClick.bind(this);
    this.dispatchValue = this.dispatchValue.bind(this);
  }

  componentDidMount() {
    this.dispatchValue();
  }

  dispatchValue() {
    this.props.chartDataChangedAction(this.state.dataType);
  }

  onClick(e) {
    this.setState({ dataType: e.target.name });
    this.dispatchValue();
  }

  render() {
    if (this.props.data) {
      const {data} = this.props;
      const total = getTotal(data.sydney_trains_offences, this.state.dataType);
      return (
        <section>
          <C3Chart
            title={ chartSetting.c3Title }
            size={ chartSetting.c3Size }
            axis={ setAxis(data.sydney_trains_offences, this.state.dataType) }
            data={ prepareChartData(data.sydney_trains_offences, this.state.dataType) } />
          <Toggle buttons={ chartSetting.buttons }
            onClick={ this.onClick }
            dataType={ this.state.dataType } />
          <Total total={ total }/>
        </section>
      )
    } else {
      return <div className="loading">Loading...</div>
    }
  }
}

function mapStateToProps(state) {
  return {
    chartData: state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ chartDataChangedAction: chartDataChangedAction },
    dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Chart);
