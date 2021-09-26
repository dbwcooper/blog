import React, { Suspense, lazy } from "react";
import ReactErrorBoundary from "./ReactErrorBoundary";

const timeout = (delay: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, delay);
  });
};

const MemoDemo = lazy(() => timeout(2000).then(() => import("./ReactMemo")));
const ReactRefsDemo = lazy(() =>
  timeout(4000).then(() => import("./ReactRefs"))
);

/**
 * Suspense 配合 lazy 一起使用
 */

const App = () => {
  return (
    <div>
      <ReactErrorBoundary>
        <Suspense fallback={<div>loading</div>}>
          <div>
            memo
            <MemoDemo />
          </div>
          <div>
            ref
            <ReactRefsDemo />
          </div>
        </Suspense>
      </ReactErrorBoundary>
    </div>
  );
};

export default App;
