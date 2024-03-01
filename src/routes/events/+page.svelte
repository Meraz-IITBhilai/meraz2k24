<script>
  import SectionHeader from "$lib/components/SectionHeader.svelte";
  import { onMount } from "svelte";

  let swipeableElement;
  let touchStartX = 0;
  let touchEndX = 0;
  let checkedItem = 0;

  let input1, input2, input3;

  onMount(() => {
    swipeableElement = document.getElementById("swappableElement");
    swipeableElement.addEventListener('touchstart', handleTouchStart, false);
    swipeableElement.addEventListener('touchmove', handleTouchMove, false);
    swipeableElement.addEventListener('touchend', handleTouchEnd, false);

    input1 = document.getElementById("item-1");
    input2 = document.getElementById("item-2");
    input3 = document.getElementById("item-3");

    setInterval(() => {
      checkedItem += 1;
      if (checkedItem == 3){
        checkedItem = 0;
      }
      updateCheckedItem();
    }, 3000);

  })

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    handleSwipe();
  }

  function handleSwipe() {
    const swipeDistance = touchStartX - touchEndX;
    const swipeThreshold = 75; // Adjust as needed

    if (swipeDistance > swipeThreshold) {
      // Swipe left
      checkedItem += 1;
      if (checkedItem == 3){
        checkedItem = 0;
      }
    } else if (swipeDistance < -swipeThreshold) {
      // Swipe right
      checkedItem -= 1;
      if (checkedItem == -1){
        checkedItem = 2;
      }
    }
    updateCheckedItem();
  }

  function updateCheckedItem(){
    if(checkedItem == 0){
      input1.checked = true;
    }
    else if (checkedItem == 1){
      input2.checked = true;
    }
    else {
      input3.checked = true;
    }
  }
</script>

<div class="container">
    <input type="radio" name="slider" id="item-1" checked>
    <input type="radio" name="slider" id="item-2">
    <input type="radio" name="slider" id="item-3">
  <div class="cards" id="swappableElement" >
    <label class="card" for="item-1" id="song-1">
      <img src="/assets/carousal-scitech.jpg" alt="song">
      <a href="/events/scitech"> </a>
      <div class="card-title">
        <SectionHeader name="SciTech" />
      </div>
    </label>
    <label class="card" for="item-2" id="song-2">
      <img src="/assets/carousal-cultural.jpg" alt="song">
      <a href="/events/culturals"> </a>
      <div class="card-title">
        <SectionHeader name="Culturals" />
      </div>
    </label>
    <label class="card" for="item-3" id="song-3">
      <img src="/assets/carousal-informals.jpg" alt="song">
      <a href="/events/informals"> </a>
      <div class="card-title">
        <SectionHeader name="Informals" />
      </div>
    </label>
  </div>
</div>

<style lang="scss">
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
  font-family: 'DM Sans', sans-serif;
  transition: background .4s ease-in;
  background-color: #c394f8;
}

input[type=radio] {
  display: none;
}

.card {
  position: absolute;
  width: 60%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform .4s ease;
  cursor: pointer;
  a {
    display: none;
    position: absolute;
    top: 0%;
    left: 0%;
    bottom: 0%;
    right: 0%;
    opacity: 0;
  }
  .card-title {
    background: #121212dd;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 1s cubic-bezier(.19,1,.22,1);
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
    height: 60%;
  }
}

.container {
  width: 100%;
  height: calc(100vh - 80px);
  background: url("/assets/bg-events.jpg");
  background-size: cover;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
  overflow-x: hidden;
}

.cards {
  position: relative;
  width: 100%;
  height: 90%;
  margin-bottom: 20px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

#item-1:checked ~ .cards #song-3, #item-2:checked ~ .cards #song-1, #item-3:checked ~ .cards #song-2 {
  transform: translatex(-40%) scale(.8);
  opacity: .8;
  z-index: 0;
}

#item-1:checked ~ .cards #song-2, #item-2:checked ~ .cards #song-3, #item-3:checked ~ .cards #song-1 {
  transform: translatex(40%) scale(.8);
  opacity: .8;
  z-index: 0;
}

#item-1:checked ~ .cards #song-1, #item-2:checked ~ .cards #song-2, #item-3:checked ~ .cards #song-3 {
  transform: translatex(0) scale(1);
  opacity: 1;
  z-index: 1;
  
  img {
    box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
  }
}

.player {
  background-color: #fff;
  border-radius: 8px;
  min-width: 320px;
  width: 50vw;
  padding: 16px 10px;
}

.upper-part {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  height: 36px;
  overflow: hidden;
}

.play-icon{ margin-right: 10px; }

.song-info {
  width: calc(100% - 32px);
  display: block;
}

.song-info .title {
  color: #403d40;
  font-size: 14px;
  line-height: 24px;
}

.sub-line {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.subtitle, .time {
  font-size: 12px;
  line-height: 16px;
  color: #c6c5c6;
}

.time {
  font-size: 12px;
  line-height: 16px;
  color: #a5a5a5;
  font-weight: 500;
  margin-left: auto;
}

.info-area {
  width: 100%;
  position: absolute;
  top: 0;
  left: 30px;
  transition: transform .4s ease-in;
}

#item-1:checked ~ .cards #song-1 a,
#item-2:checked ~ .cards #song-2 a,
#item-3:checked ~ .cards #song-3 a
{
  display: block;
  opacity: 100;
  transition: display .4s ease-in;
}
#item-1:checked ~ .cards #song-1 .card-title,
#item-2:checked ~ .cards #song-2 .card-title,
#item-3:checked ~ .cards #song-3 .card-title
{
  display: block;
  opacity: 100;
  transition: opacity 0.4s cubic-bezier(.19,1,.22,1);
}

#item-1:checked ~ .player #test {
  transform: translateY(0);
}

#item-2:checked ~ .player #test  {
  transform: translateY(-40px);
}

#item-3:checked ~ .player #test  {
  transform: translateY(-80px);
}
</style>
