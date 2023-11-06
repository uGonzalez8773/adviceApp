import adviceBtn from "./assets/buttonIcon.svg";
import separatorImg from "./assets/separator.svg";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice ")
      .then((response) => response.json())
      .then((result) => {
        setData(result.slip);
      })
      .catch((error) => {
        console.log("Error getting the advice", error);
      });
  }, []);

  const handleAdviceClick = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();

    setData(result.slip);
  };
  
  const { id, advice } = data;

  return (
    <>
      <section className="bg-[#202733] h-screen w-full flex justify-center place-items-center">
        <div className="w-96 h-60 bg-[#313A48] rounded-md px-8 grid grid-rows-4 grid-cols-3 grid-flow-col gap-4 justify-items-center">
          <p className="text-[#53FFAA] self-center col-span-3">Advice #{id}</p>
          <h1 className="text-[#CEE3E9] col-span-3 content-center text-lg font-bold">{advice}</h1>
          <div className="col-span-3 flex items-center mt-10 space-x-3">
            <div className="h-0.5 w-40 grow bg-[#4F5D74]"></div>
            <img src={separatorImg} alt="separator" />
            <div className="h-0.5 w-40 grow bg-[#4F5D74]"></div>
          </div>
          <img
            src={adviceBtn}
            className="pt-4 col-span-3 hover:shadow-glow"
            alt="advice button"
            onClick={handleAdviceClick}
          />
        </div>
      </section>
    </>
  );
}

export default App;
