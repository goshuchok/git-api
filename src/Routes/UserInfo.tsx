import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from '../api';

import Repo from '../components/Repo';

import { UserType } from '../types';

const UserInfo: React.FC = () => {
  const [user, setUser] = useState<UserType[]>([]);

  const [type] = useState<string>('repos');
  const [info, setInfo] = useState([]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  async function getUserInfo() {
    const res = await fetch(baseUrl + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }

  async function getUrl() {
    const res = await fetch(baseUrl + pathname + `/${type}`);
    const data = await res.json();
    setInfo(data);
  }

  useEffect(() => {
    getUserInfo();
    getUrl();
  }, [pathname, type]);

  return (
    <div className="user_container">
      <button onClick={() => navigate('/')} className="view">
        Back
      </button>
      {user &&
        user?.map((value, i) => (
          <div key={i} className="user_info">
            <img src={value?.avatar_url} alt="avatar" />
            <div className="info">
              <h1>{value?.name}</h1>
              <h3>
                <span className="first">Login name: </span>
                {value?.login}
              </h3>
              <h3>
                <span className="first">Followers: </span>
                {value?.followers}
              </h3>
              <h3>
                <span className="first">Following: </span>
                {value?.following}
              </h3>
              <h3>
                <span className="first">Public_Repositories: </span>
                {value?.public_repos}
              </h3>
              <h3>
                <span className="first">Join: </span>
                {new Date(value?.created_at).toLocaleDateString()}
              </h3>
              <a
                className="view"
                href={value?.html_url}
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        ))}

      {type === 'repos' && <div>{info && <Repo repos={info} />}</div>}
    </div>
  );
};

export default UserInfo;
