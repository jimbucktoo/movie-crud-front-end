(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/movieCrud.a3a7187a.png"},51:function(e,t,a){e.exports=a(67)},56:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(44),l=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(72),s=a(73),u=a(74),o=(a(56),a(33)),m=a.n(o),d=a(18),v=function(){var e=Object(d.b)().loginWithRedirect;return r.a.createElement("button",{className:"btn btn-primary button",onClick:function(){return e()}},"Log In")},p=(a(22),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"logo",alt:"MovieCrud Logo",src:m.a}),r.a.createElement("h1",{className:"app-title"},"MovieCrud"),r.a.createElement(v,null))}),g=a(69),b=function(){var e=Object(d.b)().logout;return r.a.createElement("button",{className:"dropdown-item",id:"logout",onClick:function(){return e({logoutParams:{returnTo:window.location.origin}})}},"Log Out")},E=a(70),y=a(16),f=a(43);function h(){var e=Object(y.a)(["\n    mutation {\n        deleteAll {\n            id\n            title\n            directors\n            year\n            rating\n            poster_url\n        }\n    }\n"]);return h=function(){return e},e}function N(){var e=Object(y.a)(["\n    mutation ($id: ID!) {\n        deleteMovie(id: $id) {\n            id\n            title\n            directors\n            year\n            rating\n            poster_url\n        }\n    }\n"]);return N=function(){return e},e}function I(){var e=Object(y.a)(["\n    mutation (\n        $id: ID!\n        $title: String!\n        $directors: String!\n        $year: Int!\n        $rating: Int!\n        $poster_url: String!\n    ) {\n        updateMovie(\n            id: $id\n            title: $title\n            directors: $directors\n            year: $year\n            rating: $rating\n            poster_url: $poster_url\n        ) {\n            id\n            title\n            directors\n            year\n            rating\n            poster_url\n        }\n    }\n"]);return I=function(){return e},e}function j(){var e=Object(y.a)(["\n    mutation (\n        $title: String!\n        $directors: String!\n        $year: Int!\n        $rating: Int!\n        $poster_url: String!\n        $user_id: Int!\n    ) {\n        addMovie(\n            title: $title\n            directors: $directors\n            year: $year\n            rating: $rating\n            poster_url: $poster_url\n            user_id: $user_id\n        ) {\n            id\n            title\n            directors\n            year\n            rating\n            poster_url\n            user_id\n        }\n    }\n"]);return j=function(){return e},e}function O(){var e=Object(y.a)(["\n    query GetMovieById($id: ID!) {\n        movieById(id: $id) {\n            id\n            title\n            directors\n            year\n            rating\n            poster_url\n        }\n    }\n"]);return O=function(){return e},e}function $(){var e=Object(y.a)(["\n    query GetMoviesByUserId($id: ID!) {\n        moviesByUserId(id: $id) {\n            id\n            title\n            directors\n            year\n            rating\n            poster_url\n        }\n    }\n"]);return $=function(){return e},e}function w(){var e=Object(y.a)(["\n    {\n        movies {\n            id\n            title\n            directors\n            year\n            rating\n            poster_url\n        }\n    }\n"]);return w=function(){return e},e}function M(){var e=Object(y.a)(["\n    mutation {\n        deleteAllUsers {\n            id\n            authId\n            username\n            email\n            picture\n        }\n    }\n"]);return M=function(){return e},e}function U(){var e=Object(y.a)(["\n    mutation ($id: ID!) {\n        deleteUser(id: $id) {\n            id\n            authId\n            username\n            email\n            picture\n        }\n    }\n"]);return U=function(){return e},e}function B(){var e=Object(y.a)(["\n    mutation (\n        $id: ID!\n        $authId: String!\n        $username: String!\n        $email: String!\n        $picture: String!\n    ) {\n        updateUser(\n            id: $id\n            authId: $authId\n            username: $username\n            email: $email\n            picture: $picture\n        ) {\n            id\n            authId\n            username\n            email\n            picture\n        }\n    }\n"]);return B=function(){return e},e}function L(){var e=Object(y.a)(["\n    mutation (\n        $authId: String!\n        $username: String!\n        $email: String!\n        $picture: String!\n    ) {\n        addUser(\n            authId: $authId\n            username: $username\n            email: $email\n            picture: $picture\n        ) {\n            id\n            authId\n            username\n            email\n            picture\n        }\n    }\n"]);return L=function(){return e},e}function x(){var e=Object(y.a)(["\n    query GetUserByAuthId($authId: String!) {\n        userByAuthId(authId: $authId) {\n            id\n            authId\n            username\n            email\n            picture\n        }\n    }\n"]);return x=function(){return e},e}function A(){var e=Object(y.a)(["\n    query GetUserById($id: ID!) {\n        userById(id: $id) {\n            id\n            authId\n            username\n            email\n            picture\n        }\n    }\n"]);return A=function(){return e},e}function Q(){var e=Object(y.a)(["\n    {\n        users {\n            id\n            authId\n            username\n            email\n            picture\n        }\n    }\n"]);return Q=function(){return e},e}var R=Object(f.a)(Q()),q=(Object(f.a)(A()),Object(f.a)(x())),_=Object(f.a)(L()),S=(Object(f.a)(B()),Object(f.a)(U()),Object(f.a)(M()),Object(f.a)(w())),k=Object(f.a)($()),D=Object(f.a)(O()),P=Object(f.a)(j()),C=Object(f.a)(I()),T=Object(f.a)(N()),Y=(Object(f.a)(h()),Object(E.a)(R,{name:"getUsersQuery"})(Object(E.a)(_,{name:"addUserMutation"})(function(e){var t=Object(d.b)(),a=t.user,i=t.isAuthenticated,l=t.isLoading;Object(n.useEffect)(function(){i&&c(a)},[i,a]);var c=function(t){e.getUsersQuery.users.find(function(e){return e.email===t.email})||e.addUserMutation({variables:{authId:t.sub,username:t.nickname,email:t.email,picture:t.picture},refetchQueries:[{query:R}]}).then(function(){}).catch(function(e){console.error("Error Adding User: ",e)})};return l?r.a.createElement("div",null,r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))):i?r.a.createElement("div",{className:"nav-link nav-links profile dropdown-toggle",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},r.a.createElement("img",{id:"userPicture",src:a.picture,alt:a.name}),a.name):null}))),G=function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navBar navbar-dark bg-dark"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-brand navBarBrand"},r.a.createElement("img",{className:"navLogo",alt:"Logo",src:m.a})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.a,{className:"nav-link nav-links",to:"/movies"},"Movies")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.a,{className:"nav-link nav-links",to:"/movies/new"},"Add To List"))),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(Y,null),r.a.createElement("ul",{className:"dropdown-menu dropdown-menu-dark","aria-labelledby":"navbarDropdown"},r.a.createElement("li",null,r.a.createElement(g.a,{className:"dropdown-item",to:"/movies/userMovies"},"My Movies")),r.a.createElement("li",null,r.a.createElement(g.a,{className:"dropdown-item",to:"/settings"},"Settings")),r.a.createElement("li",null,r.a.createElement(b,null)))))))))},J=a(19),W=Object(J.flowRight)(Object(E.a)(S,{name:"getMoviesQuery"}),Object(E.a)(q,{options:function(e){return{variables:{authId:null}}},name:"getUserByAuthIdQuery"}),Object(E.a)(k,{options:function(e){return{variables:{id:null}}},name:"getMoviesByUserIdQuery"}),Object(E.a)(T,{name:"deleteMovieMutation"}))(function(e){var t=Object(d.b)(),a=t.user,i=t.isAuthenticated,l=e.getMoviesQuery.movies,c=e.getMoviesByUserIdQuery.moviesByUserId,s=e.getUserByAuthIdQuery.userByAuthId,u=i?a.sub:null,o=s?s.id:null;return Object(n.useEffect)(function(){u&&e.getUserByAuthIdQuery.refetch({authId:u})},[u,e.getUserByAuthIdQuery]),Object(n.useEffect)(function(){o&&e.getMoviesByUserIdQuery.refetch({id:o})},[o,e.getMoviesByUserIdQuery]),l&&c?(1===e.movieList&&(l=c),l.map(function(t){var a="/movies/edit/"+t.id,n="/movies/show/"+t.id;return r.a.createElement("li",{key:t.id,className:"list-group-item d-flex justify-content-between align-items-start movie-item"},r.a.createElement("div",{className:"image-box"},r.a.createElement("img",{className:"poster-image",alt:"poster",src:t.poster_url})),r.a.createElement("div",{className:"ms-2 me-auto"},r.a.createElement("div",{className:"movie-info"},r.a.createElement("div",{className:"fw-bold"},r.a.createElement(g.a,{className:"title",to:n},t.title)),r.a.createElement("div",null,"Directors: ",t.directors),r.a.createElement("div",null,"Year: ",t.year),r.a.createElement("div",null,"Rating: ",t.rating)),r.a.createElement("div",{className:"movie-buttons"},r.a.createElement(g.a,{to:a,className:"btn btn-primary button"},"Edit"),r.a.createElement(g.a,{to:"/movies",className:"ml-5px btn btn-danger button",onClick:function(){return a=t.id,void e.deleteMovieMutation({variables:{id:a},refetchQueries:[{query:S}]});var a}},"Delete"))))})):null}),F=function(e){return r.a.createElement("div",{className:"table"},r.a.createElement("ul",{className:"list-group movie-list"},r.a.createElement(W,{movieList:e.movieList})))},H=Object(J.flowRight)(Object(E.a)(S,{name:"getMoviesQuery"}))(function(e){return null!=e.getMoviesQuery.movies?r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(F,{movieList:0})):r.a.createElement("div",{className:"App loader"},r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")),r.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))}),z=function(e){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(F,{movieList:1}))},Z=a(27),K=a(71),V=Object(J.flowRight)(Object(E.a)(S,{name:"getMoviesQuery"}),Object(E.a)(q,{options:function(e){return{variables:{authId:null}}},name:"getUserByAuthIdQuery"}),Object(E.a)(P,{name:"addMovieMutation"}))(function(e){var t=Object(d.b)(),a=t.user,i=t.isAuthenticated,l=Object(n.useState)(!1),c=Object(Z.a)(l,2),s=c[0],u=c[1],o=i?a.sub:null;Object(n.useEffect)(function(){o&&e.getUserByAuthIdQuery.refetch({authId:o})},[o,e.getUserByAuthIdQuery]);var m=e.getUserByAuthIdQuery.userByAuthId;return s?r.a.createElement(K.a,{to:"/movies"}):i?r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("div",{className:"AddForm movie-add"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=t.target.title.value,n=t.target.directors.value,r=parseInt(t.target.year.value),i=parseInt(t.target.rating.value),l=t.target.posterURL.value;if(m){var c=parseInt(m.id);e.addMovieMutation({variables:{title:a,directors:n,year:r,rating:i,poster_url:l,user_id:c},refetchQueries:[{query:S}]}).then(function(){return u(!0)})}}},r.a.createElement("br",null),r.a.createElement("label",null,"Add A Movie"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,name:"title",type:"text",className:"form-control",id:"inputTitle",placeholder:"Title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,name:"directors",type:"text",className:"form-control",id:"inputDirectors",placeholder:"Directors"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,name:"year",type:"text",pattern:"[0-9]*",title:"A number value is required.",className:"form-control",id:"inputYear",placeholder:"Year"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,name:"rating",type:"text",pattern:"[0-9]*",title:"A number value is required.",className:"form-control",id:"inputRating",placeholder:"Rating"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,name:"posterURL",type:"text",pattern:"https?://.+",title:"A valid URL value is required.",className:"form-control",id:"inputPosterURL",placeholder:"Poster URL"})),r.a.createElement("div",{className:"movie-buttons"},r.a.createElement("button",{className:"btn btn-primary button",type:"submit"},"Submit"),r.a.createElement(g.a,{to:"/movies",className:"btn btn-danger button"},"Cancel"))))):r.a.createElement("div",null,r.a.createElement(G,null))}),X=Object(J.flowRight)(Object(E.a)(S,{name:"getMoviesQuery"}),Object(E.a)(D,{options:function(e){return{variables:{id:e.match.params.id}}},name:"getMovieByIdQuery"}),Object(E.a)(C,{name:"updateMovieMutation"}))(function(e){var t=Object(n.useState)(!1),a=Object(Z.a)(t,2),i=a[0],l=a[1],c=e.getMovieByIdQuery.movieById;return i?r.a.createElement(K.a,{to:"/movies"}):null!=c?r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("br",null),r.a.createElement("div",{className:"EditForm movie-edit"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=e.match.params.id,n=t.target.title.value,r=t.target.directors.value,i=parseInt(t.target.year.value),c=parseInt(t.target.rating.value),s=t.target.posterURL.value;e.updateMovieMutation({variables:{id:a,title:n,directors:r,year:i,rating:c,poster_url:s},refetchQueries:[{query:S}]}).then(function(){return l(!0)})}},r.a.createElement("h6",null,"Edit Movie: ",c.title),r.a.createElement("br",null),r.a.createElement("img",{alt:"Poster URL",src:c.poster_url,className:"poster-url"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,name:"title",type:"text",className:"form-control",id:"inputTitle",placeholder:"Title: "+c.title})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,name:"directors",type:"text",className:"form-control",id:"inputDirectors",placeholder:"Director(s): "+c.directors})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,name:"year",type:"text",pattern:"[0-9]*",title:"A number value is required.",className:"form-control",id:"inputYear",placeholder:"Year: "+c.year})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,name:"rating",type:"text",pattern:"[0-9]*",title:"A number value is required.",className:"form-control",id:"inputRating",placeholder:"Rating: "+c.rating})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{required:!0,name:"posterURL",type:"text",pattern:"https://.+",title:"A valid URL value is required.",className:"form-control",id:"inputPosterURL",placeholder:"Poster URL: "+c.poster_url})),r.a.createElement("div",{className:"movie-buttons"},r.a.createElement("button",{className:"btn btn-primary button",type:"submit"},"Edit"),r.a.createElement(g.a,{to:"/movies",className:"btn btn-danger button"},"Cancel")))),r.a.createElement("br",null),r.a.createElement("br",null)):r.a.createElement("div",null,r.a.createElement(G,null))}),ee=Object(J.flowRight)(Object(E.a)(D,{options:function(e){return{variables:{id:e.match.params.id}}},name:"getMovieByIdQuery"}))(function(e){var t=e.getMovieByIdQuery.movieById;return null!=t?r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("div",{className:"movie-show"},r.a.createElement("br",null),r.a.createElement("img",{className:"poster-url",alt:"Poster URL",src:t.poster_url}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"Title: ",t.title,r.a.createElement("br",null),"Directors: ",t.directors,r.a.createElement("br",null),"Year: ",t.year,r.a.createElement("br",null),"Rating: ",t.rating,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))):r.a.createElement("div",null,r.a.createElement(G,null))}),te=function(){return r.a.createElement("div",null,r.a.createElement(G,null))},ae=a(40),ne=a(7),re=new ae.a({uri:"http://localhost:3001/graphql"});l.a.render(r.a.createElement(d.a,{domain:"jimbucktooauth.us.auth0.com",clientId:"gyJmuuUDRNsG5gr3HtMQgebtOx9RHn1Z",authorizationParams:{redirect_uri:window.location.origin+"/movies"}},r.a.createElement(ne.b,{client:re},r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(u.a,{path:"/settings",component:te}),r.a.createElement(u.a,{path:"/movies/show/:id",component:ee}),r.a.createElement(u.a,{path:"/movies/edit/:id",component:X}),r.a.createElement(u.a,{path:"/movies/new",component:V}),r.a.createElement(u.a,{path:"/movies/userMovies",component:z}),r.a.createElement(u.a,{path:"/movies",component:H}),r.a.createElement(u.a,{exact:!0,path:"/",component:p})))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.639dce41.chunk.js.map