import React from 'react'
// import { ButtonChangeData } from './components/ButtonChangeData'
import { Page1 } from './components/Page1'
import { Page2 } from './components/Page2'
import { DataProvider } from './context/DataContext'



function App() {

  

  return (
    <div>
      <DataProvider>
        <Page1 />
        <Page2 />
        {/* <ButtonChangeData /> */}
      </DataProvider>
    </div>
  );
}

export default App;
