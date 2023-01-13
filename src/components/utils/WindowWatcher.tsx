import { useContext, useEffect, FC, useState } from 'react';
import { ScrollWatchContext } from '../../context/ScrollWatchContext';

type Props = {
  element: HTMLElement;
};

const WindowWatcher: FC<Props> = ({ element }) => {
  const { setScroll, setSize } = useContext(ScrollWatchContext);
  const [sizeIsSet, setSizeIsSet] = useState(false);

  const scrollEvent = (event: any): void => {
    if (!event) {
      return;
    }
    setScroll(event?.currentTarget?.scrollY || 0);
    if (!sizeIsSet) {
      resizeEvent();
    }
  };

  const resizeEvent = (): void => {
    if (!(element?.clientHeight)) {
      return;
    }
    setSize(element.clientHeight);
    setSizeIsSet(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);

  return <></>;
};

export default WindowWatcher;
