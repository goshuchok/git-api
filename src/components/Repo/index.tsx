import React, { useState } from 'react';

import { RepoType } from '../../types';

import styles from './Repo.module.scss';

interface RepoProps {
  repos: RepoType[];
}

const Repo: React.FC<RepoProps> = ({ repos }) => {
  const [name, setName] = useState<string>('');

  return (
    <div className="root">
      <input
        type="text"
        placeholder="Repositories..."
        onChange={(e) => setName(e.target.value)}
        className="input"
      />
      <div className={styles.repo_info}>
        {repos
          .filter((rep) => rep.name.toLowerCase()?.includes(name))
          .map((repo, i) => (
            <div key={i} className={styles.info_card}>
              <div className={styles.repo_name}>
                <h3>
                  <span>Name:</span> {repo.name}
                </h3>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.full_name}
                </a>
              </div>
              <div className={styles.repo_retting}>
                <p> {'🟢' + repo.language}</p>
                <p>forks: {repo.forks}</p>
                <p>stars: {repo.stargazers_count}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Repo;
