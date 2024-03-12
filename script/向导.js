ModPE.setItem(1002,"向导蛋",0,"向导蛋",64);
Player.addItemCreativeInv(1002,1,0);
function useItem(x,y,z,itemId,blockId)
{
if(itemId==1002)
{
var 向导= Level.spawnMob(x,y+1,z,15,"mob/向导.png");
Entity.setRenderType(向导,3);
Entity.setHealth(向导,20);
Entity.setNameTag(向导,"向导");
Player.addItemInventory(1002,-1,0);
}
}
function entityAddedHook(e){
var x=Entity.getX(e);var y=Entity.getY(e);
var z=Entity.getZ(e);
if(Entity.getNameTag(e)=="向导"){
Entity.setMobSkin(e,"mob/向导.png");
Entity.setRenderType(e,3);
Entity.setCollisionSize(e,0.5,2);
}
}