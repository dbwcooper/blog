### 谈谈 redux

- `redux` 是什么？

  - 它是一个管理全局状态的库，它使用单向数据流。
  - 应用程序的全局状态使用一个 JS 对象存储，我们称之为 state。
  - 当应用程序的状态发生变更时，它的流程是这样的
    - UI `dispatch` 一个 `action` 对象， `action` 用来描述发生了什么
    - `reducer` 接收到 `action` 对象，根据 `action` 对象计算得出新的 state。

- `redux` 的 state 更新时，如何通知 UI 重新渲染？

  - 通过事件订阅监听函数， 每次 reducer 执行完成之后，都会触发预设的 订阅函数，这些函数可以是封装之后的 `ReactDom.render`;

- `redux-thunk` 支持 dispatch 参数 action 为一个函数 fn，fn 会接受到 dispatch 函数，fn 可以是一个异步函数。

- 最近的 redux toolkit 版本内置了 immer，允许在 reducer 里面直接操作 state。但是其实的 immer 的 draft 对象。
- 自动的帮我们写 action。

- reducer

  ```
  函数接受两个参数 action , initialState
  action = {
    type: '',
    payload: '',
  }

  返回 state:
  function reducer(action, initialState) {
    if() {
      return newState;
    }
    return initialState
  }
  ```

- store 用于连接 reducer 与 listener
  接受两个参数，reducer，initialState

  返回一个对象
  {
  getState: () => state,
  subscription: (listener) => {
  listeners.push(listener)
  },
  dispatch: (action) {
  reducer(action, state)
  listeners.forEach(listener)
  }
  }

  ```js
  function createStore(reducer, preloadedState) {
    let state = preloadedState;
    const listeners = [];

    function getState() {
      return state;
    }

    function subscribe(listener) {
      listeners.push(listener);
      return function unsubscribe() {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    }

    function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    }

    dispatch({ type: "@@redux/INIT" });

    return { dispatch, subscribe, getState };
  }
  ```

- combineReducer  
  接受一个参数 object，object 的 value 为 reducer 函数，key 为 reducer 函数 的 name。  
  返回一个新的函数 allReducers，此函数内会遍历 传入的 reducers，执行 allReducers 会返回所有 reducer 返回的 state 组成的对象。

- React-Redux
  store 传入 Provider 组件中，以便后续组件能够使用 dispatch 等方法操作 state。


- Redux 中间件
  - 为 middle 传入 store api，如 dispatch；
  - 指定了 middleware 的执行顺序，使用 compose 函数 从右往左一次执行 中间件函数。
 

- redux-thunk
  它是一个函数，处理了 action 为 object， fn时的不同处理方式
   返回三个函数
  - 函数一 参数为对象 （getState, dispatch）
  - 函数二 参数为 dispatch
  - 函数三 参数为 action （如果是 reducer 则是 对象，如果是custom reducer 则是 function）
    - 如果 action 为函数，则函数会被传入 store 的api， getState 和 dispatch
    - 如果 action 为对象，则直接执行 dispatch(action)

- redux-saga
  - https://juejin.cn/post/7009110590752817183#heading-8

