(window.webpackJsonpbookfinder=window.webpackJsonpbookfinder||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),l=(n(19),n(20),n(10)),c=n.n(l),u=n(6),s=n(27),m=n(29),h=function(e){var t=e.imgSrc,n=e.title,a=e.author,r=e.publisher,i=e.link;return o.a.createElement(s.a,{bg:"light"},o.a.createElement(s.a.Img,{variant:"top",src:t,style:{height:"100%",width:"100%",objectFit:"contain"}}),o.a.createElement(s.a.Body,null,o.a.createElement(s.a.Title,null,n),o.a.createElement(s.a.Text,null,"By: ".concat(a),o.a.createElement("br",null),"Published by: ".concat(r)),o.a.createElement(m.a,{variant:"success",href:i,target:"_blank"},"See this book")))},f=function(e){return o.a.createElement("div",{className:"m-5",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gridGap:"30px",justifyContent:"center"}},e.children)},g=n(26),d=n(28);var b=function(e){var t=e.setBooks,n=e.setNoResult,r=Object(a.useState)(""),i=Object(u.a)(r,2),l=i[0],c=i[1],s=Object(a.useState)(!1),h=Object(u.a)(s,2),f=h[0],b=h[1];Object(a.useEffect)((function(){0===l.trim().length&&(n(!1),t([]))}),[l,n,t]);var p=function(){var e,a;b(!0),(e=1e4,a=fetch("https://www.googleapis.com/books/v1/volumes?q={".concat(l,"}&langRestrict=en&orderBy=newest")),new Promise((function(t,n){setTimeout((function(){n(new Error("timeout"))}),e),a.then(t,n)}))).then((function(e){return e.json()})).then((function(e){t(e.items||[]),n(0===e.totalItems)})).catch((function(e){console.error(e),"timeout"===e.message?alert("Search took too much time..."):alert("Impossible to get the books from Google!"),c("")})).finally((function(){return b(!1)}))};return o.a.createElement(g.a,{className:"mb-3",style:{padding:"0 20vw"}},o.a.createElement(d.a,{placeholder:"Search for books...","aria-label":"Book search query","aria-describedby":"basic-addon2",type:"search",value:l,onChange:function(e){return c(e.target.value)},onKeyUp:function(e){return 0!==l.trim().length&&"Enter"===e.key&&p()}}),o.a.createElement(g.a.Append,null,o.a.createElement(m.a,{variant:"info",onClick:p,disabled:0===l.trim().length},f?"Loading...":"Search")))},p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),l=Object(u.a)(i,2),c=l[0],s=l[1];return o.a.createElement("div",{id:"content"},o.a.createElement("nav",{className:"text-center pt-3"},o.a.createElement("img",{src:"logo.png",alt:"logo",width:"10%"}),o.a.createElement("h2",{className:"text-uppercase mb-3"},"Book Finder"),o.a.createElement(b,{setBooks:r,setNoResult:s})),c?o.a.createElement("p",{style:{textAlign:"center"}},"Sorry, no result. Try another search."):o.a.createElement(f,null,n.map((function(e,t){return o.a.createElement(h,{key:t,imgSrc:e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,author:e.volumeInfo.authors?e.volumeInfo.authors.join(", "):"No author",publisher:e.volumeInfo.publisher,link:e.volumeInfo.infoLink})}))))};var v=function(){return o.a.createElement("div",{id:"container"},o.a.createElement(p,null),o.a.createElement("footer",null,o.a.createElement("div",{className:"text-center"},"\xa9 2019 \u2013 Guillaume Comte \u2013 All rights reserved \u2013 Find me on github"," ",o.a.createElement("a",{href:"https://github.com/guigui64"},"@guigui64")," \u2013 Icons made by"," ",o.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",o.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))),o.a.createElement(c.a,{href:"https://github.com/guigui64/bookfinder"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.13dd2700.chunk.js.map