import React, { useState } from "react";

export function Switch() {
  const [isNightMode, setIsNightMode] = useState(false);

  const handleSwitch = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div>
      <label htmlFor="switch">Modo noche</label>
      <input
        type="checkbox"
        id="switch"
        checked={isNightMode}
        onChange={handleSwitch}
      />
    </div>
  );
}

export default Switch;