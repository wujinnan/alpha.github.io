var de=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,he=Math.ceil,z=Math.floor,U="[BigNumber Error] ",Ne=U+"Number primitive has more than 15 significant digits: ",V=1e14,O=14,ge=9007199254740991,pe=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],K=1e7,R=1e9;function Oe(h){var g,A,m,w=p.prototype={constructor:p,toString:null,valueOf:null},M=new p(1),S=20,$=4,C=-7,k=21,Z=-1e7,H=1e7,j=!1,re=1,J=0,oe={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},b="0123456789abcdefghijklmnopqrstuvwxyz",le=!0;function p(e,r){var n,s,t,o,c,i,f,u,l=this;if(!(l instanceof p))return new p(e,r);if(r==null){if(e&&e._isBigNumber===!0){l.s=e.s,!e.c||e.e>H?l.c=l.e=null:e.e<Z?l.c=[l.e=0]:(l.e=e.e,l.c=e.c.slice());return}if((i=typeof e=="number")&&e*0==0){if(l.s=1/e<0?(e=-e,-1):1,e===~~e){for(o=0,c=e;c>=10;c/=10,o++);o>H?l.c=l.e=null:(l.e=o,l.c=[e]);return}u=String(e)}else{if(!de.test(u=String(e)))return m(l,u,i);l.s=u.charCodeAt(0)==45?(u=u.slice(1),-1):1}(o=u.indexOf("."))>-1&&(u=u.replace(".","")),(c=u.search(/e/i))>0?(o<0&&(o=c),o+=+u.slice(c+1),u=u.substring(0,c)):o<0&&(o=u.length)}else{if(v(r,2,b.length,"Base"),r==10&&le)return l=new p(e),G(l,S+l.e+1,$);if(u=String(e),i=typeof e=="number"){if(e*0!=0)return m(l,u,i,r);if(l.s=1/e<0?(u=u.slice(1),-1):1,p.DEBUG&&u.replace(/^0\.0*|\./,"").length>15)throw Error(Ne+e)}else l.s=u.charCodeAt(0)===45?(u=u.slice(1),-1):1;for(n=b.slice(0,r),o=c=0,f=u.length;c<f;c++)if(n.indexOf(s=u.charAt(c))<0){if(s=="."){if(c>o){o=f;continue}}else if(!t&&(u==u.toUpperCase()&&(u=u.toLowerCase())||u==u.toLowerCase()&&(u=u.toUpperCase()))){t=!0,c=-1,o=0;continue}return m(l,String(e),i,r)}i=!1,u=A(u,r,10,l.s),(o=u.indexOf("."))>-1?u=u.replace(".",""):o=u.length}for(c=0;u.charCodeAt(c)===48;c++);for(f=u.length;u.charCodeAt(--f)===48;);if(u=u.slice(c,++f)){if(f-=c,i&&p.DEBUG&&f>15&&(e>ge||e!==z(e)))throw Error(Ne+l.s*e);if((o=o-c-1)>H)l.c=l.e=null;else if(o<Z)l.c=[l.e=0];else{if(l.e=o,l.c=[],c=(o+1)%O,o<0&&(c+=O),c<f){for(c&&l.c.push(+u.slice(0,c)),f-=O;c<f;)l.c.push(+u.slice(c,c+=O));c=O-(u=u.slice(c)).length}else c-=f;for(;c--;u+="0");l.c.push(+u)}}else l.c=[l.e=0]}p.clone=Oe,p.ROUND_UP=0,p.ROUND_DOWN=1,p.ROUND_CEIL=2,p.ROUND_FLOOR=3,p.ROUND_HALF_UP=4,p.ROUND_HALF_DOWN=5,p.ROUND_HALF_EVEN=6,p.ROUND_HALF_CEIL=7,p.ROUND_HALF_FLOOR=8,p.EUCLID=9,p.config=p.set=function(e){var r,n;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(n=e[r],v(n,0,R,r),S=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(n=e[r],v(n,0,8,r),$=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(n=e[r],n&&n.pop?(v(n[0],-R,0,r),v(n[1],0,R,r),C=n[0],k=n[1]):(v(n,-R,R,r),C=-(k=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if(n=e[r],n&&n.pop)v(n[0],-R,-1,r),v(n[1],1,R,r),Z=n[0],H=n[1];else if(v(n,-R,R,r),n)Z=-(H=n<0?-n:n);else throw Error(U+r+" cannot be zero: "+n);if(e.hasOwnProperty(r="CRYPTO"))if(n=e[r],n===!!n)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))j=n;else throw j=!n,Error(U+"crypto unavailable");else j=n;else throw Error(U+r+" not true or false: "+n);if(e.hasOwnProperty(r="MODULO_MODE")&&(n=e[r],v(n,0,9,r),re=n),e.hasOwnProperty(r="POW_PRECISION")&&(n=e[r],v(n,0,R,r),J=n),e.hasOwnProperty(r="FORMAT"))if(n=e[r],typeof n=="object")oe=n;else throw Error(U+r+" not an object: "+n);if(e.hasOwnProperty(r="ALPHABET"))if(n=e[r],typeof n=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(n))le=n.slice(0,10)=="0123456789",b=n;else throw Error(U+r+" invalid: "+n)}else throw Error(U+"Object expected: "+e);return{DECIMAL_PLACES:S,ROUNDING_MODE:$,EXPONENTIAL_AT:[C,k],RANGE:[Z,H],CRYPTO:j,MODULO_MODE:re,POW_PRECISION:J,FORMAT:oe,ALPHABET:b}},p.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!p.DEBUG)return!0;var r,n,s=e.c,t=e.e,o=e.s;e:if({}.toString.call(s)=="[object Array]"){if((o===1||o===-1)&&t>=-R&&t<=R&&t===z(t)){if(s[0]===0){if(t===0&&s.length===1)return!0;break e}if(r=(t+1)%O,r<1&&(r+=O),String(s[0]).length==r){for(r=0;r<s.length;r++)if(n=s[r],n<0||n>=V||n!==z(n))break e;if(n!==0)return!0}}}else if(s===null&&t===null&&(o===null||o===1||o===-1))return!0;throw Error(U+"Invalid BigNumber: "+e)},p.maximum=p.max=function(){return we(arguments,-1)},p.minimum=p.min=function(){return we(arguments,1)},p.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return z(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(n){var s,t,o,c,i,f=0,u=[],l=new p(M);if(n==null?n=S:v(n,0,R),c=he(n/O),j)if(crypto.getRandomValues){for(s=crypto.getRandomValues(new Uint32Array(c*=2));f<c;)i=s[f]*131072+(s[f+1]>>>11),i>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),s[f]=t[0],s[f+1]=t[1]):(u.push(i%1e14),f+=2);f=c/2}else if(crypto.randomBytes){for(s=crypto.randomBytes(c*=7);f<c;)i=(s[f]&31)*281474976710656+s[f+1]*1099511627776+s[f+2]*4294967296+s[f+3]*16777216+(s[f+4]<<16)+(s[f+5]<<8)+s[f+6],i>=9e15?crypto.randomBytes(7).copy(s,f):(u.push(i%1e14),f+=7);f=c/7}else throw j=!1,Error(U+"crypto unavailable");if(!j)for(;f<c;)i=r(),i<9e15&&(u[f++]=i%1e14);for(c=u[--f],n%=O,c&&n&&(i=pe[O-n],u[f]=z(c/i)*i);u[f]===0;u.pop(),f--);if(f<0)u=[o=0];else{for(o=-1;u[0]===0;u.splice(0,1),o-=O);for(f=1,i=u[0];i>=10;i/=10,f++);f<O&&(o-=O-f)}return l.e=o,l.c=u,l}}(),p.sum=function(){for(var e=1,r=arguments,n=new p(r[0]);e<r.length;)n=n.plus(r[e++]);return n},A=function(){var e="0123456789";function r(n,s,t,o){for(var c,i=[0],f,u=0,l=n.length;u<l;){for(f=i.length;f--;i[f]*=s);for(i[0]+=o.indexOf(n.charAt(u++)),c=0;c<i.length;c++)i[c]>t-1&&(i[c+1]==null&&(i[c+1]=0),i[c+1]+=i[c]/t|0,i[c]%=t)}return i.reverse()}return function(n,s,t,o,c){var i,f,u,l,a,N,E,x,D=n.indexOf("."),T=S,d=$;for(D>=0&&(l=J,J=0,n=n.replace(".",""),x=new p(s),N=x.pow(n.length-D),J=l,x.c=r(Y(q(N.c),N.e,"0"),10,t,e),x.e=x.c.length),E=r(n,s,t,c?(i=b,e):(i=e,b)),u=l=E.length;E[--l]==0;E.pop());if(!E[0])return i.charAt(0);if(D<0?--u:(N.c=E,N.e=u,N.s=o,N=g(N,x,T,d,t),E=N.c,a=N.r,u=N.e),f=u+T+1,D=E[f],l=t/2,a=a||f<0||E[f+1]!=null,a=d<4?(D!=null||a)&&(d==0||d==(N.s<0?3:2)):D>l||D==l&&(d==4||a||d==6&&E[f-1]&1||d==(N.s<0?8:7)),f<1||!E[0])n=a?Y(i.charAt(1),-T,i.charAt(0)):i.charAt(0);else{if(E.length=f,a)for(--t;++E[--f]>t;)E[f]=0,f||(++u,E=[1].concat(E));for(l=E.length;!E[--l];);for(D=0,n="";D<=l;n+=i.charAt(E[D++]));n=Y(n,u,i.charAt(0))}return n}}(),g=function(){function e(s,t,o){var c,i,f,u,l=0,a=s.length,N=t%K,E=t/K|0;for(s=s.slice();a--;)f=s[a]%K,u=s[a]/K|0,c=E*f+u*N,i=N*f+c%K*K+l,l=(i/o|0)+(c/K|0)+E*u,s[a]=i%o;return l&&(s=[l].concat(s)),s}function r(s,t,o,c){var i,f;if(o!=c)f=o>c?1:-1;else for(i=f=0;i<o;i++)if(s[i]!=t[i]){f=s[i]>t[i]?1:-1;break}return f}function n(s,t,o,c){for(var i=0;o--;)s[o]-=i,i=s[o]<t[o]?1:0,s[o]=i*c+s[o]-t[o];for(;!s[0]&&s.length>1;s.splice(0,1));}return function(s,t,o,c,i){var f,u,l,a,N,E,x,D,T,d,_,P,ie,ce,ae,W,ne,y=s.s==t.s?1:-1,L=s.c,B=t.c;if(!L||!L[0]||!B||!B[0])return new p(!s.s||!t.s||(L?B&&L[0]==B[0]:!B)?NaN:L&&L[0]==0||!B?y*0:y/0);for(D=new p(y),T=D.c=[],u=s.e-t.e,y=o+u+1,i||(i=V,u=X(s.e/O)-X(t.e/O),y=y/O|0),l=0;B[l]==(L[l]||0);l++);if(B[l]>(L[l]||0)&&u--,y<0)T.push(1),a=!0;else{for(ce=L.length,W=B.length,l=0,y+=2,N=z(i/(B[0]+1)),N>1&&(B=e(B,N,i),L=e(L,N,i),W=B.length,ce=L.length),ie=W,d=L.slice(0,W),_=d.length;_<W;d[_++]=0);ne=B.slice(),ne=[0].concat(ne),ae=B[0],B[1]>=i/2&&ae++;do{if(N=0,f=r(B,d,W,_),f<0){if(P=d[0],W!=_&&(P=P*i+(d[1]||0)),N=z(P/ae),N>1)for(N>=i&&(N=i-1),E=e(B,N,i),x=E.length,_=d.length;r(E,d,x,_)==1;)N--,n(E,W<x?ne:B,x,i),x=E.length,f=1;else N==0&&(f=N=1),E=B.slice(),x=E.length;if(x<_&&(E=[0].concat(E)),n(d,E,_,i),_=d.length,f==-1)for(;r(B,d,W,_)<1;)N++,n(d,W<_?ne:B,_,i),_=d.length}else f===0&&(N++,d=[0]);T[l++]=N,d[0]?d[_++]=L[ie]||0:(d=[L[ie]],_=1)}while((ie++<ce||d[0]!=null)&&y--);a=d[0]!=null,T[0]||T.splice(0,1)}if(i==V){for(l=1,y=T[0];y>=10;y/=10,l++);G(D,o+(D.e=l+u*O-1)+1,c,a)}else D.e=u,D.r=+a;return D}}();function se(e,r,n,s){var t,o,c,i,f;if(n==null?n=$:v(n,0,8),!e.c)return e.toString();if(t=e.c[0],c=e.e,r==null)f=q(e.c),f=s==1||s==2&&(c<=C||c>=k)?fe(f,c):Y(f,c,"0");else if(e=G(new p(e),r,n),o=e.e,f=q(e.c),i=f.length,s==1||s==2&&(r<=o||o<=C)){for(;i<r;f+="0",i++);f=fe(f,o)}else if(r-=c,f=Y(f,o,"0"),o+1>i){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=o-i,r>0)for(o+1==i&&(f+=".");r--;f+="0");return e.s<0&&t?"-"+f:f}function we(e,r){for(var n,s,t=1,o=new p(e[0]);t<e.length;t++)s=new p(e[t]),(!s.s||(n=ee(o,s))===r||n===0&&o.s===r)&&(o=s);return o}function ue(e,r,n){for(var s=1,t=r.length;!r[--t];r.pop());for(t=r[0];t>=10;t/=10,s++);return(n=s+n*O-1)>H?e.c=e.e=null:n<Z?e.c=[e.e=0]:(e.e=n,e.c=r),e}m=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,s=/^-?(Infinity|NaN)$/,t=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,c,i,f){var u,l=i?c:c.replace(t,"");if(s.test(l))o.s=isNaN(l)?null:l<0?-1:1;else{if(!i&&(l=l.replace(e,function(a,N,E){return u=(E=E.toLowerCase())=="x"?16:E=="b"?2:8,!f||f==u?N:a}),f&&(u=f,l=l.replace(r,"$1").replace(n,"0.$1")),c!=l))return new p(l,u);if(p.DEBUG)throw Error(U+"Not a"+(f?" base "+f:"")+" number: "+c);o.s=null}o.c=o.e=null}}();function G(e,r,n,s){var t,o,c,i,f,u,l,a=e.c,N=pe;if(a){e:{for(t=1,i=a[0];i>=10;i/=10,t++);if(o=r-t,o<0)o+=O,c=r,f=a[u=0],l=z(f/N[t-c-1]%10);else if(u=he((o+1)/O),u>=a.length)if(s){for(;a.length<=u;a.push(0));f=l=0,t=1,o%=O,c=o-O+1}else break e;else{for(f=i=a[u],t=1;i>=10;i/=10,t++);o%=O,c=o-O+t,l=c<0?0:z(f/N[t-c-1]%10)}if(s=s||r<0||a[u+1]!=null||(c<0?f:f%N[t-c-1]),s=n<4?(l||s)&&(n==0||n==(e.s<0?3:2)):l>5||l==5&&(n==4||s||n==6&&(o>0?c>0?f/N[t-c]:0:a[u-1])%10&1||n==(e.s<0?8:7)),r<1||!a[0])return a.length=0,s?(r-=e.e+1,a[0]=N[(O-r%O)%O],e.e=-r||0):a[0]=e.e=0,e;if(o==0?(a.length=u,i=1,u--):(a.length=u+1,i=N[O-o],a[u]=c>0?z(f/N[t-c]%N[c])*i:0),s)for(;;)if(u==0){for(o=1,c=a[0];c>=10;c/=10,o++);for(c=a[0]+=i,i=1;c>=10;c/=10,i++);o!=i&&(e.e++,a[0]==V&&(a[0]=1));break}else{if(a[u]+=i,a[u]!=V)break;a[u--]=0,i=1}for(o=a.length;a[--o]===0;a.pop());}e.e>H?e.c=e.e=null:e.e<Z&&(e.c=[e.e=0])}return e}function Q(e){var r,n=e.e;return n===null?e.toString():(r=q(e.c),r=n<=C||n>=k?fe(r,n):Y(r,n,"0"),e.s<0?"-"+r:r)}return w.absoluteValue=w.abs=function(){var e=new p(this);return e.s<0&&(e.s=1),e},w.comparedTo=function(e,r){return ee(this,new p(e,r))},w.decimalPlaces=w.dp=function(e,r){var n,s,t,o=this;if(e!=null)return v(e,0,R),r==null?r=$:v(r,0,8),G(new p(o),e+o.e+1,r);if(!(n=o.c))return null;if(s=((t=n.length-1)-X(this.e/O))*O,t=n[t])for(;t%10==0;t/=10,s--);return s<0&&(s=0),s},w.dividedBy=w.div=function(e,r){return g(this,new p(e,r),S,$)},w.dividedToIntegerBy=w.idiv=function(e,r){return g(this,new p(e,r),0,1)},w.exponentiatedBy=w.pow=function(e,r){var n,s,t,o,c,i,f,u,l,a=this;if(e=new p(e),e.c&&!e.isInteger())throw Error(U+"Exponent not an integer: "+Q(e));if(r!=null&&(r=new p(r)),i=e.e>14,!a.c||!a.c[0]||a.c[0]==1&&!a.e&&a.c.length==1||!e.c||!e.c[0])return l=new p(Math.pow(+Q(a),i?e.s*(2-te(e)):+Q(e))),r?l.mod(r):l;if(f=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new p(NaN);s=!f&&a.isInteger()&&r.isInteger(),s&&(a=a.mod(r))}else{if(e.e>9&&(a.e>0||a.e<-1||(a.e==0?a.c[0]>1||i&&a.c[1]>=24e7:a.c[0]<8e13||i&&a.c[0]<=9999975e7)))return o=a.s<0&&te(e)?-0:0,a.e>-1&&(o=1/o),new p(f?1/o:o);J&&(o=he(J/O+2))}for(i?(n=new p(.5),f&&(e.s=1),u=te(e)):(t=Math.abs(+Q(e)),u=t%2),l=new p(M);;){if(u){if(l=l.times(a),!l.c)break;o?l.c.length>o&&(l.c.length=o):s&&(l=l.mod(r))}if(t){if(t=z(t/2),t===0)break;u=t%2}else if(e=e.times(n),G(e,e.e+1,1),e.e>14)u=te(e);else{if(t=+Q(e),t===0)break;u=t%2}a=a.times(a),o?a.c&&a.c.length>o&&(a.c.length=o):s&&(a=a.mod(r))}return s?l:(f&&(l=M.div(l)),r?l.mod(r):o?G(l,J,$,c):l)},w.integerValue=function(e){var r=new p(this);return e==null?e=$:v(e,0,8),G(r,r.e+1,e)},w.isEqualTo=w.eq=function(e,r){return ee(this,new p(e,r))===0},w.isFinite=function(){return!!this.c},w.isGreaterThan=w.gt=function(e,r){return ee(this,new p(e,r))>0},w.isGreaterThanOrEqualTo=w.gte=function(e,r){return(r=ee(this,new p(e,r)))===1||r===0},w.isInteger=function(){return!!this.c&&X(this.e/O)>this.c.length-2},w.isLessThan=w.lt=function(e,r){return ee(this,new p(e,r))<0},w.isLessThanOrEqualTo=w.lte=function(e,r){return(r=ee(this,new p(e,r)))===-1||r===0},w.isNaN=function(){return!this.s},w.isNegative=function(){return this.s<0},w.isPositive=function(){return this.s>0},w.isZero=function(){return!!this.c&&this.c[0]==0},w.minus=function(e,r){var n,s,t,o,c=this,i=c.s;if(e=new p(e,r),r=e.s,!i||!r)return new p(NaN);if(i!=r)return e.s=-r,c.plus(e);var f=c.e/O,u=e.e/O,l=c.c,a=e.c;if(!f||!u){if(!l||!a)return l?(e.s=-r,e):new p(a?c:NaN);if(!l[0]||!a[0])return a[0]?(e.s=-r,e):new p(l[0]?c:$==3?-0:0)}if(f=X(f),u=X(u),l=l.slice(),i=f-u){for((o=i<0)?(i=-i,t=l):(u=f,t=a),t.reverse(),r=i;r--;t.push(0));t.reverse()}else for(s=(o=(i=l.length)<(r=a.length))?i:r,i=r=0;r<s;r++)if(l[r]!=a[r]){o=l[r]<a[r];break}if(o&&(t=l,l=a,a=t,e.s=-e.s),r=(s=a.length)-(n=l.length),r>0)for(;r--;l[n++]=0);for(r=V-1;s>i;){if(l[--s]<a[s]){for(n=s;n&&!l[--n];l[n]=r);--l[n],l[s]+=V}l[s]-=a[s]}for(;l[0]==0;l.splice(0,1),--u);return l[0]?ue(e,l,u):(e.s=$==3?-1:1,e.c=[e.e=0],e)},w.modulo=w.mod=function(e,r){var n,s,t=this;return e=new p(e,r),!t.c||!e.s||e.c&&!e.c[0]?new p(NaN):!e.c||t.c&&!t.c[0]?new p(t):(re==9?(s=e.s,e.s=1,n=g(t,e,0,3),e.s=s,n.s*=s):n=g(t,e,0,re),e=t.minus(n.times(e)),!e.c[0]&&re==1&&(e.s=t.s),e)},w.multipliedBy=w.times=function(e,r){var n,s,t,o,c,i,f,u,l,a,N,E,x,D,T,d=this,_=d.c,P=(e=new p(e,r)).c;if(!_||!P||!_[0]||!P[0])return!d.s||!e.s||_&&!_[0]&&!P||P&&!P[0]&&!_?e.c=e.e=e.s=null:(e.s*=d.s,!_||!P?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(s=X(d.e/O)+X(e.e/O),e.s*=d.s,f=_.length,a=P.length,f<a&&(x=_,_=P,P=x,t=f,f=a,a=t),t=f+a,x=[];t--;x.push(0));for(D=V,T=K,t=a;--t>=0;){for(n=0,N=P[t]%T,E=P[t]/T|0,c=f,o=t+c;o>t;)u=_[--c]%T,l=_[c]/T|0,i=E*u+l*N,u=N*u+i%T*T+x[o]+n,n=(u/D|0)+(i/T|0)+E*l,x[o--]=u%D;x[o]=n}return n?++s:x.splice(0,1),ue(e,x,s)},w.negated=function(){var e=new p(this);return e.s=-e.s||null,e},w.plus=function(e,r){var n,s=this,t=s.s;if(e=new p(e,r),r=e.s,!t||!r)return new p(NaN);if(t!=r)return e.s=-r,s.minus(e);var o=s.e/O,c=e.e/O,i=s.c,f=e.c;if(!o||!c){if(!i||!f)return new p(t/0);if(!i[0]||!f[0])return f[0]?e:new p(i[0]?s:t*0)}if(o=X(o),c=X(c),i=i.slice(),t=o-c){for(t>0?(c=o,n=f):(t=-t,n=i),n.reverse();t--;n.push(0));n.reverse()}for(t=i.length,r=f.length,t-r<0&&(n=f,f=i,i=n,r=t),t=0;r;)t=(i[--r]=i[r]+f[r]+t)/V|0,i[r]=V===i[r]?0:i[r]%V;return t&&(i=[t].concat(i),++c),ue(e,i,c)},w.precision=w.sd=function(e,r){var n,s,t,o=this;if(e!=null&&e!==!!e)return v(e,1,R),r==null?r=$:v(r,0,8),G(new p(o),e,r);if(!(n=o.c))return null;if(t=n.length-1,s=t*O+1,t=n[t]){for(;t%10==0;t/=10,s--);for(t=n[0];t>=10;t/=10,s++);}return e&&o.e+1>s&&(s=o.e+1),s},w.shiftedBy=function(e){return v(e,-ge,ge),this.times("1e"+e)},w.squareRoot=w.sqrt=function(){var e,r,n,s,t,o=this,c=o.c,i=o.s,f=o.e,u=S+4,l=new p("0.5");if(i!==1||!c||!c[0])return new p(!i||i<0&&(!c||c[0])?NaN:c?o:1/0);if(i=Math.sqrt(+Q(o)),i==0||i==1/0?(r=q(c),(r.length+f)%2==0&&(r+="0"),i=Math.sqrt(+r),f=X((f+1)/2)-(f<0||f%2),i==1/0?r="5e"+f:(r=i.toExponential(),r=r.slice(0,r.indexOf("e")+1)+f),n=new p(r)):n=new p(i+""),n.c[0]){for(f=n.e,i=f+u,i<3&&(i=0);;)if(t=n,n=l.times(t.plus(g(o,t,u,1))),q(t.c).slice(0,i)===(r=q(n.c)).slice(0,i))if(n.e<f&&--i,r=r.slice(i-3,i+1),r=="9999"||!s&&r=="4999"){if(!s&&(G(t,t.e+S+2,0),t.times(t).eq(o))){n=t;break}u+=4,i+=4,s=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(G(n,n.e+S+2,1),e=!n.times(n).eq(o));break}}return G(n,n.e+S+1,$,e)},w.toExponential=function(e,r){return e!=null&&(v(e,0,R),e++),se(this,e,r,1)},w.toFixed=function(e,r){return e!=null&&(v(e,0,R),e=e+this.e+1),se(this,e,r)},w.toFormat=function(e,r,n){var s,t=this;if(n==null)e!=null&&r&&typeof r=="object"?(n=r,r=null):e&&typeof e=="object"?(n=e,e=r=null):n=oe;else if(typeof n!="object")throw Error(U+"Argument not an object: "+n);if(s=t.toFixed(e,r),t.c){var o,c=s.split("."),i=+n.groupSize,f=+n.secondaryGroupSize,u=n.groupSeparator||"",l=c[0],a=c[1],N=t.s<0,E=N?l.slice(1):l,x=E.length;if(f&&(o=i,i=f,f=o,x-=o),i>0&&x>0){for(o=x%i||i,l=E.substr(0,o);o<x;o+=i)l+=u+E.substr(o,i);f>0&&(l+=u+E.slice(o)),N&&(l="-"+l)}s=a?l+(n.decimalSeparator||"")+((f=+n.fractionGroupSize)?a.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):a):l}return(n.prefix||"")+s+(n.suffix||"")},w.toFraction=function(e){var r,n,s,t,o,c,i,f,u,l,a,N,E=this,x=E.c;if(e!=null&&(i=new p(e),!i.isInteger()&&(i.c||i.s!==1)||i.lt(M)))throw Error(U+"Argument "+(i.isInteger()?"out of range: ":"not an integer: ")+Q(i));if(!x)return new p(E);for(r=new p(M),u=n=new p(M),s=f=new p(M),N=q(x),o=r.e=N.length-E.e-1,r.c[0]=pe[(c=o%O)<0?O+c:c],e=!e||i.comparedTo(r)>0?o>0?r:u:i,c=H,H=1/0,i=new p(N),f.c[0]=0;l=g(i,r,0,1),t=n.plus(l.times(s)),t.comparedTo(e)!=1;)n=s,s=t,u=f.plus(l.times(t=u)),f=t,r=i.minus(l.times(t=r)),i=t;return t=g(e.minus(n),s,0,1),f=f.plus(t.times(u)),n=n.plus(t.times(s)),f.s=u.s=E.s,o=o*2,a=g(u,s,o,$).minus(E).abs().comparedTo(g(f,n,o,$).minus(E).abs())<1?[u,s]:[f,n],H=c,a},w.toNumber=function(){return+Q(this)},w.toPrecision=function(e,r){return e!=null&&v(e,1,R),se(this,e,r,2)},w.toString=function(e){var r,n=this,s=n.s,t=n.e;return t===null?s?(r="Infinity",s<0&&(r="-"+r)):r="NaN":(e==null?r=t<=C||t>=k?fe(q(n.c),t):Y(q(n.c),t,"0"):e===10&&le?(n=G(new p(n),S+t+1,$),r=Y(q(n.c),n.e,"0")):(v(e,2,b.length,"Base"),r=A(Y(q(n.c),t,"0"),10,e,s,!0)),s<0&&n.c[0]&&(r="-"+r)),r},w.valueOf=w.toJSON=function(){return Q(this)},w._isBigNumber=!0,w[Symbol.toStringTag]="BigNumber",w[Symbol.for("nodejs.util.inspect.custom")]=w.valueOf,h!=null&&p.set(h),p}function X(h){var g=h|0;return h>0||h===g?g:g-1}function q(h){for(var g,A,m=1,w=h.length,M=h[0]+"";m<w;){for(g=h[m++]+"",A=O-g.length;A--;g="0"+g);M+=g}for(w=M.length;M.charCodeAt(--w)===48;);return M.slice(0,w+1||1)}function ee(h,g){var A,m,w=h.c,M=g.c,S=h.s,$=g.s,C=h.e,k=g.e;if(!S||!$)return null;if(A=w&&!w[0],m=M&&!M[0],A||m)return A?m?0:-$:S;if(S!=$)return S;if(A=S<0,m=C==k,!w||!M)return m?0:!w^A?1:-1;if(!m)return C>k^A?1:-1;for($=(C=w.length)<(k=M.length)?C:k,S=0;S<$;S++)if(w[S]!=M[S])return w[S]>M[S]^A?1:-1;return C==k?0:C>k^A?1:-1}function v(h,g,A,m){if(h<g||h>A||h!==z(h))throw Error(U+(m||"Argument")+(typeof h=="number"?h<g||h>A?" out of range: ":" not an integer: ":" not a primitive number: ")+String(h))}function te(h){var g=h.c.length-1;return X(h.e/O)==g&&h.c[g]%2!=0}function fe(h,g){return(h.length>1?h.charAt(0)+"."+h.slice(1):h)+(g<0?"e":"e+")+g}function Y(h,g,A){var m,w;if(g<0){for(w=A+".";++g;w+=A);h=w+h}else if(m=h.length,++g>m){for(w=A,g-=m;--g;w+=A);h+=w}else g<m&&(h=h.slice(0,g)+"."+h.slice(g));return h}var I=Oe();I.set({DECIMAL_PLACES:30,EXPONENTIAL_AT:30,ROUNDING_MODE:1});function F(h){const g=I.isBigNumber(h)?h.toFixed():String(h);return/[a-z]/i.test(g)?"0":g}const xe=(h,g)=>F(new I(`${h}`).plus(`${g}`)),Se=(h,g)=>F(new I(`${h}`).minus(`${g}`)),_e=(h,g)=>F(new I(`${h}`).times(`${g}`));function Ae(h,g){return`${g}`=="0"?"0":F(new I(`${h}`).div(`${g}`))}function ve(h,g){return`${g}`=="0"?"0":F(new I(`${h}`).idiv(`${g}`))}const $e=(h,g)=>new I(`${h}`).eq(`${g}`),De=(h,g)=>new I(`${h}`).gt(`${g}`),Be=(h,g)=>new I(`${h}`).gte(`${g}`),Ie=(h,g)=>new I(`${h}`).lt(`${g}`),Me=(h,g)=>new I(`${h}`).lte(`${g}`);function me(h,g,A){const m=typeof g=="number"?new I(`${h}`).toFixed(g,A):new I(`${h}`).toFixed();return F(m)}function Te(h,g,A){const m=typeof g=="number"?new I(`${h}`).sd(g,A):new I(`${h}`).sd();return F(m)}const Ee=(h,g,A,m)=>F(new I(`${h}`).toFormat(g,A,m));function Re(h,g,A){let m=String(h);const w=typeof g=="number"?g:2,M=["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc","UDc","DDc"],S=Math.floor((me(m,0).length-1)/3);return m=Ae(m,10**(S*3)),m=typeof A=="number"?Ee(m,w,A):Ee(m,w),m==="0"?"0":`${m}${S>0?` ${M[S]}`:""}`}const Pe=(...h)=>F(I.sum(...h));function Le(h){let g=h;return g===void 0&&(g=32),me(F(I.random(g)),g)}const Ce=h=>F(new I(h).abs()),Ue=(...h)=>F(I.max(...h)),ke=(...h)=>F(I.min(...h));export{ke as A,Me as D,Le as E,Te as F,Re as N,Ce as S,_e as a,Ie as b,Ae as c,xe as d,Se as f,Be as g,$e as l,ve as p,me as s,Ee as u,Pe as v,De as x,Ue as y};
