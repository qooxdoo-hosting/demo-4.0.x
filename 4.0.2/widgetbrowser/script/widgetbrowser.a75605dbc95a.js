qx.$$packageData['256']={"locales":{},"resources":{"qx/static/blank.gif":[1,1,"gif","qx"],"widgetbrowser/blank.html":"widgetbrowser"},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("256", function() {
(function(){var a="splitter",b="horizontal",c="widgetbrowser.pages.EmbedFrame",d="Iframe",e="widgetbrowser/blank.html",f="ThemedIframe";qx.Class.define(c,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);this.setLayout(new qx.ui.layout.Canvas(10));this.initWidgets();},members:{initWidgets:function(){var m=this._widgets;var k,n,g;var h=qx.util.ResourceManager.getInstance().toUri(e);var j=new qx.ui.splitpane.Pane(b);j.getChildControl(a).setBackgroundColor(null);this.add(j);k=new qx.ui.basic.Label(d);n=new qx.ui.container.Composite(new qx.ui.layout.Canvas());var l=new qx.ui.embed.Iframe().set({source:h,width:300,height:200});m.push(l);n.add(k,{top:0,left:5});n.add(l,{top:20,left:0,right:0});k=new qx.ui.basic.Label(f);g=new qx.ui.container.Composite(new qx.ui.layout.Canvas());var i=new qx.ui.embed.ThemedIframe().set({source:h,width:300,height:200});m.push(i);g.add(k,{top:0,left:5});g.add(i,{top:20,left:0,right:0});j.add(n);j.add(g);}}});})();(function(){var a="slider",b="splitter",c="px",d="Integer",f="height",g="move",h="maxHeight",i="resize",j="pointerup",k="vertical",l="width",m="_applyOrientation",n="_applyOffset",o="splitpane",p="qx.ui.splitpane.Pane",q="pointerdown",r="top",s="minHeight",t="knob",u="horizontal",v="minWidth",w="appear",z="losecapture",A="left",B="pointermove",C="maxWidth",D="pointerout";qx.Class.define(p,{extend:qx.ui.core.Widget,construct:function(E){qx.ui.core.Widget.call(this);this.__fW=[];if(E){this.setOrientation(E);}else {this.initOrientation();};this.__lg.addListener(q,this._onPointerDown,this);this.__lg.addListener(j,this._onPointerUp,this);this.__lg.addListener(B,this._onPointerMove,this);this.__lg.addListener(D,this._onPointerOut,this);this.__lg.addListener(z,this._onPointerUp,this);},properties:{appearance:{refine:true,init:o},offset:{check:d,init:6,apply:n},orientation:{init:u,check:[u,k],apply:m}},members:{__sJ:null,__sK:false,__sL:null,__sM:null,__mL:null,__sN:null,__sO:null,__fW:null,__lg:null,_createChildControlImpl:function(H,G){var F;switch(H){case a:F=new qx.ui.splitpane.Slider(this);F.exclude();this._add(F,{type:H});break;case b:F=new qx.ui.splitpane.Splitter(this);this._add(F,{type:H});F.addListener(g,this.__sP,this);break;};return F||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,H);},__sP:function(e){this.__sR(e.getData());},__sQ:function(K){this.__lg=new qx.ui.splitpane.Blocker(K);this.getContentElement().add(this.__lg);var I=this.getChildControl(b);var J=I.getWidth();if(!J){I.addListenerOnce(w,function(){this.__sR();},this);};I.addListener(i,function(e){var L=e.getData();if(L.height==0||L.width==0){this.__lg.hide();}else {this.__lg.show();};},this);},getBlocker:function(){return this.__lg;},_applyOrientation:function(Q,N){var R=this.getChildControl(a);var M=this.getChildControl(b);this.__mL=Q===u;if(!this.__lg){this.__sQ(Q);};this.__lg.setOrientation(Q);var P=this._getLayout();if(P){P.dispose();};var O=Q===k?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;this._setLayout(O);M.removeState(N);M.addState(Q);M.getChildControl(t).removeState(N);M.getChildControl(t).addState(Q);R.removeState(N);R.addState(Q);qx.ui.core.queue.Manager.flush();this.__sR();},_applyOffset:function(T,S){this.__sR();},__sR:function(V){var U=this.getChildControl(b);var ba=this.getOffset();var bb=U.getBounds();var Y=U.getContentElement().getDomElement();if(!Y){return;};if(this.__mL){var X=null;if(V){X=V.width;}else if(bb){X=bb.width;};var bc=V&&V.left;if(X){if(isNaN(bc)){bc=qx.bom.element.Location.getPosition(Y).left;};this.__lg.setWidth(ba,X);this.__lg.setLeft(ba,bc);};}else {var W=null;if(V){W=V.height;}else if(bb){W=bb.height;};var top=V&&V.top;if(W){if(isNaN(top)){top=qx.bom.element.Location.getPosition(Y).top;};this.__lg.setHeight(ba,W);this.__lg.setTop(ba,top);};};},add:function(be,bd){if(bd==null){this._add(be);}else {this._add(be,{flex:bd});};this.__fW.push(be);},remove:function(bf){this._remove(bf);qx.lang.Array.remove(this.__fW,bf);},getChildren:function(){return this.__fW;},_onPointerDown:function(e){if(!e.isLeftPressed()){return;};var bg=this.getChildControl(b);var bj=bg.getContentLocation();var bh=this.getContentLocation();this.__sJ=this.__mL?e.getDocumentLeft()-bj.left+bh.left:e.getDocumentTop()-bj.top+bh.top;var bi=this.getChildControl(a);var bk=bg.getBounds();bi.setUserBounds(bk.left,bk.top,bk.width,bk.height);bi.setZIndex(bg.getZIndex()+1);bi.show();this.__sK=true;this.__lg.capture();e.stop();},_onPointerMove:function(e){this._setLastPointerPosition(e.getDocumentLeft(),e.getDocumentTop());if(this.__sK){this.__sS();var bl=this.getChildControl(a);var bm=this.__sN;if(this.__mL){bl.setDomLeft(bm);this.__lg.setStyle(A,(bm-this.getOffset())+c);}else {bl.setDomTop(bm);this.__lg.setStyle(r,(bm-this.getOffset())+c);};e.stop();};},_onPointerOut:function(e){this._setLastPointerPosition(e.getDocumentLeft(),e.getDocumentTop());},_onPointerUp:function(e){if(!this.__sK){return;};this._finalizeSizes();var bn=this.getChildControl(a);bn.exclude();this.__sK=false;this.releaseCapture();e.stop();},_finalizeSizes:function(){var br=this.__sN;var bo=this.__sO;if(br==null){return;};var bt=this._getChildren();var bs=bt[2];var bq=bt[3];var bp=bs.getLayoutProperties().flex;var bu=bq.getLayoutProperties().flex;if((bp!=0)&&(bu!=0)){bs.setLayoutProperties({flex:br});bq.setLayoutProperties({flex:bo});}else {if(this.__mL){bs.setWidth(br);bq.setWidth(bo);}else {bs.setHeight(br);bq.setHeight(bo);};};},__sS:function(){if(this.__mL){var bx=v,bE=l,by=C,bC=this.__sL;}else {var bx=s,bE=f,by=h,bC=this.__sM;};var bD=this._getChildren();var bv=bD[2].getSizeHint();var bA=bD[3].getSizeHint();var bB=bD[2].getBounds()[bE]+bD[3].getBounds()[bE];var bz=bC-this.__sJ;var bw=bB-bz;if(bz<bv[bx]){bw-=bv[bx]-bz;bz=bv[bx];}else if(bw<bA[bx]){bz-=bA[bx]-bw;bw=bA[bx];};if(bz>bv[by]){bw+=bz-bv[by];bz=bv[by];}else if(bw>bA[by]){bz+=bw-bA[by];bw=bA[by];};this.__sN=bz;this.__sO=bw;},_isActiveDragSession:function(){return this.__sK;},_setLastPointerPosition:function(x,y){this.__sL=x;this.__sM=y;}},destruct:function(){this.__fW=null;}});})();(function(){var a="qx.ui.splitpane.Slider";qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});})();(function(){var a="center",b="qx.ui.splitpane.Splitter",c="vertical",d="knob",e="middle";qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);if(f.getOrientation()==c){this._setLayout(new qx.ui.layout.HBox(0,a));this._getLayout().setAlignY(e);}else {this._setLayout(new qx.ui.layout.VBox(0,e));this._getLayout().setAlignX(a);};this._createChildControl(d);},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(i,h){var g;switch(i){case d:g=new qx.ui.basic.Image;this._add(g);break;};return g||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,i);}}});})();(function(){var a="mshtml",b="engine.name",c="repeat",d="horizontal",e="top",f="height",g="_applyOrientation",h="url(",i="qx.ui.splitpane.Blocker",j="width",k=")",l="col-resize",m="row-resize",n="px",o="100%",p="div",q="left",r="vertical",s="qx/static/blank.gif",t="cursor",u="absolute";qx.Class.define(i,{extend:qx.html.Element,construct:function(w){var v={position:u,zIndex:11};if((qx.core.Environment.get(b)==a)){v.backgroundImage=h+qx.util.ResourceManager.getInstance().toUri(s)+k;v.backgroundRepeat=c;};qx.html.Element.call(this,p,v);if(w){this.setOrientation(w);}else {this.initOrientation();};},properties:{orientation:{init:d,check:[d,r],apply:g}},members:{_applyOrientation:function(y,x){if(y==d){this.setStyle(f,o);this.setStyle(t,l);this.setStyle(e,null);}else {this.setStyle(j,o);this.setStyle(q,null);this.setStyle(t,m);};},setWidth:function(A,z){var B=z+2*A;this.setStyle(j,B+n);},setHeight:function(D,C){var E=C+2*D;this.setStyle(f,E+n);},setLeft:function(G,F){var H=F-G;this.setStyle(q,H+n);},setTop:function(J,I){var top=I-J;this.setStyle(e,top+n);}}});})();(function(){var a="splitter",b="qx.ui.splitpane.VLayout",c="slider";qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(t,l,s){var j=this._getLayoutChildren();var length=j.length;var u,o;var p,w,v,k;var y=s.left||0;var m=s.top||0;for(var i=0;i<length;i++ ){u=j[i];o=u.getLayoutProperties().type;if(o===a){w=u;}else if(o===c){v=u;}else if(!p){p=u;}else {k=u;};};if(p&&k){var A=p.getLayoutProperties().flex;var g=k.getLayoutProperties().flex;if(A==null){A=1;};if(g==null){g=1;};var d=p.getSizeHint();var e=w.getSizeHint();var n=k.getSizeHint();var r=d.height;var h=e.height;var z=n.height;if(A>0&&g>0){var f=A+g;var q=l-h;var r=Math.round((q/f)*A);var z=q-r;var x=qx.ui.layout.Util.arrangeIdeals(d.minHeight,r,d.maxHeight,n.minHeight,z,n.maxHeight);r=x.begin;z=x.end;}else if(A>0){r=l-h-z;if(r<d.minHeight){r=d.minHeight;};if(r>d.maxHeight){r=d.maxHeight;};}else if(g>0){z=l-r-h;if(z<n.minHeight){z=n.minHeight;};if(z>n.maxHeight){z=n.maxHeight;};};p.renderLayout(y,m,t,r);w.renderLayout(y,r+m,t,h);k.renderLayout(y,r+h+m,t,z);}else {w.renderLayout(0,0,0,0);if(p){p.renderLayout(y,m,t,l);}else if(k){k.renderLayout(y,m,t,l);};};},_computeSizeHint:function(){var K=this._getLayoutChildren();var length=K.length;var J,C,D;var E=0,G=0,F=0;var H=0,I=0,B=0;for(var i=0;i<length;i++ ){J=K[i];D=J.getLayoutProperties();if(D.type===c){continue;};C=J.getSizeHint();E+=C.minHeight;G+=C.height;F+=C.maxHeight;if(C.minWidth>H){H=C.minWidth;};if(C.width>I){I=C.width;};if(C.maxWidth>B){B=C.maxWidth;};};return {minHeight:E,height:G,maxHeight:F,minWidth:H,width:I,maxWidth:B};}}});})();(function(){var a="splitter",b="qx.ui.splitpane.HLayout",c="slider";qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(s,k,r){var h=this._getLayoutChildren();var length=h.length;var t,n;var o,v,u,j;var x=r.left||0;var l=r.top||0;for(var i=0;i<length;i++ ){t=h[i];n=t.getLayoutProperties().type;if(n===a){v=t;}else if(n===c){u=t;}else if(!o){o=t;}else {j=t;};};if(o&&j){var A=o.getLayoutProperties().flex;var g=j.getLayoutProperties().flex;if(A==null){A=1;};if(g==null){g=1;};var d=o.getSizeHint();var e=v.getSizeHint();var m=j.getSizeHint();var q=d.width;var z=e.width;var y=m.width;if(A>0&&g>0){var f=A+g;var p=s-z;var q=Math.round((p/f)*A);var y=p-q;var w=qx.ui.layout.Util.arrangeIdeals(d.minWidth,q,d.maxWidth,m.minWidth,y,m.maxWidth);q=w.begin;y=w.end;}else if(A>0){q=s-z-y;if(q<d.minWidth){q=d.minWidth;};if(q>d.maxWidth){q=d.maxWidth;};}else if(g>0){y=s-q-z;if(y<m.minWidth){y=m.minWidth;};if(y>m.maxWidth){y=m.maxWidth;};};o.renderLayout(x,l,q,k);v.renderLayout(q+x,l,z,k);j.renderLayout(q+z+x,l,y,k);}else {v.renderLayout(0,0,0,0);if(o){o.renderLayout(x,l,s,k);}else if(j){j.renderLayout(x,l,s,k);};};},_computeSizeHint:function(){var K=this._getLayoutChildren();var length=K.length;var J,C,D;var H=0,I=0,B=0;var E=0,G=0,F=0;for(var i=0;i<length;i++ ){J=K[i];D=J.getLayoutProperties();if(D.type===c){continue;};C=J.getSizeHint();H+=C.minWidth;I+=C.width;B+=C.maxWidth;if(C.minHeight>E){E=C.minHeight;};if(C.height>G){G=C.height;};if(C.maxHeight>F){F=C.maxHeight;};};return {minWidth:H,width:I,maxWidth:B,minHeight:E,height:G,maxHeight:F};}}});})();(function(){var a="qx.ui.embed.AbstractIframe",b="name",c="Abstract method call",d="",f="about:blank",g="_applySource",h="navigate",i="qx.event.type.Event",j="String",k="_applyFrameName",l="qx.event.type.Data";qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(m){qx.ui.core.Widget.call(this);if(m){this.setSource(m);};this._getIframeElement().addListener(h,this.__CA,this);},events:{"load":i,"navigate":l},properties:{source:{check:j,apply:g,init:f},frameName:{check:j,init:d,apply:k}},members:{_getIframeElement:function(){throw new Error(c);},_applySource:function(o,n){this._getIframeElement().setSource(o);},_applyFrameName:function(q,p){this._getIframeElement().setAttribute(b,q);},getWindow:function(){return this._getIframeElement().getWindow();},getDocument:function(){return this._getIframeElement().getDocument();},getBody:function(){return this._getIframeElement().getBody();},getName:function(){return this._getIframeElement().getName();},reload:function(){this._getIframeElement().reload();},__CA:function(e){var r=e.getData();if(r){this.setSource(r);};this.fireDataEvent(h,r);}}});})();(function(){var a="no",b="Boolean",c="px",d="event.help",f="gecko",g="auto",h="_applyScrollbar",i="DOMNodeInserted",j="load",k="_applyNativeHelp",l="yes",m="scrolling",n="/",o="help",p="pointerup",q="appear",r="pointerdown",s="engine.name",t="block",u="qx.ui.embed.Iframe",v="losecapture",w="contextmenu",x="__CE",y="none",z="iframe",A="display";qx.Class.define(u,{extend:qx.ui.embed.AbstractIframe,construct:function(B){if(B!=null){this.__CD=B;};qx.ui.embed.AbstractIframe.call(this,B);qx.event.Registration.addListener(document.body,r,this.block,this,true);qx.event.Registration.addListener(document.body,p,this.release,this,true);qx.event.Registration.addListener(document.body,v,this.release,this,true);this.__CE=this._createBlockerElement();if((qx.core.Environment.get(s)==f)){this.addListenerOnce(q,function(e){var C=this.getContentElement().getDomElement();qx.bom.Event.addNativeListener(C,i,this._onDOMNodeInserted);});this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);};},properties:{appearance:{refine:true,init:z},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:b,init:false,apply:k},scrollbar:{check:[g,a,l],nullable:true,themeable:true,apply:h}},members:{__CD:null,__CE:null,renderLayout:function(H,top,F,D){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,H,top,F,D);var G=c;var E=this.getInsets();this.__CE.setStyles({"left":(H+E.left)+G,"top":(top+E.top)+G,"width":(F-E.left-E.right)+G,"height":(D-E.top-E.bottom)+G});},_createContentElement:function(){var I=new qx.html.Iframe(this.__CD);I.addListener(j,this._onIframeLoad,this);return I;},_getIframeElement:function(){return this.getContentElement();},_createBlockerElement:function(){var J=new qx.html.Blocker();J.setStyles({"zIndex":20,"display":y});return J;},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);this._applyNativeHelp(this.getNativeHelp(),null);this.fireNonBubblingEvent(j);},block:function(){this.__CE.setStyle(A,t);},release:function(){this.__CE.setStyle(A,y);},_applyNativeContextMenu:function(M,L){if(M!==false&&L!==false){return;};var K=this.getDocument();if(!K){return;};try{var N=K.documentElement;}catch(e){return;};if(L===false){qx.event.Registration.removeListener(N,w,this._onNativeContextMenu,this,true);};if(M===false){qx.event.Registration.addListener(N,w,this._onNativeContextMenu,this,true);};},_onNativeContextMenu:function(e){e.preventDefault();},_applyNativeHelp:function(P,O){if(qx.core.Environment.get(d)){var document=this.getDocument();if(!document){return;};try{if(O===false){qx.bom.Event.removeNativeListener(document,o,(function(){return false;}));};if(P===false){qx.bom.Event.addNativeListener(document,o,(function(){return false;}));};}catch(e){{};};};},_syncSourceAfterDOMMove:function(){var R=this.getContentElement().getDomElement();var Q=R.src;if(Q.charAt(Q.length-1)==n){Q=Q.substring(0,Q.length-1);};if(Q!=this.getSource()){qx.bom.Iframe.getWindow(R).stop();R.src=this.getSource();};},_applyScrollbar:function(S){this.getContentElement().setAttribute(m,S);},setLayoutParent:function(parent){qx.ui.embed.AbstractIframe.prototype.setLayoutParent.call(this,parent);if(parent){this.getLayoutParent().getContentElement().add(this.__CE);};}},destruct:function(){if(this.getLayoutParent()&&this.__CE.getParent()){this.getLayoutParent().getContentElement().remove(this.__CE);};this._disposeObjects(x);qx.event.Registration.removeListener(document.body,r,this.block,this,true);qx.event.Registration.removeListener(document.body,p,this.release,this,true);qx.event.Registration.removeListener(document.body,v,this.release,this,true);}});})();(function(){var a="source",b="element",c="name",d="qx.event.type.Event",f="iframe",g="qx.html.Iframe",h="navigate",i="qx.event.type.Data";qx.Class.define(g,{extend:qx.html.Element,construct:function(j,k,l){qx.html.Element.call(this,f,k,l);this.setSource(j);this.addListener(h,this.__CA,this);qx.html.Element._modified[this.$$hash]=this;qx.html.Element._scheduleFlush(b);},events:{"load":d,"navigate":i},members:{_applyProperty:function(name,n){qx.html.Element.prototype._applyProperty.call(this,name,n);if(name==a){var o=this.getDomElement();var m=qx.bom.Iframe.queryCurrentUrl(o);if(n===m){return;};qx.bom.Iframe.setSource(o,n);};},_createDomElement:function(){return qx.bom.Iframe.create(this._content);},getWindow:function(){var p=this.getDomElement();if(p){return qx.bom.Iframe.getWindow(p);}else {return null;};},getDocument:function(){var q=this.getDomElement();if(q){return qx.bom.Iframe.getDocument(q);}else {return null;};},getBody:function(){var r=this.getDomElement();if(r){return qx.bom.Iframe.getBody(r);}else {return null;};},setSource:function(s){this._setProperty(a,s,true);return this;},getSource:function(){return this._getProperty(a);},setName:function(name){this.setAttribute(c,name);return this;},getName:function(){return this.getAttribute(c);},reload:function(){var u=this.getDomElement();if(u){var t=this.getSource();this.setSource(null);this.setSource(t);};},__CA:function(e){var v=e.getData();if(v){this.setSource(v);};}}});})();(function(){var a="qx.event.handler.Iframe",b="load",c="iframe",d="navigate";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1,navigate:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(f){var e=qx.bom.Iframe.queryCurrentUrl(f);if(e!==f.$$url){qx.event.Registration.fireEvent(f,d,qx.event.type.Data,[e]);f.$$url=e;};qx.event.Registration.fireEvent(f,b);})},members:{canHandleEvent:function(h,g){return h.tagName.toLowerCase()===c;},registerEvent:function(k,j,i){},unregisterEvent:function(n,m,l){}},defer:function(o){qx.event.Registration.addHandler(o);}});})();(function(){var a="Iframe source could not be set!",b="contentDocument",c="engine.name",d="",e="qx.bom.Iframe",f="osx",g="qx.event.handler.Iframe.onevent(this)",h="os.name",i="webkit",j="load",k="iframe",l="body";qx.Class.define(e,{statics:{DEFAULT_ATTRIBUTES:{onload:g,frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(m,p){var m=m?qx.lang.Object.clone(m):{};var n=qx.bom.Iframe.DEFAULT_ATTRIBUTES;for(var o in n){if(m[o]==null){m[o]=n[o];};};return qx.dom.Element.create(k,m,p);},getWindow:function(q){try{return q.contentWindow;}catch(r){return null;};},getDocument:function(t){if(b in t){try{return t.contentDocument;}catch(u){return null;};};try{var s=this.getWindow(t);return s?s.document:null;}catch(v){return null;};},getBody:function(x){try{var w=this.getDocument(x);return w?w.getElementsByTagName(l)[0]:null;}catch(y){return null;};},setSource:function(B,z){try{if(this.getWindow(B)&&qx.dom.Hierarchy.isRendered(B)){try{if((qx.core.Environment.get(c)==i)&&qx.core.Environment.get(h)==f){var A=this.getWindow(B);if(A){A.stop();};};this.getWindow(B).location.replace(z);}catch(C){B.src=z;};}else {B.src=z;};this.__ok(B);}catch(D){qx.log.Logger.warn(a);};},queryCurrentUrl:function(F){var E=this.getDocument(F);try{if(E&&E.location){return E.location.href;};}catch(G){};return d;},__ok:function(I){var H=function(){qx.bom.Event.removeNativeListener(I,j,H);I.$$url=qx.bom.Iframe.queryCurrentUrl(I);};qx.bom.Event.addNativeListener(I,j,H);}}});})();(function(){var a="resize",b="scroll",c="interval",d="horizontal",f="pointerdown",g="roll",h="qx.ui.embed.ThemedIframe",i="_updateScrollbars",j="iframe",k="scrollbarX",l="scrollbarY",m="scrollbar-y",n="load",o="off",p="corner",q="on",r="scrollarea",s="scrollbar-x",t="hidden",u="auto",v="vertical";qx.Class.define(h,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.scroll.MRoll,construct:function(w){qx.ui.embed.AbstractIframe.call(this,w);var z=new qx.ui.layout.Grid();z.setColumnFlex(0,1);z.setRowFlex(0,1);this._setLayout(z);this._showChildControl(j);},properties:{appearance:{refine:true,init:r},scrollbarX:{check:[u,q,o],init:u,themeable:true,apply:i},scrollbarY:{check:[u,q,o],init:u,themeable:true,apply:i},scrollbar:{group:[k,l]}},members:{__CB:null,__CC:null,_getIframeElement:function(){return this.getChildControl(j).getContentElement();},_createChildControlImpl:function(C,B){var A;switch(C){case j:A=new qx.ui.embed.Iframe(this.getSource());A.addListener(n,this._onIframeLoad,this);A.addListener(a,this._onIframeResize,this);this._add(A,{row:0,column:0});break;case s:A=new qx.ui.core.scroll.ScrollBar(d);A.setMinWidth(0);A.exclude();A.addListener(b,this._onScrollBarX,this);this._add(A,{row:1,column:0});break;case m:A=new qx.ui.core.scroll.ScrollBar(v);A.setMinHeight(0);A.exclude();A.addListener(b,this._onScrollBarY,this);this._add(A,{row:0,column:1});break;case p:A=new qx.ui.core.Widget();A.setWidth(0);A.setHeight(0);A.exclude();this._add(A,{row:1,column:1});break;};return A||qx.ui.embed.AbstractIframe.prototype._createChildControlImpl.call(this,C);},_onIframeLoad:function(){this._disableScollbars();var D=this._getIframeElement().getBody();if(D){this._startIframeObserver();this._addRollListener();};this.fireEvent(n);},_onIframeResize:function(){this._updateScrollbars();},_disableScollbars:function(){this._excludeChildControl(s);this._excludeChildControl(m);this._excludeChildControl(p);this._stopIframeObserver();},_addRollListener:function(){try{var E=this._getIframeElement().getBody();qx.bom.Element.addListener(E,g,this._onRoll,this);qx.bom.Element.addListener(E,f,this._onPointerDownForRoll,this);}catch(e){this._disableScollbars();};},_startIframeObserver:function(){if(this.__CC){this._stopIframeObserver();};var F=qx.event.Idle.getInstance();this.__CC=F.addListener(c,this._onIframeObserverInterval,this);},_stopIframeObserver:function(){this.__CB=null;if(!this.__CC){return;};var G=qx.event.Idle.getInstance();G.removeListenerById(this.__CC);},_onIframeObserverInterval:function(){var H=this._getIframeSize();if(!H){this._disableScollbars();return;};if(this.__CB&&H.width==this.__CB.width&&H.height==this.__CB.height){return;};this.__CB=H;this._preventIframeScrolling();this._updateScrollbars();},_preventIframeScrolling:function(){try{var I=this._getIframeElement().getWindow();var J=this._getIframeElement().getDocument();if(qx.bom.Document.isStandardMode(I)){J.documentElement.style.overflow=t;}else {J.body.style.overflow=t;};}catch(e){this._disableScollbars();};},_updateScrollbars:function(){var K=this.__CB;var N=this.getChildControl(j).getBounds();var L=this.getChildControl(j).getInnerSize();if(!K||!L||!L){return;};var M=false;var Q=false;var O=this.getScrollbarX();var P=this.getScrollbarY();if(O===u&&P===u){var M=K.width>L.width;var Q=K.height>L.height;if((M||Q)&&!(M&&Q)){if(M){Q=K.height>N.height;}else if(Q){M=K.width>N.width;};};}else {var M=O===q;var Q=P===q;if(K.width>(M?N.width:L.width)&&O===u){M=true;};if(K.height>(M?N.height:L.height)&&P===u){Q=true;};};this._configureScrollbar(s,M,L.width,K.width);this._configureScrollbar(m,Q,L.height,K.height);this._updateCornerWidget();},_getIframeSize:function(){try{var R=this._getIframeElement().getWindow();var S={width:qx.bom.Document.getWidth(R),height:qx.bom.Document.getHeight(R)};return S;}catch(e){return null;};},_updateCornerWidget:function(){if(this._isChildControlVisible(s)&&this._isChildControlVisible(m)){this._showChildControl(p);}else {this._excludeChildControl(p);};},_configureScrollbar:function(T,U,X,W){if(!U){this._excludeChildControl(T);return;};var V=this._showChildControl(T);if(X>=W){V.set({position:0,maximum:W,knobFactor:1,enabled:false});}else {V.setMaximum(1000000);V.set({position:Math.min(V.getPosition(),W),maximum:W-X,knobFactor:X/W,enabled:true});};},_onScrollBarX:function(e){this.scrollToX(e.getData());},_onScrollBarY:function(e){this.scrollToY(e.getData());},scrollToX:function(x){try{var Y=this._getIframeElement().getWindow();Y.scroll(x,qx.bom.Viewport.getScrollTop(Y));}catch(e){this._disableScollbars();};},scrollToY:function(y){try{var ba=this._getIframeElement().getWindow();ba.scroll(qx.bom.Viewport.getScrollLeft(ba),y);}catch(e){this._disableScollbars();};}},destruct:function(){this._stopIframeObserver();this.__CB=null;}});})();(function(){var a="slider",b="slideAnimationEnd",c="PositiveNumber",d="changeValue",f="Integer",g="execute",h="track",i="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",j="_applyKnobFactor",k="visible",l="qx.event.type.Event",m="knob",n="button-begin",o="hidden",p="qx.ui.core.scroll.ScrollBar",q="resize",r="vertical",s="_applyOrientation",t="scrollAnimationEnd",u="_applyPageStep",v="right",w="PositiveInteger",x="horizontal",y="up",z="_applyPosition",A="scrollbar",B="_applyMaximum",C="left",D="button-end",E="down",F="scroll";qx.Class.define(p,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(G){qx.ui.core.Widget.call(this);this._createChildControl(n);this._createChildControl(a).addListener(q,this._onResizeSlider,this);this._createChildControl(D);if(G!=null){this.setOrientation(G);}else {this.initOrientation();};this.addListener(h,function(e){e.stopPropagation();},this);},events:{"scrollAnimationEnd":l},properties:{appearance:{refine:true,init:A},orientation:{check:[x,r],init:x,apply:s},maximum:{check:w,apply:B,init:100},position:{check:i,init:0,apply:z,event:F},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:u},knobFactor:{check:c,apply:j,nullable:true}},members:{__xK:2,__xL:0,_computeSizeHint:function(){var H=qx.ui.core.Widget.prototype._computeSizeHint.call(this);if(this.getOrientation()===x){this.__xL=H.minWidth;H.minWidth=0;}else {this.__xL=H.minHeight;H.minHeight=0;};return H;},renderLayout:function(M,top,J,I){var L=qx.ui.core.Widget.prototype.renderLayout.call(this,M,top,J,I);var K=this.getOrientation()===x;if(this.__xL>=(K?J:I)){this.getChildControl(n).setVisibility(o);this.getChildControl(D).setVisibility(o);}else {this.getChildControl(n).setVisibility(k);this.getChildControl(D).setVisibility(k);};return L;},_createChildControlImpl:function(P,O){var N;switch(P){case a:N=new qx.ui.core.scroll.ScrollSlider();N.setPageStep(100);N.setFocusable(false);N.addListener(d,this._onChangeSliderValue,this);N.addListener(b,this._onSlideAnimationEnd,this);this._add(N,{flex:1});break;case n:N=new qx.ui.form.RepeatButton();N.setFocusable(false);N.addListener(g,this._onExecuteBegin,this);this._add(N);break;case D:N=new qx.ui.form.RepeatButton();N.setFocusable(false);N.addListener(g,this._onExecuteEnd,this);this._add(N);break;};return N||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,P);},_applyMaximum:function(Q){this.getChildControl(a).setMaximum(Q);},_applyPosition:function(R){this.getChildControl(a).setValue(R);},_applyKnobFactor:function(S){this.getChildControl(a).setKnobFactor(S);},_applyPageStep:function(T){this.getChildControl(a).setPageStep(T);},_applyOrientation:function(W,U){var V=this._getLayout();if(V){V.dispose();};if(W===x){this._setLayout(new qx.ui.layout.HBox());this.setAllowStretchX(true);this.setAllowStretchY(false);this.replaceState(r,x);this.getChildControl(n).replaceState(y,C);this.getChildControl(D).replaceState(E,v);}else {this._setLayout(new qx.ui.layout.VBox());this.setAllowStretchX(false);this.setAllowStretchY(true);this.replaceState(x,r);this.getChildControl(n).replaceState(C,y);this.getChildControl(D).replaceState(v,E);};this.getChildControl(a).setOrientation(W);},scrollTo:function(Y,X){this.getChildControl(a).slideTo(Y,X);},scrollBy:function(bb,ba){this.getChildControl(a).slideBy(bb,ba);},scrollBySteps:function(bd,bc){var be=this.getSingleStep();this.getChildControl(a).slideBy(bd*be,bc);},updatePosition:function(bf){this.getChildControl(a).updatePosition(bf);},stopScrollAnimation:function(){this.getChildControl(a).stopSlideAnimation();},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep(),50);},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep(),50);},_onSlideAnimationEnd:function(){this.fireEvent(t);},_onChangeSliderValue:function(e){this.setPosition(e.getData());},_onResizeSlider:function(e){var bg=this.getChildControl(a).getChildControl(m);var bj=bg.getSizeHint();var bh=false;var bi=this.getChildControl(a).getInnerSize();if(this.getOrientation()==r){if(bi.height<bj.minHeight+this.__xK){bh=true;};}else {if(bi.width<bj.minWidth+this.__xK){bh=true;};};if(bh){bg.exclude();}else {bg.show();};}}});})();(function(){var a="horizontal",b="qx.ui.core.scroll.ScrollSlider",c="keypress",d="roll";qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);this.removeListener(c,this._onKeyPress);this.removeListener(d,this._onRoll);},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);if(this.getOrientation()===a){g.width=0;}else {g.height=0;};return g;}}});})();
});