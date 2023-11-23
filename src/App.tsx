import "./App.css";
import { useReducer } from "react";
import { SourceContext, SourceDispatchContext } from "./context/SourceContext";
import { v4 as uuidv4 } from "uuid";
import sourceReducer from "./reducers/sourceReducer";
import BenchMarkForm from "./components/BenchMarkForm";

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

  return (
    <SourceContext.Provider value={sources}>
      <SourceDispatchContext.Provider value={dispatch}>
        <div className="App">
          <BenchMarkForm />
        </div>
      </SourceDispatchContext.Provider>
    </SourceContext.Provider>
  );
}

export default App;
