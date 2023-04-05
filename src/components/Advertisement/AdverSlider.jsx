import React from "react";
import styles from "./Adver.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdverSlider = () => {
  const settings = {
    dots: true,
    loop: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
         <div className={styles.adverMain}>
          <div className={styles.videoContainer}>
            <video
              src="./Madara.mp4"
              autoPlay
              muted
              loop
              className={styles.skin}
            ></video>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Mádara</h1>
            <p className={styles.description}>
            Новый уход за кожей Madara - это секрет красоты, которую вы заслуживаете! Насыщенные антиоксиданты и витамины питают вашу кожу и придают ей сияние. Попробуйте Madara уже сегодня!
              <a
                href="https://www.madaracosmetics.com/nl/?gclid=Cj0KCQjwuLShBhC_ARIsAFod4fKQlF85677IZYmOiS_2wLUmMu96qFRkRsHwd8Ipz8kXHG77Sl25TIcaAilZEALw_wcB"
                className={styles.btn}
              >
                Подробнее
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.adverMain}>
          <div className={styles.videoContainer}>
            <video
              src="./skin.mp4"
              autoPlay
              muted
              loop
              className={styles.skin}
            ></video>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Eco Botanica</h1>
            <p className={styles.description}>
              Насыщенные натуральными ингредиентами, средства Eco Botanica обеспечивают
              полный уход за кожей, который помогает сохранить молодость и
              здоровье вашей кожи.
              <br />
              <a
                href="https://cottonclub.ru/ru/catalog/kosmetika/olea_eco_botanic_krem_dlya_ruk_zelenyy_chay_i_d_pantenol_50ml_11256/"
                className={styles.btn}
              >
                Подробнее
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className={styles.adverMain}>
          <div className={styles.videoContainer}>
            <video
              src="./form.mp4"
              autoPlay
              muted
              loop
              className={styles.skin}
            ></video>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Oriental Princess</h1>
            <p className={styles.description}>
              Оригинальные продукты Oriental Princess из Таиланда созданы для
              того, чтобы ваша кожа выглядела и чувствовала себя на высшем
              уровне
              <br />
              Насыщенные натуральными ингредиентами, эти средства обеспечивают
              полный уход за кожей, который помогает сохранить молодость и
              здоровье вашей кожи.
              <br />
              <a
                href="https://www.orientalprincess.com/"
                className={styles.btn}
              >
                Подробнее
              </a>
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default AdverSlider;
