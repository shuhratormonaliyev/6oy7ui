import React from 'react';
import styles from './index.module.css';

function CategoryFilter({ onFilterChange }) {
  const handleCategory = (event) => {onFilterChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <select className={styles.filter} onChange={handleCategory}>
        <option value="all">All</option>
        <option value="средний">средний</option>
        <option value="не популярен">не популярен</option>
        <option value="известный">известный</option>
      </select>
    </div>
  );
};

export default CategoryFilter;