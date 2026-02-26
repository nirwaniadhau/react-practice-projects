import React from "react";

const LanguageSelector = ({ setLanguage }) => {

    function handleChange(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);

        const selctedLanguage=event.target.value;
        setLanguage(selctedLanguage);
    }
  return (
    <>
      <label htmlFor="language">Choose a Programming Language :</label>
      <div>
        <select name="language" id="language" onChange={handleChange}>
          <option value="Javascript">Javascript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
        </select>
      </div>
    </>
  );
};

export default LanguageSelector;
