import React, { useEffect, useRef, useState } from 'react';
import { baseUrl } from '../api';
import Input from '../components/Input';
import Loading from '../components/Loading';
import UsersContainer from '../components/UsersContainer';
import { UserType } from '../types';

const Users: React.FC = () => {
  const [users, setUsers] = useState([] as UserType[]);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useRef<HTMLInputElement>(null);

  async function AllUsers() {
    if (user.current?.value === '') {
      setLoading(true);
      const res = await fetch(baseUrl);
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }
  }
  const findUser = async () => {
    setLoading(true);
    if (user.current?.value !== '') {
      const res = await fetch(baseUrl + '/' + user.current?.value);
      const data = await res.json();
      setUsers(() => [data]);
      if (user.current?.value) user.current.value = '';
    } else {
      AllUsers();
    }
    setLoading(false);
  };
  useEffect(() => {
    AllUsers();
  }, [setUsers]);
  return (
    <div className="user">
      <Input findUser={findUser} user={user} />
      <div className="users_container">
        {loading ? <Loading /> : <UsersContainer users={users} />}
      </div>
    </div>
  );
};

export default Users;
