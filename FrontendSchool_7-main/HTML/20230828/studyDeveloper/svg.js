const path = document.querySelector("#path");
const btnOpen = document.querySelector(".btn-open");

const pathLength = path.getTotalLength();

path.style.strokeDasharray = `${pathLength} ${pathLength}`;

path.style.strokeDashoffset = pathLength;

function scrollHandler() {
  // 현재 스크롤 높이
  const scrollTop = document.documentElement.scrollTop;
  // 전체 스크롤 높이
  const scrollHeight = document.documentElement.scrollHeight;
  // 뷰포트 높이
  const clientHeight = document.documentElement.clientHeight;
  // 스크롤 퍼센트
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
  // 그려지는 길이
  const drawLength = pathLength * scrollPercentage;
  // 전체 길이에서 그려지는 길이만큼 뺀다
  path.style.strokeDashoffset = pathLength - drawLength;

  // button opacity
  btnOpen.style.opacity = scrollPercentage;

  // opacity가 0.8 이상일 때 enabled
  if (btnOpen.style.opacity > 0.8) {
    btnOpen.disabled = false;
  } else {
    btnOpen.disabled = true;
  }
}

window.addEventListener("scroll", scrollHandler);

// 이벤트를 처리하는 것은 동일하지만 윈도우랑 문서객체 차이

// window
// 전체 브라우저 창에 대한 이벤트를 처리
// ex) 리사이즈, 스크롤

// document
// 문서 내 요소에 대한 이벤트 처리
// ex) click
