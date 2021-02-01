<template>
  <div class="group-226">
    <img
      alt=""
      class="rectangle"
      src="https://static.overlay-tech.com/assets/7fce7eb4-a06f-4afc-8541-c4f29a2d2f50.png"
    /><img
      alt=""
      class="ellipse-54"
      src="https://static.overlay-tech.com/assets/d2c2a69c-a110-4807-9526-69e2f595d152.png"
    />
    <h5 class="jordan-valentin-lane">
      {{ jordanValentinLane }}
    </h5>
    <div class="flex-wrapper-one">
    <p class="menu-left-two">{{ menuLeftTwo }}</p>
    <p class="menu-left-three">{{ menuLeftThree }}</p>
    <p class="menu-left-four">{{ menuLeftFour }}</p>
    <p class="menu-left-five">{{ menuLeftFive }}</p>
    <div class="group-187">
      <img
        alt=""
        class="group-135"
        src="https://static.overlay-tech.com/assets/be754bca-79cf-40f6-ac1b-acd5f5c70b97.svg"
      />
      <h5 class="menu-left-six">{{ menuLeftSix }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group226",
  props: {
    jordanValentinLane: {
      type: String,
      default: "Jordan Valentin Lane"
    },
    menuLeftTwo: { type: String, default: "Översikt" },
    menuLeftThree: { type: String, default: "Min sida" },
    menuLeftFour: { type: String, default: "Mallar" },
    menuLeftFive: {
      type: String,
      default: "Inställningar"
    },
    menuLeftSix: { type: String, default: "Logga ut" }
  }
};
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

.group-226 {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;

  font-family: 'Montserrat', sans-serif;
}
.rectangle {
  margin-bottom: 30%;
}
.ellipse-54 {
  margin-bottom: 14px;
  border-radius: 50%;
}
.jordan-valentin-lane {
  color: black;
  text-align: right;
  margin-bottom: 53px;

}
.flex-wrapper-one {
 margin-left: 20%;
}

.menu-left-two {
  color: gray;
  margin-bottom: 20%;
  border-radius: 30px 0px 0px 30px;
  padding: 27px 106px 25px 26px;
}
.menu-left-three {
  color: gray;
  margin-bottom: 20%;
  border-radius: 30px 0px 0px 30px;
  padding: 27px 106px 25px 26px;
  
}
.menu-left-four {
  color: gray;
  margin-bottom: 20%;
  border-radius: 30px 0px 0px 30px;
  padding: 27px 106px 25px 26px;

}
.menu-left-five {
  color: gray;
  margin-bottom: 20%;
  border-radius: 30px 0px 0px 30px;
  padding: 27px 106px 25px 26px;
}
.group-187 {
  display: flex;
  align-items: center;
}
.group-135 {
  margin-right: 20%;
}
.menu-left-six {
  width: 85px;
  color: black;
  text-align: center;
}


p:hover{
  background-color: gainsboro;
  color: black;
}

</style>