import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Demo1 from './components/chapter1';
import Demo2 from './components/chapter2';
import Demo4 from './components/chapter4';
import ReactRefs from './components/interview-react/ReactRefs';
import ReactLifeCycle from './components/interview-react/ReactLifeCycle';

import ReactUseState from './components/interview-react/ReactUseState';
import ReactUseEffect from './components/interview-react/ReactUseEffect';
import ReactUseContext from './components/interview-react/ReactUseContext';
import ReactUseReducer from './components/interview-react/ReactUseReducer';
import ReactUseCallback from './components/interview-react/ReactUseCallback';
import ReactUseMemo from './components/interview-react/ReactUseMemo';
import ReactUseRef from './components/interview-react/ReactUseRef';
import ReactUseImperativeHandle from './components/interview-react/ReactUseImperativeHandle';
import ReactUseLayoutEffect from './components/interview-react/ReactUseLayoutEffect';

import ReactDidUpdate from './components/react-lifecycle/ReactDidUpdate';
import ReactUseForceUpdate from './components/react-lifecycle/ReactUseForceUpdate';

import ReactDebounce from './components/react-hooks-custom/UseDebounce';
import ReactGetSnapshotBeforeUpdate from './components/react-lifecycle/ReactGetSnapshotBeforeUpdate';
import ReactUnMountNode from './components/react-dom-api/ReactUnMountNode';
import ReactFindDomNode from './components/react-dom-api/ReactFindDomNode';
import ReactCreatePortal from './components/react-dom-api/ReactCreatePortal';
import ReactPureComponent from './components/interview-react/ReactPureComponent';
import ReactCloneElement from './components/interview-react/ReactCloneElement';
import ReactSuspense from './components/interview-react/ReactSuspense';

const ReactMemo = lazy(() => import('./components/interview-react/ReactMemo'));

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

              <Route path='/'>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div
                    style={{
                      width: '40vh',
                      height: '40vh',
                      border: '1px solid red',
                    }}
                  >
                    1
                  </div>
                  <div
                    style={{
                      width: '40vh',
                      height: '40vh',
                      border: '1px solid green',
                    }}
                  >
                    2
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '500px',
                    height: '500px',
                  }}
                >
                  <div
                    style={{
                      height: '40%',
                      paddingLeft: '40%',
                      border: '1px solid red',
                    }}
                  >
                    1
                  </div>
                  <div
                    style={{
                      height: '40%',
                      paddingLeft: '40%',
                      border: '1px solid green',
                    }}
                  >
                    2
                  </div>
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;

<div style={{ display: 'flex', justifyContent: 'center', width: '500px', height: '500px' }}>
  <div style={{ height: '40%', paddingLeft: '40%', border: '1px solid red' }}>
    1
  </div>
  <div style={{ height: '40%', paddingLeft: '40%', border: '1px solid red' }}>
    2
  </div>
</div>
