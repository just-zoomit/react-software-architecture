import { useState, useContext } from "react";
import { InitialDataContext } from "./InitialDataContext";

export const useDataSSR = (resourceName, loadFunc) => {
  const context = useContext(InitialDataContext);
  const [data, setData] = useState(context._data[resourceName]);

  // check if data is loaded from the server side
  if (context.isServerSide) {
    context._requests.push(
      loadFunc().then((result) => (context._data[resourceName] = result))
    );
  } else if (!data) {
    // if data is not loaded from the server side, load it from the client side
    loadFunc().then((result) => {
      setData(result);

      context._data[resourceName] = result;
    });
  }
  return data;
};
