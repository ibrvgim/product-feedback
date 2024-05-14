import { useMediaQuery } from 'react-responsive';

function useResponsiveDesign() {
  // handled: theme icon
  /* 970px = 33.125em */
  const mediumScreen = useMediaQuery({ query: '(max-width: 60.625rem)' });

  // handled: add feedback button
  /* 530px = 33.125em */
  const smallScreen = useMediaQuery({ query: '(max-width: 33.125em)' });

  return { mediumScreen, smallScreen };
}

export default useResponsiveDesign;
