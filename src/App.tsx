import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Spinner, SpinnerSize} from "office-ui-fabric-react";
import 'carbon-components/scss/globals/scss/styles.scss';
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';

const HomeLazy = React.lazy(() => import('./routes/Home'));
const Suspense = React.Suspense;


const App: React.FC = () => {
  return (
    <Customizer {...FluentCustomizations}>
        <Suspense fallback={<Spinner size={SpinnerSize.large} label={'Lazy Loading a page ...'} style={{marginTop: 100}}/>}>
            <BrowserRouter>
                <Switch>
                    <Route render={() => <HomeLazy/>}/>
                </Switch>
            </BrowserRouter>
        </Suspense>
    </Customizer>
  );
};

export default App;
