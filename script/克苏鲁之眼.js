ModPE.setItem(1003,"可疑的眼球",0,"可疑的眼球",1);
Player.addItemCreativeInv(1003,1,0);
function useItem(x,y,z,itemId,blockId){
if(itemId==1003){
var 克苏鲁之眼=Level.spawnMob(x,y+1,z,32,"mob/克苏鲁之眼.png");
Entity.setRenderType(克苏鲁之眼, 克苏鲁之眼模型);
Entity.setHealth(克苏鲁之眼,2800);
Entity.setMaxHealth(克苏鲁之眼,2800);
Entity.setNameTag(克苏鲁之眼,"克苏鲁之眼");
Entity.addEffect(克苏鲁之眼,5,999999,6,false,false);
Player.addItemInventory(1003,-1,0);
}
}
function entityAddedHook(e){
var x=Entity.getX(e);var y=Entity.getY(e);
var z=Entity.getZ(e);
if(Entity.getNameTag(e)=="克苏鲁之眼"){
Entity.setMobSkin(e,"mob/克苏鲁之眼.png");
Entity.setRenderType(e,克苏鲁之眼模型);
Entity.addEffect(e,5,999999,6,false,false);
Entity.setCollisionSize(e,3,3);
}
}
function 克苏鲁之眼模型组(renderer)
{
model=renderer.getModel();
model.getPart("head").clear();
model.getPart("rightArm").clear();
model.getPart("leftArm").clear();
model.getPart("body").clear();
model.getPart("rightLeg").clear();
model.getPart("leftLeg").clear();
var 头=model.getPart("head");
头.setTextureOffset(0,12,true);
头.addBox(-5,1,0,10,10,10,10);
头.setTextureOffset(30,0,true);
头.addBox(-9,-3,22,2,2,12,2);
头.addBox(-1,-3,22,2,2,12,2);
头.addBox(7,-3,22,2,2,12,2);
头.addBox(-9,5,22,2,2,12,2);
头.addBox(7,13,22,2,2,12,2);
头.addBox(-9,13,22,2,2,12,2);
头.addBox(-1,13,22,2,2,12,2);
头.addBox(7,5,22,2,2,12,2);
}
var 克苏鲁之眼模型=Renderer.createHumanoidRenderer();
克苏鲁之眼模型组(克苏鲁之眼模型)