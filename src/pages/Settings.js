import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Settings() {
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState("pink");
  return (
    <div className="fr-settings section">
      <h2>Preferred theme</h2>
      <div className="fr-settings__options-container">
        <div className="fr-settings__options-container__option light">
          {theme === "light" && (
            <div className="check ">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </div>
        <div className="fr-settings__options-container__option dark">
          {theme === "dark" && (
            <div className="check ">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </div>
      </div>
      <h2>Primary color</h2>
      <div className="fr-settings__options-container">
        <div className="fr-settings__options-container__option pink">
          {color === "pink" && (
            <div className="check ">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </div>
        <div className="fr-settings__options-container__option purple">
          {color === "purple" && (
            <div className="check ">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </div>
        <div className="fr-settings__options-container__option blue">
          {color === "blue" && (
            <div className="check ">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </div>
        <div className="fr-settings__options-container__option green">
          {color === "green" && (
            <div className="check ">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </div>
        <div className="fr-settings__options-container__option yellow">
          {color === "yellow" && (
            <div className="check ">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </div>
        <div className="fr-settings__options-container__option orange">
          {color === "orange" && (
            <div className="check ">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </div>
        <div className="fr-settings__options-container__option red">
          {color === "red" && (
            <div className="check ">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
