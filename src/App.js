import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text'
import withBorder from './withBorder'
import { renameProp, compose, mapProps } from 'recompose'
import ColorlessText from './ColorlessText'
import { omit } from 'lodash/fp'

const BorderedText = compose(
  withBorder,
  renameProp('textColor', 'color')
)(Text)

const DoubleBorderedText = compose(
  renameProp('outerBorderColor', 'color'),
  withBorder, 
  renameProp('innerBorderColor', 'color'),
  withBorder, 
  renameProp('textColor', 'color')
)(Text)

const omitProps = compose(mapProps, omit)

const SameColorBorderedText = withBorder(Text)
const SameColorDoubleBorderedText = withBorder(withBorder(Text))

const BorderedColorlessText = compose(
  withBorder, 
  omitProps(['color'])
)(ColorlessText)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Text text='Hello' color='red'/>
        <BorderedText text='Hello' textColor='orange' color='blue' onClick={m => {console.log(`click ${m}`)}}/>
        
        <DoubleBorderedText text='Hello' innerBorderColor='red' textColor='pink' outerBorderColor='green'/>
        <SameColorBorderedText text='Hello' color='pink'/>
        <SameColorDoubleBorderedText text='Hello' color='magenta'/>
        
        <ColorlessText text='Colorless'/>
        <BorderedColorlessText color="red" text='Colorless'/>
      </div>
    );
  }
}

export default App;
