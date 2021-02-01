<template>
  <div class="group-554">
    <div class="flex-wrapper-nine">
      <p class="tematiskt-omrade">{{ tematisktOmrade }}</p>
      <div class="flex-wrapper-fourteen">
        <div class="flex-wrapper-eight">
          <div class="group-549">
            <p class="mal-och-budget">{{ malOchBudget }}</p>
            <div class="group-503">
              <img
                alt=""
                src="https://static.overlay-tech.com/assets/232e6cd5-ea2a-492d-bc67-81e30277137b.svg"
              />
            </div>
          </div>
        </div>
        <div class="group-525">
          <p class="demokrati">{{ demokrati }}</p>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/e8a58f2e-a7e8-4121-8870-2d40a56066dc.svg"
          />
        </div>
      </div>
      <div class="flex-wrapper-fourteen">
        <div class="group-551">
          <p class="kultur-och-fritid">
            {{ kulturOchFritid }}
          </p>
          <div class="teamwork-1">
            <div class="flex-wrapper-three">
              <div class="vector"></div>
              <div class="vector"></div>
            </div>
            <div class="flex-wrapper-four">
              <div class="flex-wrapper-sixteen">
                <div class="vector-two"></div>
                <div class="vector-two"></div>
              </div>
              <div class="flex-wrapper-sixteen">
                <div class="vector-two"></div>
                <div class="vector-two"></div>
              </div>
              <div class="flex-wrapper-sixteen">
                <div class="vector-two"></div>
                <div class="vector-two"></div>
              </div>
              <div class="flex-wrapper-nineteen">
                <div class="vector-three"></div>
                <div class="vector-four"></div>
                <div class="vector-five"></div>
                <div class="vector-six"></div>
                <div class="vector-six"></div>
              </div>
              <div class="flex-wrapper-twenty">
                <div class="vector-seven"></div>
                <div class="vector-eight"></div>
                <div class="vector-four"></div>
                <div class="vector-nine"></div>
                <div class="vector-eight"></div>
                <div class="vector-six"></div>
                <div class="vector-six"></div>
              </div>
              <div class="flex-wrapper-twenty-one">
                <div class="vector"></div>
                <div class="vector"></div>
              </div>
              <div class="flex-wrapper-twenty-one">
                <div class="vector"></div>
                <div class="vector"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-wrapper-seven"></div>
      </div>
    </div>
    <div class="flex-wrapper-ten">
      <div class="group-526">
        <p class="omrade">{{ omrade }}</p>
        <div class="radar-1-1">
          <img
            alt=""
            class="group"
            src="https://static.overlay-tech.com/assets/ce6542ce-1a7f-4ee3-ac83-12ed329eb77b.svg"
          /><img
            alt=""
            class="group-two"
            src="https://static.overlay-tech.com/assets/6545827c-da98-486f-a7fa-af8df89b6587.svg"
          />
        </div>
        <p class="digitalisering">{{ digitalisering }}</p>
        <img
          alt=""
          class="globe-1"
          src="https://static.overlay-tech.com/assets/0f9abeff-ec71-49c0-8bb0-3e62d07b23e1.svg"
        />
      </div>
      <div class="radar-1-1">
        <div class="group-474">
          <p class="naeringsliv">{{ naeringsliv }}</p>
        </div>
        <img
          alt=""
          class="group-three"
          src="https://static.overlay-tech.com/assets/205509a8-bfce-460f-bfbe-9aee303f268c.svg"
        />
      </div>
    </div>
    <div class="flex-wrapper-ten">
      <div class="group-527">
        <div class="relative-wrapper-one">
          <p class="strategier">{{ strategier }}</p>
          <p class="ekonomi">{{ ekonomi }}</p>
        </div>
        <div class="flex-wrapper-two">
          <div class="economic-1">
            <div class="flex-wrapper-one">
              <div class="vector-ten"></div>
            </div>
            <img
              alt=""
              class="vector-eleven"
              src="https://static.overlay-tech.com/assets/de95c102-14cf-436d-8599-3ebaa50f7d38.svg"
            /><img
              alt=""
              class="vector-twelve"
              src="https://static.overlay-tech.com/assets/4e9914a1-3dde-459a-9e80-452df0f1b427.svg"
            />
          </div>
        </div>
      </div>
      <img
        alt=""
        src="https://static.overlay-tech.com/assets/ec75971d-bd28-487d-a526-ecd6581f12d3.png"
      />
    </div>
    <div class="flex-wrapper-ten">
      <div class="group-528">
        <p class="folkhaelsa" @click="handleClick">{{ folkhaelsa }}</p>
        <div class="care-1">
          <img
            alt=""
            class="group-four"
            src="https://static.overlay-tech.com/assets/c2e587f7-6d42-41d6-aa0d-3b275dd6b70b.svg"
          /><img
            alt=""
            class="group-five"
            src="https://static.overlay-tech.com/assets/f6f41048-efbb-4233-8c4c-8a43b1269c96.svg"
          /><img
            alt=""
            class="group-six"
            src="https://static.overlay-tech.com/assets/ab0cd6f2-9081-4e8e-8d3c-1d894edd7506.svg"
          /><img
            alt=""
            class="group-seven"
            src="https://static.overlay-tech.com/assets/ab4066ae-ccdd-44f2-9f42-8a776a9eb902.svg"
          />
          <div class="flex-wrapper-twenty-three">
            <img
              alt=""
              class="group-eight"
              src="https://static.overlay-tech.com/assets/0818dcd3-4c41-44d2-b7da-6239c6a6ef48.svg"
            /><img
              alt=""
              class="group-eight"
              src="https://static.overlay-tech.com/assets/022a6482-38dc-4cab-b860-86094577b232.svg"
            />
          </div>
          <div class="flex-wrapper-twenty-three">
            <img
              alt=""
              class="group-eight"
              src="https://static.overlay-tech.com/assets/6e93ee3a-531d-42c5-838f-3bf0ae9b0b51.svg"
            /><img
              alt=""
              class="group-eight"
              src="https://static.overlay-tech.com/assets/b3ebcad7-f6cd-457b-8c9a-34b007893a83.svg"
            />
          </div>
          <div class="group-554">
            <div class="relative-wrapper-two">
              <img
                alt=""
                class="group-nine"
                src="https://static.overlay-tech.com/assets/1346cf5d-b00d-42c8-a2e8-1909dd2caf64.svg"
              /><img
                alt=""
                class="group-ten"
                src="https://static.overlay-tech.com/assets/d2444431-8502-4f85-80d6-2a2fce81dcb6.svg"
              />
              <div class="flex-wrapper-five">
                <div class="group-eleven"></div>
                <img
                  alt=""
                  class="group-twelve"
                  src="https://static.overlay-tech.com/assets/06b6b9b4-c9cd-491a-b3a6-945a472a8f39.svg"
                /><img
                  alt=""
                  src="https://static.overlay-tech.com/assets/c0bbee49-7211-4733-9709-749964a31d72.svg"
                />
              </div>
              <div class="flex-wrapper-six">
                <img
                  alt=""
                  class="group-thirteen"
                  src="https://static.overlay-tech.com/assets/f7363cc4-0ec9-4d4a-98a8-584a3ba54d95.svg"
                /><img
                  alt=""
                  class="group-fourteen"
                  src="https://static.overlay-tech.com/assets/95942cd3-40ee-4469-a57d-742a3e575d60.svg"
                /><img
                  alt=""
                  src="https://static.overlay-tech.com/assets/f157d40f-ca8a-41ae-a32b-9606717a9cf3.svg"
                />
              </div>
            </div>
            <img
              alt=""
              class="group-fifteen"
              src="https://static.overlay-tech.com/assets/426c394c-9fc8-4af5-b7a3-19fea9e8e1f8.svg"
            />
            <div class="flex-wrapper-twenty-six">
              <img
                alt=""
                class="group-sixteen"
                src="https://static.overlay-tech.com/assets/d3b7a18e-42b6-4c78-ba44-43bb5863295b.svg"
              /><img
                alt=""
                class="group-sixteen"
                src="https://static.overlay-tech.com/assets/b662700e-0e86-45fc-a2ba-9f3969fafe78.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        alt=""
        src="https://static.overlay-tech.com/assets/40911042-7f0c-4645-ba96-b15895f86f06.png"
      />
    </div>
    <div class="flex-wrapper-ten">
      <div class="group-529">
        <div class="rectangle-433"></div>
        <div class="rectangle-433-two"></div>
        <p class="riktlinjer">{{ riktlinjer }}</p>
        <div class="guide-1">
          <img
            alt=""
            class="group-seventeen"
            src="https://static.overlay-tech.com/assets/77ff3f52-912c-4777-beca-3dbd23db9b5e.svg"
          /><img
            alt=""
            class="group-two"
            src="https://static.overlay-tech.com/assets/51ad2949-2608-40ea-8b9c-103b20c3df5b.svg"
          /><img
            alt=""
            class="group-eighteen"
            src="https://static.overlay-tech.com/assets/87b2b5df-0b2c-4971-9367-4438ab1e8144.svg"
          /><img
            alt=""
            class="group-nineteen"
            src="https://static.overlay-tech.com/assets/e3dc8c0b-6ba8-4527-806a-0cf5d3517932.svg"
          /><img
            alt=""
            class="group-twenty"
            src="https://static.overlay-tech.com/assets/a7034f37-6300-4ed6-a228-cb2e02f27356.svg"
          />
        </div>
        <p class="jaemstaelldhet-och-jaemlikhet">
          {{ jaemstaelldhetOchJaemlikhet }}
        </p>
        <img
          alt=""
          class="group-twenty-one"
          src="https://static.overlay-tech.com/assets/746bbe6a-62cc-43ec-9ef6-eb1779cb6d54.svg"
        />
      </div>
      <div class="radar-1-1">
        <div class="group-476">
          <p class="riktlinjer-two">{{ riktlinjerTwo }}</p>
          <p class="trygghet-och-saekerhet">
            {{ trygghetOchSaekerhet }}
          </p>
        </div>
        <img
          alt=""
          class="group-twenty-two"
          src="https://static.overlay-tech.com/assets/7d550d63-382f-4e97-a57c-6f36231d8891.svg"
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
props: {
    tematisktOmrade: {
      type: String,
      default: "Tematiskt område"
    },
    malOchBudget: {
      type: String,
      default: "Mål och budget"
    },
    demokrati: { 
      type: String, 
      default: "Demokrati" 
      },
    kulturOchFritid: {
      type: String,
      default: "Kultur och fritid"
    },
    omrade: { type: String, default: "Område" },
    digitalisering: {
      type: String,
      default: "Digitalisering"
    },
    naeringsliv: { type: String, default: "Näringsliv" },
    strategier: { type: String, default: "Strategier" },
    ekonomi: { type: String, default: "Ekonomi" },
    folkhaelsa: { type: String, default: "Folkhälsa" },
    riktlinjer: { type: String, default: "Riktlinjer" },
    jaemstaelldhetOchJaemlikhet: {
      type: String,
      default: "Jämställdhet och Jämlikhet"
    },
    riktlinjerTwo: { type: String, default: "Riktlinjer" },
    trygghetOchSaekerhet: {
      type: String,
      default: "Trygghet och säkerhet"
    }
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/_variables.scss";

.flex-wrapper-eight {
  background-color: $silver;
  margin-right: 31px;
  border-radius: 15px;
  box-shadow: 0 4px 4px 0 black;
  display: flex;
  align-items: flex-start;
}
</style>
