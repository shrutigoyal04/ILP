import { useState } from "react";
import "./Comments.css";
import CommentForm from "./CommentForm";

export default function Comments() {
  let [comments, setComments] = useState([
    {
      username: "Shruti",
      remarks: "This is a comment",
      rating: 5,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    console.log("New comment added:", comment);
  };
  return (
    <>
      <div>
        <h3>All comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            <p>-{comment.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <hr />
      <CommentForm addNewComment={addNewComment} />
    </>
  );
}
