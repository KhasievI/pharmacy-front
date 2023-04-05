import React, { useState } from "react";
import Chatbot from "../../Bot/Chatbot";
import styles from "./HomePage.module.scss";


export const HomePage = () => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.home_page}>
       <Chatbot/>
      
    </div>
  );
};
