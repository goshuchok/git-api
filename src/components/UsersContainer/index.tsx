import React from 'react';
import { Link } from 'react-router-dom';
import { UserType } from '../../types';
import styles from './UsersContainer.module.scss';

interface UsersContainerProps {
  users: UserType[];
}

const UsersContainer: React.FC<UsersContainerProps> = ({ users }) => {
  return (
    <div className={styles.card}>
      {users &&
        users.map(
          (user, i) =>
            user.login && (
              <div key={i} className={styles.users_card}>
                <img
                  className={styles.avatar}
                  src={user.avatar_url}
                  alt="avatar"
                />
                <h3>{user?.login}</h3>
                <h1>{user?.name}</h1>
                <Link to={`/${user?.login}`}>
                  <button className="view">View</button>
                </Link>
              </div>
            )
        )}
    </div>
  );
};

export default UsersContainer;
