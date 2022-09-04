import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  findUser: () => void;
  user: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ findUser, user }) => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        ></line>
      </svg>
      <input
        type="text"
        placeholder="Search username..."
        ref={user}
        className={styles.input}
      />
      <button onClick={findUser} className={styles.search_button}>
        Search
      </button>
    </div>
  );
};

export default Input;
