import{A as Fe,B as ae,C as le,D as a,E as l,F as V,G as C,H as h,I as G,J as w,K as g,L as ue,M as Ee,N as de,O as we,T as Se,U as Ie,V as ce,a as u,b as f,c as ye,d as Ce,e as Ve,f as De,g as P,h as k,i as ne,j as p,k as v,l as be,n as ie,o as Me,p as F,q as re,r as oe,s,t as se,u as E,v as R,w as m,x as c,y,z as Ae}from"./chunk-PKBCGGJX.js";var je=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(s(se),s(re))};static \u0275dir=c({type:n})}return n})(),lt=(()=>{class n extends je{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Me(n)))(r||n)}})();static \u0275dir=c({type:n,features:[y]})}return n})(),Te=new v("");var ut={provide:Te,useExisting:k(()=>z),multi:!0};function dt(){let n=ue()?ue().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var ct=new v(""),z=(()=>{class n extends je{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!dt())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(s(se),s(re),s(ct,8))};static \u0275dir=c({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&C("input",function(d){return r._handleInput(d.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(d){return r._compositionEnd(d.target.value)})},standalone:!1,features:[G([ut]),y]})}return n})();var Ue=new v(""),Be=new v("");function He(n){return n!=null}function Le(n){return Fe(n)?Ce(n):n}function $e(n){let e={};return n.forEach(t=>{e=t!=null?u(u({},e),t):e}),Object.keys(e).length===0?null:e}function We(n,e){return e.map(t=>t(n))}function ht(n){return!n.validate}function qe(n){return n.map(e=>ht(e)?e:t=>e.validate(t))}function ft(n){if(!n)return null;let e=n.filter(He);return e.length==0?null:function(t){return $e(We(t,e))}}function ze(n){return n!=null?ft(qe(n)):null}function pt(n){if(!n)return null;let e=n.filter(He);return e.length==0?null:function(t){let i=We(t,e).map(Le);return De(i).pipe(Ve($e))}}function Ze(n){return n!=null?pt(qe(n)):null}function Ne(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Xe(n){return n._rawValidators}function Ye(n){return n._rawAsyncValidators}function he(n){return n?Array.isArray(n)?n:[n]:[]}function T(n,e){return Array.isArray(n)?n.includes(e):n===e}function xe(n,e){let t=he(e);return he(n).forEach(r=>{T(t,r)||t.push(r)}),t}function Oe(n,e){return he(e).filter(t=>!T(n,t))}var U=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ze(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ze(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},M=class extends U{name;get formDirective(){return null}get path(){return null}},O=class extends U{_parent=null;name=null;valueAccessor=null},B=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},mt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},un=f(u({},mt),{"[class.ng-submitted]":"isSubmitted"}),Je=(()=>{class n extends B{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(s(O,2))};static \u0275dir=c({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&le("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[y]})}return n})(),Ke=(()=>{class n extends B{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(s(M,10))};static \u0275dir=c({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&le("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[y]})}return n})();var S="VALID",j="INVALID",D="PENDING",I="DISABLED",_=class{},H=class extends _{value;source;constructor(e,t){super(),this.value=e,this.source=t}},N=class extends _{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},x=class extends _{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},b=class extends _{status;source;constructor(e,t){super(),this.status=e,this.source=t}},fe=class extends _{source;constructor(e){super(),this.source=e}},pe=class extends _{source;constructor(e){super(),this.source=e}};function Qe(n){return(Z(n)?n.validators:n)||null}function gt(n){return Array.isArray(n)?ze(n):n||null}function et(n,e){return(Z(e)?e.asyncValidators:n)||null}function _t(n){return Array.isArray(n)?Ze(n):n||null}function Z(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function vt(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new P(1e3,"");if(!i[t])throw new P(1001,"")}function yt(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new P(1002,"")})}var L=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return g(this.statusReactive)}set status(e){g(()=>this.statusReactive.set(e))}_status=w(()=>this.statusReactive());statusReactive=E(void 0);get valid(){return this.status===S}get invalid(){return this.status===j}get pending(){return this.status==D}get disabled(){return this.status===I}get enabled(){return this.status!==I}errors;get pristine(){return g(this.pristineReactive)}set pristine(e){g(()=>this.pristineReactive.set(e))}_pristine=w(()=>this.pristineReactive());pristineReactive=E(!0);get dirty(){return!this.pristine}get touched(){return g(this.touchedReactive)}set touched(e){g(()=>this.touchedReactive.set(e))}_touched=w(()=>this.touchedReactive());touchedReactive=E(!1);get untouched(){return!this.touched}_events=new ye;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(xe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Oe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}hasValidator(e){return T(this._rawValidators,e)}hasAsyncValidator(e){return T(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(f(u({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new x(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new x(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(f(u({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new N(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new N(!0,i))}markAsPending(e={}){this.status=D;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new b(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(f(u({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(r=>{r.disable(f(u({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H(this.value,i)),this._events.next(new b(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(i=>{i.enable(f(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===D)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H(this.value,t)),this._events.next(new b(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(f(u({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Le(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new b(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(j)?j:S}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new N(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new x(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=gt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=_t(this._rawAsyncValidators)}},$=class extends L{constructor(e,t,i){super(Qe(t),et(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){yt(this,!0,e),Object.keys(e).forEach(i=>{vt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var me=new v("CallSetDisabledState",{providedIn:"root",factory:()=>X}),X="always";function Ct(n,e){return[...e.path,n]}function Pe(n,e,t=X){ge(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),Dt(n,e),Mt(n,e),bt(n,e),Vt(n,e)}function ke(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),q(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function W(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Vt(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ge(n,e){let t=Xe(n);e.validator!==null?n.setValidators(Ne(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Ye(n);e.asyncValidator!==null?n.setAsyncValidators(Ne(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();W(e._rawValidators,r),W(e._rawAsyncValidators,r)}function q(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=Xe(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(d=>d!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=Ye(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(d=>d!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return W(e._rawValidators,i),W(e._rawAsyncValidators,i),t}function Dt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&tt(n,e)})}function bt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&tt(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function tt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Mt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function At(n,e){n==null,ge(n,e)}function Ft(n,e){return q(n,e)}function Et(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function wt(n){return Object.getPrototypeOf(n.constructor)===lt}function St(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function It(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===z?t=o:wt(o)?i=o:r=o}),r||i||t||null}function Nt(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Re(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ge(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Y=class extends L{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Qe(t),et(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ge(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Re(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Re(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ge(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var xt=n=>n instanceof Y;var nt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=c({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var it=new v("");var Ot={provide:M,useExisting:k(()=>_e)},_e=(()=>{class n extends M{callSetDisabledState;get submitted(){return g(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=w(()=>this._submittedReactive());_submittedReactive=E(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new F;constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return Pe(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){ke(t.control||null,t,!1),Nt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),St(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new fe(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new pe(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(ke(i||null,t),xt(r)&&(Pe(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);At(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&Ft(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ge(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(s(Ue,10),s(Be,10),s(me,8))};static \u0275dir=c({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&C("submit",function(d){return r.onSubmit(d)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[G([Ot]),y,ie]})}return n})();var Pt={provide:O,useExisting:k(()=>ve)},ve=(()=>{class n extends O{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new F;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,d){super(),this._ngModelWarningConfig=d,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=It(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Et(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Ct(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(s(M,13),s(Ue,10),s(Be,10),s(Te,10),s(it,8))};static \u0275dir=c({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[G([Pt]),y,ie]})}return n})();var rt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=m({type:n});static \u0275inj=p({})}return n})();var ot=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:me,useValue:t.callSetDisabledState??X}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=m({type:n});static \u0275inj=p({imports:[rt]})}return n})(),st=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:it,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:me,useValue:t.callSetDisabledState??X}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=m({type:n});static \u0275inj=p({imports:[rt]})}return n})();var J=class n{constructor(e){this.http=e}apiUrl="https://dev-backend-2024.epravaha.com/api/login/svadmin";login(e){return this.http.post(this.apiUrl,e)}static \u0275fac=function(t){return new(t||n)(be(we))};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})};var K=class n{constructor(){}onCopy(e){e.preventDefault(),console.log("hello")}static \u0275fac=function(t){return new(t||n)};static \u0275dir=c({type:n,selectors:[["","appDisableCopy",""]],hostBindings:function(t,i){t&1&&C("copy",function(o){return i.onCopy(o)})},standalone:!1})};function Tt(n,e){n&1&&(a(0,"div",20),V(1,"div",21),l())}var Q=class n{constructor(e,t){this.http=e;this.router=t}loginForm=new $({mobileNo:new Y,password:new Y});isLoading=!1;ngOnInit(){}onLogin(){let e=this.loginForm.value;console.log(e);debugger;let t={mobileno:this.loginForm.value?.mobileNo,password:this.loginForm.value?.password};this.isLoading=!0,this.http.login(t).subscribe({next:i=>{i?(localStorage.setItem("login",JSON.stringify(i)),this.router.navigate(["/admin"])):(alert("Incorrect data"),console.log(i.message))},error:i=>{alert("Incorrect data")},complete:()=>{}})}static \u0275fac=function(t){return new(t||n)(s(J),s(Se))};static \u0275cmp=R({type:n,selectors:[["app-sign-in"]],standalone:!1,decls:32,vars:2,consts:[[1,"loginPage"],["class","loder-main",4,"ngIf"],[1,"bgColor"],[1,"logoSec"],[1,"pt-4"],["src","","width","310px","alt",""],["routerLink","/user-login",1,"btn","bg-success"],[1,"d-flex","justify-content-center","align-items-center","mt-5","text-white","flex-column"],[1,"text-center"],[1,"w-25",3,"formGroup"],[1,"text-white","d-flex","flex-column","gap-2"],["for",""],["appDisableCopy","","formControlName","mobileNo","type","text","name","mobileno","id",""],[1,"text-white","d-flex","flex-column","gap-2","mt-3"],["appDisableCopy","","formControlName","password","type","text","name","","id",""],[1,"text-white","d-flex","justify-content-between","mt-3"],[1,"d-flex","align-items-center"],["type","radio"],[1,"m-0"],["type","button",1,"btn","btn-warning","w-100","mt-3",3,"click"],[1,"loder-main"],[1,"loader"]],template:function(t,i){t&1&&(a(0,"div",0),Ae(1,Tt,2,0,"div",1),a(2,"div",2)(3,"div",3)(4,"div",4),V(5,"img",5),l(),a(6,"button",6),h(7,"User Login"),l()(),a(8,"div",7)(9,"div",8)(10,"h1"),h(11,"Login"),l(),a(12,"p"),h(13,"Login to your account"),l()(),a(14,"form",9)(15,"div",10)(16,"label",11),h(17,"E-mail Address"),l(),V(18,"input",12),l(),a(19,"div",13)(20,"label",11),h(21,"Password"),l(),V(22,"input",14),l(),a(23,"div",15)(24,"div",16),V(25,"input",17),a(26,"p",18),h(27,"Remember me"),l()(),a(28,"p",18),h(29,"Rest Password?"),l()(),a(30,"button",19),C("click",function(){return i.onLogin()}),h(31,"Sign In"),l()()()()()),t&2&&(oe(),ae("ngIf",i.isLoading),oe(13),ae("formGroup",i.loginForm))},dependencies:[Ee,Ie,nt,z,Je,Ke,_e,ve,K],styles:[".loginPage[_ngcontent-%COMP%]{width:100%;background-image:url(/img/loginbg.png);background-position:center;background-size:cover;min-height:100vh}.loginPage[_ngcontent-%COMP%]   .loder-main[_ngcontent-%COMP%]{position:absolute;display:flex;width:100%;height:100%;align-items:center;justify-content:center;background:#2d49ad;opacity:.9;z-index:999}.loginPage[_ngcontent-%COMP%]   .loder-main[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{border:16px solid #f3f3f3;border-top:16px solid #3498db;border-radius:50%;width:120px;height:120px;animation:_ngcontent-%COMP%_spin 2s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.loginPage[_ngcontent-%COMP%]   .bgColor[_ngcontent-%COMP%]{width:100%;min-height:100vh;background-color:#253d90;opacity:.8;z-index:999}.loginPage[_ngcontent-%COMP%]   .logoSec[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.loginPage[_ngcontent-%COMP%]   .logoSec[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px;height:50px;margin-right:30px;color:#fff}"]})};var ee=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["app-sign-up"]],standalone:!1,decls:2,vars:0,template:function(t,i){t&1&&(a(0,"p"),h(1,"sign-up works!"),l())},encapsulation:2})};var Ut=[{path:"",component:Q},{path:"signup",component:ee}],te=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=m({type:n});static \u0275inj=p({imports:[ce.forChild(Ut),ce]})};var at=class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=m({type:n});static \u0275inj=p({imports:[de,te,st,de,ot]})};export{at as LoginModule};