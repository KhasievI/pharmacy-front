import React from "react";
import List from "../../components/List/List";
import SortPanel from "../../components/SortPanel/SortPanel";
import styles from "./ListPage.module.scss";

const ListPage = () => {
  const [selectCategory, setSelectCategory] = React.useState("");
  const [valuePrice, setValuePrice] = React.useState([0, 3000]);
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <SortPanel
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          setValuePrice={setValuePrice}
          valuePrice={valuePrice}
        />
        <List selectCategory={selectCategory} valuePrice={valuePrice} />
      </div>
    </div>
  );
};

export default ListPage;
