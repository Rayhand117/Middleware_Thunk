// import logo from './logo.svg';
// import {useDispatch, useSelector} from "react-redux";
// import { decrement, increment } from "./features/counter/counterSlice";
import './App.css';
import CommentList from "./features/comments/CommentList";
// import AuthLoginForm from "./features/auth/AuthLoginForm";
import React, { useEffect } from 'react';

function App() {
  // const dispatch = useDispatch()
  // const count = useSelector(state => state.counter.value)
  // const [data, setData] = useState(null)
  useEffect(() => {
    document.title = 'Redux Middleware Async Thunk';
  });
  return (
    <div className="App">
      <header className="App-header">
        {/* <AuthLoginForm /> */}
        <CommentList />
      </header>
    </div>
  );
}

export default App;
