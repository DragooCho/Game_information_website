const imgHover1 = document.querySelector(".imgHover1");
const imgHover2 = document.querySelector(".imgHover2");
const imgHover3 = document.querySelector(".imgHover3");
const imgHover4 = document.querySelector(".imgHover4");
const imgHover5 = document.querySelector(".imgHover5");
const imgHover6 = document.querySelector(".imgHover6");
const imgHover7 = document.querySelector(".imgHover7");
const imgHover8 = document.querySelector(".imgHover8");
const mainCardImg = document.querySelector(".main_card");
const mainCardTextNode = mainCardImg.querySelector("p");

imgHover1.addEventListener("mouseover", () => {
  mainCardImg.style.backgroundImage = "url(/imeges/image_015.jpg)";
  mainCardTextNode.innerText = "메탈릭 차일드 올 여름 닌텐도 스위치로";
});
imgHover2.addEventListener("mouseover", () => {
  mainCardImg.style.backgroundImage = "url(/imeges/image_020.jpg)";
  mainCardTextNode.innerText = "모바일 RPG '제2의 나라' TV광고 공개";
});
imgHover3.addEventListener("mouseover", () => {
  mainCardImg.style.backgroundImage = "url(/imeges/image_021.jpg)";
  mainCardTextNode.innerText = "턴제 전략 RPG '로스트 아이돌론' 소개";
});
imgHover4.addEventListener("mouseover", () => {
  mainCardImg.style.backgroundImage = "url(/imeges/image_022.jpg)";
  mainCardTextNode.innerText = "닌자 가이덴: 마스터 콜렉션";
});
imgHover5.addEventListener("mouseover", () => {
  mainCardImg.style.backgroundImage = "url(/imeges/image_016.jpg)";
  mainCardTextNode.innerText = "닌자 거북이: 슈레더의 복수";
});
imgHover6.addEventListener("mouseover", () => {
  mainCardImg.style.backgroundImage = "url(/imeges/image_017.jpg)";
  mainCardTextNode.innerText = "'더 하우스 오브 더 데드: 리메이크' 공개";
});
imgHover7.addEventListener("mouseover", () => {
  mainCardImg.style.backgroundImage = "url(/imeges/image_019.jpg)";
  mainCardTextNode.innerText = "사이버펑크 2077, ‘핫픽스 1.21’ 배포 실시";
});
imgHover8.addEventListener("mouseover", () => {
  mainCardImg.style.backgroundImage = "url(/imeges/image_018.jpg)";
  mainCardTextNode.innerText = "PS5 '스페이스베이스 스타토피아' 4K";
});
