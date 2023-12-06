import "./App.css";
import { useReducer, useState, useEffect, useMemo } from "react";
import { SourceContext } from "./context/SourceContext";
import sourceReducer from "./reducers/sourceReducer";
import BenchMarkForm from "./components/BenchMarkForm";
import { BenchMarkInfo } from "./types/benchmark";
import BenchMarkPreview from "./components/BenchMarkPreview";
import { PageContainer } from "./components/styled/Container";
import { v4 as uuidv4 } from "uuid";
import {
  readPreviewDataFromLocalStorage,
  readSourceFromLocalStorage,
} from "./utils/readLocalStorage";

function App() {
  const [sources, dispatch] = useReducer(sourceReducer, [
    {
      id: uuidv4(),
      title: "",
      url: "",
      dataArr: [
        {
          id: uuidv4(),
          content: "",
        },
      ],
    },
  ]);

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

    const fetchPreviewData = async () => {
      const response = await readPreviewDataFromLocalStorage();
      setPreviewData(response);
    };

    fetchSources();
    fetchPreviewData();
  }, []);

  const sourceContextValue = useMemo(() => ({ sources, dispatch }), [sources]);

  return (
    <SourceContext.Provider value={sourceContextValue}>
      <div className="App">
        <PageContainer>
          <BenchMarkForm setPreviewData={setPreviewData} />
          <div
            style={{
              borderLeft: "1px solid rgba(0,0,0,0.1)",
              margin: "0px 10px",
            }}
          ></div>
          <BenchMarkPreview previewData={previewData} />
        </PageContainer>
      </div>
    </SourceContext.Provider>
  );
}

export default App;
