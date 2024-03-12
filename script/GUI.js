function GUIproject1(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle("谢谢使用本mod");
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var text=new android.widget.TextView(ctx);
text.setText("\谢谢使用本mod\n本mod由Came_伦制作,QQ:2865504552\n同时感谢明的函数支持\n退出先锋后本mod就归钻石STUDIO工作室所有了");
text.setTextColor(getColor(0,0,255,255));
text.setLayoutParams(textParams);
layout.addView(text);
window.setContentView(layout);
window.show();
}}))}
function dip2px(ctx,dips){return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)}
function getColor(r,y,b,a){return android.graphics.Color.argb(a,r,y,b)}
GUIproject1();