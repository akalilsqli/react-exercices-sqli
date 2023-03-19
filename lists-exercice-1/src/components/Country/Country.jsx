import React from 'react'
import styles from './Country.module.css';

function Country({ country , percentage , population }) {
  return (
    <li className={styles.country}>
      <div>{country}</div>
      <div>
        <div className={styles.progress} style={{ width : `${percentage}%`}} />
      </div>
      <div>{population}</div>
    </li>
  )
}

export default Country