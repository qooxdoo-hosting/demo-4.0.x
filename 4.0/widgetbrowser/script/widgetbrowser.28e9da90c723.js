qx.$$packageData['4096']={"locales":{},"resources":{"qx/icon/Oxygen/32/status/dialog-information.png":[32,32,"png","qx"],"qx/icon/Tango/32/status/dialog-information.png":[32,32,"png","qx"]},"translations":{"en":{}}};
qx.Part.$$notifyLoad("4096", function() {
(function(){var a="widgetbrowser.pages.Basic",b="Label",c="icon/32/status/dialog-information.png",d="middle",e="Image",f="Atom";qx.Class.define(a,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);var g=this.__Ni=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));this.add(g,{top:0});this.initWidgets();},members:{__Ni:null,initWidgets:function(){var h=this._widgets;var k=new qx.ui.basic.Label(b).set({alignY:d});h.push(k);this.__Ni.add(k);var i=new qx.ui.basic.Atom(e,c);h.push(i);this.__Ni.add(i);var j=new qx.ui.basic.Atom(f,c);h.push(j);this.__Ni.add(j);}}});})();
});