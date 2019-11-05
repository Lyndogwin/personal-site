import{_ as t,a as e,b as n,c as o,i as l,d as a,S as i,s as c,e as r,t as u,f as s,g as p,h,j as f,l as d,k as _,p as k,q as v,n as m,m as g,L as y,O as b,P as x,J as T,M as E,Q as N,R as P,T as w,N as I}from"./index.08d0bf62.js";function U(t,e,n){var o=Object.create(t);return o.c_choice=e[n],o}function C(t){var e,n,o,l=t.c_choice.text+"";return{c:function(){e=r("option"),n=u(l),o=s(),this.h()},l:function(t){e=p(t,"OPTION",{selected:!0,value:!0},!1);var a=h(e);n=f(a,l),o=d(a),a.forEach(_),this.h()},h:function(){e.selected="selected",e.__value="\n\t\t\t\t"+t.c_choice.text+"\n\t\t\t",e.value=e.__value},m:function(t,l){k(t,e,l),v(e,n),v(e,o)},p:m,d:function(t){t&&_(e)}}}function O(t){for(var e,n,o,l,a,i,c,u,f,P,w,I,O,S,j,R=!1,q=!1,A=!1,B=t.colors,L=[],M=0;M<B.length;M+=1)L[M]=C(U(t,B,M));function D(){R=!0,t.input1_input_handler.call(i)}function F(){q=!0,t.input2_input_handler.call(u)}function G(){A=!0,t.input4_input_handler.call(I)}return{c:function(){e=r("form"),n=r("input"),o=s(),l=r("select");for(var t=0;t<L.length;t+=1)L[t].c();a=s(),i=r("input"),c=s(),u=r("input"),f=s(),P=r("input"),w=s(),I=r("input"),O=s(),S=r("input"),this.h()},l:function(t){e=p(t,"FORM",{class:!0},!1);var r=h(e);n=p(r,"INPUT",{type:!0,placeholder:!0},!1),h(n).forEach(_),o=d(r),l=p(r,"SELECT",{type:!0,class:!0},!1);for(var s=h(l),k=0;k<L.length;k+=1)L[k].l(s);s.forEach(_),a=d(r),i=p(r,"INPUT",{type:!0,placeholder:!0},!1),h(i).forEach(_),c=d(r),u=p(r,"INPUT",{type:!0,placeholder:!0},!1),h(u).forEach(_),f=d(r),P=p(r,"INPUT",{type:!0,placeholder:!0},!1),h(P).forEach(_),w=d(r),I=p(r,"INPUT",{type:!0,placeholder:!0},!1),h(I).forEach(_),O=d(r),S=p(r,"INPUT",{type:!0,class:!0,value:!0},!1),h(S).forEach(_),r.forEach(_),this.h()},h:function(){g(n,"type","text"),g(n,"placeholder","Token Name"),void 0===t.token.color&&N(function(){return t.select_change_handler.call(l)}),g(l,"type","text"),g(l,"class","form-group bg-white svelte-1tlqvlh"),g(i,"type","number"),g(i,"placeholder","Power"),g(u,"type","number"),g(u,"placeholder","Toughnes"),g(P,"type","text"),g(P,"placeholder","Abilities"),g(I,"type","number"),g(I,"placeholder","Copies"),g(S,"type","submit"),g(S,"class","btn btn-primary"),S.value="Add Token",g(e,"class","grid-3 form-container form-group"),j=[y(n,"input",t.input0_input_handler),y(l,"change",t.select_change_handler),y(i,"input",D),y(u,"input",F),y(P,"input",t.input3_input_handler),y(I,"input",G),y(e,"submit",t.onSubmit)]},m:function(r,s){k(r,e,s),v(e,n),b(n,t.token.name),v(e,o),v(e,l);for(var p=0;p<L.length;p+=1)L[p].m(l,null);x(l,t.token.color),v(e,a),v(e,i),b(i,t.token.power),v(e,c),v(e,u),b(u,t.token.tough),v(e,f),v(e,P),b(P,t.token.ability),v(e,w),v(e,I),b(I,t.copies),v(e,O),v(e,S)},p:function(t,e){if(t.token&&n.value!==e.token.name&&b(n,e.token.name),t.colors){var o;for(B=e.colors,o=0;o<B.length;o+=1){var a=U(e,B,o);L[o]?L[o].p(t,a):(L[o]=C(a),L[o].c(),L[o].m(l,null))}for(;o<L.length;o+=1)L[o].d(1);L.length=B.length}t.token&&x(l,e.token.color),!R&&t.token&&b(i,e.token.power),R=!1,!q&&t.token&&b(u,e.token.tough),q=!1,t.token&&P.value!==e.token.ability&&b(P,e.token.ability),!A&&t.copies&&b(I,e.copies),A=!1},i:m,o:m,d:function(t){t&&_(e),T(L,t),E(j)}}}function S(t,e,n){var o=I(),l=1,a={name:"",color:"Colorless",power:null,tough:null,ability:"",tapped:!1,id:0},i=[{id:1,text:"Black"},{id:2,text:"White"},{id:3,text:"Red"},{id:4,text:"Green"},{id:5,text:"Blue"},{id:6,text:"Colorless"}];return{copies:l,token:a,onSubmit:function(t){t.preventDefault(),o("addtoken",[a,l]),n("token",a={name:"",color:"Colorless",power:null,tough:null,ability:"",tapped:!1,id:0}),n("copies",l=1)},colors:i,input0_input_handler:function(){a.name=this.value,n("token",a),n("colors",i)},select_change_handler:function(){a.color=P(this),n("token",a),n("colors",i)},input1_input_handler:function(){a.power=w(this.value),n("token",a),n("colors",i)},input2_input_handler:function(){a.tough=w(this.value),n("token",a),n("colors",i)},input3_input_handler:function(){a.ability=this.value,n("token",a),n("colors",i)},input4_input_handler:function(){l=w(this.value),n("copies",l)}}}export default(function(r){function u(t){var i;return e(this,u),i=n(this,o(u).call(this)),l(a(i),t,S,O,c,[]),i}return t(u,i),u}());