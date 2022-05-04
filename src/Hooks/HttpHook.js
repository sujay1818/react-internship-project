import { useEffect, useCallback, useRef, useState } from "react";

export const useHttpHook = () => {
  const [loaderOpen, setLoaderOpen] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoaderOpen(!loaderOpen);
      setError(null);
      const httpAbortctrl = new AbortController();
      activeHttpRequests.current.push(httpAbortctrl);
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortctrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortctrl
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        console.log(responseData);
        setLoaderOpen(false);
        return responseData;
      } catch (err) {
        console.log(err.message);
        setError(err.message || "Something went wrong, Please try again");
        setOpen(true);
        setLoaderOpen(false);
        throw err;
      }
    },
    []
  );

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortctrl) => abortctrl.abort());
    };
  }, []);

  return { loaderOpen, setLoaderOpen, error, sendRequest, open, setOpen };
};
