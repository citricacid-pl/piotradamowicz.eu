import { useContext, useEffect, FC } from 'react';
import { AppContext } from './AppContext';

type Props = {
  element: HTMLElement;
};

const WindowWatcher: FC<Props> = ({ element }) => {
  const { setScroll, setSize } = useContext(AppContext);

  const scrollEvent = (event: any): void => {
    if (!event) {
      return;
    }
    setScroll(event?.currentTarget?.scrollY || 0);
  };

  const resizeEvent = (event: unknown): void => {
    if (!(element?.clientHeight)) {
      return;
    }
    setSize(element.clientHeight);
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
