import React from 'react';
import { Text } from 'react-native';

let _localization = {};

export function setLocalization(localization) {
    _localization = localization;
}

export function translate(value) {
    return _localization[value];
}

export const Translate = ({ value }) => (
    <Text>{translate(value)}</Text>
);
