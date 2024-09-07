/*
 * @description: 
 * @Date: 2024-09-08 00:24:00
 * @LastEditTime: 2024-09-08 00:24:00
 */

const miao = document.querySelector("#miao-img");
const listBox = document.querySelector(".gongde");

let easterEgg = false;

//弹幕列表
const textList = [
  "a~",
  "喵。",
  "喵~",
  "喵喵喵",
  "哼！",
  "才不是南梁呢！",
  "既见标兵，为何不拜",
  "什...什么猫娘班长嘛",
  "猫薄荷什么的...我才没有买呢",
  "我不跟你好了！",
  "你才是大笨蛋~",
  "兄弟你好香",
  "♥♥♥",
  "嚼嚼嚼",
  "这批猫条对味",
  "你说这猫薄荷是谁发明的呢",
  "我不要上学，我要玩迷你世界",
  "私斋蒸鹅心",
  "man!",
]

let t;
//动态创建功德弹窗
const createAlert = () => {
  if (easterEgg){
    let sound = new Audio();
    sound.src = "./static/audio/从小喝到大.mp3";
    sound.play();
    t = "我从小喝到大";
  }else{
    let sound = new Audio();
    let random = Math.floor(Math.random() * 2);
    sound.src = `./static/audio/${random}.mp3`;
    sound.play();
    const randomIndex = Math.floor(Math.random() * textList.length);
    t = textList[randomIndex];
  }
  const div = document.createElement("div");
  div.className = "gongde-item";
  div.innerText = t;
  setTimeout(() => {
    listBox.removeChild(div);
  }, 1900);
  listBox.append(div);
}

//木鱼点击后的效果
const muyuScale = () => {
  if (easterEgg) {
    miao.className = 'clickDown';
    miao.src = "./static/img/cxhdd.png";
    setTimeout(_ => {
      miao.className = '';
    }, 200)
  }else{
    miao.className = 'clickDown';
    miao.src = "./static/img/miao_clickdown.png";
    setTimeout(_ => {
      miao.className = '';
      miao.src = "./static/img/miao.png";
    }, 200)
  }
  
}

let body = document.body;
//木鱼图片按下事件
miao.onclick = () => {
  if (Math.random() <= 0.1) {
    easterEgg = true;
  }else {
    easterEgg = false;
  }
  createAlert()
  muyuScale();
}

//监听空格键按下事件
window.addEventListener("keydown", function (event) {
  const { code } = event;
  if (code == 'Space') {
    muyuScale();
    createAlert()
  }
})

alert("请随意玩弄喵桑~");
