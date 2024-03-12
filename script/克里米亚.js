ModPE.setItem(1005,"克里米亚蛋",0,"克里米亚蛋",64);
Player.addItemCreativeInv(1005,1,0);
function useItem(x,y,z,itemId,blockId)
{
if(itemId==1005)
{
var 克里米亚= Level.spawnMob(x,y+1,z,32,"mob/克里米亚.png");
Entity.setRenderType(克里米亚,A克里米亚);
Entity.setMaxHealth(克里米亚,60);
Entity.setHealth(克里米亚,60);
Entity.setNameTag(克里米亚,"克里米亚");
Entity.addEffect(克里米亚,5,999999,7,false,false);
Entity.addEffect(克里米亚,12,999999,1,false,false);
Player.addItemInventory(1005,-1,0);
}
}
function entityAddedHook(e){
var x=Entity.getX(e);var y=Entity.getY(e);
var z=Entity.getZ(e);
if(Entity.getNameTag(e)=="克里米亚"){
Entity.setMobSkin(e,"mob/克里米亚.png");
Entity.setRenderType(e,A克里米亚);
Entity.addEffect(e,5,999999,6,false,false);
Entity.addEffect(e,12,999999,1,false,false);
Entity.setCollisionSize(e,0.5,2);
}
}

function Add克里米亚(renderer)
{
model=renderer.getModel();
model.getPart("head").clear();
model.getPart("rightArm").clear();
model.getPart("leftArm").clear();
model.getPart("rightLeg").clear();
model.getPart("leftLeg").clear();
model.getPart("body").clear();

var 头=model.getPart("head");
头.setTextureSize(64,64);
头.setTextureOffset(0,0,true);
头.addBox(-4,19,0,8,4,12);
头.setTextureOffset(0,16,true);
头.addBox(-2,20,-8,4,2,4);
头.setTextureOffset(0,39,true);
头.addBox(-3,19,-4,6,4,6);
头.setTextureOffset(0,49,true);
头.addBox(-3,20,11,6,2,6);
头.setTextureOffset(0,22,true);
头.addBox(-10,20,0,6,2,4);
头.setTextureOffset(0,22,true);
头.addBox(4,20,0,6,2,4);
头.setTextureOffset(0,28,true);
头.addBox(8,20,-7,4,2,9);
头.setTextureOffset(0,28,true);
头.addBox(-12,20,-7,4,2,9);
头.setTextureOffset(52,0,true);
头.addBox(-8,20,10,4,2,2);
头.setTextureOffset(52,0,true);
头.addBox(-8,20,7,4,2,2);
头.setTextureOffset(52,0,true);
头.addBox(-8,20,4,4,2,2);
头.setTextureOffset(52,0,true);
头.addBox(4,20,10,4,2,2);
头.setTextureOffset(52,0,true);
头.addBox(4,20,7,4,2,2);
头.setTextureOffset(52,0,true);
头.addBox(4,20,4,4,2,2);
头.setTextureOffset(52,4,true);
头.addBox(3,20,12,3,2,2);
头.setTextureOffset(52,4,true);
头.addBox(3,20,15,3,2,2);
头.setTextureOffset(52,4,true);
头.addBox(-6,20,12,3,2,2);
头.setTextureOffset(52,4,true);
头.addBox(-6,20,15,3,2,2);
头.setTextureOffset(52,8,true);
头.addBox(-1,20,17,2,2,3);
}
var A克里米亚=Renderer.createHumanoidRenderer();
Add克里米亚(A克里米亚)