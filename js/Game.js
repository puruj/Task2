var style;
  function styles(f,g) {
    style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: f,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff',g], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 350
  });
  return style;
  }
//alert("Press Ok to start!");
var richText, richText2, richText3
var pic1, pic2, pic3;
var i = 0, howManyTimes = scenario.length;
var tempI;
function f(){
if(i < howManyTimes){
if(scenario[i].text1 != '-1'){
richText = new PIXI.Text(scenario[i].text1, styles(scenario[i].fontS,scenario[i].grad ));
richText.x = loc1.x;
richText.y = loc1.y;
app.stage.addChild(richText);
}else{
pic1 = PIXI.Sprite.fromImage(scenario[i].img1);
pic1.x = loc1.x;
pic1.y = loc1.y;
app.stage.addChild(pic1);
}
if(scenario[i].text2 != '-1'){
richText2 = new PIXI.Text(scenario[i].text2, styles(scenario[i].fontS,scenario[i].grad ));
richText2.x = loc2.x;
richText2.y = loc2.y;
app.stage.addChild(richText2);
}else{
  pic2 = PIXI.Sprite.fromImage(scenario[i].img2);
  pic2.x = loc2.x;
  pic2.y = loc2.y;
  app.stage.addChild(pic2);
}
if(scenario[i].text3 != '-1'){
richText3 = new PIXI.Text(scenario[i].text3, styles(scenario[i].fontS,scenario[i].grad ));
richText3.x = loc3.x;
richText3.y = loc3.y;
app.stage.addChild(richText3);
}else{
  pic3 = PIXI.Sprite.fromImage(scenario[i].img3);
  pic3.x = loc3.x;
  pic3.y = loc3.y;
  app.stage.addChild(pic3);
}
i++;
setTimeout( f, 2000 );
if(i < howManyTimes){
setTimeout( del, 2000 );
}
//after 8 scenarios randomize scenarios and run again
}else{
  del();
  i=0;
  shuffle(scenario);
  f();
}
}
//shifts first three elements of array so text and images are not overlayed on top of each other
function del()
{
  app.stage.children.shift();
  app.stage.children.shift();
  app.stage.children.shift();
}

