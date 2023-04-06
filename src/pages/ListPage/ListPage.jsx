import React from "react";
import List from "../../components/List/List";
import SortPanel from "../../components/SortPanel/SortPanel";
import styles from "./ListPage.module.scss";

const ListPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <SortPanel />
        <List />
      </div>
    </div>
  );
};

export default ListPage;
