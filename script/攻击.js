//攻击函数
function 造成伤害(攻击者手持id,造成的附加伤害,被攻击者)
{
if(Entity.getHealth(被攻击者)>0)
{
if(getCarriedItem()==攻击者手持id&&Entity.getHealth(被攻击者)>造成的附加伤害)
{
Entity.setHealth(被攻击者,Entity.getHealth(被攻击者)-造成的附加伤害)
}
else if(getCarriedItem()==攻击者手持id
&&Entity.getHealth(被攻击者)<=造成的附加伤害)
{
Entity.setHealth(被攻击者,1)
}}
}

function attackHook(player,entity){
造成伤害(901,39,entity),造成伤害(902,34,entity);造成伤害(903,118,entity);造成伤害(904,45,entity);造成伤害(905,88,entity);造成伤害(906,40,entity);造成伤害(907,63,entity);造成伤害(908,20,entity);造成伤害(909,46,entity);造成伤害(910,44,entity);造成伤害(913,3,entity);造成伤害(915,6,entity);造成伤害(919,5,entity);造成伤害(920,7,entity);
}
