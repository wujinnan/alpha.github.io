import{M as ge,d as Ye,s as q,l as qe,k as Ze,h as ae,w as De,q as ce,v as he,b5 as Xe,a6 as et,o as K,D as tt,C as m,b as T,a7 as rt,aa as nt,m as at,c as J,n as Me,G as ie,R as Le,F as Ve,a as Z,t as X,ax as it,S as ot,U as ut,aJ as Oe,aO as lt,b6 as st,a$ as ct,_ as ht}from"./framework.c67b3163.js";import{u as ft,c as Be,d as dt,e as vt,w as yt,o as oe,f as pt,g as mt,h as gt}from"./theme.f72ded10.js";const wt={root:()=>ge(()=>import("./@localSearchIndexroot.bf46db1a.js"),[])};var B=function(){return B=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},B.apply(this,arguments)};function Ft(a,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function u(c){try{s(n.next(c))}catch(d){o(d)}}function l(c){try{s(n.throw(c))}catch(d){o(d)}}function s(c){c.done?r(c.value):i(c.value).then(u,l)}s((n=n.apply(a,e||[])).next())})}function xt(a,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(s){return function(c){return l([s,c])}}function l(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(t=0)),t;)try{if(n=1,i&&(r=s[0]&2?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[s[0]&2,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,i=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){t.label=s[1];break}if(s[0]===6&&t.label<r[1]){t.label=r[1],r=s;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(s);break}r[2]&&t.ops.pop(),t.trys.pop();continue}s=e.call(a,t)}catch(c){s=[6,c],i=0}finally{n=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function k(a){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&a[e],n=0;if(t)return t.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function I(a,e){var t=typeof Symbol=="function"&&a[Symbol.iterator];if(!t)return a;var n=t.call(a),i,r=[],o;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(u){o={error:u}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return r}var bt="ENTRIES",$e="KEYS",Ne="VALUES",P="",fe=function(){function a(e,t){var n=e._tree,i=Array.from(n.keys());this.set=e,this._type=t,this._path=i.length>0?[{node:n,keys:i}]:[]}return a.prototype.next=function(){var e=this.dive();return this.backtrack(),e},a.prototype.dive=function(){if(this._path.length===0)return{done:!0,value:void 0};var e=Y(this._path),t=e.node,n=e.keys;if(Y(n)===P)return{done:!1,value:this.result()};var i=t.get(Y(n));return this._path.push({node:i,keys:Array.from(i.keys())}),this.dive()},a.prototype.backtrack=function(){if(this._path.length!==0){var e=Y(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}},a.prototype.key=function(){return this.set._prefix+this._path.map(function(e){var t=e.keys;return Y(t)}).filter(function(e){return e!==P}).join("")},a.prototype.value=function(){return Y(this._path).node.get(P)},a.prototype.result=function(){switch(this._type){case Ne:return this.value();case $e:return this.key();default:return[this.key(),this.value()]}},a.prototype[Symbol.iterator]=function(){return this},a}(),Y=function(a){return a[a.length-1]},_t=function(a,e,t){var n=new Map;if(e===void 0)return n;for(var i=e.length+1,r=i+t,o=new Uint8Array(r*i).fill(t+1),u=0;u<i;++u)o[u]=u;for(var l=1;l<r;++l)o[l*i]=l;return We(a,e,t,n,o,1,i,""),n},We=function(a,e,t,n,i,r,o,u){var l,s,c=r*o;try{e:for(var d=k(a.keys()),v=d.next();!v.done;v=d.next()){var f=v.value;if(f===P){var p=i[c-1];p<=t&&n.set(u,[a.get(f),p])}else{for(var g=r,y=0;y<f.length;++y,++g){for(var x=f[y],b=o*g,w=b-o,D=i[b],_=Math.max(0,g-t-1),V=Math.min(o-1,g+t),A=_;A<V;++A){var z=x!==e[A],M=i[w+A]+ +z,C=i[w+A+1]+1,L=i[b+A]+1,E=i[b+A+1]=Math.min(M,C,L);E<D&&(D=E)}if(D>t)continue e}We(a.get(f),e,t,n,i,g,o,u+f)}}}catch(O){l={error:O}}finally{try{v&&!v.done&&(s=d.return)&&s.call(d)}finally{if(l)throw l.error}}},de=function(){function a(e,t){e===void 0&&(e=new Map),t===void 0&&(t=""),this._size=void 0,this._tree=e,this._prefix=t}return a.prototype.atPrefix=function(e){var t,n;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var i=I(le(this._tree,e.slice(this._prefix.length)),2),r=i[0],o=i[1];if(r===void 0){var u=I(be(o),2),l=u[0],s=u[1];try{for(var c=k(l.keys()),d=c.next();!d.done;d=c.next()){var v=d.value;if(v!==P&&v.startsWith(s)){var f=new Map;return f.set(v.slice(s.length),l.get(v)),new a(f,e)}}}catch(p){t={error:p}}finally{try{d&&!d.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}}return new a(r,e)},a.prototype.clear=function(){this._size=void 0,this._tree.clear()},a.prototype.delete=function(e){return this._size=void 0,At(this._tree,e)},a.prototype.entries=function(){return new fe(this,bt)},a.prototype.forEach=function(e){var t,n;try{for(var i=k(this),r=i.next();!r.done;r=i.next()){var o=I(r.value,2),u=o[0],l=o[1];e(u,l,this)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},a.prototype.fuzzyGet=function(e,t){return _t(this._tree,e,t)},a.prototype.get=function(e){var t=we(this._tree,e);return t!==void 0?t.get(P):void 0},a.prototype.has=function(e){var t=we(this._tree,e);return t!==void 0&&t.has(P)},a.prototype.keys=function(){return new fe(this,$e)},a.prototype.set=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=ve(this._tree,e);return n.set(P,t),this},Object.defineProperty(a.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),a.prototype.update=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=ve(this._tree,e);return n.set(P,t(n.get(P))),this},a.prototype.fetch=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=ve(this._tree,e),i=n.get(P);return i===void 0&&n.set(P,i=t()),i},a.prototype.values=function(){return new fe(this,Ne)},a.prototype[Symbol.iterator]=function(){return this.entries()},a.from=function(e){var t,n,i=new a;try{for(var r=k(e),o=r.next();!o.done;o=r.next()){var u=I(o.value,2),l=u[0],s=u[1];i.set(l,s)}}catch(c){t={error:c}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return i},a.fromObject=function(e){return a.from(Object.entries(e))},a}(),le=function(a,e,t){var n,i;if(t===void 0&&(t=[]),e.length===0||a==null)return[a,t];try{for(var r=k(a.keys()),o=r.next();!o.done;o=r.next()){var u=o.value;if(u!==P&&e.startsWith(u))return t.push([a,u]),le(a.get(u),e.slice(u.length),t)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}return t.push([a,e]),le(void 0,"",t)},we=function(a,e){var t,n;if(e.length===0||a==null)return a;try{for(var i=k(a.keys()),r=i.next();!r.done;r=i.next()){var o=r.value;if(o!==P&&e.startsWith(o))return we(a.get(o),e.slice(o.length))}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},ve=function(a,e){var t,n,i=e.length;e:for(var r=0;a&&r<i;){try{for(var o=(t=void 0,k(a.keys())),u=o.next();!u.done;u=o.next()){var l=u.value;if(l!==P&&e[r]===l[0]){for(var s=Math.min(i-r,l.length),c=1;c<s&&e[r+c]===l[c];)++c;var d=a.get(l);if(c===l.length)a=d;else{var v=new Map;v.set(l.slice(c),d),a.set(e.slice(r,r+c),v),a.delete(l),a=v}r+=c;continue e}}}catch(p){t={error:p}}finally{try{u&&!u.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}var f=new Map;return a.set(e.slice(r),f),f}return a},At=function(a,e){var t=I(le(a,e),2),n=t[0],i=t[1];if(n!==void 0){if(n.delete(P),n.size===0)He(i);else if(n.size===1){var r=I(n.entries().next().value,2),o=r[0],u=r[1];Ue(i,o,u)}}},He=function(a){if(a.length!==0){var e=I(be(a),2),t=e[0],n=e[1];if(t.delete(n),t.size===0)He(a.slice(0,-1));else if(t.size===1){var i=I(t.entries().next().value,2),r=i[0],o=i[1];r!==P&&Ue(a.slice(0,-1),r,o)}}},Ue=function(a,e,t){if(a.length!==0){var n=I(be(a),2),i=n[0],r=n[1];i.set(r+e,t),i.delete(r)}},be=function(a){return a[a.length-1]},ee,_e="or",Ke="and",Ct="and_not",St=function(){function a(e){if((e==null?void 0:e.fields)==null)throw new Error('MiniSearch: option "fields" must be provided');var t=e.autoVacuum==null||e.autoVacuum===!0?me:e.autoVacuum;this._options=B(B(B({},pe),e),{autoVacuum:t,searchOptions:B(B({},Ie),e.searchOptions||{}),autoSuggestOptions:B(B({},Mt),e.autoSuggestOptions||{})}),this._index=new de,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=xe,this.addFields(this._options.fields)}return a.prototype.add=function(e){var t,n,i,r,o,u,l=this._options,s=l.extractField,c=l.tokenize,d=l.processTerm,v=l.fields,f=l.idField,p=s(e,f);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));if(this._idToShortId.has(p))throw new Error("MiniSearch: duplicate ID ".concat(p));var g=this.addDocumentId(p);this.saveStoredFields(g,e);try{for(var y=k(v),x=y.next();!x.done;x=y.next()){var b=x.value,w=s(e,b);if(w!=null){var D=c(w.toString(),b),_=this._fieldIds[b],V=new Set(D).size;this.addFieldLength(g,_,this._documentCount-1,V);try{for(var A=(i=void 0,k(D)),z=A.next();!z.done;z=A.next()){var M=z.value,C=d(M,b);if(Array.isArray(C))try{for(var L=(o=void 0,k(C)),E=L.next();!E.done;E=L.next()){var O=E.value;this.addTerm(_,g,O)}}catch(h){o={error:h}}finally{try{E&&!E.done&&(u=L.return)&&u.call(L)}finally{if(o)throw o.error}}else C&&this.addTerm(_,g,C)}}catch(h){i={error:h}}finally{try{z&&!z.done&&(r=A.return)&&r.call(A)}finally{if(i)throw i.error}}}}}catch(h){t={error:h}}finally{try{x&&!x.done&&(n=y.return)&&n.call(y)}finally{if(t)throw t.error}}},a.prototype.addAll=function(e){var t,n;try{for(var i=k(e),r=i.next();!r.done;r=i.next()){var o=r.value;this.add(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},a.prototype.addAllAsync=function(e,t){var n=this;t===void 0&&(t={});var i=t.chunkSize,r=i===void 0?10:i,o={chunk:[],promise:Promise.resolve()},u=e.reduce(function(c,d,v){var f=c.chunk,p=c.promise;return f.push(d),(v+1)%r===0?{chunk:[],promise:p.then(function(){return new Promise(function(g){return setTimeout(g,0)})}).then(function(){return n.addAll(f)})}:{chunk:f,promise:p}},o),l=u.chunk,s=u.promise;return s.then(function(){return n.addAll(l)})},a.prototype.remove=function(e){var t,n,i,r,o,u,l=this._options,s=l.tokenize,c=l.processTerm,d=l.extractField,v=l.fields,f=l.idField,p=d(e,f);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));var g=this._idToShortId.get(p);if(g==null)throw new Error("MiniSearch: cannot remove document with ID ".concat(p,": it is not in the index"));try{for(var y=k(v),x=y.next();!x.done;x=y.next()){var b=x.value,w=d(e,b);if(w!=null){var D=s(w.toString(),b),_=this._fieldIds[b],V=new Set(D).size;this.removeFieldLength(g,_,this._documentCount,V);try{for(var A=(i=void 0,k(D)),z=A.next();!z.done;z=A.next()){var M=z.value,C=c(M,b);if(Array.isArray(C))try{for(var L=(o=void 0,k(C)),E=L.next();!E.done;E=L.next()){var O=E.value;this.removeTerm(_,g,O)}}catch(h){o={error:h}}finally{try{E&&!E.done&&(u=L.return)&&u.call(L)}finally{if(o)throw o.error}}else C&&this.removeTerm(_,g,C)}}catch(h){i={error:h}}finally{try{z&&!z.done&&(r=A.return)&&r.call(A)}finally{if(i)throw i.error}}}}}catch(h){t={error:h}}finally{try{x&&!x.done&&(n=y.return)&&n.call(y)}finally{if(t)throw t.error}}this._storedFields.delete(g),this._documentIds.delete(g),this._idToShortId.delete(p),this._fieldLength.delete(g),this._documentCount-=1},a.prototype.removeAll=function(e){var t,n;if(e)try{for(var i=k(e),r=i.next();!r.done;r=i.next()){var o=r.value;this.remove(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new de,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},a.prototype.discard=function(e){var t=this,n=this._idToShortId.get(e);if(n==null)throw new Error("MiniSearch: cannot discard document with ID ".concat(e,": it is not in the index"));this._idToShortId.delete(e),this._documentIds.delete(n),this._storedFields.delete(n),(this._fieldLength.get(n)||[]).forEach(function(i,r){t.removeFieldLength(n,r,t._documentCount,i)}),this._fieldLength.delete(n),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},a.prototype.maybeAutoVacuum=function(){if(this._options.autoVacuum!==!1){var e=this._options.autoVacuum,t=e.minDirtFactor,n=e.minDirtCount,i=e.batchSize,r=e.batchWait;this.conditionalVacuum({batchSize:i,batchWait:r},{minDirtCount:n,minDirtFactor:t})}},a.prototype.discardAll=function(e){var t,n,i=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var r=k(e),o=r.next();!o.done;o=r.next()){var u=o.value;this.discard(u)}}catch(l){t={error:l}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}finally{this._options.autoVacuum=i}this.maybeAutoVacuum()},a.prototype.replace=function(e){var t=this._options,n=t.idField,i=t.extractField,r=i(e,n);this.discard(r),this.add(e)},a.prototype.vacuum=function(e){return e===void 0&&(e={}),this.conditionalVacuum(e)},a.prototype.conditionalVacuum=function(e,t){var n=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(function(){var i=n._enqueuedVacuumConditions;return n._enqueuedVacuumConditions=xe,n.performVacuuming(e,i)}),this._enqueuedVacuum)):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)},a.prototype.performVacuuming=function(e,t){return Ft(this,void 0,void 0,function(){var n,i,r,o,u,l,s,c,d,v,f,p,g,y,x,b,w,D,_,V,A,z,M,C,L;return xt(this,function(E){switch(E.label){case 0:if(n=this._dirtCount,!this.vacuumConditionsMet(t))return[3,10];i=e.batchSize||Fe.batchSize,r=e.batchWait||Fe.batchWait,o=1,E.label=1;case 1:E.trys.push([1,7,8,9]),u=k(this._index),l=u.next(),E.label=2;case 2:if(l.done)return[3,6];s=I(l.value,2),c=s[0],d=s[1];try{for(v=(z=void 0,k(d)),f=v.next();!f.done;f=v.next()){p=I(f.value,2),g=p[0],y=p[1];try{for(x=(C=void 0,k(y)),b=x.next();!b.done;b=x.next())w=I(b.value,1),D=w[0],!this._documentIds.has(D)&&(y.size<=1?d.delete(g):y.delete(D))}catch(O){C={error:O}}finally{try{b&&!b.done&&(L=x.return)&&L.call(x)}finally{if(C)throw C.error}}}}catch(O){z={error:O}}finally{try{f&&!f.done&&(M=v.return)&&M.call(v)}finally{if(z)throw z.error}}return this._index.get(c).size===0&&this._index.delete(c),o%i!==0?[3,4]:[4,new Promise(function(O){return setTimeout(O,r)})];case 3:E.sent(),E.label=4;case 4:o+=1,E.label=5;case 5:return l=u.next(),[3,2];case 6:return[3,9];case 7:return _=E.sent(),V={error:_},[3,9];case 8:try{l&&!l.done&&(A=u.return)&&A.call(u)}finally{if(V)throw V.error}return[7];case 9:this._dirtCount-=n,E.label=10;case 10:return[4,null];case 11:return E.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},a.prototype.vacuumConditionsMet=function(e){if(e==null)return!0;var t=e.minDirtCount,n=e.minDirtFactor;return t=t||me.minDirtCount,n=n||me.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=n},Object.defineProperty(a.prototype,"isVacuuming",{get:function(){return this._currentVacuum!=null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),a.prototype.has=function(e){return this._idToShortId.has(e)},a.prototype.search=function(e,t){var n,i;t===void 0&&(t={});var r=this.executeQuery(e,t),o=[];try{for(var u=k(r),l=u.next();!l.done;l=u.next()){var s=I(l.value,2),c=s[0],d=s[1],v=d.score,f=d.terms,p=d.match,g=f.length,y={id:this._documentIds.get(c),score:v*g,terms:Object.keys(p),match:p};Object.assign(y,this._storedFields.get(c)),(t.filter==null||t.filter(y))&&o.push(y)}}catch(x){n={error:x}}finally{try{l&&!l.done&&(i=u.return)&&i.call(u)}finally{if(n)throw n.error}}return o.sort(Pe),o},a.prototype.autoSuggest=function(e,t){var n,i,r,o;t===void 0&&(t={}),t=B(B({},this._options.autoSuggestOptions),t);var u=new Map;try{for(var l=k(this.search(e,t)),s=l.next();!s.done;s=l.next()){var c=s.value,d=c.score,v=c.terms,f=v.join(" "),p=u.get(f);p!=null?(p.score+=d,p.count+=1):u.set(f,{score:d,terms:v,count:1})}}catch(_){n={error:_}}finally{try{s&&!s.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}var g=[];try{for(var y=k(u),x=y.next();!x.done;x=y.next()){var b=I(x.value,2),p=b[0],w=b[1],d=w.score,v=w.terms,D=w.count;g.push({suggestion:p,terms:v,score:d/D})}}catch(_){r={error:_}}finally{try{x&&!x.done&&(o=y.return)&&o.call(y)}finally{if(r)throw r.error}}return g.sort(Pe),g},Object.defineProperty(a.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),a.loadJSON=function(e,t){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)},a.getDefault=function(e){if(pe.hasOwnProperty(e))return ye(pe,e);throw new Error('MiniSearch: unknown option "'.concat(e,'"'))},a.loadJS=function(e,t){var n,i,r,o,u,l,s=e.index,c=e.documentCount,d=e.nextId,v=e.documentIds,f=e.fieldIds,p=e.fieldLength,g=e.averageFieldLength,y=e.storedFields,x=e.dirtCount,b=e.serializationVersion;if(b!==1&&b!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var w=new a(t);w._documentCount=c,w._nextId=d,w._documentIds=ue(v),w._idToShortId=new Map,w._fieldIds=f,w._fieldLength=ue(p),w._avgFieldLength=g,w._storedFields=ue(y),w._dirtCount=x||0,w._index=new de;try{for(var D=k(w._documentIds),_=D.next();!_.done;_=D.next()){var V=I(_.value,2),A=V[0],z=V[1];w._idToShortId.set(z,A)}}catch(R){n={error:R}}finally{try{_&&!_.done&&(i=D.return)&&i.call(D)}finally{if(n)throw n.error}}try{for(var M=k(s),C=M.next();!C.done;C=M.next()){var L=I(C.value,2),E=L[0],O=L[1],h=new Map;try{for(var F=(u=void 0,k(Object.keys(O))),S=F.next();!S.done;S=F.next()){var $=S.value,N=O[$];b===1&&(N=N.ds),h.set(parseInt($,10),ue(N))}}catch(R){u={error:R}}finally{try{S&&!S.done&&(l=F.return)&&l.call(F)}finally{if(u)throw u.error}}w._index.set(E,h)}}catch(R){r={error:R}}finally{try{C&&!C.done&&(o=M.return)&&o.call(M)}finally{if(r)throw r.error}}return w},a.prototype.executeQuery=function(e,t){var n=this;if(t===void 0&&(t={}),typeof e!="string"){var i=B(B(B({},t),e),{queries:void 0}),r=e.queries.map(function(y){return n.executeQuery(y,i)});return this.combineResults(r,i.combineWith)}var o=this._options,u=o.tokenize,l=o.processTerm,s=o.searchOptions,c=B(B({tokenize:u,processTerm:l},s),t),d=c.tokenize,v=c.processTerm,f=d(e).flatMap(function(y){return v(y)}).filter(function(y){return!!y}),p=f.map(Dt(c)),g=p.map(function(y){return n.executeQuerySpec(y,c)});return this.combineResults(g,c.combineWith)},a.prototype.executeQuerySpec=function(e,t){var n,i,r,o,u=B(B({},this._options.searchOptions),t),l=(u.fields||this._options.fields).reduce(function($,N){var R;return B(B({},$),(R={},R[N]=ye(u.boost,N)||1,R))},{}),s=u.boostDocument,c=u.weights,d=u.maxFuzzy,v=u.bm25,f=B(B({},Ie.weights),c),p=f.fuzzy,g=f.prefix,y=this._index.get(e.term),x=this.termResults(e.term,e.term,1,y,l,s,v),b,w;if(e.prefix&&(b=this._index.atPrefix(e.term)),e.fuzzy){var D=e.fuzzy===!0?.2:e.fuzzy,_=D<1?Math.min(d,Math.round(e.term.length*D)):D;_&&(w=this._index.fuzzyGet(e.term,_))}if(b)try{for(var V=k(b),A=V.next();!A.done;A=V.next()){var z=I(A.value,2),M=z[0],C=z[1],L=M.length-e.term.length;if(L){w==null||w.delete(M);var E=g*M.length/(M.length+.3*L);this.termResults(e.term,M,E,C,l,s,v,x)}}}catch($){n={error:$}}finally{try{A&&!A.done&&(i=V.return)&&i.call(V)}finally{if(n)throw n.error}}if(w)try{for(var O=k(w.keys()),h=O.next();!h.done;h=O.next()){var M=h.value,F=I(w.get(M),2),S=F[0],L=F[1];if(L){var E=p*M.length/(M.length+L);this.termResults(e.term,M,E,S,l,s,v,x)}}}catch($){r={error:$}}finally{try{h&&!h.done&&(o=O.return)&&o.call(O)}finally{if(r)throw r.error}}return x},a.prototype.combineResults=function(e,t){if(t===void 0&&(t=_e),e.length===0)return new Map;var n=t.toLowerCase();return e.reduce(kt[n])||new Map},a.prototype.toJSON=function(){var e,t,n,i,r=[];try{for(var o=k(this._index),u=o.next();!u.done;u=o.next()){var l=I(u.value,2),s=l[0],c=l[1],d={};try{for(var v=(n=void 0,k(c)),f=v.next();!f.done;f=v.next()){var p=I(f.value,2),g=p[0],y=p[1];d[g]=Object.fromEntries(y)}}catch(x){n={error:x}}finally{try{f&&!f.done&&(i=v.return)&&i.call(v)}finally{if(n)throw n.error}}r.push([s,d])}}catch(x){e={error:x}}finally{try{u&&!u.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:r,serializationVersion:2}},a.prototype.termResults=function(e,t,n,i,r,o,u,l){var s,c,d,v,f;if(l===void 0&&(l=new Map),i==null)return l;try{for(var p=k(Object.keys(r)),g=p.next();!g.done;g=p.next()){var y=g.value,x=r[y],b=this._fieldIds[y],w=i.get(b);if(w!=null){var D=w.size,_=this._avgFieldLength[b];try{for(var V=(d=void 0,k(w.keys())),A=V.next();!A.done;A=V.next()){var z=A.value;if(!this._documentIds.has(z)){this.removeTerm(b,z,t),D-=1;continue}var M=o?o(this._documentIds.get(z),t):1;if(M){var C=w.get(z),L=this._fieldLength.get(z)[b],E=zt(C,D,this._documentCount,L,_,u),O=n*x*M*E,h=l.get(z);if(h){h.score+=O,Lt(h.terms,e);var F=ye(h.match,t);F?F.push(y):h.match[t]=[y]}else l.set(z,{score:O,terms:[e],match:(f={},f[t]=[y],f)})}}}catch(S){d={error:S}}finally{try{A&&!A.done&&(v=V.return)&&v.call(V)}finally{if(d)throw d.error}}}}}catch(S){s={error:S}}finally{try{g&&!g.done&&(c=p.return)&&c.call(p)}finally{if(s)throw s.error}}return l},a.prototype.addTerm=function(e,t,n){var i=this._index.fetch(n,Re),r=i.get(e);if(r==null)r=new Map,r.set(t,1),i.set(e,r);else{var o=r.get(t);r.set(t,(o||0)+1)}},a.prototype.removeTerm=function(e,t,n){if(!this._index.has(n)){this.warnDocumentChanged(t,e,n);return}var i=this._index.fetch(n,Re),r=i.get(e);r==null||r.get(t)==null?this.warnDocumentChanged(t,e,n):r.get(t)<=1?r.size<=1?i.delete(e):r.delete(t):r.set(t,r.get(t)-1),this._index.get(n).size===0&&this._index.delete(n)},a.prototype.warnDocumentChanged=function(e,t,n){var i,r;try{for(var o=k(Object.keys(this._fieldIds)),u=o.next();!u.done;u=o.next()){var l=u.value;if(this._fieldIds[l]===t){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(n,'" was not present in field "').concat(l,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(s){i={error:s}}finally{try{u&&!u.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}},a.prototype.addDocumentId=function(e){var t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t},a.prototype.addFields=function(e){for(var t=0;t<e.length;t++)this._fieldIds[e[t]]=t},a.prototype.addFieldLength=function(e,t,n,i){var r=this._fieldLength.get(e);r==null&&this._fieldLength.set(e,r=[]),r[t]=i;var o=this._avgFieldLength[t]||0,u=o*n+i;this._avgFieldLength[t]=u/(n+1)},a.prototype.removeFieldLength=function(e,t,n,i){if(n===1){this._avgFieldLength[t]=0;return}var r=this._avgFieldLength[t]*n-i;this._avgFieldLength[t]=r/(n-1)},a.prototype.saveStoredFields=function(e,t){var n,i,r=this._options,o=r.storeFields,u=r.extractField;if(!(o==null||o.length===0)){var l=this._storedFields.get(e);l==null&&this._storedFields.set(e,l={});try{for(var s=k(o),c=s.next();!c.done;c=s.next()){var d=c.value,v=u(t,d);v!==void 0&&(l[d]=v)}}catch(f){n={error:f}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}}},a}(),ye=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)?a[e]:void 0},kt=(ee={},ee[_e]=function(a,e){var t,n;try{for(var i=k(e.keys()),r=i.next();!r.done;r=i.next()){var o=r.value,u=a.get(o);if(u==null)a.set(o,e.get(o));else{var l=e.get(o),s=l.score,c=l.terms,d=l.match;u.score=u.score+s,u.match=Object.assign(u.match,d),Te(u.terms,c)}}}catch(v){t={error:v}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return a},ee[Ke]=function(a,e){var t,n,i=new Map;try{for(var r=k(e.keys()),o=r.next();!o.done;o=r.next()){var u=o.value,l=a.get(u);if(l!=null){var s=e.get(u),c=s.score,d=s.terms,v=s.match;Te(l.terms,d),i.set(u,{score:l.score+c,terms:l.terms,match:Object.assign(l.match,v)})}}}catch(f){t={error:f}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return i},ee[Ct]=function(a,e){var t,n;try{for(var i=k(e.keys()),r=i.next();!r.done;r=i.next()){var o=r.value;a.delete(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return a},ee),Et={k:1.2,b:.7,d:.5},zt=function(a,e,t,n,i,r){var o=r.k,u=r.b,l=r.d,s=Math.log(1+(t-e+.5)/(e+.5));return s*(l+a*(o+1)/(a+o*(1-u+u*n/i)))},Dt=function(a){return function(e,t,n){var i=typeof a.fuzzy=="function"?a.fuzzy(e,t,n):a.fuzzy||!1,r=typeof a.prefix=="function"?a.prefix(e,t,n):a.prefix===!0;return{term:e,fuzzy:i,prefix:r}}},pe={idField:"id",extractField:function(a,e){return a[e]},tokenize:function(a,e){return a.split(Vt)},processTerm:function(a,e){return a.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(a,e,t){return console!=null&&console.warn!=null&&console[a](e)},autoVacuum:!0},Ie={combineWith:_e,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:Et},Mt={combineWith:Ke,prefix:function(a,e,t){return e===t.length-1}},Fe={batchSize:1e3,batchWait:10},xe={minDirtFactor:.1,minDirtCount:20},me=B(B({},Fe),xe),Lt=function(a,e){a.includes(e)||a.push(e)},Te=function(a,e){var t,n;try{for(var i=k(e),r=i.next();!r.done;r=i.next()){var o=r.value;a.includes(o)||a.push(o)}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},Pe=function(a,e){var t=a.score,n=e.score;return n-t},Re=function(){return new Map},ue=function(a){var e,t,n=new Map;try{for(var i=k(Object.keys(a)),r=i.next();!r.done;r=i.next()){var o=r.value;n.set(parseInt(o,10),a[o])}}catch(u){e={error:u}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return n},Vt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;const H=a=>(ot("data-v-6118d093"),a=a(),ut(),a),Ot={class:"shell"},Bt=H(()=>m("svg",{class:"search-icon",width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true"},[m("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[m("circle",{cx:"11",cy:"11",r:"8"}),m("path",{d:"m21 21l-4.35-4.35"})])],-1)),It={class:"search-actions before"},Tt=["title"],Pt=H(()=>m("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true"},[m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 12H5m7 7l-7-7l7-7"})],-1)),Rt=[Pt],$t=["placeholder"],Nt={class:"search-actions"},Wt=["title"],Ht=H(()=>m("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true"},[m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 14h7v7H3zM3 3h7v7H3zm11 1h7m-7 5h7m-7 6h7m-7 5h7"})],-1)),Ut=[Ht],Kt=["title"],Jt=H(()=>m("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true"},[m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 5H9l-7 7l7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-2 4l-6 6m0-6l6 6"})],-1)),Qt=[Jt],jt=["href","aria-label","onMouseenter"],Gt={class:"titles"},Yt=H(()=>m("span",{class:"title-icon"},"#",-1)),qt=["innerHTML"],Zt=H(()=>m("svg",{width:"18",height:"18",viewBox:"0 0 24 24"},[m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m9 18l6-6l-6-6"})],-1)),Xt={class:"title main"},er=["innerHTML"],tr={key:0,class:"excerpt-wrapper"},rr={key:0,class:"excerpt"},nr=["innerHTML"],ar=H(()=>m("div",{class:"excerpt-gradient-bottom"},null,-1)),ir=H(()=>m("div",{class:"excerpt-gradient-top"},null,-1)),or={key:0,class:"no-results"},ur={class:"search-keyboard-shortcuts"},lr=["aria-label"],sr=H(()=>m("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 19V5m-7 7l7-7l7 7"})],-1)),cr=[sr],hr=["aria-label"],fr=H(()=>m("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 5v14m7-7l-7 7l-7-7"})],-1)),dr=[fr],vr=["aria-label"],yr=H(()=>m("svg",{width:"14",height:"14",viewBox:"0 0 24 24"},[m("g",{fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[m("path",{d:"m9 10l-5 5l5 5"}),m("path",{d:"M20 4v7a4 4 0 0 1-4 4H4"})])],-1)),pr=[yr],mr=["aria-label"],gr=Ye({__name:"VPLocalSearchBox",props:{placeholder:{}},emits:["close"],setup(a,{emit:e}){var O;const t=e,n=q(),i=q(),r=q(),o=q(wt),{localeIndex:u,theme:l}=ft(),s=Be(async()=>{var h,F,S;return Oe(St.loadJSON((S=await((F=(h=o.value)[u.value])==null?void 0:F.call(h)))==null?void 0:S.default,{fields:["title","titles","text"],storeFields:["title","titles"],searchOptions:{fuzzy:.2,prefix:!0,boost:{title:4,text:2,titles:1}}}))}),c=dt("vitepress:local-search-filter",""),d=vt("vitepress:local-search-detailed-list",!1),v=qe(()=>{var h,F;return((h=l.value.search)==null?void 0:h.provider)==="local"&&((F=l.value.search.options)==null?void 0:F.disableDetailedView)===!0});Ze(()=>{v.value&&(d.value=!1)});const f=q([]),p=/<h(\d*).*?>.*?<a.*? href="#(.*?)".*?>.*?<\/a><\/h\1>/gi,g=ae(!1);De(c,()=>{g.value=!1});const y=Be(async()=>{if(!i.value)return;const h=await ge(()=>import("./mark.1b24f454.js").then(F=>F.m),["assets/chunks/mark.1b24f454.js","assets/chunks/framework.c67b3163.js"]);return Oe(new(h.default??h)(i.value))},null);yt(()=>[s.value,c.value,d.value],async([h,F,S],$,N)=>{var Ce,Se,ke,Ee;let R=!1;if(N(()=>{R=!0}),!h)return;f.value=h.search(F).slice(0,16),g.value=!0;const Je=S?await Promise.all(f.value.map(W=>x(W.id))):[];if(R)return;const se=new Map;for(const{id:W,mod:Q}of Je){const U=Q.default??Q;if(U!=null&&U.render){const j=lt(U);j.config.warnHandler=()=>{};const te=document.createElement("div");j.mount(te);const G=te.innerHTML.split(p);j.unmount(),G.shift();const ze=W.slice(0,W.indexOf("#"));let re=se.get(ze);re||(re=new Map,se.set(ze,re));for(let ne=0;ne<G.length;ne+=3){const je=G[ne+1],Ge=G[ne+2];re.set(je,Ge)}}if(R)return}const Ae=new Set;if(f.value=f.value.map(W=>{const[Q,U]=W.id.split("#"),j=se.get(Q),te=(j==null?void 0:j.get(U))??"";for(const G in W.match)Ae.add(G);return{...W,text:te}}),await he(),R)return;await new Promise(W=>{var Q;(Q=y.value)==null||Q.unmark({done:()=>{var U;(U=y.value)==null||U.markRegExp(E(Ae),{done:W})}})});const Qe=((Ce=n.value)==null?void 0:Ce.querySelectorAll(".result .excerpt"))??[];for(const W of Qe)(Se=W.querySelector('mark[data-markjs="true"]'))==null||Se.scrollIntoView({block:"center"});(Ee=(ke=n.value)==null?void 0:ke.querySelector(".result"))==null||Ee.scrollIntoView({block:"start"})},{debounce:200,immediate:!0});async function x(h){const F=st(ct(h.slice(0,h.indexOf("#"))));try{return{id:h,mod:await ge(()=>import(F),[])}}catch(S){return console.error(S),{id:h,mod:{}}}}const b=ae();function w(){var h,F;(h=b.value)==null||h.focus(),(F=b.value)==null||F.select()}ce(()=>{w()});function D(h){h.pointerType==="mouse"&&w()}const _=ae(0),V=ae(!1);De(f,()=>{_.value=0,A()});function A(){he(()=>{const h=document.querySelector(".result.selected");h&&h.scrollIntoView({block:"nearest"})})}oe("ArrowUp",h=>{h.preventDefault(),_.value--,_.value<0&&(_.value=f.value.length-1),V.value=!0,A()}),oe("ArrowDown",h=>{h.preventDefault(),_.value++,_.value>=f.value.length&&(_.value=0),V.value=!0,A()});const z=Xe();oe("Enter",()=>{const h=f.value[_.value];h&&(z.go(h.id),t("close"))}),oe("Escape",()=>{t("close")});const M={modal:{displayDetails:"Display detailed list",resetButtonTitle:"Reset search",backButtonTitle:"Close search",noResultsText:"No results for",footer:{selectText:"to select",selectKeyAriaLabel:"enter",navigateText:"to navigate",navigateUpKeyAriaLabel:"up arrow",navigateDownKeyAriaLabel:"down arrow",closeText:"to close",closeKeyAriaLabel:"escape"}}},C=pt((O=l.value.search)==null?void 0:O.options,M);ce(()=>{window.history.pushState(null,"",null)}),mt("popstate",h=>{h.preventDefault(),t("close")});const L=gt(r);ce(()=>{r.value=document.body,he(()=>{L.value=!0})}),et(()=>{L.value=!1});function E(h){return new RegExp([...h].sort((F,S)=>S.length-F.length).map(F=>`(${F.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")})`).join("|"),"gi")}return(h,F)=>(K(),tt(it,{to:"body"},[m("div",{ref_key:"el",ref:n,class:"VPLocalSearchBox","aria-modal":"true"},[m("div",{class:"backdrop",onClick:F[0]||(F[0]=S=>h.$emit("close"))}),m("div",Ot,[m("div",{class:"search-bar",onPointerup:F[5]||(F[5]=S=>D(S))},[Bt,m("div",It,[m("button",{class:"back-button",title:T(C)("modal.backButtonTitle"),onClick:F[1]||(F[1]=S=>h.$emit("close"))},Rt,8,Tt)]),rt(m("input",{ref_key:"searchInput",ref:b,"onUpdate:modelValue":F[2]||(F[2]=S=>at(c)?c.value=S:null),placeholder:h.placeholder,class:"search-input"},null,8,$t),[[nt,T(c)]]),m("div",Nt,[v.value?ie("",!0):(K(),J("button",{key:0,class:Me(["toggle-layout-button",{"detailed-list":T(d)}]),title:T(C)("modal.displayDetails"),onClick:F[3]||(F[3]=S=>d.value=!T(d))},Ut,10,Wt)),m("button",{class:"clear-button",title:T(C)("modal.resetButtonTitle"),onClick:F[4]||(F[4]=S=>c.value="")},Qt,8,Kt)])],32),m("div",{ref_key:"resultsEl",ref:i,class:"results",onMousemove:F[7]||(F[7]=S=>V.value=!1)},[(K(!0),J(Ve,null,Le(f.value,(S,$)=>(K(),J("a",{key:S.id,href:S.id,class:Me(["result",{selected:_.value===$}]),"aria-label":[...S.titles,S.title].join(" > "),onMouseenter:N=>!V.value&&(_.value=$),onClick:F[6]||(F[6]=N=>h.$emit("close"))},[m("div",null,[m("div",Gt,[Yt,(K(!0),J(Ve,null,Le(S.titles,(N,R)=>(K(),J("span",{key:R,class:"title"},[m("span",{class:"text",innerHTML:N},null,8,qt),Zt]))),128)),m("span",Xt,[m("span",{class:"text",innerHTML:S.title},null,8,er)])]),T(d)?(K(),J("div",tr,[S.text?(K(),J("div",rr,[m("div",{class:"vp-doc",innerHTML:S.text},null,8,nr)])):ie("",!0),ar,ir])):ie("",!0)])],42,jt))),128)),T(c)&&!f.value.length&&g.value?(K(),J("div",or,[Z(X(T(C)("modal.noResultsText"))+' "',1),m("strong",null,X(T(c)),1),Z('" ')])):ie("",!0)],544),m("div",ur,[m("span",null,[m("kbd",{"aria-label":T(C)("modal.footer.navigateUpKeyAriaLabel")},cr,8,lr),m("kbd",{"aria-label":T(C)("modal.footer.navigateDownKeyAriaLabel")},dr,8,hr),Z(" "+X(T(C)("modal.footer.navigateText")),1)]),m("span",null,[m("kbd",{"aria-label":T(C)("modal.footer.selectKeyAriaLabel")},pr,8,vr),Z(" "+X(T(C)("modal.footer.selectText")),1)]),m("span",null,[m("kbd",{"aria-label":T(C)("modal.footer.closeKeyAriaLabel")},"esc",8,mr),Z(" "+X(T(C)("modal.footer.closeText")),1)])])])],512)]))}});const xr=ht(gr,[["__scopeId","data-v-6118d093"]]);export{xr as default};
