import adviceBtn from "./assets/buttonIcon.svg";
import separatorImg from "./assets/separator.svg";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const getData = async () =>{
    try{
      const response = await fetch("https://api.adviceslip.com/advice")
      const result = await response.json()
      setData(result.slip)
    } catch (error){
      console.log("error getting the advice")
    }
  }

  useEffect(() => {
    getData()
  }, []);

  const { id, advice } = data;

  return (
    <>
      <section className="bg-[#202733] h-screen px-6 md:w-full flex justify-center place-items-center">
        <div className="w-96 h-fit bg-[#313A48] rounded-md px-8 flex flex-col items-center">
          <p className="text-[#53FFAA] self-center pt-4 font-manrope text-center tracking-[.25em] 
          uppercase text-sm font-light mb-4 ">
            Advice #{id}
          </p>
          <h1 className="text-[#CEE3E9] content-center font-manrope text-lg font-bold text-center mt-3 mb-3">
            {"\"" + advice + "\""}
          </h1>
          <div className="flex items-center mt-5 space-x-3">
            <div className="h-0.5 w-32 md:w-40 bg-[#4F5D74]"></div>
            <img src={separatorImg} alt="separator" />
            <div className="h-0.5 w-32 md:w-40 bg-[#4F5D74]"></div>
          </div>
          <img
            src={adviceBtn}
            className="hover:shadow-glow ransform translate-y-1/2"
            alt="advice button"
            onClick={()=> getData()}
          />
        </div>
      </section>
    </>
  );
}

export default App;
