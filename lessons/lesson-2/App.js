import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default class App extends React.Component {
  render() {
    return <EventList />;
  }
}
