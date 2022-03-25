import PageOne from './PageOne';
import PageTwo from './PageTwo';
import React, { Component } from 'react';
import { View } from 'react-native';

export default class MeargeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.route.params.id,
      component: <PageOne Here={Id} />,
    }
    const Id = (this.state.id)
    console.log("------8888----")
    console.log(Id)
    console.log("------8888----")
  }

  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.setState({
        component: <PageTwo />
      })
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      this.state.component
    );
  }
}