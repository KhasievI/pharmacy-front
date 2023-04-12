import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedicines } from "../../redux/features/medicineSlice";
import styles from "./List.module.scss";
import Product from "./Product";

const List = ({ valuePrice }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedicines());
  }, []);

  const selectCategories = useSelector((state) => state.category.selectCategories);
  const selectPharmacies = useSelector((state) => state.pharmacy.selectPharmacies);
  const selectTypeDosage = useSelector((state) => state.medicine.selectTypeDosage);

  const medicines = useSelector((state) =>
    state.medicine.medicines.filter((med) => {
      const pharmacy = selectPharmacies.length ? selectPharmacies.includes(med.pharmacyName) : true;
      const category = selectCategories.length ? selectCategories.includes(med.category) : true;
      const typeDosage = selectTypeDosage.length
        ? selectTypeDosage.includes(med.typeOfDosageForm.toLowerCase())
        : true;

      return (
        med.price >= valuePrice[0] &&
        med.price <= valuePrice[1] &&
        category &&
        pharmacy &&
        typeDosage
      );
    }),
  );

  if (!medicines) {
    return "..";
  }
  return (
    <div className={styles.list}>
      {medicines.map((medicine) => {
        return <Product medicine={medicine} />;
      })}
    </div>
  );
};

export default List;
