qx.$$packageData['258']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("258", function() {
(function(){var a="slider",b="hovered",c="pressed",d="px",f="pointerover",g="PageUp",h="changeValue",i="frame",j="end",k='qx.event.type.Data',l="Left",m="Down",n="Integer",o="roll",p="qx.ui.form.Slider",q="PageDown",r="interval",s="_applyValue",t="Up",u="_applyKnobFactor",v="End",w="pointermove",x="height",y="y",z="dbltap",A="resize",B="pointerup",C="vertical",D="Right",E="width",F="_applyOrientation",G="left",H="Home",I="floor",J="_applyMinimum",K="pointerdown",L="top",M="changeMaximum",N="horizontal",O="slideAnimationEnd",P="knob",Q="ceil",R='qx.event.type.Event',S="x",T="keypress",U="losecapture",V="contextmenu",W="wheel",X="_applyMaximum",Y="Number",bf="tap",bg="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",bh="changeMinimum",be="pointerout";qx.Class.define(p,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bi){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.Canvas());this.addListener(T,this._onKeyPress);this.addListener(o,this._onRoll);this.addListener(K,this._onPointerDown);this.addListener(B,this._onPointerUp);this.addListener(U,this._onPointerUp);this.addListener(A,this._onUpdate);this.addListener(V,this._onStopEvent);this.addListener(bf,this._onStopEvent);this.addListener(z,this._onStopEvent);if(bi!=null){this.setOrientation(bi);}else {this.initOrientation();};},events:{changeValue:k,slideAnimationEnd:R},properties:{appearance:{refine:true,init:a},focusable:{refine:true,init:true},orientation:{check:[N,C],init:N,apply:F},value:{check:bg,init:0,apply:s,nullable:true},minimum:{check:n,init:0,apply:J,event:bh},maximum:{check:n,init:100,apply:X,event:M},singleStep:{check:n,init:1},pageStep:{check:n,init:10},knobFactor:{check:Y,apply:u,nullable:true}},members:{__wL:null,__wM:null,__wN:null,__wO:null,__wP:null,__wQ:null,__wR:null,__wS:null,__kh:null,__wT:null,__wU:null,__wV:null,__on:null,_forwardStates:{invalid:true},renderLayout:function(bk,top,bj,bl){qx.ui.core.Widget.prototype.renderLayout.call(this,bk,top,bj,bl);this._updateKnobPosition();},_createChildControlImpl:function(bo,bn){var bm;switch(bo){case P:bm=new qx.ui.core.Widget();bm.addListener(A,this._onUpdate,this);bm.addListener(f,this._onPointerOver);bm.addListener(be,this._onPointerOut);this._add(bm);break;};return bm||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bo);},_onPointerOver:function(e){this.addState(b);},_onPointerOut:function(e){this.removeState(b);},_onRoll:function(e){if(e.getPointerType()!=W){return;};var bq=this.getOrientation()===N?S:y;var br=e.getDelta()[bq];var bp=br>0?1:br<0?-1:0;this.slideBy(bp*this.getSingleStep());e.stop();},_onKeyPress:function(e){var bt=this.getOrientation()===N;var bs=bt?l:t;var forward=bt?D:m;switch(e.getKeyIdentifier()){case forward:this.slideForward();break;case bs:this.slideBack();break;case q:this.slidePageForward(100);break;case g:this.slidePageBack(100);break;case H:this.slideToBegin(200);break;case v:this.slideToEnd(200);break;default:return;};e.stop();},_onPointerDown:function(e){if(this.__wO){return;};var bw=this.__mT;var bu=this.getChildControl(P);var bv=bw?G:L;var bA=bw?e.getDocumentLeft():e.getDocumentTop();var bC=this.getDecorator();bC=qx.theme.manager.Decoration.getInstance().resolve(bC);if(bw){var bz=bC?bC.getInsets().left:0;var by=(this.getPaddingLeft()||0)+bz;}else {var bz=bC?bC.getInsets().top:0;var by=(this.getPaddingTop()||0)+bz;};var bB=this.__wL=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bv];bB+=by;var bx=this.__wM=qx.bom.element.Location.get(bu.getContentElement().getDomElement())[bv];if(e.getTarget()===bu){this.__wO=true;if(!this.__wT){this.__wT=new qx.event.Timer(100);this.__wT.addListener(r,this._fireValue,this);};this.__wT.start();this.__wP=bA+bB-bx;bu.addState(c);}else {this.__wQ=true;this.__wR=bA<=bx?-1:1;this.__wX(e);this._onInterval();if(!this.__kh){this.__kh=new qx.event.Timer(100);this.__kh.addListener(r,this._onInterval,this);};this.__kh.start();};this.addListener(w,this._onPointerMove);this.capture();e.stopPropagation();},_onPointerUp:function(e){if(this.__wO){this.releaseCapture();delete this.__wO;this.__wT.stop();this._fireValue();delete this.__wP;this.getChildControl(P).removeState(c);if(e.getType()===B){var bE;var bF;var bD;if(this.__mT){bE=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__wL);bD=qx.bom.element.Location.get(this.getContentElement().getDomElement())[L];bF=e.getDocumentTop()-(bD+this.getChildControl(P).getBounds().top);}else {bE=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__wL);bD=qx.bom.element.Location.get(this.getContentElement().getDomElement())[G];bF=e.getDocumentLeft()-(bD+this.getChildControl(P).getBounds().left);};if(bF<0||bF>this.__wN||bE<0||bE>this.__wN){this.getChildControl(P).removeState(b);};};}else if(this.__wQ){this.__kh.stop();this.releaseCapture();delete this.__wQ;delete this.__wR;delete this.__wS;};this.removeListener(w,this._onPointerMove);if(e.getType()===B){e.stopPropagation();};},_onPointerMove:function(e){if(this.__wO){var bH=this.__mT?e.getDocumentLeft():e.getDocumentTop();var bG=bH-this.__wP;this.slideTo(this._positionToValue(bG));}else if(this.__wQ){this.__wX(e);};e.stopPropagation();},_onInterval:function(e){var bI=this.getValue()+(this.__wR*this.getPageStep());if(bI<this.getMinimum()){bI=this.getMinimum();}else if(bI>this.getMaximum()){bI=this.getMaximum();};var bJ=this.__wR==-1;if((bJ&&bI<=this.__wS)||(!bJ&&bI>=this.__wS)){bI=this.__wS;};this.slideTo(bI);},_onUpdate:function(e){var bL=this.getInnerSize();var bM=this.getChildControl(P).getBounds();var bK=this.__mT?E:x;this._updateKnobSize();this.__wW=bL[bK]-bM[bK];this.__wN=bM[bK];this._updateKnobPosition();},__mT:false,__wW:0,__wX:function(e){var bN=this.__mT;var bU=bN?e.getDocumentLeft():e.getDocumentTop();var bX=this.__wL;var bO=this.__wM;var bY=this.__wN;var bV=bU-bX;if(bU>=bO){bV-=bY;};var bR=this._positionToValue(bV);var bP=this.getMinimum();var bQ=this.getMaximum();if(bR<bP){bR=bP;}else if(bR>bQ){bR=bQ;}else {var bW=this.getValue();var bT=this.getPageStep();var bS=this.__wR<0?I:Q;bR=bW+(Math[bS]((bR-bW)/bT)*bT);};if(this.__wS==null||(this.__wR==-1&&bR<=this.__wS)||(this.__wR==1&&bR>=this.__wS)){this.__wS=bR;};},_positionToValue:function(cb){var ca=this.__wW;if(ca==null||ca==0){return 0;};var cd=cb/ca;if(cd<0){cd=0;}else if(cd>1){cd=1;};var cc=this.getMaximum()-this.getMinimum();return this.getMinimum()+Math.round(cc*cd);},_valueToPosition:function(ch){var ce=this.__wW;if(ce==null){return 0;};var cf=this.getMaximum()-this.getMinimum();if(cf==0){return 0;};var ch=ch-this.getMinimum();var cg=ch/cf;if(cg<0){cg=0;}else if(cg>1){cg=1;};return Math.round(ce*cg);},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));},_setKnobPosition:function(ck){var ci=this.getChildControl(P);var cj=this.getDecorator();cj=qx.theme.manager.Decoration.getInstance().resolve(cj);var content=ci.getContentElement();if(this.__mT){if(cj&&cj.getPadding()){ck+=cj.getPadding().left;};ck+=this.getPaddingLeft()||0;content.setStyle(G,ck+d,true);}else {if(cj&&cj.getPadding()){ck+=cj.getPadding().top;};ck+=this.getPaddingTop()||0;content.setStyle(L,ck+d,true);};},_updateKnobSize:function(){var cm=this.getKnobFactor();if(cm==null){return;};var cl=this.getInnerSize();if(cl==null){return;};if(this.__mT){this.getChildControl(P).setWidth(Math.round(cm*cl.width));}else {this.getChildControl(P).setHeight(Math.round(cm*cl.height));};},slideToBegin:function(cn){this.slideTo(this.getMinimum(),cn);},slideToEnd:function(co){this.slideTo(this.getMaximum(),co);},slideForward:function(){this.slideBy(this.getSingleStep());},slideBack:function(){this.slideBy(-this.getSingleStep());},slidePageForward:function(cp){this.slideBy(this.getPageStep(),cp);},slidePageBack:function(cq){this.slideBy(-this.getPageStep(),cq);},slideBy:function(cs,cr){this.slideTo(this.getValue()+cs,cr);},slideTo:function(cu,ct){this.stopSlideAnimation();if(ct){this.__xa(cu,ct);}else {this.updatePosition(cu);};},updatePosition:function(cv){this.setValue(this.__wY(cv));},stopSlideAnimation:function(){if(this.__on){this.__on.cancelSequence();this.__on=null;};},__wY:function(cw){if(cw<this.getMinimum()){cw=this.getMinimum();}else if(cw>this.getMaximum()){cw=this.getMaximum();}else {cw=this.getMinimum()+Math.round((cw-this.getMinimum())/this.getSingleStep())*this.getSingleStep();};return cw;},__xa:function(cy,cx){cy=this.__wY(cy);var cz=this.getValue();this.__on=new qx.bom.AnimationFrame();this.__on.on(i,function(cA){this.setValue(parseInt(cA/cx*(cy-cz)+cz));},this);this.__on.on(j,function(){this.setValue(cy);this.__on=null;this.fireEvent(O);},this);this.__on.startSequence(cx);},_applyOrientation:function(cD,cC){var cB=this.getChildControl(P);this.__mT=cD===N;if(this.__mT){this.removeState(C);cB.removeState(C);this.addState(N);cB.addState(N);cB.setLayoutProperties({top:0,right:null,bottom:0});}else {this.removeState(N);cB.removeState(N);this.addState(C);cB.addState(C);cB.setLayoutProperties({right:0,bottom:null,left:0});};this._updateKnobPosition();},_applyKnobFactor:function(cF,cE){if(cF!=null){this._updateKnobSize();}else {if(this.__mT){this.getChildControl(P).resetWidth();}else {this.getChildControl(P).resetHeight();};};},_applyValue:function(cH,cG){if(cH!=null){this._updateKnobPosition();if(this.__wO){this.__wV=[cH,cG];}else {this.fireEvent(h,qx.event.type.Data,[cH,cG]);};}else {this.resetValue();};},_fireValue:function(){if(!this.__wV){return;};var cI=this.__wV;this.__wV=null;this.fireEvent(h,qx.event.type.Data,cI);},_applyMinimum:function(cK,cJ){if(this.getValue()<cK){this.setValue(cK);};this._updateKnobPosition();},_applyMaximum:function(cM,cL){if(this.getValue()>cM){this.setValue(cM);};this._updateKnobPosition();}}});})();
});