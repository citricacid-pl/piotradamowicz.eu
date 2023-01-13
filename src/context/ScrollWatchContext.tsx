import { createContext, useState, FC, ReactElement, useEffect } from 'react';

export const ScrollWatchContext = createContext({
  scroll: 0,
  size: 0,
  percent: 100,
  setScroll: (scroll: number) => {},
  setSize: (size: number) => {},
});

const ScrollWatchContextProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [scroll, setScroll] = useState(0);
  const [size, setSize] = useState(0);
  const [percent, setPercent] = useState(100);

  useEffect(() => {
    const current = size - scroll;
    const percent = size > 0 ? current / size * 100 : 100;
    setPercent(percent < 0 ? 0 : percent);
  }, [scroll, size, setPercent]);

  const value = {
    scroll,
    size,
    percent,
    setScroll,
    setSize,
  };

  return (
    <ScrollWatchContext.Provider value={value}>{children}</ScrollWatchContext.Provider>
  );
};
export default ScrollWatchContextProvider;
