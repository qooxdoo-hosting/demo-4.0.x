qx.$$packageData['41088']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("41088", function() {
(function(){var a="menu-checkbox",b="Boolean",c="label",d="_applyValue",f="value",g="changeValue",h="toolTipText",i="enabled",j="qx.ui.menu.CheckBox",k="checked",l="menu",m="execute";qx.Class.define(j,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(o,n){qx.ui.menu.AbstractButton.call(this);if(o!=null){if(o.translate){this.setLabel(o.translate());}else {this.setLabel(o);};};if(n!=null){this.setMenu(n);};this.addListener(m,this._onExecute,this);},properties:{appearance:{refine:true,init:a},value:{check:b,init:false,apply:d,event:g,nullable:true}},members:{_bindableProperties:[i,c,h,f,l],_applyValue:function(q,p){q?this.addState(k):this.removeState(k);},_onExecute:function(e){this.toggleValue();},_onTap:function(e){if(e.isLeftPressed()){this.execute();}else {if(this.getContextMenu()){return;};};qx.ui.menu.Manager.getInstance().hideAll();},_onKeyPress:function(e){this.execute();}}});})();
});