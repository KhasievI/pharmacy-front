import React from "react"
import { Link } from "react-router-dom"
import List from "../../components/List/List"
import SortPanel from "../../components/SortPanel/SortPanel"
import styles from "./ListPage.module.scss"

const ListPage = ({ search, setSearch }) => {
  const [selectCategory, setSelectCategory] = React.useState("")
  const [valuePrice, setValuePrice] = React.useState([0, 3000])

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.path_block}>
          <div className={styles.path}>
            <Link className={styles.a} to='/'>
              Главная страница
            </Link>{" "}
            {" / "}Каталог
          </div>
          <h1 className={styles.title}>Каталог</h1>
        </div>
        <div className={styles.content_block}>
          <SortPanel
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            setValuePrice={setValuePrice}
            valuePrice={valuePrice}
          />
          <List
            selectCategory={selectCategory}
            valuePrice={valuePrice}
            setSearch={setSearch}
            search={search}
          />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
