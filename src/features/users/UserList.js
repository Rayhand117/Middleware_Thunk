import { useDispatch, useSelector} from "react-redux";
import { fetchUsers } from "./userSlice";
import { Container, Button, Table } from "react-bootstrap";
const UserList = () => {
  const allUser = useSelector((state) => state.users.entities);
  const dispatch = useDispatch();
  const doFetchUsers = () => {
    dispatch(fetchUsers())
  }

  console.log('allUser', allUser);

  return (
    <Container>
      <h1>User Data</h1>
      <div>
        <Button onClick={doFetchUsers}>Get Users</Button>
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

        {allUser.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.body}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default UserList;