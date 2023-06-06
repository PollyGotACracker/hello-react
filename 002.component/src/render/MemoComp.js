import { memo } from "react";

// React.memo: 각 자식 컴포넌트의 개별 reRendering 방지
const MemoComp = memo(({ item, index }) => {
  return <div key={`${index} ${item}`}>{item}</div>;
});
// react developer tools 로 확인하면 component 이름이 _c 로 바뀌어있다.
// 그래서 이름을 원래대로 변경한다.
MemoComp.displayName = "MemoComp";

export default MemoComp;
