qx.$$packageData['128']={"locales":{},"resources":{"qx/icon/Tango/22/emotes/face-angel.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-embarrassed.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-kiss.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-laugh.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-plain.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-raspberry.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-sad.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-smile-big.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-smile.png":[22,22,"png","qx"],"qx/icon/Tango/22/emotes/face-surprise.png":[22,22,"png","qx"],"showcase/virtuallist/down.png":[7,7,"png","showcase"],"showcase/virtuallist/imicons/christian_hagendorn.png":[52,64,"png","showcase"],"showcase/virtuallist/imicons/martin_wittemann.png":[52,52,"png","showcase"],"showcase/virtuallist/imicons/readme.txt":"showcase","showcase/virtuallist/imicons/status_away.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_busy.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_offline.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/status_online.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/tino_butz.png":[48,48,"png","showcase"],"showcase/virtuallist/imicons/tristan_koch.png":[73,73,"png","showcase"],"showcase/virtuallist/imicons/user_add.png":[16,16,"png","showcase"],"showcase/virtuallist/imicons/user_delete.png":[16,16,"png","showcase"],"showcase/virtuallist/right.png":[7,7,"png","showcase"]},"translations":{"C":{},"cs":{},"de":{},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{},"es_ES":{},"es_MX":{},"pt":{},"ro":{},"ro_RO":{},"sv":{},"sv_SE":{}}};
qx.Part.$$notifyLoad("128", function() {
(function(){var a="separator-vertical",b="Escape",c="Cancel",d="Group: ",f="Name:",g="execute",h="Enter",i="away",j="source",k="Group:",l="selection[0]",m="offline",n="showcase.page.virtuallist.Content",o="center",p="value",q="showcase/virtuallist/imicons/user_delete.png",r="online",s="enabled",t="middle",u="group",v="Name: ",w="name",x="keypress",y="",z="icon",A="busy",B="selection.length",C="selection[0].status",D="modelSelection",E="top",F="Contacts",G="right",H="Status: ",I="selection",J="Add",K="Contact Details",L="Add user",M="model",N="appear",O="avatar",P="showcase/virtuallist/imicons/user_add.png",Q="left",R="Avatar: ";qx.Class.define(n,{extend:showcase.AbstractContent,construct:function(S){showcase.AbstractContent.call(this,S);this.setView(this._createView());},members:{messenger:null,__LH:null,__LI:null,_createView:function(){var W=new qx.ui.window.Desktop(new qx.ui.window.Manager());var T=new qx.ui.window.Window(F);T.set({showClose:false,showMinimize:false,contentPadding:0});W.add(T);T.moveTo(250,20);T.open();var V=new qx.ui.layout.VBox();V.setSeparator(a);T.setLayout(V);this.messenger=new showcase.page.virtuallist.messenger.Roster();var U=showcase.page.virtuallist.messenger.BuddyModel.createBuddies(200);this.messenger.setModel(U);T.add(this.createToolbar());T.add(this.messenger,{flex:1});W.add(this.createDetailsView(),{left:20,top:20});return W;},createToolbar:function(){var toolbar=new qx.ui.toolbar.ToolBar();var ba=new qx.ui.toolbar.Part();toolbar.add(ba);var X=new qx.ui.toolbar.Button(y,P).set({show:z});X.addListener(g,this.showAddContactWindow,this);ba.add(X);var Y=new qx.ui.toolbar.Button(y,q).set({show:z});this.messenger.bind(B,Y,s,{converter:function(bb){return bb>0;}});Y.addListener(g,function(){this.messenger.getModel().remove(this.messenger.getSelection().getItem(0));},this);ba.add(Y);return ba;},createDetailsView:function(){var bf=new qx.data.controller.Object();this.messenger.bind(l,bf,M);var bc=new qx.ui.groupbox.GroupBox(K);var bg=new qx.ui.layout.Grid(5,5);bg.setColumnAlign(0,G,t);bc.setLayout(bg);bc.add(new qx.ui.basic.Label(v),{row:0,column:0});var bi=new qx.ui.form.TextField();bf.addTarget(bi,p,w,true);bc.add(bi,{row:0,column:1});bc.add(new qx.ui.basic.Label(d),{row:1,column:0});var bd=new qx.ui.form.VirtualComboBox();bd.setLabelPath(w);bd.setModel(this.messenger.getGroups());bf.addTarget(bd,p,u,true);bc.add(bd,{row:1,column:1});bc.add(new qx.ui.basic.Label(H),{row:2,column:0});var bh=new qx.ui.form.SelectBox();bh.add(new qx.ui.form.ListItem(r).set({model:r}));bh.add(new qx.ui.form.ListItem(i).set({model:i}));bh.add(new qx.ui.form.ListItem(A).set({model:A}));bh.add(new qx.ui.form.ListItem(m).set({model:m}));this.messenger.bind(C,bh,D,{converter:function(bj){return [bj];}});bh.bind(I,this.messenger,C,{converter:function(bk){return bk[0].getModel();}});bc.add(bh,{row:2,column:1});bc.add(new qx.ui.basic.Label(R).set({alignY:E}),{row:3,column:0});var be=new qx.ui.basic.Image().set({alignX:o,maxWidth:70,maxHeight:70,scale:true});bf.addTarget(be,j,O);bc.add(be,{row:3,column:1});return bc;},showAddContactWindow:function(){if(this.__LH==null){var bl=new qx.ui.layout.Grid(5,10);var bn=new qx.ui.window.Window(L,P);bn.set({width:165,height:100,showMinimize:false,showClose:false,showMaximize:false});bn.setLayout(bl);var bq=new qx.ui.basic.Label(f);var br=new qx.ui.form.TextField();var bo=new qx.ui.form.VirtualComboBox();bo.setLabelPath(w);bo.setModel(this.messenger.getGroups());var bm=new qx.ui.basic.Label(k);var bs=new qx.ui.form.Button(J);var bt=new qx.ui.form.Button(c);this.__LI=br;bs.setAllowGrowX(false);bt.setAllowGrowX(false);bn.addListener(N,br.focus,br);bt.addListener(g,bn.close,bn);var bp=function(){var bu=new showcase.page.virtuallist.messenger.BuddyModel();bu.setName(br.getValue());bu.setGroup(bo.getValue());this.messenger.getModel().push(bu);this.messenger.getSelection().setItem(0,bu);bn.close();};bs.addListener(g,bp,this);bn.addListener(x,function(e){var bv=e.getKeyIdentifier();if(bv==h){bp.call(this);}else if(bv==b){bn.close();};},this);bn.add(bq,{row:0,column:0});bn.add(br,{row:0,column:1,colSpan:2});bn.add(bm,{row:1,column:0});bn.add(bo,{row:1,column:1,colSpan:2});bn.add(bs,{row:2,column:1});bn.add(bt,{row:2,column:2});bl.setColumnAlign(0,Q,t);bl.setColumnAlign(1,G,t);this.getView().add(bn,{left:270,top:40});this.__LH=bn;};this.__LI.setValue(y);this.__LH.open();},removeContact:function(){this.messenger.getModel().pop();}}});})();(function(){var c="changeModel",d="name",e="open",f="changeOpen",g="model",h="change",j="qx.data.Array",k="status",l="progressive-table-row-background-even",m="row-layer",n="count",o="avatar",p="_applyModel",q="off",r="changeSelection",s="changeBubble",t="changeGroup",u="showcase.page.virtuallist.messenger.Roster",v="progressive-table-row-background-odd",w="auto";qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);var x=new qx.ui.layout.VBox();this._setLayout(x);var z=this.list=new qx.ui.list.List();z.set({scrollbarX:q,scrollbarY:w,width:200,height:300,itemHeight:28,decorator:null,autoGrouping:false,padding:0});z.setDelegate(this);this._add(z,{flex:1});this.initGroups(z.getGroups());this.initModel(new qx.data.Array());this.initSelection(z.getSelection());this.bind(g,z,g);var y=z.getChildControl(m);y.set({colorEven:l,colorOdd:v});new qx.ui.virtual.behavior.Prefetch(z,{minLeft:0,maxLeft:0,minRight:0,maxRight:0,minAbove:600,maxAbove:800,minBelow:600,maxBelow:800}).set({interval:500});},properties:{model:{check:j,event:c,apply:p,nullable:false,deferredInit:true},selection:{check:j,event:r,nullable:false,deferredInit:true},groups:{check:j,event:t,nullable:false,deferredInit:true}},members:{createItem:function(){return new showcase.page.virtuallist.messenger.Buddy();},createGroupItem:function(){return new showcase.page.virtuallist.messenger.Group();},bindItem:function(B,A,C){B.bindProperty(d,d,null,A,C);B.bindProperty(o,o,null,A,C);B.bindProperty(k,k,null,A,C);},bindGroupItem:function(E,D,F){E.bindProperty(d,d,null,D,F);E.bindProperty(n,n,null,D,F);E.bindProperty(e,e,null,D,F);E.bindPropertyReverse(e,e,null,D,F);},filter:function(G){return this.__LK(G.getGroup()).isOpen();},sorter:function(a,b){return a.getName()<b.getName()?-1:1;},group:function(H){return this.__LK(H.getGroup());},_applyModel:function(J,I){J.addListener(h,this.__LJ,this);J.addListener(s,this.__LJ,this);if(I!=null){I.removeListener(h,this.__LJ,this);I.removeListener(s,this.__LJ,this);};this.__LJ();},__LJ:function(event){var N=this.getModel();var M=this.getGroups();var O={};for(var i=0;i<M.getLength();i++ ){var L=M.getItem(i);O[L.getName()]=0;};for(var i=0;i<N.getLength();i++ ){var L=N.getItem(i).getGroup();if(O[L]==null){O[L]=1;}else {O[L]+=1;};};for(var name in O){var K=O[name];var L=this.__LK(name);L.setCount(K);};if(event&&event.getType()==s){this.list.refresh();};},__LK:function(name){var R=this.getGroups();var Q=null;for(var i=0;i<R.getLength();i++ ){var P=R.getItem(i);if(name==P.getName()){Q=P;break;};};if(Q==null){Q=new showcase.page.virtuallist.messenger.GroupModel(name);Q.addListener(f,this.__LL,this);R.push(Q);};return Q;},__LL:function(event){this.list.refresh();}}});})();(function(){var a="_applyInterval",b="__kh",c="appear",d="interval",e="qx.ui.virtual.behavior.Prefetch",f="scroll",g="_applyScroller",h="qx.ui.virtual.core.Scroller",i="scrollbar-x",j="Integer",k="scrollbar-y";qx.Class.define(e,{extend:qx.core.Object,construct:function(l,m){{};qx.core.Object.call(this);this.setPrefetchX(m.minLeft,m.maxLeft,m.minRight,m.maxRight);this.setPrefetchY(m.minAbove,m.maxAbove,m.minBelow,m.maxBelow);this.__kh=new qx.event.Timer(this.getInterval());this.__kh.addListener(d,this._onInterval,this);if(l){this.setScroller(l);};},properties:{scroller:{check:h,nullable:true,init:null,apply:g},interval:{check:j,init:200,apply:a}},members:{__FV:null,__FW:null,__kh:null,__FX:null,__FY:null,setPrefetchX:function(n,q,o,p){this.__FV=[n,q,o,p];},setPrefetchY:function(u,t,s,r){this.__FW=[u,t,s,r];},_onInterval:function(){var v=this.__FV;if(v[1]&&v[3]){this.getScroller().getPane().prefetchX(v[0],v[1],v[2],v[3]);qx.ui.core.queue.Manager.flush();};var w=this.__FW;if(w[1]&&w[3]){this.getScroller().getPane().prefetchY(w[0],w[1],w[2],w[3]);qx.ui.core.queue.Manager.flush();};},_applyScroller:function(y,x){if(x){if(this.__FX){x.getChildControl(i).removeListenerById(this.__FX);};if(this.__FY){x.getChildControl(k).removeListenerById(this.__FY);};};if(y){if(!y.getContentElement().getDomElement()){this.__kh.stop();y.addListenerOnce(c,this.__kh.start,this.__kh);}else {this.__kh.restart();};this.__FX=y.getChildControl(i).addListener(f,this.__kh.restart,this.__kh);this.__FY=y.getChildControl(k).addListener(f,this.__kh.restart,this.__kh);}else {this.__kh.stop();};},_applyInterval:function(A,z){this.__kh.setInterval(A);}},destruct:function(){this.setScroller(null);this.__FV=this.__FW=null;this._disposeObjects(b);}});})();(function(){var a="listitem",b="showcase.page.virtuallist.messenger.Buddy",c="",d="icon",e="label",f=".png",g="_applyAvatar",h="statusIcon",i="middle",j="_applyLabel",k="_applyStatus",l="showcase/virtuallist/imicons/status_",m="String";qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);this.set({padding:[0,3]});this._setLayout(new qx.ui.layout.HBox(3).set({alignY:i}));this._add(this.getChildControl(h));this._add(this.getChildControl(e),{flex:1});this._add(this.getChildControl(d));},properties:{appearance:{refine:true,init:a},name:{check:m,apply:j,init:c},avatar:{check:m,apply:g,init:c},status:{check:m,apply:k,init:c},gap:{themeable:true}},members:{_createChildControlImpl:function(p,o){var n;switch(p){case e:n=new qx.ui.basic.Label().set({allowGrowX:true});break;case d:n=new qx.ui.basic.Image().set({width:26,height:26,scale:true});break;case h:n=new qx.ui.basic.Image();break;};return n||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,p);},_applyLabel:function(r,q){this.getChildControl(e).setValue(r);},_applyAvatar:function(t,s){this.getChildControl(d).setSource(t);},_applyStatus:function(w,v){var u=l+w+f;this.getChildControl(h).setSource(u);}}});})();(function(){var a="showcase/virtuallist/down.png",b="_applyName",c="_applyCount",d="showcase.page.virtuallist.messenger.Group",e="Boolean",f="changeOpen",g="icon",h="",i="label",j="(",k=")",l="showcase/virtuallist/right.png",m="_applyOpen",n="count",o="dark-blue",p="white",q="tap",r="middle",s="Integer",t="String",u="bold";qx.Class.define(d,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);this.set({backgroundColor:o,padding:[0,3]});this._setLayout(new qx.ui.layout.HBox(3).set({alignY:r}));this._add(this.getChildControl(g));this._add(this.getChildControl(i),{flex:1});this._add(this.getChildControl(n));},properties:{open:{check:e,event:f,apply:m,init:true},name:{check:t,apply:b,init:h},count:{check:s,apply:c,init:0}},members:{_createChildControlImpl:function(x,w){var v;switch(x){case i:v=new qx.ui.basic.Label().set({allowGrowX:true,textColor:p,font:u});break;case g:v=new qx.ui.basic.Image(a);v.addListener(q,this._onTap,this);break;case n:v=new qx.ui.basic.Label().set({textColor:p,font:u});break;};return v||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,x);},_applyOpen:function(A,z){var y=a;if(A==false){y=l;};this.getChildControl(g).setSource(y);},_applyName:function(C,B){this.getChildControl(i).setValue(C);},_applyCount:function(E,D){this.getChildControl(n).setValue(j+E+k);},_onTap:function(event){this.toggleOpen();}}});})();(function(){var a="changeOpen",b="Boolean",c="changeCount",d="changeName",e="showcase.page.virtuallist.messenger.GroupModel",f="Friends",g="Integer",h="String";qx.Class.define(e,{extend:qx.core.Object,construct:function(name){qx.core.Object.call(this);if(name!==undefined){this.setName(name);};},properties:{name:{init:f,event:d,check:h},open:{check:b,init:true,event:a},count:{check:g,init:0,event:c}}});})();(function(){var a="User #",b="qooxdoo",c="Alexander Steitz",d=".png",e="kiss",f="changeStatus",g="Friends",h="icon/22/emotes/face-smile.png",j="away",k="embarrassed",l="showcase/virtuallist/imicons/christian_hagendorn.png",m="showcase/virtuallist/imicons/tino_butz.png",n="plain",o="smile-big",p="surprise",q="smile",r="raspberry",s="sad",t="showcase/virtuallist/imicons/martin_wittemann.png",u="offline",v="online",w="changeGroup",x="Tino Butz",y="String",z="showcase/virtuallist/imicons/tristan_koch.png",A="changeAvatar",B="Daniel Wagner",C="showcase.page.virtuallist.messenger.BuddyModel",D="(unnamed)",E="Andreas Ecker",F="busy",G="Christian Hagendorn",H="laugh",I="Thomas Herchenröder",J="changeName",K="angel",L="icon/22/emotes/face-",M="Tristan Koch",N="_applyEventPropagation",O="Martin Wittemann";qx.Class.define(C,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,properties:{name:{init:D,event:J,check:y,apply:N},avatar:{init:h,event:A,check:y,apply:N},status:{init:u,event:f,check:[j,F,v,u],apply:N},group:{init:g,event:w,check:y,apply:N}},statics:{createBuddies:function(Q){var R=[{name:c,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:E,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:O,img:t,statusIcon:this.getRandomStatus()},{name:I,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:B,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus()},{name:G,img:l,statusIcon:this.getRandomStatus()},{name:x,img:m,statusIcon:this.getRandomStatus()},{name:M,img:z,statusIcon:this.getRandomStatus()}];for(var i=0;i<R.length;i++ ){R[i].group=b;};for(var i=R.length;i<Q;i++ ){R[i]={name:a+i,img:this.getRandomBuddy(),statusIcon:this.getRandomStatus(),group:g};};var P=[];for(var i=0;i<R.length;i++ ){var S=new showcase.page.virtuallist.messenger.BuddyModel().set({name:R[i].name,avatar:R[i].img,status:R[i].statusIcon,group:R[i].group});P.push(S);};return new qx.data.Array(P);},getRandomBuddy:function(){var T=[K,k,e,H,n,r,s,o,q,p];return L+T[Math.floor(Math.random()*T.length)]+d;},getRandomStatus:function(){var U=[j,F,v,u];return U[Math.floor(Math.random()*U.length)];}}});})();
});