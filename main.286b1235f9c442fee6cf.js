(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1/J2":function(e,t,i){},"6pIy":function(e,t,i){e.exports=i.p+"assets/images/contact-form/yulia.png"},"9+Is":function(e,t,i){},"91Fi":function(e,t){},BIWT:function(e,t,i){var n=i("mp5j");e.exports=(n.default||n).template({1:function(e,t,i,n,s){return'<li class="page-list__item digit">\n    '+e.escapeExpression(e.lambda(t,t))+"\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s){var a,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="page-list__item arrow left">\n\n</li>\n'+(null!=(a=l(i,"each").call(null!=t?t:e.nullContext||{},null!=t?l(t,"pageItems"):t,{name:"each",hash:{},fn:e.program(1,s,0),inverse:e.noop,data:s,loc:{start:{line:4,column:0},end:{line:8,column:9}}}))?a:"")+'<li class="page-list__item arrow right">\n\n</li>'},useData:!0})},E5Mm:function(e,t,i){},EJcf:function(e,t,i){e.exports=i.p+"assets/images/contact-form/sergey.png"},F50H:function(e,t,i){e.exports=i.p+"assets/images/contact-form/timur.png"},HoEU:function(e,t,i){},J2fq:function(e,t,i){e.exports=i.p+"assets/images/contact-form/andrey.png"},JNau:function(e,t,i){var n=i("mp5j");e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s){var a,l=null!=t?t:e.nullContext||{},o=e.hooks.helperMissing,r="function",c=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="filmsList_item" data-id="'+c(typeof(a=null!=(a=d(i,"id")||(null!=t?d(t,"id"):t))?a:o)===r?a.call(l,{name:"id",hash:{},data:s,loc:{start:{line:1,column:36},end:{line:1,column:42}}}):a)+'">\n    <img clas="filmsList-item-img" src="'+c(typeof(a=null!=(a=d(i,"poster_path")||(null!=t?d(t,"poster_path"):t))?a:o)===r?a.call(l,{name:"poster_path",hash:{},data:s,loc:{start:{line:2,column:40},end:{line:2,column:55}}}):a)+'" width="272" height="406" alt="first"\n    onerror="this.src = \'https://i.gifer.com/origin/0c/0c2924e66a08f3a42e9f08db5e8a49de_w200.gif\'">\n\n    <h2 class="filmsList_item-title">'+c(typeof(a=null!=(a=d(i,"title")||(null!=t?d(t,"title"):t))?a:o)===r?a.call(l,{name:"title",hash:{},data:s,loc:{start:{line:5,column:37},end:{line:5,column:46}}}):a)+'</h2>\n    <ul class="filmsList_decsription-wrapper">\n        <li class="filmsList_description-item">'+c(typeof(a=null!=(a=d(i,"genre_ids")||(null!=t?d(t,"genre_ids"):t))?a:o)===r?a.call(l,{name:"genre_ids",hash:{},data:s,loc:{start:{line:7,column:47},end:{line:7,column:60}}}):a)+'</li>\n        <li class="filmsList_description-item"> | </li>\n        <li class="filmsList_description-item">'+c(typeof(a=null!=(a=d(i,"release_date")||(null!=t?d(t,"release_date"):t))?a:o)===r?a.call(l,{name:"release_date",hash:{},data:s,loc:{start:{line:9,column:47},end:{line:9,column:63}}}):a)+' </li>\n        <li class="filmsList_item-popular">'+c(typeof(a=null!=(a=d(i,"popularity")||(null!=t?d(t,"popularity"):t))?a:o)===r?a.call(l,{name:"popularity",hash:{},data:s,loc:{start:{line:10,column:43},end:{line:10,column:57}}}):a)+"</li>\n    </ul>\n</li>"},useData:!0})},MnJ7:function(e,t,i){e.exports=i.p+"assets/images/contact-form/bogdan.png"},NSHr:function(e,t,i){},QfWi:function(e,t,i){"use strict";i.r(t);i("9+Is");var n=i("JNau"),s=i.n(n),a={mainSection:document.querySelector(".main_section"),movieList:document.querySelector(".js_filmsList"),pagination:document.querySelector(".page-list"),lastPage:document.querySelector(".last-page"),singleMoviePreview:document.querySelector(".singleMoviePreview"),headerMain:document.querySelector(".js_header"),headerList:document.querySelector(".js_header_list")},l=i("umIF"),o=i.n(l),r=(i("oo/q"),{showMovieDetails(e){p.makePreLoader(),function(e){p.fetchId(e).then(e=>{a.singleMoviePreview.innerHTML=o()(e);let t=function(e){let t=JSON.parse(localStorage.getItem("watched-films"));if(!t)return null;let i=t.find(t=>t.id===e.id);return console.log(i),i}(e);var i;t?function(e){let t=document.querySelector(".button_addwatched");t.innerText="Delete",t.addEventListener("click",()=>{d(e)})}(e):(i=e,document.querySelector(".button_addwatched").addEventListener("click",()=>{c(i)})),t=function(e){let t=JSON.parse(localStorage.getItem("queue-films"));if(!t)return null;let i=t.find(t=>t.id===e.id);return console.log(i),i}(e),t?function(e){let t=document.querySelector(".button_addqueue");t.innerText="Delete",t.addEventListener("click",()=>{m(e)})}(e):function(e){document.querySelector(".button_addqueue").addEventListener("click",()=>{u(e)})}(e)})}(e),new Promise(e=>{setTimeout(()=>{e("ok")},1200)}).then(e=>{p.killPreLoader()})}});function c(e){let t=JSON.parse(localStorage.getItem("watched-films"));t||(t=[]),t.push(e),localStorage.setItem("watched-films",JSON.stringify(t));let i=document.querySelector(".button_addwatched");i.innerText="Delete",i.classList.remove("button_active"),i.classList.remove("active"),i.classList.add("button_delete"),i.addEventListener("click",()=>{d(e)})}function d(e){let t=JSON.parse(localStorage.getItem("watched-films")).filter(t=>t.id!==e.id);localStorage.setItem("watched-films",JSON.stringify(t));let i=document.querySelector(".button_addwatched");i.innerText="add in watched",i.classList.remove("button_delete"),i.classList.add("active"),i.addEventListener("click",()=>{c(e)})}function u(e){let t=JSON.parse(localStorage.getItem("queue-films"));t||(t=[]),t.push(e),localStorage.setItem("queue-films",JSON.stringify(t));let i=document.querySelector(".button_addqueue");i.innerText="Delete",i.classList.remove("active"),i.classList.add("button_delete"),i.addEventListener("click",()=>{m(e)})}function m(e){let t=JSON.parse(localStorage.getItem("queue-films")).filter(t=>t.id!==e.id);localStorage.setItem("queue-films",JSON.stringify(t));let i=document.querySelector(".button_addqueue");i.innerText="add in queue",i.classList.remove("button_delete"),i.classList.add("active"),i.addEventListener("click",()=>{u(e)})}var p={baseURL:"https://api.themoviedb.org/3",key:"?api_key=20f20d883cac0d777d3eec349954fec5",imagePath:"https://image.tmdb.org/t/p/w500/",searchPoint:"/search/movie",popularFilms:"/discover/movie",pupularityFilter:"&sort_by=popularity.desc",page:1,maxPage:0,four:4,query:"blood",fetchPopularMovies(){this.makePreLoader(),setTimeout(()=>{const e=this.fetchGenres(),t=this.fetchPopular();return Promise.all([e,t]).then(e=>{const t=e[0].genres,i=[...e[1].results];i.map(e=>{null===e.poster_path?e.poster_path="https://i.pinimg.com/originals/c9/8c/78/c98c78f972e620b4d70d59bc53dc9644.gif":e.poster_path="https://image.tmdb.org/t/p/w500"+e.poster_path,e.popularity=e.popularity.toFixed(1),e.title.length>35&&(e.title=e.title.slice(0,35)+"..."),e.release_date=e.release_date.slice(0,4),e.genre_ids=e.genre_ids.map(e=>t.find(t=>{if(t.id===e)return t.id}).name),e.genre_ids.length>2&&(e.genre_ids=e.genre_ids.slice(0,2)),e.genre_ids=e.genre_ids.slice(",").join(", ")}),this.maxPage=e[1].total_pages,console.log(i);const n=i.reduce((e,t)=>e+=s()(t),"");a.movieList.innerHTML=n,a.movieList.addEventListener("click",this.handleListItemClick),this.showAdvert(),this.killPreLoader()})},1200)},fetchMovies(){this.makePreLoader(),setTimeout(()=>{const e=this.fetchGenres(),t=this.fetchFilms();return Promise.all([e,t]).then(e=>{const t=e[0].genres,i=[...e[1].results];i.map(e=>{null===e.poster_path?e.poster_path="https://i.pinimg.com/originals/c9/8c/78/c98c78f972e620b4d70d59bc53dc9644.gif":e.poster_path="https://image.tmdb.org/t/p/w500"+e.poster_path,e.popularity=e.popularity.toFixed(1),e.title.length>35&&(e.title=e.title.slice(0,35)+"..."),e.release_date=e.release_date.slice(0,4),e.genre_ids=e.genre_ids.map(e=>t.find(t=>{if(t.id===e)return t.id}).name),e.genre_ids.length>2&&(e.genre_ids=e.genre_ids.slice(0,2)),e.genre_ids=e.genre_ids.slice(",").join(", ")}),this.maxPage=e[1].total_pages,a.movieList.addEventListener("click",this.handleListItemClick);const n=i.reduce((e,t)=>e+=s()(t),"");var l;l=n,a.movieList.innerHTML=l,this.showAdvert(),this.killPreLoader()})},1500)},fetchFilms(){const e=this.baseURL+this.searchPoint+this.key+`&query='${this.query}'`+`&page=${this.page}`;return this.fetchRequest(e).then(e=>e).catch(e=>{console.log(e)})},fetchPopular(){const e="https://api.themoviedb.org/3/discover/movie?api_key=20f20d883cac0d777d3eec349954fec5&sort_by=popularity.desc&year=2020"+this.page;return this.fetchRequest(e)},fetchRequest:e=>fetch(e).then(e=>e.json()),fetchId(e){const t=`${this.baseURL}/movie/${e}${this.key}&language=en-US`;return fetch(t).then(e=>e.json()).then(e=>(null===e.poster_path?e.poster_path="https://i.pinimg.com/originals/c9/8c/78/c98c78f972e620b4d70d59bc53dc9644.gif":e.poster_path="https://image.tmdb.org/t/p/w500"+e.poster_path,e.popularity=e.popularity.toFixed(1),e.release_date=e.release_date.slice(0,4),this.getExactGenres(e)))},fetchGenres(){const e=`${this.baseURL}/genre/movie/list${this.key}&language=en-US`;return fetch(e).then(e=>e.json())},get searchQuery(){return this.query},set searchQuery(e){this.query=e},incrementPage(){this.page+=1},decrementPage(){this.page-=1},resetPage(){this.page=1},sortGeneres(e){this.fetchFilms().then(e=>e.results[1].genre_ids).then(e=>{this.fetchGenres().then(t=>{e.reduce((e,t)=>{const i=movie.filteredGenres(genresArr,t);return e.push(i[0].name),e},[])})})},filteredGenres:(e,t)=>e.filter(e=>e.id===t),getExactGenres(e){const t=e.genres,i=e,n=t.reduce((e,i,n)=>(t.length===n+1?e.push(i.name):e.push(i.name+", "),e),[]);return i.genres=n,i},handleListItemClick(e){if(e.target===e.currentTarget)return;let t;t="LI"!==e.target.nodeName?e.target.closest("li").dataset.id:e.target.closest("ul").closest("li").dataset.id,a.mainSection.classList.add("invisible"),a.singleMoviePreview.classList.remove("invisible"),r.showMovieDetails(t),document.querySelector(".jsLiblist").classList.add("invisible"),M()},showAdvert(){if(window.innerWidth>=1024&&[...document.querySelector(".js_filmsList").children].length%3!=0){const e='\n        <li class="filmsList_item" data-id="12312312344223423423423">\n<img clas="filmsList-item-img" src="https://i.pinimg.com/474x/4b/eb/65/4beb659d6cfa53ff9af80c298f6156a0.jpg" width="272" height="406" alt="first">\n\n<h2 class="filmsList_item-title">Sponsored content</h2>\n<ul class="filmsList_decsription-wrapper">\n    <li class="filmsList_description-item">by BOOTCAMP 19</li>\n    <li class="filmsList_description-item">2020 </li>\n    <li class="filmsList_item-popular">24.04</li>\n</ul>\n</li>\n        ',t=document.createElement("li");t.classList.add("filmsList_item"),t.innerHTML=e,document.querySelector(".js_filmsList").appendChild(t)}},makePreLoader(){const e=document.createElement("div");e.classList.add("preLoader"),document.querySelector("body").appendChild(e)},killPreLoader(){document.querySelector(".preLoader").remove()}};var g=i("BIWT"),h=i.n(g),f=i("yD95"),_=i.n(f),v=i("xRkT"),y=i.n(v),L=(i("NSHr"),(e="none")=>{p.fetchMovies;function t(e){const t=e.target;if(!t.innerHTML.includes("...")&&t!==e.currentTarget){if(Number(t.innerHTML)>=p.maxPage-3&&Number(t.innerHTML)<=p.maxPage&&(p.page=Number(t.innerHTML),p.page>=p.maxPage-3&&p.page<=p.maxPage)){console.log(t.innerHTML),console.log("kachiiiiiinggg");const e={pageItems:Array(p.maxPage).fill().map((e,t)=>t+1).slice(-5)},i=y()(e);return console.log("markUp"),p.fetchMovies(),s(i),void a.pagination.querySelectorAll("li").forEach(e=>{e.innerHTML==p.page&&e.classList.add("page-list__item-active")})}if(t!==e.currentTarget.firstChild){if(t===e.currentTarget.lastChild){if(p.page===p.maxPage)return;if(console.log("end button"),p.page>=p.maxPage-3&&p.page<=p.maxPage){console.log("seems like the end");const e={pageItems:Array(p.maxPage).fill().map((e,t)=>t+1).slice(-5)},t=y()(e);return p.incrementPage(),s(t),a.pagination.querySelectorAll("li").forEach(e=>{e.innerHTML==p.page&&e.classList.add("page-list__item-active")}),void p.fetchMovies()}return p.page<5?(p.incrementPage(),l(),a.pagination.querySelectorAll("li").forEach(e=>{Number(e.innerHTML)===p.page&&e.classList.add("page-list__item-active")})):(p.incrementPage(),n()),void p.fetchMovies()}if(1===Number(t.innerHTML))return console.log("hitting first again"),p.page=1,console.log(p.page),p.fetchMovies(),void i();l(),t.classList.add("page-list__item-active"),p.page=Number(t.innerHTML),p.fetchMovies(),n()}else{if(1===p.page)return void console.log("already at first page");if(p.page===p.maxPage){const e={pageItems:Array(p.maxPage).fill().map((e,t)=>t+1).slice(-5)},t=y()(e);return p.decrementPage(),s(t),a.pagination.querySelectorAll("li").forEach(e=>{e.innerHTML==p.page&&e.classList.add("page-list__item-active")}),void p.fetchMovies()}if(p.page>5)return p.decrementPage(),p.fetchMovies(),void n();{Number(t.innerHTML<=5)&&console.log("kachiiiiing"),p.decrementPage(),p.fetchMovies(),console.log(p.page),console.log("below 5");const e={pageItems:Array(p.maxPage).fill().map((e,t)=>t+1).slice(0,5)};s(h()(e));a.pagination.querySelectorAll("li");l(),a.pagination.querySelectorAll("li").forEach(e=>{Number(e.innerHTML)===p.page&&e.classList.add("page-list__item-active")})}}}}function i(){if(p.page<5){console.log("below 5");const e={pageItems:Array(p.maxPage).fill().map((e,t)=>t+1).slice(0,5)};s(h()(e)),a.pagination.querySelectorAll("li").forEach(e=>{1==e.innerHTML&&e.classList.add("page-list__item-active")})}}function n(){if(p.page>=5){console.log("5 OR ABOVE");Array(p.maxPage).fill().map((e,t)=>t+1);const e=[p.page-2,p.page-1,p.page,p.page+1,p.page+2],t={totalPages:p.maxPage,pageItems:e};s(_()(t)),a.pagination.children[5].classList.add("page-list__item-active")}}function s(e){a.pagination.innerHTML=e}function l(){a.pagination.querySelectorAll("li").forEach(e=>{e.classList.remove("page-list__item-active")})}"pop"!==e&&p.fetchFilms().then(e=>{if(!e.results.length)return a.movieList.innerHTML="<h1>NO SHIT SHERLOK</h1>",void(a.pagination.innerHTML="");p.maxPage>1&&(p.fetchMovies(),console.log("start pagination"),i(),a.pagination.addEventListener("click",t))})});function b(){let e=JSON.parse(localStorage.getItem("watched-films")),t="";console.log("ser -> click buttonWatched"),document.querySelector(".button_queue").classList.remove("active"),document.querySelector(".button_watched").classList.remove("active"),document.querySelector(".button_watched").classList.add("active"),e.forEach(e=>{t+=s()(e)}),document.querySelector(".libList").innerHTML=t}function S(){const e=JSON.parse(localStorage.getItem("queue-films"));console.log("ser -> click buttonQueue"),document.querySelector(".button_watched").classList.remove("active"),document.querySelector(".button_queue").classList.remove("active"),document.querySelector(".button_queue").classList.add("active");let t="";e.forEach(e=>{t+=s()(e)}),document.querySelector(".jsLiblist").innerHTML=t,console.log("queue function done"),document.querySelector(".JsmovieListWrapper").classList.add("invisible"),document.querySelector(".jsLiblist").classList.remove("invisible"),document.querySelector(".singleMoviePreview").classList.add("invisible"),document.querySelector(".jsLiblist").addEventListener("click",p.handleListItemClick)}a.headerMain.insertAdjacentHTML("beforeend",'\n<div class="header__main container">\n  <div href="#" class="header__logo js_header_logo">\n  <svg \n      class="header__logo-svg"\n      xmlns="http://www.w3.org/2000/svg" \n      width="24" height="24" \n      viewBox="0 0 24 24" \n      fill="none" stroke="#fff" \n      stroke-width="2" \n      stroke-linecap="round" \n      stroke-linejoin="round" \n      class="feather feather-film">\n      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>\n      <line x1="7" y1="2" x2="7" y2="22"></line>\n      <line x1="17" y1="2" x2="17" y2="22"></line>\n      <line x1="2" y1="12" x2="22" y2="12"></line>\n      <line x1="2" y1="7" x2="7" y2="7"></line>\n      <line x1="2" y1="17" x2="7" y2="17"></line>\n      <line x1="17" y1="17" x2="22" y2="17"></line>\n      <line x1="17" y1="7" x2="22" y2="7"></line>\n  </svg>\n    <span>Filmoteka</span>\n  </div>\n  <ul class="header__list js_header_list">\n    <li class="header__item active" data-position="home">Home</li>\n    <li class="header__item" data-position="library">My Library</li>\n  </ul>\n</div>\n\x3c!--Input Vova--\x3e\n<div class="search-input js_search-input container active">\n  <form class="search_form">\n    <input type="text" name="search" class="header_input" placeholder="Поиск фильмов" />\n  </form>\n  <p class="error_message ">Search result not successful. Enter the correct movie name and try again.</p>\n</div>\n\x3c!--Button Vova--\x3e\n<div class="header_btn_wraper js_header_btn_wraper container">\n  <button class="button_watched">Watched</button>\n  <button class="button_queue active">Queue</button>\n</div>\n');const q=document.querySelector(".js_header_list"),x=document.querySelector(".js_search-input"),w=document.querySelector(".js_header_btn_wraper");document.querySelector(".button_watched"),document.querySelector(".button_queue");q.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;const t=q.children;t[0].classList.remove("active"),t[1].classList.remove("active"),e.target.classList.add("active"),a.headerMain.classList.contains("details")&&a.headerMain.classList.remove("details");a.headerMain.classList.contains("library")&&a.headerMain.classList.remove("library");"home"!==e.target.dataset.position&&a.headerMain.classList.add(e.target.dataset.position);w.classList.remove("active"),x.classList.remove("active"),"home"===e.target.dataset.position?(x.classList.add("active"),document.querySelector(".jsLiblist").classList.add("invisible"),document.querySelector(".JsmovieListWrapper").classList.remove("invisible")):w.classList.add("active");"library"===e.target.dataset.position&&(S(),console.log("test function done"),console.log("queue"));document.querySelector(".singleMoviePreview").classList.add("invisible"),document.querySelector(".main_section").classList.remove("invisible")})),document.querySelector(".search_form").addEventListener("submit",(function(e){if(e.preventDefault(),""===e.currentTarget.elements.search.value)return void console.log("Search query is empty!!");const t=e.currentTarget.elements.search.value;p.query=t,p.page=1,p.fetchMovies(),L()})),document.querySelector(".js_header_logo").addEventListener("click",(function(e){document.querySelector(".jsLiblist").classList.add("invisible"),document.querySelector(".JsmovieListWrapper").classList.remove("invisible"),document.querySelector(".page-list").innerHTML="",p.fetchPopularMovies(),document.querySelector(".singleMoviePreview").classList.add("invisible"),document.querySelector(".main_section").classList.remove("invisible"),document.querySelector(".js_header").classList.remove("details"),document.querySelector(".js_search-input").classList.add("active"),document.querySelector(".js_header_list").children[0].classList.add("active"),document.querySelector(".js_header_list").children[1].classList.remove("active"),document.querySelector(".js_header_btn_wraper").classList.remove("active"),document.querySelector(".search_form").reset()})),(()=>{let e=document.querySelector(".button_watched");const t=document.querySelector(".button_queue");e.addEventListener("click",b),t.addEventListener("click",S)})();var M=()=>{const e=q.children;e[0].classList.remove("active"),e[1].classList.remove("active"),w.classList.remove("active"),x.classList.remove("active"),a.headerMain.classList.contains("library")&&a.headerMain.classList.remove("library"),a.headerMain.classList.add("details")};p.fetchPopularMovies(),L("pop");i("rXNf"),i("91Fi"),i("1/J2");document.querySelector(".js_footer").insertAdjacentHTML("beforeend",'\n<div class="footer-container">\n        <svg\n          class="footer__svg-copy"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 24 24"\n        >\n          <path\n            d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"\n          />\n        </svg>\n        <p class="footer__text">2020 | All Rights Reserved</p>\n        <p class="footer__text footer__visible-elm">|</p>\n        <p class="footer__text">Developed with</p>\n        <svg\n          class="footer__svg-heart"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 510 510"\n        >\n          <path\n            d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55\n\t\t\tC283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"\n          />\n        </svg>\n        <p class="footer__text margin-text">by</p>\n        <a class="footer__text footer__link">GoIT Students</a>\n      </div>');i("Vz/o");var P=i("F50H"),k=i.n(P),T=i("6pIy"),E=i.n(T),j=i("mY60"),I=i.n(j),H=i("MnJ7"),A=i.n(H),O=i("XoAk"),N=i.n(O),J=i("EJcf"),F=i.n(J),C=i("J2fq"),D=i.n(C);document.querySelector(".js_footer").insertAdjacentHTML("beforeend",`<div class="container-overlay">\n    <div class="modal_window">\n      <span class="close_modal">&times;</span>\n      <p class="modal_title">Development  Team</p>\n      <ul class="students_list">\n        <li class="list_item">\n          <img class="item_img" src="${k.a}" alt="img_profile" />\n          <p class="item_title">Franz Ferdinand</p>\n          <p class="item_description">franz228@gmail.com</p>\n          <p class="item_description">Pagination, API</p>\n        </li>\n        <li class="list_item">\n          <img class="item_img" src="${E.a}" alt="img_profile" />\n          <p class="item_title">Yulia Gorbenko</p>\n          <p class="item_description">ybelova24@gmail.com</p>\n          <p class="item_description">Film details info</p>\n        </li>\n        <li class="list_item">\n          <img class="item_img" src="${I.a}" alt="img_profile" />\n          <p class="item_title">Vladimir Zyryanov</p>\n          <p class="item_description">rq2018eu@gmail.com</p>\n          <p class="item_description">Input search, buttons</p>\n        </li>\n        <li class="list_item">\n          <img class="item_img" src="${A.a}" alt="img_profile" />\n          <p class="item_title">Bogdan Mormul</p>\n          <p class="item_description">mormul146@gmail.com</p>\n          <p class="item_description">Footer, contact form, Scrum Master</p>\n        </li>\n        <li class="list_item">\n          <img class="item_img" src="${N.a}" alt="img_profile" />\n          <p class="item_title">Illia Kudimov</p>\n          <p class="item_description">ghoreua@gmail.com</p>\n          <p class="item_description">Main section</p>\n        </li>\n        <li class="list_item">\n          <img class="item_img" src="${D.a}" alt="img_profile" />\n          <p class="item_title">Andrey Kolomiets</p>\n          <p class="item_description">andrey111@gmail.com</p>\n          <p class="item_description">Header</p>\n        </li>\n        <li class="list_item">\n          <img class="item_img" src="${F.a}" alt="img_profile" />\n          <p class="item_title">Serhii Zhykhariev</p>\n          <p class="item_description">serzh108@gmail.com</p>\n          <p class="item_description">GitHub, LocalStorage, Team Leader</p>\n        </li>\n      </ul>\n    </div>\n  </div>`);const G=document.querySelector(".footer__link"),$=document.querySelector(".container-overlay"),R=document.querySelector(".close_modal");G.addEventListener("click",()=>{$.style.display="flex"}),R.addEventListener("click",()=>{$.style.display="none"}),window.onclick=()=>{event.target===$&&($.style.display="none")};i("dDGi"),i("HoEU"),i("E5Mm")},"Vz/o":function(e,t,i){},XoAk:function(e,t,i){e.exports=i.p+"assets/images/contact-form/ilya.png"},dDGi:function(e,t,i){},mY60:function(e,t,i){e.exports=i.p+"assets/images/contact-form/vova.png"},"oo/q":function(e,t,i){},rXNf:function(e,t,i){},umIF:function(e,t,i){var n=i("mp5j");e.exports=(n.default||n).template({1:function(e,t,i,n,s){return"\n      "+e.escapeExpression(e.lambda(t,t))+"\n      "},compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s){var a,l,o=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,c="function",d=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\n\n<img src="'+d(typeof(l=null!=(l=u(i,"poster_path")||(null!=t?u(t,"poster_path"):t))?l:r)===c?l.call(o,{name:"poster_path",hash:{},data:s,loc:{start:{line:21,column:10},end:{line:21,column:25}}}):l)+'" alt="poster" class="details_img">\n<div>\n  <h4 class="film_name">'+d(typeof(l=null!=(l=u(i,"title")||(null!=t?u(t,"title"):t))?l:r)===c?l.call(o,{name:"title",hash:{},data:s,loc:{start:{line:23,column:24},end:{line:23,column:33}}}):l)+'</h4>\n  <p class="details_text">Vote / Votes <span class="vote_info">'+d(typeof(l=null!=(l=u(i,"vote_average")||(null!=t?u(t,"vote_average"):t))?l:r)===c?l.call(o,{name:"vote_average",hash:{},data:s,loc:{start:{line:24,column:63},end:{line:24,column:79}}}):l)+'</span> / <span\n      class="votes_info">'+d(typeof(l=null!=(l=u(i,"vote_count")||(null!=t?u(t,"vote_count"):t))?l:r)===c?l.call(o,{name:"vote_count",hash:{},data:s,loc:{start:{line:25,column:25},end:{line:25,column:39}}}):l)+'</span></p>\n  <p class="details_text">Popularity <span class="main_info popularity-info">'+d(typeof(l=null!=(l=u(i,"popularity")||(null!=t?u(t,"popularity"):t))?l:r)===c?l.call(o,{name:"popularity",hash:{},data:s,loc:{start:{line:26,column:77},end:{line:26,column:91}}}):l)+'</span></p>\n  <p class="details_text">Original Title<span class="main_info title_info">\n      '+d(typeof(l=null!=(l=u(i,"original_title")||(null!=t?u(t,"original_title"):t))?l:r)===c?l.call(o,{name:"original_title",hash:{},data:s,loc:{start:{line:28,column:6},end:{line:28,column:24}}}):l)+'\n    </span></p>\n  <p class="details_text">Genre <span class="main_info genre_info">'+(null!=(a=u(i,"each").call(o,null!=t?u(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,s,0),inverse:e.noop,data:s,loc:{start:{line:30,column:67},end:{line:32,column:15}}}))?a:"")+'</span></p>\n  <p class="main_info about_info">ABOUT</p>\n  <p class="details_description">\n    '+d(typeof(l=null!=(l=u(i,"overview")||(null!=t?u(t,"overview"):t))?l:r)===c?l.call(o,{name:"overview",hash:{},data:s,loc:{start:{line:35,column:4},end:{line:35,column:16}}}):l)+'\n  </p>\n  <div class="btn_details_wraper">\n    <button class="button_addwatched">Add to watched</button>\n    <button class="button_addqueue">Add to queue</button>\n  </div>\n</div>'},useData:!0})},xRkT:function(e,t,i){var n=i("mp5j");e.exports=(n.default||n).template({1:function(e,t,i,n,s){return'<li class="page-list__item digit">\n    '+e.escapeExpression(e.lambda(t,t))+"\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s){var a,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="page-list__item arrow left">\n\n</li>\n<li class="page-list__item page-ends">\n    1\n</li>\n<li class="page-list__item page-ends dots">\n    ...\n</li>\n'+(null!=(a=l(i,"each").call(null!=t?t:e.nullContext||{},null!=t?l(t,"pageItems"):t,{name:"each",hash:{},fn:e.program(1,s,0),inverse:e.noop,data:s,loc:{start:{line:10,column:0},end:{line:14,column:9}}}))?a:"")+'<li class="page-list__item arrow right">\n\n</li>'},useData:!0})},yD95:function(e,t,i){var n=i("mp5j");e.exports=(n.default||n).template({1:function(e,t,i,n,s){return'<li class="page-list__item digit">\n    '+e.escapeExpression(e.lambda(t,t))+"\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s){var a,l,o=null!=t?t:e.nullContext||{},r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="page-list__item arrow left">\n\n</li>\n<li class="page-list__item page-ends">\n    1\n</li>\n<li class="page-list__item page-ends dots">\n    ...\n</li>\n'+(null!=(a=r(i,"each").call(o,null!=t?r(t,"pageItems"):t,{name:"each",hash:{},fn:e.program(1,s,0),inverse:e.noop,data:s,loc:{start:{line:10,column:0},end:{line:14,column:9}}}))?a:"")+'\n<li class="page-list__item page-ends dots">\n    ...\n</li>\n\n<li class="page-list__item page-ends last-page">\n    '+e.escapeExpression("function"==typeof(l=null!=(l=r(i,"totalPages")||(null!=t?r(t,"totalPages"):t))?l:e.hooks.helperMissing)?l.call(o,{name:"totalPages",hash:{},data:s,loc:{start:{line:21,column:4},end:{line:21,column:18}}}):l)+'\n</li>\n<li class="page-list__item arrow right">\n\n</li>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.286b1235f9c442fee6cf.js.map