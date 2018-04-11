import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigation from './config/routes';

EStyleSheet.build({
  $primaryRed: '#ffaa22',
});
export default () => <Navigation />;
