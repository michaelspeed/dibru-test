import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {initializeIcons} from '@uifabric/icons';
import {Spinner, SpinnerSize} from "office-ui-fabric-react";

const HomeLazy = React.lazy(() => import('./routes/Home'))
const Suspense = React.Suspense

initializeIcons()

const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner size={SpinnerSize.large}/>}>
        <BrowserRouter>
            <Switch>
                <Route render={() => <HomeLazy/>}/>
            </Switch>
        </BrowserRouter>
    </Suspense>
  );
}

export default App;
