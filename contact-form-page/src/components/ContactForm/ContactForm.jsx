import React from "react";
import Button from "../Button/Button.jsx";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={`${styles.contact_form_section} container`}>
      <div className={`${styles.contact_form_wrapper} container`}>
        <div className={`${styles.contact_form_container} `}>
          <Button text="VIA SUPPORT CHAT"></Button>
          <Button text="VIA CALL"></Button>
        </div>
        <div className={`${styles.email_btn} `}>
          <Button
            className={`${styles.bottom_btn}`}
            text="VIA EMAIL FORM"
            isBottomBtn="true"
          ></Button>
        </div>

        <form action="" className={`${styles.contact_form}`}>
         <div className={`${styles.form_group}`}>
           <label htmlFor="name">Name</label>
            <input name="name" type="text"  />
         </div>
           <div className={`${styles.form_group}`}>
           <label htmlFor="email">Email</label>
            <input name="email" type="email"  />
         </div>

         <div className={`${styles.form_group}`}>
           <label htmlFor="text">TEXT</label>
            <textarea name="text" type="text"  />
         </div>
         
         
        <div className={`${styles.submit_btn}`}>
                   <Button text="SEND MESSAGE"></Button>

         </div>
        </form>
      </div>

      <div>
        <img src="/main_img.svg" alt="main image  " />
      </div>
    </section>
  );
};

export default ContactForm;
