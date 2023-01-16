import { useState, useContext } from "react";
import { InitialDataContext } from "./InitialDataContext";

export const useDataSSR = (resourceName, loadFunc) => {
  const context = useContext(InitialDataContext);
	const [data, setData] = useState(context._data[resourceName]);

  
  if (context._isServerSide) {
    console.log(" Data is loaded from the server side");
    context._requests.push(
      loadFunc().then( result => (context._data[resourceName] = result) )
    );

  } else if (!data) {
    
    console.log(" Data is loaded from the client side");
    loadFunc().then(result => {
      setData(result);
      context._data[resourceName] = result;
    });
  }
  return data;
};
