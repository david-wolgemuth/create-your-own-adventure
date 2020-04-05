import React from 'react';

// React's `Context` library helps us "share state" 
//  across the application
export const StoryContext = React.createContext({ 

  // `pageName` must be a `string`
  pageName: "", 
  
  // `setPageName` must be a `function`
  setPageName: function () {},  
});
