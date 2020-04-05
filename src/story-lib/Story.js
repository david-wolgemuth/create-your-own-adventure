import React from 'react';
import { StoryContext } from './StoryContext';


export class Story extends React.Component {
  constructor(props) {
    super(props);
    const { startsOnPage } = props;
      
    this.state = { pageName: startsOnPage };
  }
  
  setPageName = pageName => {
    this.setState({ pageName});
  }
  
  render() {
    const { pageName } = this.state;
    const { children, startsOnPage, endsOnPage } = this.props;
    const { setPageName } = this;
    
    const context = {
      pageName,
      setPageName,
      endsOnPage,
      startsOnPage,
    };
    
    return (
      <StoryContext.Provider value={context}>
        <div className="Story">
          {children}
        </div>
      </StoryContext.Provider>
    );
  }
}
