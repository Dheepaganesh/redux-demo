import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { FetchUser } from "../redux/user/userAction";
import styled from "styled-components";

const Table = styled.table`
  width: 60%;
  margin: 0 auto;
  border: 1 px solid black;
  border-colapse: colapse;
`;

const Row = styled.tr`
  border: 1 px solid black;
`;

const Column = styled.th`
  border: 1 px solid black;
`;

const Head = styled.td`
  border: 1 px solid black;
`;

function UseContainer() {
  const users = useSelector((state) => state?.user?.user);
  const loading = useSelector((state) => state?.user?.loading);
  const error = useSelector((state) => state?.user?.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUser());
  }, []);
  return loading ? (
    <h1>Loading</h1>
  ) : error ? (
    <h1>error</h1>
  ) : (
    <div>
      <h2>UserList</h2>
      <div>
        <Table>
          <thead>
            <Row>
              <Head>Name</Head>
              <Head>Email</Head>
              <Head>Address</Head>
            </Row>
          </thead>
          <tbody>
            {users &&
              users?.map((item) => {
                return (
                  <Row>
                    <Column>{item?.name}</Column>
                    <Column>{item?.email}</Column>
                    <Column>{item?.address?.city}</Column>
                  </Row>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UseContainer;
