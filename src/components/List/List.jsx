import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedicines } from "../../redux/features/medicineSlice";
import styles from "./List.module.scss";
import Product from "./Product";
import { YMaps, Map, Clusterer, Placemark, FullscreenControl, GeolocationControl, ListBoxItem, RouteButton, ZoomControl } from "@pbe/react-yandex-maps";
import { useState } from "react";

const mapState = { center: [43.325679, 45.692609], zoom: 15, controls: [] };

const places = [
  {
    id: 1,
    data: { content: "Аптека 'Здоровье'" },
    options: { selectOnClick: false },
    coords: [43.319494, 45.689194]
  },
  {
    id: 2,
    data: { content: "Аптека 'Планета здоровья'" },
    options: { selectOnClick: false },
    coords: [43.32728391696737, 45.69316059812105]
  },
  {
    id: 3,
    data: { content: "Аптека 'Нео-Фарм'" },
    options: { selectOnClick: false },
    coords: [43.325289, 45.697507]
  },
  {
    id: 4,
    data: { content: "Аптека 'Фармленд'" },
    options: { selectOnClick: false },
    coords: [43.32297504643651, 45.69042736868492]
  },
  {
    id: 5,
    data: { content: "Аптека 'Фармаимпекс'" },
    options: { selectOnClick: false },
    coords: [43.3208514229075, 45.693149919909494]
  },
  {
    id: 6,
    data: { content: "Аптека 'Советская аптека'" },
    options: { selectOnClick: false },
    coords: [43.32631997440087, 45.687429007260846]
  },
];

const getPointData = (index) => {
  return {
    balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
    clusterCaption: "placemark <strong>" + index + "</strong>"
  };
};

const getPointOptions = () => {
  return {
    preset: "islands#violetIcon"
  };
};

const List = ({ valuePrice, search }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMedicines());
  }, []);

  const [state, setState] = useState();//
  const onItemClick = (coords) => {//
    setState({ center: coords });//
  };

  const selectCategories = useSelector((state) => state.category.selectCategories);
  const selectPharmacies = useSelector((state) => state.pharmacy.selectPharmacies);
  const selectTypeDosage = useSelector((state) => state.medicine.selectTypeDosage);

  const medicines = useSelector((state) =>
    state.medicine.medicines.filter((med) => {
      const pharmacy = selectPharmacies.length ? !selectPharmacies.includes(med.pharmacyName) : true;
      const category = selectCategories.length ? selectCategories.includes(med.category) : true;
      const searchValue = search ? med.medName.toLowerCase().includes(search.toLowerCase()) : true;
      const typeDosage = selectTypeDosage.length ? selectTypeDosage.includes(med.typeOfDosageForm.toLowerCase()) : true;

      return (
        med.price >= valuePrice[0] &&
        med.price <= valuePrice[1] &&
        category &&
        !pharmacy &&
        typeDosage &&
        searchValue
      );
    }),
  );

  if (!medicines) {
    return "..";
  }

  console.log(medicines.length !== 0);

  return (
    <>
      {medicines.length !== 0 ? (
        <div className={styles.list}>
          {medicines.map((medicine) => {
            return <Product medicine={medicine} />;
          })}
        </div>
      ) : (
        <div className={styles.wrapperMap}>
          <h1>Выберите аптеку</h1>
          <YMaps>
            <Map className={styles.map} state={state} defaultState={mapState}>
              <GeolocationControl options={{ float: "left" }} />
              <RouteButton options={{ float: "right" }} />
              <FullscreenControl />
              <ZoomControl options={{ float: "right" }} />
              <Clusterer
                options={{
                  preset: "islands#invertedVioletClusterIcons",
                  groupByCoordinates: false,
                  clusterDisableClickZoom: true,
                  clusterHideIconOnBalloonOpen: false,
                  geoObjectHideIconOnBalloonOpen: false
                }}
              >
                {places.map((items) => (
                  <Placemark
                    key={items.id}
                    geometry={items.coords}
                    properties={getPointData(items.id)}
                    options={getPointOptions()}
                  />
                ))}
              </Clusterer>
            </Map>
            <ul>
              {/* {places.map((place) => (
                <li key={place.id}>
                  <button onClick={() => onItemClick(place.coords)}>
                    {place.data.content}
                  </button>
                </li>
              ))} */}
            </ul>
          </YMaps>
        </div>
      )}
    </>
  );
};

export default List;
