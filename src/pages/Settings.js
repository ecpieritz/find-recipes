import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Settings() {
  return (
    <div className="fr-settings section">
      <h2>Preferred theme</h2>
      <div className="fr-settings__options-container">
        <div className="fr-settings__options-container__option">
          <div className="check light">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="check dark">
            <FontAwesomeIcon icon={faCheck} />
          </div>

        </div>
      </div>
      <h2>Primary color</h2>
      <div className="fr-settings__options-container">
        <div className="fr-settings__options-container__option">

        </div>
      </div>
      <h2>Font-size</h2>
      <div className="fr-settings__options-container">
        <div className="fr-settings__options-container__option">

        </div>
      </div>
    </div>
  );
}

export default Settings;
