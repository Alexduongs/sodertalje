<template>
  <div class="navbarside">
    <img
      alt=""
      class="navicon"
      src="https://static.overlay-tech.com/assets/7fce7eb4-a06f-4afc-8541-c4f29a2d2f50.png"
    /><img
      alt=""
      class="profilepicture"
      src="https://static.overlay-tech.com/assets/d2c2a69c-a110-4807-9526-69e2f595d152.png"
    />
    <h5 class="nametitle">
      {{ jordanValentinLane }}
    </h5>
    <ul class="flex-wrapper-one">
    <li class="menu-left-two">{{ menuLeftTwo }}</li>
    <li class="menu-left-three">{{ menuLeftThree }}</li>
    <li class="menu-left-four">{{ menuLeftFour }}</li>
    <li class="menu-left-five">{{ menuLeftFive }}</li>
    <div class="logout">
      <img
        alt=""
        class="logouticon"
        src="https://static.overlay-tech.com/assets/be754bca-79cf-40f6-ac1b-acd5f5c70b97.svg"
      />
      <h5 class="menu-left-six">{{ menuLeftSix }}</h5>
      </div>
    </ul>
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
@import "./src/_variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

.navbarside {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  position: absolute;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
.navicon {
  margin-bottom: 30%;
  margin-top: 30%;
}
.profilepicture {
  margin-bottom: 14px;
  border-radius: 50%;
  box-shadow:0px 1px 2px 1px rgb(205, 203, 203);
}
.nametitle {
  color: black;
  text-align: right;
  margin-bottom: 53px;

}
.flex-wrapper-one {
 margin-left: 20%;
}

.menu-left-two {
  color:$grey;
  margin-bottom: 20%;
  border-radius: 30px 0px 0px 30px;
  padding: 27px 106px 25px 26px;
}
.menu-left-three {
  color: $grey;
  margin-bottom: 20%;
  border-radius: 30px 0px 0px 30px;
  padding: 27px 106px 25px 26px;
  
}
.menu-left-four {
  color:$grey;
  margin-bottom: 20%;
  border-radius: 30px 0px 0px 30px;
  padding: 27px 106px 25px 26px;

}
.menu-left-five {
  color: $grey;
  margin-bottom: 20%;
  border-radius: 30px 0px 0px 30px;
  padding: 27px 106px 25px 26px;
}
.logout {
  display: flex;
  align-items: center;
}
.logouticon {
  margin-right: 20%;
}
.menu-left-six {
  width: 85px;
  color: black;
  text-align: center;
}

li:hover{
  background-color: gainsboro;
  color:black;
  transition: 0.6s;
}

li {
  list-style: none;
}

 .navbarside {
    display: none;
  }

</style>