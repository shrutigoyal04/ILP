import './App.css'
import Counter from './Counter.jsx';
import LikeButton from './LikeButton.jsx';
import Ludo from './Ludo.jsx';
import TodoList from './TodoList.jsx';
import Lottery from './Lottery.jsx';
import { sum } from './helper.js';
import Form from './Form.jsx';
import CommentForm from './CommentForm.jsx';
import Comments from './Comments.jsx';
import Counters from './Counters.jsx';
import Joker from './Joker.jsx';

function App() {

   let winCondition = (ticket)=>{
        return sum(ticket) === 15;
    }
  return (
    <>
      {/* <div>Shruti</div> */}
      {/* <Counter /> */}
      {/* <LikeButton/> */}
      {/* <Lottery n={3} winCondition={winCondition}/> */}
      {/* <Form/> */}
      {/* <CommentForm/> */}
      {/* <Comments/> */}
      {/* <Counters /> */}
      <Joker />

    </>
  )
}

export default App
