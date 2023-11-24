export function readDefaultInfoFromLocalStorage() {
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

export function readSourceFromLocalStorage() {
  const benchMarkInfo = localStorage.getItem("benchMark");
  if (benchMarkInfo == null) {
    return [{ id: "", title: "", url: "", dataArr: [] }];
  } else {
    const wholeData = JSON.parse(benchMarkInfo);
    const { source } = wholeData;
    return source;
  }
}

export function readPreviewDataFromLocalStorage() {
  const benchMarkInfo = localStorage.getItem("benchMark");
  if (benchMarkInfo == null) {
    return { title: "", description: "", sources: [] };
  } else {
    const wholeData = JSON.parse(benchMarkInfo);
    const { title, description, source } = wholeData;
    return { title, description, sources: source };
  }
}
