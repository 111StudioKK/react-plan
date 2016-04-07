export const flexAlignments = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
export const flexJustifications = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];

export const defaultBreakpoints = {
  small: '(min-width: 0em)',
  medium: '(min-width: 48em)',
  large: '(min-width: 62em)',
  wide: '(min-width: 75em)'
};

export function warning(message) {
  if(process.env.NODE_ENV !== 'production') {
    console.warn(message);
  }
}