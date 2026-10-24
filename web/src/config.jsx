import React from "react";

const config = {
  ROMS: {
    1942: {
      name: "1942",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/1942(简)[6502](JU)[STG](0.62Mb).nes"
    },
    1944: {
      name: "1944",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/1944(v1.0)(简)[MS](JP)[STG](1Mb).nes"
    },
    成龙踢馆: {
      name: "成龙踢馆",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/成龙踢馆(简)[高伟](JP)[ACT](0.31Mb).nes"
    },
    成龙之龙: {
      name: "成龙之龙",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/成龙之龙(简)[高伟](JP)[ACT](2Mb).nes"
    },
    吃豆小精灵: {
      name: "吃豆小精灵",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/吃豆小精灵(简)[高伟](JP)[PUZ](0.18Mb).nes"
    },
    吃豆人小姐: {
      name: "吃豆人小姐",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/吃豆人小姐(简)[虫虫](US)[PUZ](0.31Mb).nes"
    },
    赤影战士: {
      name: "赤影战士",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/赤影战士(v20220407)(简)[asiwish](JP)[ACT](2Mb).nes"
    },
    高桥名人之冒险岛: {
      name: "高桥名人之冒险岛",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/高桥名人之冒险岛(v20100528)(繁)[Nokoh](JP)[ACT](0.81Mb).nes"
    },
    高桥名人之冒险岛2: {
      name: "高桥名人之冒险岛2",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/高桥名人之冒险岛2(v20101231)(繁)[Nokoh](JP)[ACT](2.12Mb).nes"
    },
    高桥名人之冒险岛3: {
      name: "高桥名人之冒险岛3",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/高桥名人之冒险岛3(v20110101)(繁)[Nokoh](JP)[ACT](2.18Mb).nes"
    },
    高桥名人之冒险岛4: {
      name: "高桥名人之冒险岛4",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/高桥名人之冒险岛4(v20220222)(繁)[Nokoh](JP)[ACT](4Mb).nes"
    },
    魂斗罗: {
      name: "魂斗罗",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/魂斗罗(简)[FlameCyclone](JP)[ACT](3Mb).nes"
    },
    超级魂斗罗: {
      name: "魂斗罗 - 超级魂斗罗",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/超级魂斗罗(v2)(日简)[星空](JP)[ACT](2Mb).nes"
    },
    超级魂斗罗X: {
      name: "魂斗罗 - 超级魂斗罗X",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/超级魂斗罗X(简)[孔雀天](CN)[ACT](4Mb).nes"
    },
    空中魂斗罗: {
      name: "魂斗罗 - 空中魂斗罗",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/空中魂斗罗 - 最终任务(v1.0)(简)[星空](JP)[STG](2Mb).nes"
    },
    魂斗罗力量之战: {
      name: "魂斗罗 - 力量之战",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/魂斗罗力量之战(v1.0)(简)[星空](US)[ACT](2.12Mb).nes"
    },
    星际魂斗罗: {
      name: "魂斗罗 - 星际魂斗罗",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/星际魂斗罗(版本1)(简)[星空](US)[ACT](2Mb).nes"
    },
    快打旋风: {
      name: "快打旋风",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/快打旋风(简)[Antigloss](US)[ACT](2Mb).nes"
    },
    超级马里奥兄弟: {
      name: "马里奥 - 超级马里奥兄弟",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/超级马里奥兄弟(简)[F0REVERD](JUE)[ACT](0.31Mb).nes"
    },
    超级马里奥兄弟路易基之谜团: {
      name: "马里奥 - 超级马里奥兄弟 - 路易基之谜团",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/超级马里奥兄弟 - 路易基之谜团(简)[F0REVERD](JUE)[ACT](0.31Mb).nes"
    },
    马里奥兄弟: {
      name: "马里奥兄弟",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/马里奥兄弟(简)[水火](JUE)[ACT](0.37Mb).nes"
    },
    马里奥医生: {
      name: "马里奥医生",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/马里奥医生(v2.0)(简)[九班](JU)[PUZ](0.5Mb).nes"
    },
    马戏团: {
      name: "马戏团",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/马戏团(简)[水火](JP)[ACT](0.37Mb).nes"
    },
    米老鼠大冒险: {
      name: "米老鼠大冒险",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/米老鼠大冒险(简)[星空](JP)[ACT](0.5Mb).nes"
    },
    泡泡龙: {
      name: "泡泡龙",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/泡泡龙(v20101230)(繁)[Nokoh](US)[ACT](1.43Mb).nes"
    },
    泡泡龙2: {
      name: "泡泡龙2",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/泡泡龙2(简)[MM之神](US)[ACT](2Mb).nes"
    },
    敲冰块: {
      name: "敲冰块",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/敲冰块(简)[水火](JP)[ACT](0.37Mb).nes"
    },
    忍者神龟2: {
      name: "忍者神龟2",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/忍者神龟2(简)[樱组](US)[ACT](4Mb).nes"
    },
    忍者神龟之激烈格斗: {
      name: "忍者神龟 - 激烈格斗",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/忍者神龟 - 激烈格斗(v20230622)(简)[Nokoh+fciq](US)[FTG](2.25Mb).nes"
    },
    三目童子: {
      name: "三目童子",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/三目童子(v3)(简)[逆游的五彩鱼](JP)[ACT](3Mb).nes"
    },
    松鼠大作战: {
      name: "松鼠大作战",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/松鼠大作战(简)[星空](JP)[ACT](6Mb).nes"
    },
    松鼠大作战2: {
      name: "松鼠大作战2",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/松鼠大作战2(简)[星空](JP)[ACT](2Mb).nes"
    },
    坦克大战: {
      name: "坦克大战",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/坦克大战(简)[ENTA](JP)[STG](0.18Mb).nes"
    },
    炸弹人: {
      name: "炸弹人",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/炸弹人(简)[水火](JP)[PUZ](0.37Mb).nes"
    },
    足球: {
      name: "足球",
      url: "https://cdn.jsdelivr.net/gh/lb94wpz/roms@Nintendo_FC/unzip/足球(简)[高伟](JUE)[SPG](0.31Mb).nes"
    },
  },
};

export default config;
