import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Settings() {
  const [theme, setTheme] = useState("light");
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
          <div className="check">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        <div className="fr-settings__options-container__option blue">
          <div className="check">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        <div className="fr-settings__options-container__option yellow">
          <div className="check">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        <div className="fr-settings__options-container__option green">
          <div className="check">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
