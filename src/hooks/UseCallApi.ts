import { useEffect, useState } from "react";

export default function useCallApi<T>(url: string) {
  const [responce, setResponce] = useState<T | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResponce(data));
  }, []);

  return responce;
}
