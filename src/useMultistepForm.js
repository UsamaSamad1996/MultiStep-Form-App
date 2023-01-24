import { useState } from "react";

export const useMultistepForm = (pages = []) => {
  const [currentPageIndex, setcurrentPageIndex] = useState(0);

  const goForward = () => {
    setcurrentPageIndex((i) => {
      if (i >= pages.length - 1) {
        return i;
      } else {
        return i + 1;
      }
    });
  };

  const goBackward = () => {
    setcurrentPageIndex((i) => {
      if (i <= 0) {
        return i;
      } else {
        return i - 1;
      }
    });
  };

  const gotoPage = (indexNum) => {
    setcurrentPageIndex(Number(indexNum));
  };

  return {
    currentPageIndex,
    page: pages[currentPageIndex],
    pages,
    isFirstPage: currentPageIndex === 0,
    isLastPage: currentPageIndex === pages.length - 1,
    goBackward,
    goForward,
    gotoPage,
  };
};
