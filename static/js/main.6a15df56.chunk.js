(this.webpackJsonpportff=this.webpackJsonpportff||[]).push([[0],{215:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(19),o=t.n(r),c=(t(54),t(55),t(56),t(57),function(e){var a=e.navData,t=a.NavbarTitle,l=a.NabarOptions;return n.a.createElement("nav",{className:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top",id:"mainNav"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},t),n.a.createElement("button",{className:"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",n.a.createElement("i",{className:"fas fa-bars"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},l.map((function(e,a){return n.a.createElement("li",{className:"nav-item mx-0 mx-lg-1",key:a},n.a.createElement("a",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#".concat(e)},e))}))))))}),s=function(e){for(var a=e.mastData,t=a.MastheadTitle,l=a.Labels,r="",o=0;o<l.length;o++)r+=l[o].toUpperCase()+" - ";var c=r.slice(0,r.length-2).toLocaleLowerCase();return n.a.createElement("header",{className:"masthead bg-primary text-white text-center",id:"page-top"},n.a.createElement("div",{className:"container d-flex align-items-center flex-column"},n.a.createElement("img",{className:"masthead-avatar mb-5",src:"img/avataaars.svg",alt:""}),n.a.createElement("h1",{className:"masthead-heading text-uppercase mb-0"},t),n.a.createElement("div",{className:"divider-custom divider-light"},n.a.createElement("div",{className:"divider-custom-line"}),n.a.createElement("div",{className:"divider-custom-icon"},n.a.createElement("i",{className:"fas fa-star"})),n.a.createElement("div",{className:"divider-custom-line"})),n.a.createElement("p",{className:"masthead-subheading font-weight-light mb-0 text-capitalize"},c)))},i=t(6),m=function(e){var a=e.imgSrc,t=e.detailItem;return n.a.createElement("div",{className:"col-md-6 col-lg-4",onClick:t},n.a.createElement("div",{className:"portfolio-item mx-auto","data-toggle":"modal","data-target":"#portfolioModal1"},n.a.createElement("div",{className:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},n.a.createElement("div",{className:"portfolio-item-caption-content text-center text-white"},n.a.createElement("i",{className:"fas fa-plus fa-3x"}))),n.a.createElement("img",{className:"img-fluid",src:a,alt:""})))},d=Object(i.b)((function(e){return{}}),(function(e){return{detailItem:function(a){return e({type:"OpenPortfolioModel",payload:a})}}}))((function(e){var a=e.portfolioData,t=e.detailItem,l=e.id,r=a.PortfolioItems,o=a.PortfolioTitle,c=function(e){document.getElementsByTagName("body")[0].classList.add("modal-open"),t(e)};return n.a.createElement("section",{className:"page-section portfolio",id:l},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},o),n.a.createElement("div",{className:"divider-custom"},n.a.createElement("div",{className:"divider-custom-line"}),n.a.createElement("div",{className:"divider-custom-icon"},n.a.createElement("i",{className:"fas fa-star"})),n.a.createElement("div",{className:"divider-custom-line"})),n.a.createElement("div",{className:"row"},r.map((function(e,a){return n.a.createElement(m,{detailItem:function(){return c(e)},key:a,imgSrc:e.image})})))))})),u=function(e){var a=e.aboutData,t=e.id,l=a.AboutTitle,r=a.AboutMe1Sec,o=a.AboutMe2Sec,c=a.ButtonName,s=a.ButtonIconFontAwesome,i=a.ButtonSite;return n.a.createElement("section",{className:"page-section bg-primary text-white mb-0",id:t},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-white"},l),n.a.createElement("div",{className:"divider-custom divider-light"},n.a.createElement("div",{className:"divider-custom-line"}),n.a.createElement("div",{className:"divider-custom-icon"},n.a.createElement("i",{className:"fas fa-star"})),n.a.createElement("div",{className:"divider-custom-line"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 ml-auto"},n.a.createElement("p",{className:"lead"},r)),n.a.createElement("div",{className:"col-lg-4 mr-auto"},n.a.createElement("p",{className:"lead"},o))),n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement("a",{className:"btn btn-xl btn-outline-light",href:i},n.a.createElement("i",{className:s}),c))))},b=t(13),f=function(e){var a=e.id,t=Object(l.useState)(""),r=Object(b.a)(t,2),o=r[0],c=r[1],s=Object(l.useState)(""),i=Object(b.a)(s,2),m=i[0],d=i[1],u=Object(l.useState)(""),f=Object(b.a)(u,2),p=f[0],g=f[1],v=Object(l.useState)(""),E=Object(b.a)(v,2),N=E[0],h=E[1],x=function(e){switch(e.target.id){case"name":c(e.target.value);break;case"email":d(e.target.value);break;case"phone":g(e.target.value);break;case"message":h(e.target.value)}};return n.a.createElement("section",{className:"page-section",id:a},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0"},"Contact Me"),n.a.createElement("div",{className:"divider-custom"},n.a.createElement("div",{className:"divider-custom-line"}),n.a.createElement("div",{className:"divider-custom-icon"},n.a.createElement("i",{className:"fas fa-star"})),n.a.createElement("div",{className:"divider-custom-line"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 mx-auto"},n.a.createElement("form",{name:"sentMessage",id:"contactForm",onSubmit:function(e){e.preventDefault(),window.open('mailto:allinone644@gmail.com?subject=subject&body=" Name ":'.concat(o,' " Phone No ":').concat(p,' " Message ":').concat(N))}},n.a.createElement("div",{className:"control-group"},n.a.createElement("div",{className:"form-group floating-label-form-group controls mb-0 pb-2"},n.a.createElement("label",null,"Name"),n.a.createElement("input",{onChange:x,className:"form-control",id:"name",type:"text",placeholder:"Name",value:o,required:"required","data-validation-required-message":"Please enter your name."}),n.a.createElement("p",{className:"help-block text-danger"}))),n.a.createElement("div",{className:"control-group"},n.a.createElement("div",{className:"form-group floating-label-form-group controls mb-0 pb-2"},n.a.createElement("label",null,"Email Address"),n.a.createElement("input",{onChange:x,className:"form-control",id:"email",type:"email",placeholder:"Email Address",value:m,required:"required","data-validation-required-message":"Please enter your email address."}),n.a.createElement("p",{className:"help-block text-danger"}))),n.a.createElement("div",{className:"control-group"},n.a.createElement("div",{className:"form-group floating-label-form-group controls mb-0 pb-2"},n.a.createElement("label",null,"Phone Number"),n.a.createElement("input",{onChange:x,className:"form-control",id:"phone",type:"tel",placeholder:"Phone Number",value:p,required:"required","data-validation-required-message":"Please enter your phone number."}),n.a.createElement("p",{className:"help-block text-danger"}))),n.a.createElement("div",{className:"control-group"},n.a.createElement("div",{className:"form-group floating-label-form-group controls mb-0 pb-2"},n.a.createElement("label",null,"Message"),n.a.createElement("textarea",{onChange:x,className:"form-control",id:"message",rows:"5",placeholder:"Message",value:N,required:"required","data-validation-required-message":"Please enter a message."}),n.a.createElement("p",{className:"help-block text-danger"}))),n.a.createElement("br",null),n.a.createElement("div",{id:"success"}),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn btn-primary btn-xl",type:"submit"},"Send")))))))},p=function(e){var a=e.footerData,t=a.section1,l=a.section2,r=a.section3,o=t.title,c=t.address1,s=t.address2,i=l.facebook,m=l.twitter,d=l.linkedin,u=l.dribbble,b=r.description;return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{className:"footer text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 mb-5 mb-lg-0"},n.a.createElement("h4",{className:"text-uppercase mb-4"},o),n.a.createElement("p",{className:"lead mb-0"},c,n.a.createElement("br",null),s)),n.a.createElement("div",{className:"col-lg-4 mb-5 mb-lg-0"},n.a.createElement("h4",{className:"text-uppercase mb-4"},l.title),n.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:i,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-fw fa-facebook-f"})),n.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:m,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-fw fa-twitter"})),n.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:d,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-fw fa-linkedin-in"})),n.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:u,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-fw fa-dribbble"}))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("h4",{className:"text-uppercase mb-4"},r.title),n.a.createElement("p",{className:"lead mb-0"},b))))),n.a.createElement("div",{className:"scroll-to-top d-lg-none position-fixed "},n.a.createElement("a",{className:"js-scroll-trigger d-block text-center text-white rounded",href:"#page-top"},n.a.createElement("i",{className:"fa fa-chevron-up"}))),n.a.createElement("div",{className:"scroll-to-top d-lg-none position-fixed "},n.a.createElement("a",{className:"js-scroll-trigger d-block text-center text-white rounded",href:"#page-top"},n.a.createElement("i",{className:"fa fa-chevron-up"}))))},g=t(25),v=t(26),E=t(42);function N(){var e=Object(g.a)(["",""]);return N=function(){return e},e}function h(){var e=Object(g.a)(["animation:300ms ",""]);return h=function(){return e},e}var x=v.a.div(h(),Object(v.b)(N(),E.fadeIn)),y=function(e){var a=e.Payload,t=e.hideDetailItem,l=a.image,r=a.name,o=a.des,c=function(){document.getElementsByTagName("body")[0].classList.remove("modal-open"),t()};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"portfolio-modal modal fade show",id:"portfolioModal1",style:{display:"block",paddingRight:"17px"},"aria-modal":"true"},n.a.createElement("div",{className:"modal-dialog modal-xl",role:"document"},n.a.createElement(x,null,n.a.createElement("div",{className:"modal-content"},n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},n.a.createElement("i",{className:"fas fa-times",onClick:c}))),n.a.createElement("div",{className:"modal-body text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-lg-8"},n.a.createElement("h2",{className:"portfolio-modal-title text-secondary text-uppercase mb-0"},r),n.a.createElement("div",{className:"divider-custom"},n.a.createElement("div",{className:"divider-custom-line"}),n.a.createElement("div",{className:"divider-custom-icon"},n.a.createElement("i",{className:"fas fa-star"})),n.a.createElement("div",{className:"divider-custom-line"})),n.a.createElement("img",{className:"img-fluid rounded mb-5",src:l,alt:""}),n.a.createElement("p",{className:"mb-5"},o),n.a.createElement("button",{className:"btn btn-primary",href:"#","data-dismiss":"modal",onClick:c},n.a.createElement("i",{className:"fas fa-times fa-fw"}),"Close Window"))))))))),n.a.createElement("div",{className:"modal-backdrop fade show",id:"modal-backdrop"}))},w=Object(i.b)((function(e){return{ModelName:e.model.ModelName,Payload:e.model.ModelPayload}}),(function(e){return{hideDetailItem:function(){return e({type:"ClosePortfolioModel"})}}}))((function(e){var a=e.ModelName,t=e.Payload,l=e.hideDetailItem;switch(a){case"OpenPortfolioModel":return n.a.createElement(y,{Payload:t,hideDetailItem:l});case"ClosePortfolioModel":default:return null}})),k={Navbar:{NavbarTitle:"Valeed Anjum",NabarOptions:["portfolio","about","contact"]},Masthead:{MastheadTitle:"Valeed Anjum Siddiqui",Labels:["seo expert","react developer","freelancer"]},Portfolio:{PortfolioTitle:"my work",PortfolioItems:[{image:"img/portfolio/cabin.png",name:"cabin",des:"des cabin"},{image:"img/portfolio/cake.png",name:"cake",des:"des cake"},{image:"img/portfolio/circus.png",name:"circus",des:"des circus"},{image:"img/portfolio/game.png",name:"game",des:"des game"},{image:"img/portfolio/safe.png",name:"safe",des:"des safe"},{image:"img/portfolio/submarine.png",name:"submaribe",des:"des submaribe"}]},About:{AboutTitle:"About ok",AboutMe1Sec:"Freelancer is a free bootstrap theme created by Start Bootstrap. \n        The download includes the complete source files including HTML, CSS, and JavaScript as \n        well as optional SASS stylesheets for easy customization.",AboutMe2Sec:"You can create your own custom avatar for the masthead, change the icon in the dividers,\n        and add your email address to the contact form to make it fully functional!",ButtonName:"Download !",ButtonIconFontAwesome:"fas fa-download mr-2",ButtonSite:"https://github.com/ValeedAnjum/yourportfolio"},Footer:{section1:{title:"Location",address1:"Siddiqui House",address2:"Mohalla Gharibabad"},section2:{title:"Around the Web",facebook:"https://web.facebook.com/valeed.anjum.1",twitter:"https://twitter.com/ValeedAnjum2",dribbble:"https://www.linkedin.com",linkedin:"https://dribbble.com"},section3:{title:"yourportfolio",description:"YOURPORTFOLIO is free to use, MIT licensed theme created by Valeed Anjum."}}};var M=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{navData:k.Navbar}),n.a.createElement(s,{mastData:k.Masthead}),n.a.createElement(d,{portfolioData:k.Portfolio,id:k.Navbar.NabarOptions[0]}),n.a.createElement(u,{aboutData:k.About,id:k.Navbar.NabarOptions[1]}),n.a.createElement(f,{id:k.Navbar.NabarOptions[2]}),n.a.createElement(p,{footerData:k.Footer}),n.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(5),O={port:"8564"},P=t(28),S={ModelName:null,ModelPayload:null},A=t(217),D=Object(j.b)({portfolio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;arguments.length>1&&arguments[1];return e},model:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"OpenPortfolioModel":return Object(P.a)({},e,{ModelName:"OpenPortfolioModel",ModelPayload:a.payload});default:return Object(P.a)({},e,{ModelName:null})}},form:A.a}),I=Object(j.c)(D);o.a.render(n.a.createElement(i.a,{store:I},n.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,a,t){e.exports=t(215)},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){}},[[49,1,2]]]);
//# sourceMappingURL=main.6a15df56.chunk.js.map