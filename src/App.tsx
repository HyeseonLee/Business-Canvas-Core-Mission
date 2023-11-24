import "./App.css";
import { useReducer, useState } from "react";
import { SourceContext, SourceDispatchContext } from "./context/SourceContext";
import { v4 as uuidv4 } from "uuid";
import sourceReducer from "./reducers/sourceReducer";
import BenchMarkForm from "./components/BenchMarkForm";
import { DefaultInfoContext } from "./context/DefaultInfoContext";
import { DefaultInfo } from "./types/benchmark";

function App() {
  const [sources, dispatch] = useReducer(
    sourceReducer,
    readSourceFromLocalStorage()
  );
  const [defaultInfo, setDefaultInfo] = useState<DefaultInfo>(() =>
    readDefaultInfoFromLocalStorage()
  );
  function readDefaultInfoFromLocalStorage() {
    const benchMarkInfo = localStorage.getItem("benchMark");
    if (benchMarkInfo == null) {
      return {
        title: "",
        description: "",
      };
    } else {
      const wholeData = JSON.parse(benchMarkInfo);
      const { title, description } = wholeData;
      return { title, description };
    }
  }
  function readSourceFromLocalStorage() {
    const benchMarkInfo = localStorage.getItem("benchMark");
    if (benchMarkInfo == null) {
      return [];
    } else {
      const wholeData = JSON.parse(benchMarkInfo);
      const { source } = wholeData;
      console.log("source는?", source);
      return source;
    }
  }

  console.log(readSourceFromLocalStorage());

  return (
    <DefaultInfoContext.Provider value={{ defaultInfo, setDefaultInfo }}>
      <SourceContext.Provider value={sources}>
        <SourceDispatchContext.Provider value={dispatch}>
          <div className="App">
            <BenchMarkForm />
          </div>
        </SourceDispatchContext.Provider>
      </SourceContext.Provider>
    </DefaultInfoContext.Provider>
  );
}

export default App;
