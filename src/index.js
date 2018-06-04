import React from 'react';
import { Text } from 'react-native';

let _localization = {};

export function setLocalization(localization) {
	if(_localization!= undefined){
		_localization = localization;	
	}
    
}

export function translate(value) {
	if(!_localization.hasOwnProperty(value))
      {
          return value;
      }
      else {
          return _localization[value];
      }
}

export const Translate = ({ value }) => (
    <Text>{translate(value)}</Text>
);
