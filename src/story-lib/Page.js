import React from 'react';
import { StoryContext } from './StoryContext';
import { Choice } from './Choice';


export class Page extends React.Component {
  render() {
    const {
      name,
      choices,
      content,
    } = this.props;
    
    return (
      <StoryContext.Consumer>
        {context => {
        
          if (context.pageName !== name) {
            return;
          }
          
          return (
            <div className={`Page Page-${name}`}>
              <div class="content">{ content }</div>
              <div className="choices">
                {choices || (
                  <Choice 
                    label="Continue"
                    sendToPage={context.endsOnPage}
                  />
                )}
              </div>
            </div>
          );
          
        }}
      </StoryContext.Consumer>
    );
  }
}