import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../card/card";
const intialCallUrl = "https://pokeapi.co/api/v2/pokemon?limit=3&offset=0";
export const Page = () => {
  const [imageData, setImageData] = useState();
  const [preLink, setPreLink] = useState();
  const [nxtLink, setNxtink] = useState();
  useEffect(() => {
    apiCaller(intialCallUrl);
  }, []);
  async function apiCaller(url) {
    await axios.get(url).then((res) => {
      console.log(res.data);
      setImageData([...res.data.results]);
      setPreLink(res.data.previous);
      setNxtink(res.data.next);
    });
  }
  const visitCounter = (area) => {
    switch (area) {
      case "pre":
        apiCaller(preLink);
        break;
      case "nxt":
        apiCaller(nxtLink);
        break;
    }
  };

  return (
    <div>
      <button onClick={() => visitCounter("pre")} className="  inlineBlock ">
        pre
      </button>
      s
      <div className="fullWidth">
        {imageData ? (
          imageData.map((ele) => {
            return <Card name={ele.name} url={ele.url} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <button onClick={() => visitCounter("nxt")} className="  inlineBlock ">
        Next
      </button>
    </div>
  );
};
