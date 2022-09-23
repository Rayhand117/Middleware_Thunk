import { useDispatch, useSelector} from "react-redux";
import { fetchComments } from "./commentSlice";
import { Container, Button, Table, Alert, Spinner } from "react-bootstrap";

const CommentList = () => {
  const allComment = useSelector((state) => state.comments.entities);
  const dispatch = useDispatch();
  const doFetchComments = (e) => {
    e.preventDefault()
    dispatch(fetchComments())
  }

  console.log('allComment', allComment);

  return (
    <Container>
      <h1>Comment Data</h1>
      <div>
        <Button onClick={doFetchComments}>
          Get Comments
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
        </tr>
        </thead>
        <tbody>

        {allComment.map((comment, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{comment?.name}</td>
            <td>{comment?.email}</td>
            <td>{comment?.body}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default CommentList;