ModPE.setItem(1001,"恶魔之眼蛋",0,"恶魔之眼蛋",64);
Player.addItemCreativeInv(1001,1,0);
function 自动生成怪物(距离,亮度,几率,世界类型){
var x=距离*Math.random()+getPlayerX()
var y=Math.random()+getPlayerY()
var z=距离*Math.random()+getPlayerZ()
if(getTile(x,y,z)==0&&Math.random()*100<1){
if(Level.getBrightness(x,y,z)<亮度&&Math.random()*100<50){
if(Player.getDimension()==世界类型&&Math.random()*100<几率){
var 恶魔之眼= Level.spawnMob(x,y+1,z,32,"mob/恶魔之眼.png");
Entity.setRenderType(恶魔之眼,A恶魔之眼);
Entity.setMaxHealth(恶魔之眼,60);
Entity.setHealth(恶魔之眼,60);
Entity.setNameTag(恶魔之眼,"恶魔之眼");
Entity.addEffect(恶魔之眼,5,999999,7,false,false);
}}}}
function modTick(){
自动生成怪物(10,5,50,0);
}
function useItem(x,y,z,itemId,blockId)
{
if(itemId==1001)
{
var 恶魔之眼= Level.spawnMob(x,y+1,z,32,"mob/恶魔之眼.png");
Entity.setRenderType(恶魔之眼,A恶魔之眼);
Entity.setMaxHealth(恶魔之眼,60);
Entity.setHealth(恶魔之眼,60);
Entity.setNameTag(恶魔之眼,"恶魔之眼");
Entity.addEffect(恶魔之眼,5,999999,7,false,false);
Player.addItemInventory(1001,-1,0);
}
}
function entityAddedHook(e){
var x=Entity.getX(e);var y=Entity.getY(e);
var z=Entity.getZ(e);
if(Entity.getNameTag(e)=="恶魔之眼"){
Entity.setMobSkin(e,"mob/恶魔之眼.png");
Entity.setRenderType(e,A恶魔之眼);
Entity.addEffect(e,5,999999,6,false,false);
Entity.setCollisionSize(e,0.5,2);
}
}

function Add恶魔之眼(renderer)
{
model=renderer.getModel();
model.getPart("head").clear();
model.getPart("rightArm").clear();
model.getPart("leftArm").clear();
model.getPart("rightLeg").clear();
model.getPart("leftLeg").clear();
model.getPart("body").clear();

var 头=model.getPart("head");
头.setTextureOffset(0,12,true);
头.addBox(-5,1,0,10,10,10);
头.setTextureOffset(30,0,true);
头.addBox(-5,1,10,2,2,12);
头.addBox(-1,1,10,2,2,12);
头.addBox(3,1,10,2,2,12);
头.addBox(-5,5,10,2,2,12);
头.addBox(3,9,10,2,2,12);
头.addBox(-5,9,10,2,2,12);
头.addBox(-1,9,10,2,2,12);
头.addBox(3,5,10,2,2,12);
}
var A恶魔之眼=Renderer.createHumanoidRenderer();
Add恶魔之眼(A恶魔之眼)