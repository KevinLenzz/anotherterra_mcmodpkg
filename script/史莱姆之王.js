ModPE.setItem(1004,"史莱姆王冠",0,"史莱姆王冠",1);
Player.addItemCreativeInv(1004,1,0);
function useItem(x,y,z,itemId,blockId){
if(itemId==1004){
var 史莱姆之王=Level.spawnMob(x,y+1,z,32,"mob/史莱姆之王.png");
Entity.setRenderType(史莱姆之王, 史莱姆之王模型);
Entity.setHealth(史莱姆之王,2000);
Entity.setMaxHealth(史莱姆之王,2000);
Entity.setNameTag(史莱姆之王,"史莱姆之王");
Entity.addEffect(史莱姆之王,5,999999,18,false,false);
Entity.addEffect(e,12,999999,1,false,false);
Player.addItemInventory(1004,-1,0);
}
}
function entityAddedHook(e){
var x=Entity.getX(e);var y=Entity.getY(e);
var z=Entity.getZ(e);
if(Entity.getNameTag(e)=="史莱姆之王"){
Entity.setMobSkin(e,"mob/史莱姆之王.png");
Entity.setRenderType(e,史莱姆之王模型);
Entity.addEffect(e,5,999999,18,false,false);
Entity.addEffect(e,12,999999,1,false,false);
Entity.setCollisionSize(e,3,2);
}
}
function 史莱姆之王模型组(renderer)
{
model=renderer.getModel();
model.getPart("head").clear();
model.getPart("rightArm").clear();
model.getPart("leftArm").clear();
model.getPart("body").clear();
model.getPart("rightLeg").clear();
model.getPart("leftLeg").clear();
var 身体=model.getPart("body");
身体.setTextureSize(64,64);
身体.setTextureOffset(0,0,true);
身体.addBox(5,5,5,10,8,10,10);
身体.setTextureOffset(0,19,true);
身体.addBox(5,-20,10,12,22,1);
}
var 史莱姆之王模型=Renderer.createHumanoidRenderer();
史莱姆之王模型组(史莱姆之王模型)