import { useContext, createContext } from "react";
import { PreviewContextType } from "../types/benchmark";

export const PreviewContext = createContext<PreviewContextType | null>(null);

export function usePreviewContext(): PreviewContextType {
  const previewContext = useContext(PreviewContext);
  if (!previewContext) throw new Error("PreviewContext가 존재하지 않습니다.");
  return previewContext;
}

//
// createContext 함수의 역할은 무엇인가요?
// useContext Hook의 역할과 작동 방식을 설명해주세요.
// usePreviewContext 함수에서 null 체크를 하는 이유는 무엇인가요?
// PreviewContext의 value가 어디에서 설정되는지 설명해주세요.
// Context API를 사용하는 주요 이유와 장단점은 무엇인가요?
// Context API 대신 다른 상태 관리 라이브러리를 사용하는 경우를 예로 들어주세요.
// Context API와 Redux 중 어떤 상황에서 어떤 것을 선택하시겠나요?
// Context API의 성능 문제에 대해 어떻게 생각하시나요?
// useContext Hook과 Context.Consumer 컴포넌트의 차이점은 무엇인가요?
// useContext Hook을 사용할 때 주의해야 할 점은 무엇인가요?
