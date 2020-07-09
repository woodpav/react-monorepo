import React from 'react';

const App = ({ greeting }: { greeting?: string }) => (
  <div>{`Hello ${greeting || 'world'}`}</div>
);

export default App;
