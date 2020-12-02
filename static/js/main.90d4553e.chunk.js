(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{16:function(e,t,a){e.exports={container:"Cards_container__yUOSJ",infected:"Cards_infected__21Hif",active:"Cards_active__2Befx",recovered:"Cards_recovered__2Sk_4",deaths:"Cards_deaths__qk5q1"}},208:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(0),c=a.n(n),o=a(70),s=a.n(o),i=a(6),u=a.n(i),d=a(11),l=a(71),p=a(72),f=a(83),v=a(82),b=a(31),h=a.n(b),j=a(32),m=a.n(j),x="https://covid19.mathdro.id/api",O=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,r,n,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x,t&&(a="".concat(x,"/countries/").concat(t)),e.prev=2,e.next=5,m.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,s=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,console.log("<< Daily Data  >>",a),e.abrupt("return",a.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(x,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=a.p+"static/media/image.9e5d4fc7.png",y=a(30),k=a(43),w=a(73),D=a.n(w),N=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,i=Object(n.useState)({}),l=Object(y.a)(i,2),p=l[0],f=l[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=a?Object(r.jsx)(k.Bar,{data:{labels:["Confrimed","Active","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(255, 0, 0, 0.5)","rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(148, 144, 144, 0.5)"],data:[a.value,a.value-c.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null,b=p[0]?Object(r.jsx)(k.Line,{data:{labels:p.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Confrimed",borderColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:p.map((function(e){return e.confirmed-e.recovered})),label:"Active",borderColor:"red",backgroundColor:"rgba(0, 0, 255, 0.5)",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(148, 144, 144, 0.5)",fill:!0},{data:p.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5))",fill:!0}]}}):null;return Object(r.jsx)("div",{className:D.a.container,children:s?v:b})},S=a(231),A=a(229),U=a(74),I=a.n(U),V=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(y.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)(S.a,{className:I.a.formControl,children:Object(r.jsxs)(A.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(r.jsx)("option",{value:"",children:"Global"}),o.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},t)}))]})})},B=a(228),R=a(226),T=a(230),L=a(227),E=a(79),G=a.n(E),J=a(80),M=a.n(J),P=a(81),q=a.n(P),Q=function(e){var t=e.className,a=e.cardTitle,n=e.value,c=e.lastUpdate,o=e.cardSubtitle;return Object(r.jsx)(R.a,{item:!0,xs:12,md:2,component:T.a,className:M()(q.a.card,t),children:Object(r.jsxs)(L.a,{children:[Object(r.jsx)(B.a,{color:"textSecondary",gutterBottom:!0,children:a}),Object(r.jsx)(B.a,{variant:"h5",component:"h2",children:Object(r.jsx)(G.a,{start:0,end:n,duration:2.75,separator:","})}),Object(r.jsx)(B.a,{color:"textSecondary",children:new Date(c).toLocaleString()}),Object(r.jsx)(B.a,{variant:"body2",component:"p",children:o})]})})},H=a(16),K=a.n(H),z=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?Object(r.jsxs)("div",{className:K.a.container,children:[Object(r.jsx)(B.a,{gutterBottom:!0,variant:"h4",component:"h2"}),Object(r.jsxs)(R.a,{container:!0,spacing:2,justify:"center",children:[Object(r.jsx)(Q,{className:K.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:o,cardSubtitle:"Number of confirmed cases from COVID-19."}),Object(r.jsx)(Q,{className:K.a.active,cardTitle:"Active",value:a.value-n.value,lastUpdate:o,cardSubtitle:"Number of active cases from COVID-19."}),Object(r.jsx)(Q,{className:K.a.recovered,cardTitle:"Recovered",value:n.value,lastUpdate:o,cardSubtitle:"Number of recoveries from COVID-19."}),Object(r.jsx)(Q,{className:K.a.deaths,cardTitle:"Deaths",value:c.value,lastUpdate:o,cardSubtitle:"Number of deaths caused by COVID-19."})]})]}):"Loading..."},F=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(d.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(r.jsxs)("div",{className:h.a.container,children:[Object(r.jsx)("img",{className:h.a.image,src:_,alt:"COVID-19"}),Object(r.jsx)(z,{data:t}),Object(r.jsx)(V,{handleCountryChange:this.handleCountryChange}),Object(r.jsx)(N,{data:t,country:a}),Object(r.jsxs)("h5",{className:h.a.copyright,children:[Object(r.jsx)("p",{children:"\xa9 2020 All Rights Reserved | Terms and Conditions"}),Object(r.jsx)("p",{children:"Made by \ud83d\udc96 Sandeep Kumar Misra \ud83d\udc96"})]})]})}}]),a}(c.a.Component);s.a.render(Object(r.jsx)(F,{}),document.getElementById("root"))},31:function(e,t,a){e.exports={container:"App_container__DkDQr",image:"App_image__3a01i",shake:"App_shake__2mocQ",copyright:"App_copyright__2VLct"}},73:function(e,t,a){e.exports={container:"Chart_container__-Rnod"}},74:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1G9lG"}},81:function(e,t,a){e.exports={card:"Card_card__1BvPE"}}},[[208,1,2]]]);
//# sourceMappingURL=main.90d4553e.chunk.js.map