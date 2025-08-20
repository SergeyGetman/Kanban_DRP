import { useCallback } from 'react';

const useYearOptions = () => {
  const getYears = useCallback((startYear: number): { value: string; label: string }[] => {
    const currentYear = new Date().getFullYear();
    const yearOpt: any = [];
    for (let i = currentYear; i >= startYear; i -= 1) {
      yearOpt.push({ label: i, value: i });
    }
    return yearOpt;
  }, []);

  return { getYears };
};

export default useYearOptions;
