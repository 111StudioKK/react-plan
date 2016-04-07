import React from 'react';
import Row from '../src/Row.jsx';
import Column from '../src/Column.jsx';
import Item from '../src/Item.jsx';
import BreakpointWatcher from './BreakpointWatcher.jsx'
import Package from '../package.json';
// import Readme from '../README.md';

export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  documentation() {
    return { __html : 'Body'};
  }

  render() {
    return (
      <Column>
        <Row className="header" align="center">
          <span className="watcher"><BreakpointWatcher /></span>
          <Item size="66%" mobile="100%" className="hero">
            <h1><span className="type">{Package.name}</span><span className="cursor">|</span></h1>
            <h2>{Package.description}</h2>
          </Item>
          <Item mobile="100%" className="repo-link">
            <a href="https://github.com/111StudioKK/react-plan" className="button"><span><small>View project on</small> GitHub</span></a>
          </Item>
        </Row>
        <Row className="body">
          <Item size={3}>
            <div dangerouslySetInnerHTML={this.documentation()}></div>
          </Item>
          <Item className="menu" size={1} align="stretch" mobile="hide" tablet="hide">
            <div>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#demonstration">Demonstration</a></li>
              </ul>
              <img src={require('./images/download-button.png')} alt=""/>
              <img src={require('./images/download-button.png')} alt=""/>
               <p className="repo-owner"><a href="https://github.com/111StudioKK/react-plan">react-plan</a> is maintained by <a href="https://github.com/111StudioKK">111StudioKK</a>.</p>
              <p>This page was generated by <a href="https://pages.github.com">GitHub Pages</a> using the Architect theme by <a href="https://twitter.com/jasonlong">Jason Long</a>.</p>
            </div>
          </Item>
        </Row>
     </Column>
    );
  }
}