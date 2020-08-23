// import data from './data.json';
import Picker from './Picker';
import React from 'react';
export * from './Picker';

export let a = Picker;

export const m: number = 3;

async function b() {
  return 2;
}

export default b;
console.log('i am entry module', a, b, React, global);
