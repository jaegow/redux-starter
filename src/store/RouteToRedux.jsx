import React, { Component } from 'react';
import { connect } from 'react-redux';
import { objectFromString } from '../utils/object';
import { buildLoggers } from '../utils/log';
import { saveRouterData } from './actions/routerActions';

const { log } = buildLoggers('RouteToRedux');

class RouteToRedux extends Component {
  componentDidMount() {
    // log('componentDidMount()', this.props);
    this.props.saveRouterData(this.props);
  }

  componentDidUpdate(prevProps) {
    // log('componentDidUpdate()', this.props);
    if (
      objectFromString(this.props, 'location')
      !== objectFromString(prevProps, 'location')
    ) {
      // log('componentDidUpdate() NEW PROPS, this.props', this.props);
      this.props.saveRouterData(this.props);
    }
  }

  render() {
    return false;
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { saveRouterData };

export default connect(mapStateToProps, mapDispatchToProps)(RouteToRedux);
