import React from 'react'
import styles from "./Category.module.scss";
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from "../../redux/features/categorySlice";
import { fetchMedicines } from '../../redux/features/medicineSlice';


export const Category = () => {
  const categories = useSelector((state) => state.category.categories);
  const medicines = useSelector((state) => state.medicine.medicines);
  const dispatch = useDispatch()

React.useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchMedicines())
  }, [])

  return (
    <div className={styles.conteiner}>
      <div>{categories.map(category => {
        return <h4 key={category._id}>{category.name}</h4>
      })}
      </div>
<div>

</div>
    </div>
  )
}