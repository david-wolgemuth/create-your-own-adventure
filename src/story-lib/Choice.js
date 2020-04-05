import React from 'react';
import { StoryContext } from './StoryContext';

export class Choice extends React.Component {
  render () {
    const {
      sendToPage,
      label,
    } = this.props;
    
    return (
      <StoryContext.Consumer>
        {context => (
          <button
            className="Choice"
            onClick={() => context.setPageName(sendToPage)}
          >
            {label} 
          </button>
        )}
      </StoryContext.Consumer>
    );
  } 
}
