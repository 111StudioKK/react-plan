#REACT PLAN

##MOTIVATION
The main goal of this library is to provide a declarative (JSX) way to build a responsive webapp leveraging the flex model.

##DEMOS
//TODO

##INSTALL

```javascript
npm i --save react-plan
```
##USAGE

###Responsive breakpoint listener
First step is to wrap your react application with the Responsive listener.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Responsive} from 'react-plan';
import App from './App.jsx';

ReactDOM.render(<Responsive><App /></Responsive>, document.getElementById('root'));
```

By default the responsive breakpoints available are :
1.  small: min-width: 0em
2.  medium: min-width: 48em
3.  large: min-width: 62em
4.  wide: min-width: 75em

The ```Responsive``` class listens to the window size changes and dispatch the current breakpoint to react-plan's containers and items. (see below)

**Note:** Using the responsive helper is not mandatory, you can use the Containers and Items Component alone.
###Containers (Rows & columns)
The container classes, ```Rows``` and ```Colums``` are [flex containers.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) they share the same props, the only difference betwwent the two is that they have the flex-direction attribute set to row or column by default.

Available props:

| Prop         	| Type            	| Description                                                                                                                                   	| Values                                                                                                                                                              	|
|--------------	|-----------------	|-----------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| align        	| String          	| Sets the align-items alignement on the flex axis                                                                                              	| flex-start, flex-end, center, baseline, stretch (default)                                                                                                           	|
| className    	| String          	| A Classname being passed to the flex container. If responsive breakpoints are set, the current breakpoint value is appended to the className. 	| Any                                                                                                                                                                 	|
| itemDefaults 	| Object          	| Allows to pass default props to all the child Items.                                                                                          	| An object of Item props.                                                                                                                                            	|
| justify      	| String          	| Sets the justify-content flex property                                                                                                        	| flex-start, flex-end, center, space-between, space-around                                                                                                           	|
| noWrap       	| Bool            	| Sets the flex-wrap property to nowrap                                                                                                         	| By default, in order to support responsive layouts all the containers are set to wrap, if you wish to override this behavior set this prop to true.                 	|
| order        	| Number          	| Sets the order flex property                                                                                                                  	| 1, 2, 3, ...                                                                                                                                                        	|
| reverse      	| Bool            	| Reverses the container's flex-direction                                                                                                       	|                                                                                                                                                                     	|
| size         	| Number or String 	| Sets the flex property                                                                                                                        	| If a number is provided (1), the flex shorthand property is set: flex: 1, if a width is provided ('20%'), the flex shortahnd property is set as follows flex: 1 10% 	|
| small        	| Number or String 	| Sets and override the size property when the small breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the small breakpoint is active.                                                                         	|
| medium        	| Number or String 	| Sets and override the size property when the medium breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the medium breakpoint is active.                                                                         	|
| large        	| Number or String 	| Sets and override the size property when the large breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the large breakpoint is active.                                                                         	|
| wide        	| Number or String 	| Sets and override the size property when the wide breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the wide breakpoint is active.                                                                         	|

###Items

###Listening to the breakpoints in your components
Behind the scenes, ```Responsive``` uses React's context. If you wish to subscribe your component to the breakpoint change, all you need to do is to add the breakpoint context type to your component.

```javascript
import React from 'react';

class MyComponent extends React.Component {

  constructor(props, context) {
    //The current breakpoint is availble in context.breakpoint
    //an is also passed in all the component's lifecycle methods
    //described here https://facebook.github.io/react/docs/context.html#referencing-context-in-lifecycle-methods
  }

}

MyComponent.contextTypes = {
  breakpoint: React.PropTypes.string
};
```
##CONTRIBUTE
//TODO