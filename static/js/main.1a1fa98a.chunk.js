(this["webpackJsonpjul-on-sale-react"]=this["webpackJsonpjul-on-sale-react"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(20),i=n.n(s),r=(n(26),n(7)),o=n(8),u=n(9),l=n(11),h=n(10),d=(n(27),n(1)),m=["January","February","March","April","May","June","July","August","September","October","November","December"],j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={date:new Date},e}return Object(u.a)(n,[{key:"formatDate",value:function(){return"For the day of "+m[this.state.date.getMonth()]+" "+this.state.date.getDate()+", "+this.state.date.getFullYear()}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"DateHeader",children:Object(d.jsx)("p",{children:this.formatDate()})})}}]),n}(c.a.Component),b=(n(29),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.status?Object(d.jsxs)("div",{className:"loader",children:[Object(d.jsx)("div",{}),Object(d.jsx)("h4",{children:"\u05de\u05d1\u05d9\u05d0 \u05e4\u05e8\u05d9\u05d8\u05d9\u05dd..."})]}):null}}]),n}(c.a.Component)),p=(n(30),n(14)),f=n(2),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={shouldShowSpinner:!0,items:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){0===this.state.items.length?this.fetchData():this.buildCategories(this.state.items)}},{key:"fetchData",value:function(){var e=this;fetch("https://jul-on-sale.herokuapp.com/category/"+this.props.categoryName).then((function(e){return e.json()})).then((function(t){e.setState(Object(r.a)(Object(r.a)({},e.state),{},{shouldShowSpinner:!1,items:t.message})),e.buildItemsForCategory(t.message)})).catch((function(t){e.setState(Object(r.a)(Object(r.a)({},e.state),{},{shouldShowSpinner:!1}))}))}},{key:"buildItemsForCategory",value:function(e){for(var t=document.querySelector("#mainDiv"),n=0;n<e.length;n++){var a=e[n],c=document.createElement("div"),s=document.createElement("h3"),i=document.createElement("h2"),r=document.createElement("a"),o=document.createElement("img");s.innerHTML=a.name,o.src=a.image,r.href=a.link,i.innerHTML=a.price,o.setAttribute("class","item"),r.innerHTML="<img src="+o.src+' class="item" alt='+a.name+" title="+a.name+">",c.appendChild(s),c.appendChild(r),c.appendChild(i),c.setAttribute("class","container"),t.appendChild(c)}}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{className:"App-header",children:["What's On Sale @ Jul ",this.props.categoryName]}),Object(d.jsx)(j,{}),Object(d.jsx)(b,{status:this.state.shouldShowSpinner}),Object(d.jsx)("div",{id:"mainDiv"})]})}}]),n}(c.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={shouldShowSpinner:!0,categories:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){0===this.state.categories.length?this.fetchData():this.buildCategories(this.state.categories)}},{key:"fetchData",value:function(){var e=this;fetch("https://jul-on-sale.herokuapp.com/jul").then((function(e){return e.json()})).then((function(t){e.setState(Object(r.a)(Object(r.a)({},e.state),{},{shouldShowSpinner:!1,categories:t.message})),e.buildCategories(t.message)})).catch((function(t){e.setState(Object(r.a)(Object(r.a)({},e.state),{},{shouldShowSpinner:!1}))}))}},{key:"buildCategories",value:function(e){for(var t=document.querySelector(".categories"),n=0;n<e.length;n++){var a=e[n],c=document.createElement("div"),s=document.createElement("h3"),i=document.createElement("a"),r=document.createElement("img");s.innerHTML=a.name,r.src="https://github.com/TomerPacific/julOnSale/blob/master/assets/"+a.image+".png?raw=true",r.setAttribute("class","category"),i.innerHTML="<img src="+r.src+' class="category" alt='+a.name+" title="+a.name+">",c.appendChild(s),c.appendChild(i),c.setAttribute("class","container"),t.appendChild(c)}}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:"What's On Sale @ Jul"}),Object(d.jsx)(j,{}),Object(d.jsx)(b,{status:this.state.shouldShowSpinner}),Object(d.jsx)("div",{className:"categories",children:Object(d.jsx)(p.a,{children:Object(d.jsx)(f.a,{path:"categories/:image",componet:O})})})]})}}]),n}(c.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},S=function(){var e=document.title;window.addEventListener("blur",(function(e){document.title=" \u2764\ufe0f U"})),window.addEventListener("focus",(function(t){document.title=e}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)(g,{})})}),document.getElementById("root")),v(),S()}},[[36,1,2]]]);
//# sourceMappingURL=main.1a1fa98a.chunk.js.map