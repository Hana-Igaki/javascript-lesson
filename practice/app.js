function battle(boy){
  return '出陣' + boy.last;
}
let 三日月宗近 = {
  name : '三日月宗近',
  sord : '太刀',
  my : '俺',
  last : 'だ。',
};
let 小狐丸 = {
  name : '小狐丸',
  sord : '太刀',
  my : '小狐',
  last : 'です。',
};
let 石切丸 = {
  name : '石切丸',
  sord : '大太刀',
  my : '私',
  last : 'だよ。',
};
let 岩融 = {
  name : '岩融',
  sord : '薙刀',
  my : '俺',
  last : 'だ！',
};
let 今剣 = {
  name : '今剣',
  sord : '短刀',
  my : 'ぼく',
  last : 'です！',
};
三日月宗近.battles = battle(三日月宗近);
小狐丸.battles = battle(小狐丸);
石切丸.battles = battle(石切丸);
岩融.battles = battle(岩融);
今剣.battles = battle(今剣);

let 三条派 =[三日月宗近, 小狐丸, 石切丸, 岩融, 今剣];
console.log(三条派);

function introduce(group){
  for (let i = 0; i < group.length; i++) {
    let member = group[i];
    let message = `${member.my}は${member.name}、${member.sord}${member.last}
${member.battles}`;
    console.log(message);
  }
};

introduce(三条派);