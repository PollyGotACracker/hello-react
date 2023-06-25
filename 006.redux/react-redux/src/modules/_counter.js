// action type 상수로 정의. 중복 방지를 위해 모듈명/액션명
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// action 생성 함수
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});

const initial = {
  number: 0,
};

const counter = (state = initial, action) => {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counter;
