import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    res: {
      "code": 0,
      "error_detect_types": 0,
      "filename": "prd-api3/20200221/3d305e4c0a63eec431e967566ab4fe4b-2251799844029402.jpg",
      "detect_types": "98349",
      "features": {
        "5_o_clock_shadow": "0.00002",
        "arched_eyebrows": "0.00000",
        "attractive": "0.01163",
        "bags_under_eyes": "0.00061",
        "bald": "0.00000",
        "bangs": "0.00000",
        "big_lips": "0.00000",
        "big_nose": "0.00000",
        "black_hair": "0.00000",
        "blond_hair": "0.00000",
        "blurry": "0.00000",
        "brown_hair": "0.00124",
        "bushy_eyebrows": "0.00000",
        "chubby": "0.58923",
        "double_chin": "0.00141",
        "eyeglasses": "0.99998",
        "goatee": "0.00000",
        "gray_hair": "0.00000",
        "heavy_makeup": "0.63370",
        "high_cheekbones": "0.03236",
        "male": "0.92472",
        "mouth_slightly_open": "0.00000",
        "mustache": "0.00000",
        "narrow_eyes": "0.00000",
        "no_beard": "0.00000",
        "oval_face": "0.00000",
        "pale_skin": "0.00000",
        "pointy_nose": "0.00000",
        "receding_hairline": "0.00000",
        "rosy_cheeks": "0.00000",
        "sideburns": "0.00000",
        "smiling": "0.00000",
        "straight_hair": "0.00000",
        "wavy_hair": "0.00052",
        "wearing_earrings": "0.00000",
        "wearing_hat": "0.00000",
        "wearing_lipstick": "0.00581",
        "wearing_necklace": "0.00000",
        "wearing_necktie": "0.00000",
        "young": "0.00000",
        "female": "0.00000"
      },
      "age": {
        "result": 23
      },
      "pockmark": {
        "category": [
          {
            "cls": "CC_DD",
            "count": 0,
            "score": 100
          },
          {
            "cls": "CC_DY",
            "count": 0,
            "score": 100
          }
        ],
        "count": 0,
        "score": 100,
        "filename": "prd-apiout3/20200221/b9aa80c10a7bb445e73adb6927810819-2251799844029403.jpg"
      },
      "pore": {
        "count": 0,
        "level": "none",
        "score": "100",
        "area": 0,
        "filename": "prd-apiout3/20200221/76de8526b841c64fe6c44e2e3f12788c-2251799844029305.jpg"
      },
      "blackhead": {
        "count": 2,
        "level": "lightly",
        "score": "98",
        "area": 0.026704546064138412,
        "filename": "prd-apiout3/20200221/ac84978bc32a74ba0b20208963fdbb34-2251799844029404.jpg"
      },
      "skin_type": {
        "score": 50,
        "category": [
          {
            "cls": "forehead",
            "type": "mid",
            "level": "moderately",
            "score": 50
          },
          {
            "cls": "nose",
            "type": "mid",
            "level": "moderately",
            "score": 50
          },
          {
            "cls": "left_cheek",
            "type": "mid",
            "level": "moderately",
            "score": 50
          },
          {
            "cls": "right_cheek",
            "type": "mid",
            "level": "moderately",
            "score": 50
          },
          {
            "cls": "chin",
            "type": "mid",
            "level": "moderately",
            "score": 50
          }
        ],
        "type": "mid"
      },
      "face_box": {
        "x0": 58,
        "y0": 66,
        "x1": 223,
        "y1": 290
      },
      "id": "747c98f63300b30397ddcca363399a7e"
    }
  },
  // // 2. getters
  getters: {
    // 参数列表state指的是state数据
    getAge(state) {
      return state.res.age.result;
    },
    getS(state) {
      return 100- (state.res.age.result-18)*10;
    },
    get_skin_type(state) {
      return state.res.skin_type;
    },
    getPockmark(state) {
      return state.res.pockmark;
    },
    getBlackhead(state){
      return state.res.blackhead;
    },
    getPore(state) {
      return state.res.pore;
    },
    getFeature(state) {
      return state.res.features;
    }
  },
  actions: {
    setRes({ commit }, res) {
      commit("setRes", res);
    }
  },
  mutations: {
    setRes(state, res) {
      state.res = res;
    }
  }
});
