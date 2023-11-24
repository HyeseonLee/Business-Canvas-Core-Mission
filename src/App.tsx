import "./App.css";
import { useReducer, useState } from "react";
import { SourceContext, SourceDispatchContext } from "./context/SourceContext";
import sourceReducer from "./reducers/sourceReducer";
import BenchMarkForm from "./components/BenchMarkForm";
import { DefaultInfoContext } from "./context/DefaultInfoContext";
import { BenchMarkInfo, DefaultInfo } from "./types/benchmark";
import BenchMarkPreview from "./components/BenchMarkPreview";
import { PageContainer } from "./components/styled/Container";
import { PreviewContext } from "./context/PreviewContext";
import {
  readDefaultInfoFromLocalStorage,
  readPreviewDataFromLocalStorage,
  readSourceFromLocalStorage,
} from "./utils/readLocalStorage";

function App() {
  const [sources, dispatch] = useReducer(
    sourceReducer,
    readSourceFromLocalStorage()
  );
  const [defaultInfo, setDefaultInfo] = useState<DefaultInfo>(() =>
    readDefaultInfoFromLocalStorage()
  );

  const [previewData, setPreviewData] = useState<BenchMarkInfo>(() =>
    readPreviewDataFromLocalStorage()
  );

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
