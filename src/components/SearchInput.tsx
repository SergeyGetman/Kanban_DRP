import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

export function SearchInputComponent() {
  const [inputValue, setInputValue] = useState<string>('');
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedSearchValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (!debouncedSearchValue?.trim()) {
      return null;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.example.com/search?q=${debouncedSearchValue}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearchValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Введите запрос..."
      />
      {isLoading && <span>Загрузка...</span>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
