import React from "react";
import "./YMap.scss";

const YMap = ({setMap}) => {
  const clickHandler = () => {
    setMap(false)
  }

  return (
    <div className="ymaps-layers-pane">
      <div className='mapCont'>
      <button className="btn" onClick={clickHandler}>Закрыть</button>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Add6b5c0b5fb9df2e9b0561ce5806ce88432f013eb495dfe749a9160ed600c41c&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
      </div>
    </div>
    // <YMaps>
    //   <div className="ymaps-layers-pane">
    //     <div className="mapCont">
    //       <button className="btn" onClick={clickHandler}>Закрыть</button>
    //       <Map
    //         defaultState={{ center: [43.324675, 45.692376], zoom: 18 }}
    //         width="100%"
    //         height="100%"
    //       >
    //         <SearchControl options={{ float: "right" }} />
    //         <GeolocationControl options={{ float: "left" }} />
    //       </Map>
    //     </div>
    //   </div>
    // </YMaps>
  );
};

export default YMap;
