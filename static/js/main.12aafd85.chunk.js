(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{39:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(2),i=s.n(c),l=s(18),n=s.n(l),r=(s(33),s(5)),o=s(8),d=s(3),j=s(19),m=s(10),b=s(11),h=s(13),u=s(12),x=s(27),p=s(16),O=s(14),g=(s(24),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,c=t.type,i=t.checked,l=t.value,n="checkbox"===c?i:l;a.setState(Object(p.a)({},s,n))},a.handleSubmit=function(e){e.preventDefault();var t="";a.state.image&&(t=a.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0]);var s={marque:a.state.marque,modele:a.state.modele,pays:a.state.pays,prix:a.state.prix,image:t,disponible:a.state.disponible};a.props.getVoiture(s),a.setState(a.initState),Object(O.b)("Voiture ajout\xe9 avec succ\xe9s!",{className:"bg-success text-white fw-bolder"})},a.initState={marque:"",modele:"",pays:"",image:"",prix:0,disponible:!1},a.state=a.initState,a}return Object(b.a)(s,[{key:"render",value:function(){var e=this.state,t=e.marque,s=e.modele,c=e.pays,i=e.prix,l=e.disponible;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-6 offset-3",children:[Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header text-center",children:" Formulaire d'ajout"}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("form",{className:"row g-3 needs-validation",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"marque",className:"form-label",children:"Marque"}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",id:"marque",name:"marque",value:t,onChange:this.handleChange,placeholder:"Entrer la marque"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"modele",className:"form-label",children:"Modele"}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",id:"modele",name:"modele",value:s,onChange:this.handleChange,placeholder:"Entrer le mod\xe8le"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"pays",className:"form-label",children:"Pays"}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",id:"pays",name:"pays",value:c,onChange:this.handleChange,placeholder:"Entrer le pays"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"prix",className:"form-label",children:"Prix"}),Object(a.jsx)("input",{type:"number",required:!0,className:"form-control",id:"prix",value:i,onChange:this.handleChange,name:"prix",placeholder:"Entrer le prix"})]}),Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("label",{htmlFor:"prix",className:"form-label",children:"Image"}),Object(a.jsx)("input",{type:"file",required:!0,className:"form-control",id:"image",onChange:this.handleChange,name:"image"})]}),Object(a.jsx)("div",{className:"col-12",children:Object(a.jsxs)("div",{className:"form-check",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"disponible",onChange:this.handleChange,name:"disponible",checked:l}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"disponible",children:"Disponible"})]})}),Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("button",{className:"btn btn-primary col-12",type:"submit",children:"Soumettre"})})]})})]}),Object(a.jsx)(o.b,{to:"/admin123/reload",children:Object(a.jsx)(r.e,{size:25})})]})}),Object(a.jsx)(O.a,{})]})}}]),s}(c.Component)),v=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){a.setState(a.props.autoShared),console.log(a.props.autoShared)},a.handleChange=function(e){var t=e.target,s=t.name,c=t.type,i=t.checked,l=t.value,n="checkbox"===c?i:l;a.setState(Object(p.a)({},s,n))},a.handleUpdateSubmit=function(e){e.preventDefault();var t=a.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0],s={id:a.state.id,marque:a.state.marque,modele:a.state.modele,pays:a.state.pays,prix:a.state.prix,image:t,disponible:a.state.disponible};a.props.update(s),Object(O.b)("Voiture \xe9dit\xe9 avec succ\xe9s!",{className:"bg-success text-white fw-bolder"})},a.initState={id:-1,marque:"",modele:"",pays:"",image:"",prix:0,disponible:!1},a.state=a.initState,a}return Object(b.a)(s,[{key:"render",value:function(){var e=this.state,t=e.id,s=e.marque,c=e.modele,i=e.pays,l=e.prix,n=e.disponible;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-6 offset-3",children:[Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-header text-center",children:" Formulaire d'\xe9dition"}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("form",{className:"row g-3 needs-validation",onSubmit:this.handleUpdateSubmit,children:[Object(a.jsxs)("div",{className:"col-md-2",children:[Object(a.jsx)("label",{htmlFor:"id",className:"form-label",children:"id"}),Object(a.jsx)("input",{type:"text",readOnly:!0,className:"form-control",id:"id",name:"id",value:t,onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"col-md-5",children:[Object(a.jsx)("label",{htmlFor:"marque",className:"form-label",children:"Marque"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"marque",name:"marque",value:s,onChange:this.handleChange,placeholder:"Entrer la marque"})]}),Object(a.jsxs)("div",{className:"col-md-5",children:[Object(a.jsx)("label",{htmlFor:"modele",className:"form-label",children:"Modele"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"modele",name:"modele",value:c,onChange:this.handleChange,placeholder:"Entrer le mod\xe8le"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"pays",className:"form-label",children:"Pays"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"pays",name:"pays",value:i,onChange:this.handleChange,placeholder:"Entrer le pays"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"prix",className:"form-label",children:"Prix"}),Object(a.jsx)("input",{type:"number",className:"form-control",id:"prix",value:l,onChange:this.handleChange,name:"prix",placeholder:"Entrer le prix"})]}),Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("label",{htmlFor:"prix",className:"form-label",children:"Image"}),Object(a.jsx)("input",{type:"file",className:"form-control",id:"image",onChange:this.handleChange,name:"image"})]}),Object(a.jsx)("div",{className:"col-12",children:Object(a.jsxs)("div",{className:"form-check",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"disponible",onChange:this.handleChange,name:"disponible",checked:n}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"disponible",children:"Disponible"})]})}),Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("button",{className:"btn btn-warning col-12",type:"submit",children:"Modifier"})})]})})]}),Object(a.jsx)(o.b,{to:"/admin123/reload",children:Object(a.jsx)(r.e,{size:25})})]})}),Object(a.jsx)(O.a,{})]})}}]),s}(c.Component),N=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("table",{className:"table table-striped text-center",children:[Object(a.jsx)("thead",{className:"table-dark",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Id"}),Object(a.jsx)("th",{children:"Marque"}),Object(a.jsx)("th",{children:"Modele"}),Object(a.jsx)("th",{children:"Pays"}),Object(a.jsx)("th",{children:"Image"}),Object(a.jsx)("th",{children:"Prix"}),Object(a.jsx)("th",{children:"Disponible"}),Object(a.jsx)("th",{colSpan:"2",children:"Actions"})]})}),Object(a.jsx)("tbody",{children:e.lines.map((function(t,s){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.id}),Object(a.jsx)("td",{children:t.marque}),Object(a.jsx)("td",{children:t.modele}),Object(a.jsx)("td",{children:t.pays}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:"images/".concat(t.image),alt:"",width:"80"})}),Object(a.jsxs)("td",{children:[t.prix," \u20ac"]}),Object(a.jsx)("td",{children:t.disponible?Object(a.jsx)(r.d,{className:"text-success",size:"24"}):Object(a.jsx)(r.f,{className:"text-warning",size:"24"})}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{onClick:function(){e.handleEdit(s)},className:"btn btn-success",children:Object(a.jsx)(r.b,{})})}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{onClick:function(){window.confirm("Etes vous s\xfbr de supprimer cette voiture")&&(e.handleDelete(s),Object(O.b)("Voiture supprim\xe9 avec succ\xe9s",{className:"bg-success text-white fw-bolder"}))},className:"btn btn-danger",children:Object(a.jsx)(r.g,{})})})]},s)}))})]}),Object(a.jsx)(O.a,{})]})},f=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("voituresKey"));if(e&&0!==e.length){var t=JSON.parse(localStorage.getItem("voituresKey"));a.setState({voitures:t})}else{localStorage.setItem("voituresKey",JSON.stringify(a.state.voitures));var s=JSON.parse(localStorage.getItem("voituresKey"));a.setState({voitures:s})}},a.handleRemove=function(e){console.log(e);var t=Object(j.a)(a.state.voitures).filter((function(t,s){return s!==e}));console.log(t),a.setState({voitures:t},(function(){localStorage.setItem("voituresKey",JSON.stringify(a.state.voitures)),console.log(a.state)}))},a.handleShow=function(e){a.setState({editForm:!0})},a.handleCar=function(e){e.id=a.state.voitures[a.state.voitures.length-1].id+1;var t=[].concat(Object(j.a)(a.state.voitures),[e]);a.setState({voitures:t},(function(){localStorage.setItem("voituresKey",JSON.stringify(a.state.voitures))})),console.log(e)},a.handleItem=function(e){var t=a.state.voitures[e];a.setState({editAuto:t,indexMod:e}),console.log(e)},a.handleUpdate=function(e){var t=Object(j.a)(a.state.voitures);t[a.state.indexMod]=e,a.setState({voitures:t},(function(){localStorage.setItem("voituresKey",JSON.stringify(a.state.voitures))}))},a.state={voitures:[{id:1,marque:"Peugeot",modele:"208",pays:"France",image:"208.jpg",prix:5e3,disponible:!0},{id:2,marque:"Renault",modele:"Clio4",pays:"France",image:"clio4.jpg",prix:2500,disponible:!1},{id:3,marque:"Tesla",modele:"X",pays:"Usa",image:"x.jpg",prix:95e3,disponible:!1},{id:4,marque:"Bmw",modele:"M5",pays:"Allemagne",image:"m5.jpg",prix:149e3,disponible:!0}],editForm:!1,indexMod:-1,editAuto:{id:-1,marque:"",modele:"",pays:"",image:"",prix:0,disponible:!1}},a}return Object(b.a)(s,[{key:"render",value:function(){return console.log(this.state.editAuto),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"bg-secondary text-white text-center",children:"Administration"}),!this.state.editForm&&-1===this.state.indexMod&&Object(a.jsx)("button",{onClick:this.handleShow,className:"btn btn-warning offset-11 mb-1 ",children:Object(a.jsx)(x.a,{})}),!this.state.editForm&&this.state.indexMod>-1?Object(a.jsx)(v,{autoShared:this.state.editAuto,update:this.handleUpdate}):this.state.editForm?Object(a.jsx)(g,{getVoiture:this.handleCar}):Object(a.jsx)(N,{lines:this.state.voitures,handleDelete:this.handleRemove,handleEdit:this.handleItem})]})}}]),s}(c.Component),y=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(m.a)(this,s),(c=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,i=t.value,l="",n="";"login"===s?""===i&&(l=Object(a.jsx)("strong",{children:"Le champ Login est requis"})):"pass"===s&&""===i&&(n=Object(a.jsx)("strong",{children:"Le champ mot de passe est requis"})),c.setState({loginError:l,passError:n}),c.setState(Object(p.a)({},s,i))},c.handleSubmit=function(e){e.preventDefault();var t=c.state,s=t.login,a=t.pass;t.loginError,t.passError,t.errorMessage;if(""!==s&&""!==a)if("Dupond"===s&&"123"===a){var i=(new Date).toLocaleDateString();sessionStorage.setItem("token",i),c.props.history.push("/admin123"),window.location.reload()}else{c.setState({errorMessage:"Le login et/ou le mot de passe ne correspondent pas"})}else{c.setState({errorMessage:"Veuillez saisir les deux champs svp"})}},c.state={login:"",pass:"",loginError:"",passError:"",errorMessage:""},c}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"card position-absolute top-50 start-50 translate-middle w-25",children:[this.state.errorMessage&&Object(a.jsx)("div",{className:"alert alert-danger",children:this.state.errorMessage}),Object(a.jsx)("div",{className:"card-header text-center h4",children:"Formulaire de connexion"}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"mb-1",children:[Object(a.jsx)("label",{htmlFor:"login",className:"form-label",children:"Login*"}),Object(a.jsx)("input",{type:"text",onChange:this.handleChange,className:"form-control",id:"login",name:"login",placeholder:"Entrez votre identifiant..."})]}),this.state.loginError,Object(a.jsxs)("div",{className:"mb-1",children:[Object(a.jsx)("label",{htmlFor:"pass",className:"form-label",children:"Mot de passe*"}),Object(a.jsx)("input",{type:"password",onChange:this.handleChange,className:"form-control",id:"pass",name:"pass",placeholder:"Entrez votre mot de passe..."})]}),this.state.passError,Object(a.jsx)("button",{type:"submit",className:"btn btn-primary col-12",children:"Soumettre"})]})})]})})}}]),s}(c.Component),S=function(e){return sessionStorage.getItem("token")&&(sessionStorage.removeItem("token"),e.history.push("/login"),window.location.reload()),Object(a.jsx)("div",{})},C=function(){var e=JSON.parse(localStorage.getItem("voituresKey"));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"bg-light p-5",children:Object(a.jsxs)("div",{className:"container text-center",children:[Object(a.jsx)("h1",{className:"display-4",children:"Concessionnaire de voitures"}),Object(a.jsx)("p",{className:"lead",children:" Vous voulez des voitures de luxe, visitez C&V ! "})]})}),Object(a.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4 mt-1",children:e.map((function(e,t){return Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:"images/".concat(e.image),class:"card-img-top",alt:"..."}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("h5",{className:"card-title text-center",children:["Voiture N\xb0 00",e.id]}),Object(a.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(a.jsxs)("li",{className:"list-group-item",children:["Marque: ",e.marque]}),Object(a.jsxs)("li",{className:"list-group-item",children:["Modele: ",e.modele]}),Object(a.jsxs)("li",{className:"list-group-item",children:["Pays: ",e.pays]}),Object(a.jsxs)("li",{className:"list-group-item",children:["Prix: ",e.prix,"\u20ac"]})]}),e.disponible?Object(a.jsx)("button",{className:"btn btn-success","data-bs-toggle":"modal","data-bs-target":"#auto".concat(t),children:"Commander"}):Object(a.jsx)("button",{className:"btn btn-secondary",disabled:"true",children:"Indisponible"}),Object(a.jsx)("div",{className:"modal fade",id:"auto".concat(t),tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(a.jsx)("div",{className:"modal-dialog",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:e.marque}),Object(a.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(a.jsx)("div",{className:"modal-body",children:Object(a.jsx)("div",{class:"card mb-3 ",children:Object(a.jsxs)("div",{className:"row g-0",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("img",{src:"images/".concat(e.image),width:"150",alt:"..."})}),Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("h5",{className:"card-title",children:["Paiement de Voiture 00",t+1]}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",class:"form-control mb-1",id:"nom",placeholder:"Entrez votre nom"}),Object(a.jsx)("input",{type:"text",class:"form-control mb-1",id:"adresse",placeholder:"Entrez votre adresse"}),Object(a.jsx)("input",{type:"text",class:"form-control mb-1",id:"nc",placeholder:"Votre num\xe9ro de carte"}),Object(a.jsx)("input",{type:"date",class:"form-control mb-1",id:"dv",placeholder:"Date de validites"}),Object(a.jsx)("input",{type:"text",class:"form-control mb-1",id:"cr",placeholder:"Crypto"}),Object(a.jsx)("button",{type:"submit",class:"btn btn-danger","data-bs-dismiss":"modal",children:"Valider"})]})]})})]})})})]})})})]})]})})}))})]})};var w=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"A Propos"})})};var k=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{className:"display-1",children:"404 Page Not Found"})})},q=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(m.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e,t){return{nom:e.translations.fr,capitale:e.capital,region:e.region,sous_region:e.subregion,population:e.population,drapeau:e.flag,monnaie:e.currencies[0].name}}));a.setState({listePays:t})})).catch((function(){console.log("Impossible de r\xe9cup\xe9rer les donn\xe9es")}))},a.state={listePays:[]},a}return Object(b.a)(s,[{key:"render",value:function(){return console.log(this.state.listePays),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Services"}),Object(a.jsx)("div",{className:"row row-cols-1 row-cols-md-4 g-4",children:this.state.listePays.map((function(e,t){return Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:e.drapeau,className:"card-img-top",alt:"..."}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title text-center strong",children:e.nom}),Object(a.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("strong",{children:"Capitale :"})," ",e.capitale]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("strong",{children:"Region :"})," ",e.region]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("strong",{children:"Sousregion :"})," ",e.sous_region]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("strong",{children:"Population :"})," ",e.population]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("strong",{children:"Monnaie :"})," ",e.monnaie]})]})]})]})},t)}))})]})}}]),s}(c.Component),F=function(){return(new Date).toLocaleDateString()===sessionStorage.getItem("token")},M=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(o.a,{basename:"/exApp",children:[Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)(o.c,{className:"navbar-brand",activeClassName:"",to:"/",children:[" ",Object(a.jsx)(r.a,{})," C&V"]}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(a.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsxs)(o.c,{className:"nav-link ",activeClassName:"active","aria-current":"page",to:"/",exact:!0,children:[" ",Object(a.jsx)(r.c,{})," Accueil"]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{className:"nav-link",activeClassName:"active",to:"/apropos",children:"A propos"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.c,{className:"nav-link",activeClassName:"active",to:"/services",children:"Services"})})]}),Object(a.jsx)("span",{className:"navbar-text",children:F()?Object(a.jsxs)(o.c,{className:"nav-link",activeClassName:"active",to:"/logout",children:[" ",Object(a.jsx)(r.i,{})," Deconnexion"]}):Object(a.jsxs)(o.c,{className:"nav-link",activeClassName:"active",to:"/login",children:[" ",Object(a.jsx)(r.h,{})," Connexion"]})})]})]})}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{path:"/",component:C,exact:!0}),Object(a.jsx)(d.b,{path:"/apropos",component:w}),Object(a.jsx)(d.b,{path:"/services",component:q}),Object(a.jsx)(d.b,{path:"/login",component:y}),Object(a.jsx)(d.b,{path:"/logout",component:S}),Object(a.jsx)(d.a,{from:"/admin123/reload",to:"/admin123"}),Object(a.jsx)(d.b,{path:"/admin123",render:function(){return F()?Object(a.jsx)(f,{}):Object(a.jsx)(d.a,{to:"/login"})}}),Object(a.jsx)(d.b,{path:"*",component:k})]})]})})},E=(s(39),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{id:"pied",className:"bg-primary col-12 container",children:Object(a.jsx)("p",{className:"text-center text-white m-3 ",children:"Tous droits r\xe9serv\xe9s Copyright \xa9 2021 "})})})});s(40);var I=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(M,{}),Object(a.jsx)(E,{})]})};n.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.12aafd85.chunk.js.map