#REACT PLAN [![npm version](https://badge.fury.io/js/react-plan.svg)](https://badge.fury.io/js/react-plan)

##MOTIVATION
The main goal of this library is to provide a declarative (JSX) way to build a responsive webapp leveraging the flex model.

##DEMOS
//TODO

##INSTALL

```javascript
npm i --save react-plan
```
##USAGE

###Containers (Rows & columns)
The container classes, ```Rows``` and ```Colums``` create [flex containers](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) DOM elements. They share the same props, the only difference betwwen the two is that they have the flex-direction attribute set to row or column by default.

Available props:

| Prop         	| Type            	| Description                                                                                                                                   	| Values                                                                                                                                                              	|
|--------------	|-----------------	|-----------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| align        	| String          	| Sets the align-items alignement on the flex axis                                                                                              	| flex-start, flex-end, center, baseline, stretch (default)                                                                                                           	|
| className    	| String          	| A Classname being passed to the flex container. If responsive breakpoints are set, the current breakpoint value is appended to the className. 	| Any                                                                                                                                                                 	|
| itemDefaults 	| Object          	| Allows to pass default props to all the child Items.                                                                                          	| An object of Item props.                                                                                                                                            	|
| justify      	| String          	| Sets the justify-content flex property                                                                                                        	| flex-start, flex-end, center, space-between, space-around                                                                                                           	|
| noWrap       	| Bool            	| Sets the flex-wrap property to nowrap                                                                                                         	| By default, in order to support responsive layouts all the containers are set to wrap, if you wish to override this behavior set this prop to true.                 	|
| reverse      	| Bool            	| Reverses the container's flex-direction                                                                                                       	|                                                                                                                                                                     	|
| size         	| Number or String 	| Sets the flex property                                                                                                                        	| If a number is provided (1), the flex shorthand property is set: flex: 1, if a width is provided ('20%'), the flex shortahnd property is set as follows flex: 1 10% 	|
| small        	| Number or String 	| Sets and override the size property when the small breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the small breakpoint is active.                                                                         	|
| medium        	| Number or String 	| Sets and override the size property when the medium breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the medium breakpoint is active.                                                                         	|
| large        	| Number or String 	| Sets and override the size property when the large breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the large breakpoint is active.                                                                         	|
| wide        	| Number or String 	| Sets and override the size property when the wide breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the wide breakpoint is active.                                                                         	|

###Items

The ```Item``` class creates [flex item](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) DOM elements.

Available props:

| Prop         	| Type            	| Description                                                                                                                                   	| Values                                                                                                                                                              	|
|--------------	|-----------------	|-----------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| align        	| String          	| Sets the align-self alignement on the flex axis                                                                                              	| flex-start, flex-end, center, baseline, stretch (default)                                                                                                           	|
| className    	| String          	| A Classname being passed to the flex container. If responsive breakpoints are set, the current breakpoint value is appended to the className. 	| Any                                                                                                                                                                 	|
| order        	| Number          	| Sets the order flex property                                                                                                                  	| 1, 2, 3, ...                                                                                                                                                        	|
| size         	| Number or String 	| Sets the flex property                                                                                                                        	| If a number is provided (1), the flex shorthand property is set: flex: 1, if a width is provided ('20%'), the flex shortahnd property is set as follows flex: 1 10% 	|
| small        	| Number or String 	| Sets and override the size property when the small breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the small breakpoint is active.                                                                         	|
| medium        	| Number or String 	| Sets and override the size property when the medium breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the medium breakpoint is active.                                                                         	|
| large        	| Number or String 	| Sets and override the size property when the large breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the large breakpoint is active.                                                                         	|
| wide        	| Number or String 	| Sets and override the size property when the wide breakpoint is active.                                                                      	| When set to 'hide', it prevents rendering the children when the wide breakpoint is active.                                                                         	|

##CONTRIBUTE
//TODO
