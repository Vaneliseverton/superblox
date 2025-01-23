import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSlideAnimOpen, setIsSlideAnimOpen] = useState(true);

  const toggleSettings = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  const toggleSlideAnim = () => {
    setIsSlideAnimOpen((prev) => !prev);
  };

  return (
    <GameContext.Provider
      value={{
        isSettingsOpen,
        toggleSettings,
        isSlideAnimOpen,
        toggleSlideAnim,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
