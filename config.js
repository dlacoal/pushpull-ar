// 밀고 당기기 AR 실험실 설정 — 이 파일만 고쳐도 앱에 반영돼요.
window.PP_CONFIG = {
  version: 'v2',            // 화면 오른쪽 아래에 보이는 버전
  pin: '1234',              // 선생님 비밀번호 처음 값 (앱 안에서 바꾼 비밀번호가 있으면 그게 우선)
  objects: ['chair', 'desk', 'door'],  // 보여 줄 물건 (chair=의자, desk=책상, door=문)
  eyeHeight: 1.15,          // 학생이 태블릿을 드는 높이(m) — 아이패드 방식에서 사용
  friction: 1.6,            // 바닥 마찰: 클수록 빨리 멈춰요
  minDistance: 0.55,        // 당겼을 때 가장 가까이 올 수 있는 거리(m)
  maxDistance: 8            // 밀었을 때 가장 멀리 갈 수 있는 거리(m)
};
