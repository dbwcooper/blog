import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Demo1 from './components/chapter1';
import Demo2 from './components/chapter2';
import Demo4 from './components/chapter4';
import ReactRefs from './components/react-api/ReactRefs';
import ReactLifeCycle from './components/react-api/ReactLifeCycle';

import ReactUseState from './components/react-api/ReactUseState';
import ReactUseEffect from './components/react-api/ReactUseEffect';
import ReactUseContext from './components/react-api/ReactUseContext';
import ReactUseReducer from './components/react-api/ReactUseReducer';
import ReactUseCallback from './components/react-api/ReactUseCallback';
import ReactUseMemo from './components/react-api/ReactUseMemo';
import ReactUseRef from './components/react-api/ReactUseRef';
import ReactUseImperativeHandle from './components/react-api/ReactUseImperativeHandle';
import ReactUseLayoutEffect from './components/react-api/ReactUseLayoutEffect';

import ReactDidUpdate from './components/react-lifecycle/ReactDidUpdate';
import ReactUseForceUpdate from './components/react-lifecycle/ReactUseForceUpdate';

import ReactDebounce from './components/react-hooks/UseDebounce';
import ReactGetSnapshotBeforeUpdate from './components/react-lifecycle/ReactGetSnapshotBeforeUpdate';
import ReactUnMountNode from './components/react-dom-api/ReactUnMountNode';
import ReactFindDomNode from './components/react-dom-api/ReactFindDomNode';
import ReactCreatePortal from './components/react-dom-api/ReactCreatePortal';
import ReactPureComponent from './components/react-api/ReactPureComponent';
import ReactCloneElement from './components/react-api/ReactCloneElement';
import ReactSuspense from './components/react-api/ReactSuspense';
import CssCenter from './components/css/Center';
import VH from './components/css/VH';

const ReactMemo = lazy(() => import('./components/react-api/ReactMemo'));

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Suspense fallback={<div>loading</div>}>
        <Router>
          <nav
            style={{
              width: '230px',
              paddingTop: '48px',
              borderRight: '1px solid #d2d4d6',
              height: '100vh',
            }}
          >
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/react-suspense'>React Suspense</Link>
              </li>
              <li>
                <Link to='/react-cloneelement'>React.CloneElement</Link>
              </li>
              <li>
                <Link to='/react-memo'>React.memo</Link>
              </li>
              <li>
                <Link to='/react-hooks'>React Hooks</Link>
              </li>
              <li>
                <Link to='/css-center'>Css Center</Link>
              </li>
            </ul>
          </nav>
          <div style={{ padding: '48px' }}>
            <Switch>
              <Route path='/react-suspense'>
                <ReactSuspense />
              </Route>
              <Route path='/react-cloneelement'>
                <ReactCloneElement />
              </Route>
              <Route path='/react-memo'>
                <ReactMemo />
              </Route>

              <Route path='/css-center'>
                <CssCenter />
              </Route>

              <Route path='/react-hooks'>
                <ReactDebounce />
              </Route>

              <Route path='/'>
                <VH />
              </Route>
            </Switch>
          </div>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
