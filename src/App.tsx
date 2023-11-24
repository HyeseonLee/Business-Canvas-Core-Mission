import "./App.css";
import { useReducer, useState, useEffect } from "react";
import { SourceContext, SourceDispatchContext } from "./context/SourceContext";
import sourceReducer from "./reducers/sourceReducer";
import BenchMarkForm from "./components/BenchMarkForm";
import { DefaultInfoContext } from "./context/DefaultInfoContext";
import { BenchMarkInfo, DefaultInfo } from "./types/benchmark";
import BenchMarkPreview from "./components/BenchMarkPreview";
import { PageContainer } from "./components/styled/Container";
import { v4 as uuidv4 } from "uuid";
import { PreviewContext } from "./context/PreviewContext";
import {
  readDefaultInfoFromLocalStorage,
  readPreviewDataFromLocalStorage,
  readSourceFromLocalStorage,
} from "./utils/readLocalStorage";

function App() {
  const [sources, dispatch] = useReducer(sourceReducer, [
    {
      id: uuidv4(),
      title: "",
      url: "",
      dataArr: [],
    },
  ]);
  const [defaultInfo, setDefaultInfo] = useState<DefaultInfo>({
    title: "",
    description: "",
  });

  const [previewData, setPreviewData] = useState<BenchMarkInfo>({
    title: "",
    description: "",
    sources: [],
  });

  useEffect(() => {
    const fetchSources = async () => {
      const response = await readSourceFromLocalStorage();
      dispatch({ type: "INIT_SOURCES", sources: response });
    };

    const fetchDefaultInfo = async () => {
      const response = await readDefaultInfoFromLocalStorage();
      setDefaultInfo(response);
    };

    const fetchPreviewData = async () => {
      const response = await readPreviewDataFromLocalStorage();
      setPreviewData(response);
    };
    fetchSources();
    fetchDefaultInfo();
    fetchPreviewData();
  }, []);
  return (
    <DefaultInfoContext.Provider value={{ defaultInfo, setDefaultInfo }}>
      <SourceContext.Provider value={sources}>
        <SourceDispatchContext.Provider value={dispatch}>
          <PreviewContext.Provider value={{ previewData, setPreviewData }}>
            <div className="App">
              <PageContainer>
                <BenchMarkForm />
                <div
                  style={{
                    borderLeft: "1px solid rgba(0,0,0,0.1)",
                    margin: "0px 10px",
                  }}
                ></div>
                <BenchMarkPreview />
              </PageContainer>
            </div>
          </PreviewContext.Provider>
        </SourceDispatchContext.Provider>
      </SourceContext.Provider>
    </DefaultInfoContext.Provider>
  );
}

export default App;
