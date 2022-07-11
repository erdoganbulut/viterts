import React, { useEffect } from 'react';
import { Button, Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import {
  addUser,
  deleteUser,
  fetchUsers,
  IUser,
  selectStatus,
  selectUsers,
  updateUser,
} from '../../../../store/slices/user.slice';
import { ERequestStatus } from '../../../../common/request';

const UserList = () => {
  const userList = useAppSelector(selectUsers);
  const usersStatus = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <p style={{ textAlign: 'right' }}>
        <Button
          type="primary"
          icon={<UserAddOutlined />}
          onClick={() =>
            dispatch(
              addUser({
                id: '9999',
                createdAt: '2022-07-11T05:09:18.339Z',
                avatar: 'https://i.pravatar.cc/128?img=3',
                name: 'Erdogan BULUT',
              }),
            )
          }
        >
          Add new user
        </Button>
      </p>
      <Table dataSource={userList} loading={usersStatus === ERequestStatus.LOADING}>
        <Table.Column title="ID" dataIndex="id" key="id" />
        <Table.Column title="Created At" dataIndex="createdAt" key="createdAt" />
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column
          title="Avatar"
          key="avatar"
          render={(user: IUser) => <img alt={user.name} src={user.avatar} />}
        />
        <Table.Column
          title="Action"
          key="action"
          render={(_: any, record: IUser) => (
            <Space size="middle">
              <Button
                type="primary"
                shape="round"
                icon={<DeleteOutlined />}
                onClick={() => dispatch(deleteUser(record.id))}
              />
              <Button
                type="primary"
                shape="round"
                icon={<EditOutlined />}
                onClick={() => dispatch(updateUser({ ...record, name: 'Erdogan BULUT' }))}
              />
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default UserList;
