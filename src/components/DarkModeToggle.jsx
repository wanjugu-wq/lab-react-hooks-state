import React, { useState } from "react";

export default function DarkModeToggle() {
  // TODO: Implement dark mode toggle logic
  const [darkMode, setIsDarkMode] = useState(false);

  function ToggleDark() {
    return setIsDarkMode(!darkMode);
  }
  return (
    <button onClick={ToggleDark}>
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}
