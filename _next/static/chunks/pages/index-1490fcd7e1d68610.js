(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5249)}])},414:function(e,t,n){"use strict";n.r(t);var s=n(5893),i=n(7294),r=n(4980),o=n(8352),a=n(5144),c=(n(3725),n(9288));t.default=function(e){var t=e.blockSlider,n=e.isActive,l=(0,i.useState)(0),m=l[0],d=l[1],u=(0,i.useState)(0),h=u[0],p=u[1],v=(0,i.useState)(0),f=v[0],g=v[1],x=(0,o.oc)(),w=(0,a.Fg)(),j=w.setActiveFooterItem,N=w.setActiveSliderItem,b=w.rollNext,_=w.rollPrev;return(0,i.useEffect)((function(){n&&(j(4),console.log("use in about"),N(null),t([!0,!0]),document.querySelector(".secondFooter__rollerBlock").style.display="block")}),[n]),(0,s.jsxs)("section",{className:"mainSixth container",onTouchStart:function(e){d(e.targetTouches[0].clientX)},onTouchMove:function(e){p(e.targetTouches[0].clientX)},onTouchEnd:function(){return m-h>50&&0!==m&&0!==h&&(d(0),p(0),b(),x.slideNext()),void(m-h<-50&&0!==m&&0!==h&&(d(0),p(0),_(),x.slidePrev()))},onMouseDown:function(e){return function(e){g(e.pageX)}(e)},onMouseUp:function(e){return function(e){f-e.pageX>100&&0!==f?(g(0),b(),x.slideNext()):f-e.pageX<-100&&0!==f&&(g(0),_(),x.slidePrev())}(e)},onMouseMove:function(e){return(0,c.$O)(e)},children:[(0,s.jsxs)("h2",{className:"main__title mainSixth__title",children:["Who ",(0,s.jsx)("span",{className:"orange underline-sm",children:"we"})," are"]}),(0,s.jsxs)("div",{className:"mainSixth__content",children:[(0,s.jsx)("p",{children:"WDM is a digital marketing and website development agency that provides a wide range of services to businesses and companies in all fields. Digital marketing is a world in progress. Keeping your brand at the forefront and outperforming the competition requires professional, precise work and constant innovation to make your business a highlight."}),(0,s.jsx)("p",{children:"Proper digital marketing combines all the parameters - building a top-notch website, maintaining constant contact with your target audience through professional social media management, effective organic promotion that generates traffic, sponsored promotion that increases conversion rates, and a clear understanding of what can really benefit your business."})]}),(0,s.jsx)("div",{className:"mainSixth-btn-container",children:(0,s.jsx)(r.Z,{size:"small",color:"yellow",text:"Let's talk"})}),(0,s.jsx)("span",{className:"decor-1"}),(0,s.jsx)("span",{className:"decor-2"}),(0,s.jsx)("span",{className:"decor-3"}),(0,s.jsx)("span",{className:"decor-4"})]})}},2557:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var s=n(5893),i=n(7294),r=n(6010),o=n(3725),a=function(e){var t=e.items,n=e.controllersClass,a=void 0===n?"":n,c=e.activeItem,l=e.setActiveItem,m=function(){var e=window.innerWidth-62,n=e*t.length+30+16*(t.length-1),s=-c*(window.innerWidth-47),i=0;window.innerWidth>=542&&(n=(e=480)*t.length+32*(t.length-1),s=-c*(e+32),i=(window.innerWidth-e)/2),document.querySelector(".mobileCarousel-wrapper")&&(document.querySelector(".mobileCarousel-wrapper").style.marginLeft="".concat(i,"px"));var r=document.querySelectorAll(".mobileCarousel-item");r.length>0&&r.forEach((function(t){t.style.width="".concat(e,"px")})),document.querySelector(".mobileCarousel-wrapper-inner")&&(document.querySelector(".mobileCarousel-wrapper-inner").style.width="".concat(n,"px"),document.querySelector(".mobileCarousel-wrapper-inner").style.left="".concat(s,"px"))};(0,i.useEffect)((function(){var e=window.innerWidth-62,n=(t.length,t.length,-c*(window.innerWidth-47));window.innerWidth>=542&&((e=480)*t.length+32*(t.length-1),n=-c*(e+32)),m();var s=document.querySelector(".isActive .mobileCarousel-wrapper-inner");s&&(s.style.left="".concat(n,"px"))}),[c]),(0,i.useLayoutEffect)((function(){var e=(0,o.P)(m,100);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var d=t.map((function(e,t){return(0,s.jsx)("div",{className:(0,r.Z)("mobileCarousel-controllers-item",t===c?"active":""),onClick:function(){return l(t)}},t)})),u=t.map((function(e,t){return(0,s.jsxs)("div",{"data-item":t,className:(0,r.Z)("mobileCarousel-item",e.color,t===c?"active":""),children:[(0,s.jsx)("h3",{className:"mobileCarousel-item__title",children:e.title}),e.icon?(0,s.jsx)("div",{className:"mobileCarousel-item__icon ".concat(e.iconClass),children:(0,s.jsx)("img",{src:"/Project-WDM-v1/icons/carouselMobile/".concat(e.icon),alt:"icon"})}):(0,s.jsx)(s.Fragment,{}),e.semiTitle?(0,s.jsx)("h4",{className:"mobileCarousel-item__semiTitle",children:e.semiTitle}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)("div",{className:"mobileCarousel-item__content",children:e.text})]},t)}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mobileCarousel-wrapper",children:(0,s.jsx)("div",{className:"mobileCarousel-wrapper-inner",children:u})}),(0,s.jsx)("div",{className:"mobileCarousel-controllers-wrapper ",children:(0,s.jsxs)("div",{className:"mobileCarousel-controllers-inner ".concat(a),children:[d,(0,s.jsx)("div",{className:"mobileCarousel-controllers-line"})]})})]})},c=function(e){var t=e.items,n=e.activeItem,i=e.setActiveItem,o=t.map((function(e,t){return(0,s.jsx)("div",{className:(0,r.Z)("desktopAccordion__controllers-item",n===t&&"active"),onClick:function(){return i(t)}},t)})),a=t.map((function(e,t){return(0,s.jsxs)("div",{className:(0,r.Z)("desktopAccordion__item",e.color,t===n?"active":""),"data-item":t,children:[(0,s.jsx)("div",{className:"desktopAccordion__item__count",children:e.title.split(".")[0]}),(0,s.jsx)("div",{className:"desktopAccordion__item__title",children:(0,s.jsx)("h2",{children:e.title.split(".")[1].trim()})}),(0,s.jsxs)("div",{className:"desktopAccordion__item__content",children:[(0,s.jsx)("div",{className:"desktopAccordion__item-icon",children:(0,s.jsx)("img",{src:"/Project-WDM-v1/icons/carouselMobile/".concat(e.icon),alt:"icon"})}),(0,s.jsxs)("div",{className:"desktopAccordion__item__right",children:[(0,s.jsxs)("h3",{className:"desktopAccordion__item-semiTitle",children:[(0,s.jsx)("div",{className:"desktopAccordion__item-semiTitle-arrow"}),e.title.split(".")[1].trim()]}),(0,s.jsx)("p",{className:"desktopAccordion__item-text",children:e.text})]})]})]},t)}));return(0,s.jsxs)("div",{className:"desktopAccordion",children:[(0,s.jsx)("div",{className:"desktopAccordion__items-wrapper",children:a}),(0,s.jsx)("div",{className:"desktopAccordion__controllers-wrapper",children:(0,s.jsxs)("div",{className:"desktopAccordion__controllers-inner",children:[o,(0,s.jsx)("div",{className:"desktopAccordion__controllers-line"})]})})]})},l=n(8352),m=n(5144),d=n(9288),u=[{title:"01. No budget needed",icon:"1.svg",iconClass:"safeBox",color:"blue",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},{title:"02. You just chill",icon:"2.svg",iconClass:"beach",color:"yellow",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{title:"03. Pay for results",icon:"3.svg",iconClass:"darts",color:"purple",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}],h=function(e){e.blockSlider;var t=e.isActive,n=function(){h===u.length-1?(A.slideNext(),console.log("swiper next")):(console.log("item next"),p(h+1)),M()},r=function(){0===h?(A.slidePrev(),console.log("swiper prev")):(p(h-1),console.log("item prev")),I()},o=(0,i.useState)(0),h=o[0],p=o[1],v=(0,i.useState)(0),f=v[0],g=v[1],x=(0,i.useState)(0),w=x[0],j=x[1],N=(0,i.useState)(0),b=N[0],_=N[1],y=(0,i.useState)(0),S=(y[0],y[1],(0,i.useState)(0)),k=(S[0],S[1],(0,i.useState)(!0)),C=(k[0],k[1]),A=(0,l.oc)(),T=(0,m.Fg)(),L=T.setActiveFooterItem,E=T.setActiveSliderItem,M=T.rollNext,I=T.rollPrev;return(0,i.useEffect)((function(){t&&(C(!1),L(1),E(null))}),[h,t]),(0,s.jsxs)("section",{className:"mainSecond",onTouchStart:function(e){g(e.targetTouches[0].clientX)},onTouchMove:function(e){j(e.targetTouches[0].clientX)},onTouchEnd:function(){return f-w>50&&0!==f&&0!==w&&(g(0),j(0),n()),void(f-w<-50&&0!==f&&0!==w&&(g(0),j(0),r()))},onMouseDown:function(e){return function(e){e.target.closest(".desktopAccordion__item:not(.active)")?p(+e.target.closest(".desktopAccordion__item").getAttribute("data-item")):e.target.closest(".mobileCarousel-item:not(.active)")?p(+e.target.closest(".mobileCarousel-item").getAttribute("data-item")):_(e.pageX)}(e)},onMouseUp:function(e){return function(e){b-e.pageX>50&&0!==b&&(_(0),n()),b-e.pageX<-50&&0!==b&&(_(0),r())}(e)},onMouseMove:function(e){return(0,d.eO)(e)},children:[(0,s.jsxs)("h2",{className:"main__title mainSecond__title",children:["How ",(0,s.jsx)("span",{className:"orange",children:"it all"})," works"]}),(0,s.jsx)("div",{className:"mainSecond__mobile-carousel-container hide-xl",children:(0,s.jsx)(a,{items:u,activeItem:h,setActiveItem:p})}),(0,s.jsx)("div",{className:"mainSecond__desktop-accordion-container show-xl",children:(0,s.jsx)(c,{items:u,activeItem:h,setActiveItem:p})}),(0,s.jsx)("span",{className:"decor-1"}),(0,s.jsx)("span",{className:"decor-2"}),(0,s.jsx)("span",{className:"decor-3"}),(0,s.jsx)("span",{className:"decor-4"})]})}},5249:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var s=n(5893),i=n(9008),r=n(7294),o=function(){return(0,s.jsxs)("div",{className:"start-swiping",children:[(0,s.jsx)("span",{className:"start-swiping_l1",children:"Start"}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"start-swiping_l2 hide-xl",children:"swiping"}),(0,s.jsx)("div",{className:"start-swiping_l2 show-xl",children:"scrolling"}),(0,s.jsx)("span",{className:"swiping-star swiping-star-1"}),(0,s.jsx)("span",{className:"swiping-star swiping-star-2"}),(0,s.jsx)("span",{className:"swiping-star swiping-star-3"})]})},a=n(8352),c=n(5144),l=n(9288),m="_35Xnh";var d=function(e){var t=(0,r.useState)(e.phrases[0]),n=t[0],s=t[1],i=(0,r.useState)(e.phrases[1]),o=i[0],a=i[1],c=(0,r.useState)(0),l=c[0],d=c[1],u=(0,r.useState)(80),h=u[0],p=u[1],v=(0,r.useState)(1e3),f=v[0],g=v[1],x=(0,r.useState)(1e3),w=x[0],j=x[1],N=(0,r.useState)([!1,!1,!1]),b=N[0],_=N[1],y=(0,r.useState)(),S=y[0],k=y[1],C=(0,r.useState)(0),A=C[0],T=C[1],L=(0,r.useState)(-1),E=L[0],M=L[1],I=(0,r.useState)("!<>-_\\/[]{}\u2014=+*^?#________"),q=I[0],F=I[1];function X(){for(var e=q[Math.floor(Math.random()*q.length)];;){var t=Math.floor(Math.random()*n.length);if(!q.includes(n[t])){s(n.substring(0,t)+e+n.substring(t+1));break}}}function W(){for(;;){var e=Math.floor(Math.random()*n.length);if(q.includes(n[e])){s(n.substring(0,e)+o[e]+n.substring(e+1));break}}}function P(e,t){T(A+1),d(e),a(S[t]),_([!1,!1,!1])}return(0,r.useEffect)((function(){if(void 0!==e.speed&&p(e.speed),void 0!==e.pauseTime&&j(e.pauseTime),void 0!==e.chars&&F(e.chars),void 0!==e.repetitions&&M(e.repetitions),void 0===e.phrases)return r.createElement("div",null,"phrases missing/incomplete/incorrect format");k(e.phrases);var t=setInterval((function(){if(g(h),A===E)return function(){return clearInterval(t)};n!==o?(b[0]||0===function(e){for(var t=0;t<e.length;t++)if(!q.includes(e[t]))return X(),1;return 0}(n)&&_([!0,!1,!1]),b[0]&&!b[1]&&(n.length>o.length&&function(){var e=Math.floor(Math.random()*n.length);s(n.substring(0,e)+n.substring(e+1))}(),n.length<o.length&&function(){var e=q[Math.floor(Math.random()*q.length)],t=Math.floor(Math.random()*n.length);s(0!==t?n.substring(0,t)+e+n.substring(t):e+n.substring(0))}(),n.length===o.length&&_([!0,!0,!1])),b[1]&&!b[2]&&function(e){for(var t=0;t<e.length;t++)if(q.includes(e[t])){W();break}}(n)):(g(w),l===S.length-2&&P(S.length-1,0),l===S.length-1&&P(0,1),l<S.length-2&&P(l+1,l+2))}),f);return function(){return clearInterval(t)}})),r.createElement("div",{className:m},function(t){var s;if(s=void 0!==e.symbolColor?{color:e.symbolColor}:{color:"rgb(143, 143, 143)"},null!=n){for(var i=[],o=0;o<t.length;o++)q.includes(t[o])?i.push(r.createElement("span",{style:s},t[o])):i.push(r.createElement("span",null,t[o]));return i}}(n))},u=function(e){e.blockSlider;var t=e.isActive,n=(0,r.useState)(0),i=n[0],m=n[1],u=(0,r.useState)(0),h=u[0],p=u[1],v=(0,r.useState)(0),f=v[0],g=v[1],x=(0,r.useState)(0),w=(x[0],x[1],(0,r.useState)(0)),j=(w[0],w[1],(0,r.useState)(!1)),N=(j[0],j[1],(0,a.oc)()),b=(0,c.Fg)(),_=b.darkTheme,y=b.setActiveFooterItem,S=b.setActiveSliderItem,k=b.rollNext;return(0,r.useEffect)((function(){return t&&(y(0),S(null),setTimeout((function(){document.querySelector(".main__own-wrapper").classList.add("show")}),600)),document.querySelector(".main__own-wrapper").classList.remove("show")}),[t]),(0,r.useEffect)((function(){return t&&setTimeout((function(){document.querySelector(".main .main__title").classList.add("show")}),600),document.querySelector(".main .main__title").classList.remove("show")}),[t]),(0,r.useEffect)((function(){return t&&setTimeout((function(){document.querySelector(".main__start-swiping").classList.add("show")}),600),document.querySelector(".main__start-swiping").classList.remove("show")}),[t]),(0,s.jsxs)("section",{className:"container main",onTouchStart:function(e){m(e.targetTouches[0].clientX)},onTouchMove:function(e){p(e.targetTouches[0].clientX)},onTouchEnd:function(){return i-h>50&&0!==i&&0!==h&&(m(0),p(0),k(),N.slideNext()),void(i-h<-50&&0!==i&&0!==h&&(m(0),p(0),N.slidePrev()))},onMouseDown:function(e){return function(e){g(e.pageX)}(e)},onMouseUp:function(e){return function(e){f-e.pageX>100&&0!==f?(g(0),k(),N.slideNext()):f-e.pageX<-100&&0!==f&&(g(0),N.slidePrev())}(e)},onMouseMove:function(e){return(0,l.z2)(e)},children:[(0,s.jsxs)("h1",{className:"main__title",children:[(0,s.jsx)("div",{className:"main__title-line",children:(0,s.jsxs)("div",{className:"main__title-line-inner",children:[(0,s.jsx)("span",{className:"orange",children:"What's"})," the"," ",(0,s.jsx)("span",{className:"orange",children:"difference "})]})}),(0,s.jsx)("div",{className:"main__title-line",children:(0,s.jsxs)("div",{className:"main__title-line-inner",children:["between ",(0,s.jsx)("span",{className:"orange circle",children:"us"})," and a"," "]})}),(0,s.jsx)("div",{className:"main__title-line",children:(0,s.jsx)("div",{className:"main__title-line-inner",children:(0,s.jsx)("span",{className:"orange",children:"Marketing Agency?"})})})]}),(0,s.jsxs)("div",{className:"main__start-swiping_wrapper",children:[(0,s.jsx)("div",{className:"main__start-swiping",children:(0,s.jsx)("div",{className:"main__start-swiping-text",children:(0,s.jsx)(d,{phrases:["We bring you sales!","We bring you hope!","We bring you sales!"],speed:50,pauseTime:800,repetitions:3,symbolColor:_?"#ffffff":"#040C0F"})})}),(0,s.jsx)("span",{className:"main__swiper-pointer"}),(0,s.jsx)("div",{className:"main__start-swiping-textBlock",children:(0,s.jsx)(o,{})})]}),(0,s.jsx)("div",{className:"main__ownWindow-wrapper show-xl",children:(0,s.jsx)("div",{className:"main__ownWindow-wrapper-inner",children:(0,s.jsx)("div",{className:"main__ownWindow-wrapper-inner-owl",children:(0,s.jsxs)("div",{className:"main__ownWindow-wrapper-inner-owl-inner",children:[(0,s.jsx)("div",{className:"eyeBrowLeft"}),(0,s.jsx)("div",{className:"eyeBrowRight"}),(0,s.jsx)("div",{className:"eyeLeft",children:(0,s.jsx)("div",{className:"leftLid"})}),(0,s.jsx)("div",{className:"eyeRight",children:(0,s.jsx)("div",{className:"rightLid"})})]})})})}),(0,s.jsx)("span",{className:"decor-1"}),(0,s.jsx)("span",{className:"decor-2"}),(0,s.jsx)("span",{className:"decor-3"}),(0,s.jsx)("span",{className:"decor-4"})]})},h=n(2557),p=n(6496),v=function(e){var t=e.blockSlider,n=e.isActive,i=(0,r.useState)(0),o=i[0],m=i[1],d=(0,r.useState)(0),u=d[0],h=d[1],v=(0,r.useState)(0),f=v[0],g=v[1],x=(0,a.oc)(),w=(0,c.Fg)(),j=w.rollNext,N=w.rollPrev,b=w.setActiveSliderItem;return(0,r.useEffect)((function(){return n&&(t([!0,!0]),b(null),console.log("use in 4th"),setTimeout((function(){document.querySelector(".mainFourth__keepSwiping").classList.add("show")}),600)),document.querySelector(".mainFourth__keepSwiping").classList.remove("show")}),[n]),(0,s.jsxs)("section",{className:"container mainFourth",onTouchStart:function(e){m(e.targetTouches[0].clientX)},onTouchMove:function(e){h(e.targetTouches[0].clientX)},onTouchEnd:function(){return o-u>50&&0!==o&&0!==u&&(m(0),h(0),j(),x.slideNext()),void(o-u<-50&&0!==o&&0!==u&&(m(0),h(0),N(),x.slidePrev()))},onMouseDown:function(e){return function(e){g(e.pageX)}(e)},onMouseUp:function(e){return function(e){f-e.pageX>100&&0!==f?(g(0),j(),x.slideNext()):f-e.pageX<-100&&0!==f&&(g(0),N(),x.slidePrev())}(e)},onMouseMove:function(e){return(0,l.Ud)(e)},children:[(0,s.jsxs)("h2",{className:"main__title mainFourth-title",children:[(0,s.jsx)("span",{className:"orange mainFourth-title-padding",children:"Feel like"}),(0,s.jsx)("span",{className:"mainFourth-doubling"}),(0,s.jsx)("br",{}),"your monthly sales?"]}),(0,s.jsx)(p.Z,{size:"small",color:"yellow",text:"Let's talk"}),(0,s.jsxs)("div",{className:"mainFourth__keepSwiping",children:["Keep ",(0,s.jsx)("span",{className:"hide-xl",children:"swiping"})," ",(0,s.jsx)("span",{className:"show-xl",children:"scrolling"})," to see the portfolio"]}),(0,s.jsx)("span",{className:"decor-1"}),(0,s.jsx)("span",{className:"decor-2"}),(0,s.jsx)("span",{className:"decor-3"}),(0,s.jsx)("span",{className:"decor-4"})]})},f=n(414),g=n(1330),x=(n(1664),n(933),n(92),n(8770),n(3390),n(5586)),w=n(1554),j=n(965),N=(n(3725),function(){var e=(0,a.oc)(),t=(0,c.Fg)(),n=(t.setActiveFooterItem,t.setActiveSliderItem),i=t.activeSliderItem;t.activeFooterItem;return(0,r.useEffect)((function(){null!==i&&e.slideTo(i),n(i)}),[i]),(0,s.jsx)(s.Fragment,{})});function b(){var e=function(e){n(e)},t=(0,r.useState)([!0,!0]),n=(t[0],t[1]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{children:(0,s.jsx)("title",{children:"WDM"})}),(0,s.jsxs)(a.tq,{spaceBetween:0,slidesPerView:1,modules:[j.N1,j.Gk,j.Ay],allowSlidePrev:!0,allowSlideNext:!0,allowTouchMove:!1,speed:600,keyboard:{enabled:!0},mousewheel:{enabled:!1},children:[(0,s.jsx)(a.o5,{children:function(t){var n=t.isActive;return(0,s.jsx)(u,{isActive:n,blockSlider:e})}}),(0,s.jsx)(a.o5,{children:function(t){var n=t.isActive;return(0,s.jsx)(h.default,{isActive:n,blockSlider:e})}}),(0,s.jsx)(a.o5,{children:function(t){var n=t.isActive;return(0,s.jsx)(w.default,{isActive:n,blockSlider:e})}}),(0,s.jsx)(a.o5,{children:function(t){var n=t.isActive;return(0,s.jsx)(v,{isActive:n,blockSlider:e})}}),(0,s.jsx)(a.o5,{children:function(t){var n=t.isActive;return(0,s.jsx)(x.default,{isActive:n,blockSlider:e})}}),(0,s.jsx)(a.o5,{children:function(t){var n=t.isActive;return(0,s.jsx)(f.default,{isActive:n,blockSlider:e})}}),(0,s.jsx)(a.o5,{children:function(t){var n=t.isActive;return(0,s.jsx)(g.default,{isActive:n,blockSlider:e})}}),(0,s.jsx)(N,{})]})]})}},5586:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var s=n(5893),i=n(7294),r=n(6010),o=n(3725),a=n(6496),c=function(e){var t=e.items,n=e.activeItem,c=e.setActiveItem,l=function(){var e=m(),s=e-80,i=e-60,r=e-32,o=s*t.length+40+32*(t.length-1),a=e*t.length,c=e,l=40,d=16;e>=542&&(l=(e-(s=462))/2,i=s+20),e>=768&&(l=(e-(s=480))/2,r=s,a=o,c=i=s+32,o=s*t.length+c+32*(t.length-1),d=l),e>=992&&(d=(e-(r=625))/2,c=r+32),document.querySelectorAll(".mmc-item").forEach((function(e){e.style.width="".concat(s,"px")})),document.querySelectorAll(".mmc-item")[0].style.marginLeft="".concat(l,"px"),document.querySelector(".mmc-wrapper-inner").style.width="".concat(o,"px"),document.querySelector(".mmc-wrapper-inner").style.left="".concat(-n*i,"px"),document.querySelectorAll(".mmc-content-item").forEach((function(e){e.style.width="".concat(r,"px")})),document.querySelectorAll(".mmc-content-item")[0].style.marginLeft="".concat(d,"px"),document.querySelector(".mmc-content-wrapper-inner").style.width="".concat(a,"px"),document.querySelector(".mmc-content-wrapper-inner").style.left="".concat(-n*c,"px")},m=function(){return window.visualViewport.width*window.visualViewport.scale},d=t.map((function(e,t){return(0,s.jsx)("div",{className:(0,r.Z)("mmc-item",n===t&&"active")},t)})),u=t.map((function(e,t){return(0,s.jsxs)("div",{className:(0,r.Z)("mmc-content-item",n===t&&"active"),children:[(0,s.jsx)("h2",{className:"main__title",dangerouslySetInnerHTML:{__html:e.title}}),(0,s.jsx)("div",{className:"mmc-content-item__content",children:e.content}),(0,s.jsx)(a.Z,{size:"medium",color:"black",text:"Full case study"})]},t)}));return(0,i.useEffect)((function(){l();m(),document.querySelector(".mmc-wrapper-inner"),document.querySelector(".mmc-content-wrapper-inner")}),[n]),(0,i.useLayoutEffect)((function(){var e=(0,o.P)(l,100);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mmc-wrapper",children:(0,s.jsx)("div",{className:"mmc-wrapper-inner",children:d})}),(0,s.jsxs)("div",{className:"mmc-content-wrapper",children:[(0,s.jsx)("div",{className:"mmc-content-wrapper-inner",children:u}),(0,s.jsx)("div",{className:(0,r.Z)("mmc-content-wrapper__controller-left","show-m",0!==n?"active":""),onClick:function(){0!==n&&c(n-1)}}),(0,s.jsx)("div",{className:(0,r.Z)("mmc-content-wrapper__controller-right","show-m",4!==n?"active":""),onClick:function(){4!==n&&c(n+1)}})]})]})},l=n(4980),m=function(e){var t=e.items,n=e.activeItem,o=(e.setActiveItem,e.next),a=e.prev;(0,i.useEffect)((function(){!function(){var e=document.querySelectorAll(".dmc-inner-item"),t=33,s=26;switch(n){case 0:e[0].style.transform="rotate(0deg)",e[1].style.transform="rotate(".concat(t,"deg)"),e[2].style.transform="rotate(".concat(66,"deg)"),e[3].style.transform="rotate(".concat(66,"deg)"),e[4].style.transform="rotate(".concat(66,"deg)");break;case 1:e[0].style.transform="rotate(-".concat(s,"deg)"),e[1].style.transform="rotate(0deg)",e[2].style.transform="rotate(".concat(t,"deg)"),e[3].style.transform="rotate(".concat(66,"deg)"),e[4].style.transform="rotate(".concat(66,"deg)");break;case 2:e[0].style.transform="rotate(-".concat(52,"deg)"),e[1].style.transform="rotate(-".concat(s,"deg)"),e[2].style.transform="rotate(0deg)",e[3].style.transform="rotate(".concat(t,"deg)"),e[4].style.transform="rotate(".concat(66,"deg)");break;case 3:e[0].style.transform="rotate(-".concat(52,"deg)"),e[1].style.transform="rotate(-".concat(52,"deg)"),e[2].style.transform="rotate(-".concat(s,"deg)"),e[3].style.transform="rotate(0deg)",e[4].style.transform="rotate(".concat(t,"deg)");break;case 4:e[0].style.transform="rotate(-".concat(52,"deg)"),e[1].style.transform="rotate(-".concat(52,"deg)"),e[2].style.transform="rotate(-".concat(52,"deg)"),e[3].style.transform="rotate(-".concat(s,"deg)"),e[4].style.transform="rotate(0deg)"}}()}),[n]);var c=t.map((function(e,t){return(0,s.jsxs)("div",{className:(0,r.Z)("dmc-inner-item",n===t?"active":"disabled",n<t?"next":"",n>t?"prev":""),children:[(0,s.jsx)("div",{className:"dmc-inner-item-image"}),(0,s.jsxs)("div",{className:"dmc-inner-item-contentBlock",children:[(0,s.jsx)("h2",{className:"dmc-inner-item-title",dangerouslySetInnerHTML:{__html:e.title}}),(0,s.jsx)("div",{className:"dmc-inner-item-content",children:e.content}),(0,s.jsx)(l.Z,{size:"medium",color:"black",text:"Full case study",link:e.url})]})]},t)}));return(0,s.jsx)("div",{className:"dmc-inner-container",children:(0,s.jsxs)("div",{className:"dmc-inner",children:[c,(0,s.jsxs)("div",{className:"dmc-inner-controllers",children:[(0,s.jsx)("div",{className:(0,r.Z)("dmc-inner-controllers-controllerNext",4!==n?"active":""),onClick:function(){return o()}}),(0,s.jsx)("div",{className:(0,r.Z)("dmc-inner-controllers-controllerPrev",0!==n?"active":""),onClick:function(){return a()}})]})]})})},d=n(8352),u=n(5144),h=n(9288),p=[{title:'<span class="orange">Chb</span>Express',content:"A leading digital agency that provides 360\xb0 website development and digital marketing services to small and large businesses and clients. Today, significant promotion of your business requires a strong and visible digital presence that will set you apart from the competition and make your business feel right modern.",url:"/",img:"1"},{title:'<span class="orange">Chb</span>Express2',content:"A leading digital agency that provides 360\xb0 website development and digital marketing services to small and large businesses and clients. Today, significant promotion of your business requires a strong and visible digital presence that will set you apart from the competition and make your business feel right modern.",url:"/",img:"2"},{title:'<span class="orange">Chb</span>Express3',content:"A leading digital agency that provides 360\xb0 website development and digital marketing services to small and large businesses and clients. Today, significant promotion of your business requires a strong and visible digital presence that will set you apart from the competition and make your business feel right modern.",url:"/",img:"3"},{title:'<span class="orange">Chb</span>Express4',content:"A leading digital agency that provides 360\xb0 website development and digital marketing services to small and large businesses and clients. Today, significant promotion of your business requires a strong and visible digital presence that will set you apart from the competition and make your business feel right modern.",url:"/",img:"4"},{title:'<span class="orange">Chb</span>Express5',content:"A leading digital agency that provides 360\xb0 website development and digital marketing services to small and large businesses and clients. Today, significant promotion of your business requires a strong and visible digital presence that will set you apart from the competition and make your business feel right modern.",url:"/",img:"5"}],v=function(e){var t=e.blockSlider,n=e.isActive,r=function(e){w(0),b(0),f(e)},o=function(){v===p.length-1?k.slideNext():f(v+1),L()},a=function(){0===v?k.slidePrev():f(v-1),E()},l=(0,i.useState)(0),v=l[0],f=l[1],g=(0,i.useState)(0),x=g[0],w=g[1],j=(0,i.useState)(0),N=j[0],b=j[1],_=(0,i.useState)(0),y=_[0],S=_[1],k=(0,d.oc)(),C=(0,u.Fg)(),A=C.setActiveFooterItem,T=C.setActiveSliderItem,L=C.rollNext,E=C.rollPrev;return(0,i.useEffect)((function(){}),[]),(0,i.useEffect)((function(){n&&(A(3),T(null),console.log("use in portfolio"),t(0===v?[!0,!1]:v===p.length-1?[!1,!0]:[!1,!1]))}),[v,n]),(0,s.jsxs)("section",{className:"mainFifth",onTouchStart:function(e){w(e.targetTouches[0].clientX)},onTouchMove:function(e){b(e.targetTouches[0].clientX)},onTouchEnd:function(){return x-N>50&&0!==x&&0!==N&&(w(0),b(0),o()),void(x-N<-50&&0!==x&&0!==N&&(w(0),b(0),a()))},onMouseDown:function(e){return function(e){S(e.pageX)}(e)},onMouseUp:function(e){return function(e){y-e.pageX>100&&0!==y?(w(0),o()):y-e.pageX<-100&&0!==y&&(w(0),a())}(e)},onMouseMove:function(e){return(0,h.KX)(e)},children:[(0,s.jsxs)("div",{className:"mmc hide-xl",children:[(0,s.jsx)(c,{items:p,activeItem:v,setActiveItem:r}),(0,s.jsx)("span",{className:"decor-1"}),(0,s.jsx)("span",{className:"decor-2"}),(0,s.jsx)("span",{className:"decor-3"}),(0,s.jsx)("span",{className:"decor-4"})]}),(0,s.jsxs)("div",{className:"dmc show-xl",children:[(0,s.jsx)(m,{items:p,activeItem:v,setActiveItem:r,next:o,prev:a}),(0,s.jsx)("span",{className:"decor-1"}),(0,s.jsx)("span",{className:"decor-2"}),(0,s.jsx)("span",{className:"decor-3"}),(0,s.jsx)("span",{className:"decor-4"})]})]})}},1554:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var s=n(5893),i=n(7294),r=function(){return(0,s.jsx)("div",{className:"keepSwiping__wrapper",children:(0,s.jsxs)("div",{className:"keepSwiping__container",children:[(0,s.jsx)("span",{className:"keepSwiping__text hide-xl",children:"Keep swiping"}),(0,s.jsx)("span",{className:"keepSwiping__text show-xl",children:"Keep scrolling"}),(0,s.jsx)("div",{className:"keepSwiping__arrow"})]})})},o=n(6010),a=function(){return(0,s.jsx)("div",{className:"keepSwipingOwlContainer",children:(0,s.jsxs)("div",{className:"keepSwipingOwl",children:[(0,s.jsx)("div",{className:"keepSwipingOwl__title hide-xl",children:"Keep swiping..."}),(0,s.jsx)("div",{className:"keepSwipingOwl__title show-xl",children:"Keep scrolling..."})]})})},c=n(3725),l=function(e){var t=e.items,n=e.activeItem,l=e.setActiveItem,m=function(){var e=(window.innerWidth-304)/2-16;document.querySelector(".mediumCarousel2-wrapper-inner").style.marginLeft="".concat(e,"px"),document.querySelector(".mediumCarousel2-wrapper").style.width="".concat(1680+e,"px")};(0,i.useLayoutEffect)((function(){var e=(0,c.P)(m,100);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var d=t.map((function(e,t){return(0,s.jsx)("div",{"data-item":t,className:(0,o.Z)("mediumCarousel2-item",n>0?"disabled-".concat(n):"",n>t?"disabled":"","".concat(e.color),n===t&&"active"),children:(0,s.jsxs)("div",{className:"mediumCarousel2-item-inner",children:[(0,s.jsx)("h3",{className:"mediumCarousel2-item__title",children:e.title}),e.semiTitle?(0,s.jsx)("h4",{className:"mediumCarousel2-item__semiTitle",children:e.semiTitle}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)("p",{className:"mediumCarousel2-item__content",children:e.text}),4===t?(0,s.jsx)(a,{}):(0,s.jsx)(s.Fragment,{})]})},t)})),u=t.map((function(e,t){return(0,s.jsx)("div",{className:(0,o.Z)("mediumCarousel2-controllers-item",n===t&&"active"),onClick:function(){return l(t)}},t)}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mediumCarousel2-wrapper",children:(0,s.jsxs)("div",{className:"mediumCarousel2-wrapper-inner",children:[d,0===n&&(0,s.jsx)(r,{})]})}),(0,s.jsx)("div",{className:"mediumCarousel2-controllers-wrapper",children:(0,s.jsxs)("div",{className:"mediumCarousel2-controllers-inner",children:[u,(0,s.jsx)("div",{className:"mediumCarousel2-controllers-line"})]})})]})},m=n(8352),d=function(e){var t=e.items,n=e.controllersClass,r=void 0===n?"":n,a=e.activeItem,l=e.setActiveItem,m=function(){var e=window.innerWidth-62,n=e*t.length+30+16*(t.length-1),s=-a*(window.innerWidth-47),i=0;window.innerWidth>=542&&(n=(e=480)*t.length+32*(t.length-1),s=-a*(e+32),i=(window.innerWidth-e)/2),document.querySelector(".mobileCarouselLong-wrapper")&&(document.querySelector(".mobileCarouselLong-wrapper").style.marginLeft="".concat(i,"px"));var r=document.querySelectorAll(".mobileCarouselLong-item");r.length>0&&r.forEach((function(t){t.style.width="".concat(e,"px")})),document.querySelector(".mobileCarouselLong-wrapper-inner")&&(document.querySelector(".mobileCarouselLong-wrapper-inner").style.width="".concat(n,"px"),document.querySelector(".mobileCarouselLong-wrapper-inner").style.left="".concat(s,"px"))};(0,i.useEffect)((function(){var e=window.innerWidth-62,n=(t.length,t.length,-a*(window.innerWidth-47));window.innerWidth>=542&&((e=480)*t.length+32*(t.length-1),n=-a*(e+32)),m();var s=document.querySelector(".mobileCarouselLong-wrapper-inner");s&&(s.style.left="".concat(n,"px"))}),[a]),(0,i.useLayoutEffect)((function(){var e=(0,c.P)(m,100);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var d=t.map((function(e,t){return(0,s.jsx)("div",{className:(0,o.Z)("mobileCarouselLong-controllers-item",a===t&&"active"),onClick:function(){return l(t)}},t)})),u=t.map((function(e,n){return(0,s.jsxs)("div",{"data-item":n,className:(0,o.Z)("mobileCarouselLong-item",e.color,n===a?"active":""),children:[(0,s.jsx)("h3",{className:"mobileCarouselLong-item__title",children:e.title}),e.icon?(0,s.jsx)("div",{className:"mobileCarouselLong-item__icon ".concat(e.iconClass),children:(0,s.jsx)("img",{src:"/icons/carouselMobile/".concat(e.icon),alt:"icon"})}):(0,s.jsx)(s.Fragment,{}),e.semiTitle?(0,s.jsx)("h4",{className:"mobileCarouselLong-item__semiTitle",children:e.semiTitle}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)("div",{className:"mobileCarouselLong-item__content",children:e.text}),n===t.length-1?(0,s.jsx)("span",{className:"keepSwiping",children:"Keep swiping..."}):(0,s.jsx)(s.Fragment,{})]},n)}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mobileCarouselLong-wrapper",children:(0,s.jsx)("div",{className:"mobileCarouselLong-wrapper-inner",children:u})}),(0,s.jsx)("div",{className:"mobileCarouselLong-controllers-wrapper ",children:(0,s.jsxs)("div",{className:"mobileCarouselLong-controllers-inner ".concat(r),children:[d,(0,s.jsx)("div",{className:"mobileCarouselLong-controllers-line"})]})})]})},u=n(5144),h=n(9288),p=[{title:"Online Education",semiTitle:"150% Growth",color:"blue",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{title:"Chargeback",semiTitle:"150% Growth",color:"yellow",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{title:"Online Casinos",semiTitle:"150% Growth",color:"red",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{title:"Chargeback",semiTitle:"150% Growth",color:"purple",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{title:"Online Education",semiTitle:"150% Growth",color:"white",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}],v=function(e){e.blockSlider;var t=e.isActive,n=function(){a===p.length-1?C.slideNext():c(a+1),E()},r=function(){0===a?C.slidePrev():c(a-1),M()},o=(0,i.useState)(0),a=o[0],c=o[1],v=(0,i.useState)(0),f=v[0],g=v[1],x=(0,i.useState)(0),w=x[0],j=x[1],N=(0,i.useState)(0),b=N[0],_=N[1],y=(0,i.useState)(0),S=(y[0],y[1],(0,i.useState)(0)),k=(S[0],S[1],(0,i.useState)(!1)),C=(k[0],k[1],(0,m.oc)()),A=(0,u.Fg)(),T=A.setActiveFooterItem,L=A.setActiveSliderItem,E=A.rollNext,M=A.rollPrev;return(0,i.useEffect)((function(){t&&(T(2),L(null))}),[a,t]),(0,s.jsxs)("section",{className:"aboutSection",onTouchStart:function(e){g(e.targetTouches[0].clientX)},onTouchMove:function(e){j(e.targetTouches[0].clientX)},onTouchEnd:function(){return f-w>50&&0!==f&&0!==w&&(g(0),j(0),n()),void(f-w<-50&&0!==f&&0!==w&&(g(0),j(0),r()))},onMouseDown:function(e){return function(e){e.target.closest(".mobileCarouselLong-item:not(.active)")?c(+e.target.closest(".mobileCarouselLong-item").getAttribute("data-item")):e.target.closest(".mediumCarousel2-item:not(.active)")?(console.log("here"),c(+e.target.closest(".mediumCarousel2-item").getAttribute("data-item"))):_(e.pageX)}(e)},onMouseUp:function(e){return function(e){b-e.pageX>50&&0!==b?(_(0),n()):b-e.pageX<-50&&0!==b&&(_(0),r())}(e)},onMouseMove:function(e){return(0,h.kX)(e)},children:[(0,s.jsxs)("h2",{className:"main__title aboutSection__title",children:["Our ",(0,s.jsx)("span",{className:"orange",children:"latest"})," results"]}),(0,s.jsx)("div",{className:"hide-m",children:(0,s.jsx)("div",{className:"aboutSection__mobile-carousel-container",children:(0,s.jsx)(d,{items:p,controllersClass:"large",activeItem:a,setActiveItem:function(e){g(0),j(0),c(e)}})})}),(0,s.jsx)("div",{className:"show-m",children:(0,s.jsx)("div",{className:"aboutSection__medium-carouser-container",children:(0,s.jsx)(l,{items:p,activeItem:a,setActiveItem:c})})}),(0,s.jsx)("span",{className:"decor-1"}),(0,s.jsx)("span",{className:"decor-2"}),(0,s.jsx)("span",{className:"decor-3"}),(0,s.jsx)("span",{className:"decor-4"})]})}},92:function(){},8770:function(){},3390:function(){},933:function(){}},function(e){e.O(0,[352,330,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);