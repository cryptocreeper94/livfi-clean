// App.jsx
import React from 'react';
import TokenomicsPage from './Component/TokenomicsPage';

import Spiral1 from './visuals/Spiral1';

const App = () => {
  return (
    <div className="lif-app lif-canon">
      <Spiral1 />
      <main className="lif-main">
        <TokenomicsPage />
      </main>
    </div>
  );
};

export default App;

