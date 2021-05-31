(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(8),l=a.n(i),o=(a(16),a(10)),s=a(2),m=a(3),c=a(5),d=a(4),u=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,r=e.imgUrl,i=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:r,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:i},"IMDB"))))});u.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var h=a(1),v=a(6),g=a.n(v),f=(a(20),[{name:"title",value:"",placeholder:"Title name",error:!1,errorMessage:"Please enter the title",firstTouch:!1},{name:"imgUrl",value:"",placeholder:"Url for image",error:!1,errorMessage:"Please enter url for image",firstTouch:!1},{name:"imdbUrl",value:"",placeholder:"Url for imdb",error:!1,errorMessage:"Please enter url for imdb",firstTouch:!1},{name:"imdbId",value:"",placeholder:"Id for imdb",error:!1,errorMessage:"Please enter Id for imdb",firstTouch:!1},{name:"description",value:"",placeholder:"Description"}]),b=function(e){return"description"!==e.name&&""===e.value},w=function(e,t){return e.find((function(e){return e.name===t})).value},M=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={inputs:f,disabledButton:!0},e.handleChange=function(t){var a=t.target,r=a.value,n=a.name;e.setState((function(e){return{inputs:e.inputs.map((function(e){return e.name===n?Object(h.a)(Object(h.a)({},e),{},{value:r,error:!1}):Object(h.a)(Object(h.a)({},e),{},{error:!1})}))}})),e.setState({disabledButton:!1})},e.handleSubmit=function(t){t.preventDefault(),e.setState((function(e){var t=new RegExp(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/),a=!1;return{inputs:e.inputs.map((function(e){return""===e.value||"imgUrl"===e.name&&!e.value.match(t)||"imdbUrl"===e.value.name&&!e.match(t)?(a=!0,Object(h.a)(Object(h.a)({},e),{},{error:!0})):e})),disabledButton:a}}));var a=e.state.inputs;if(!(a.filter(b).length>0)){var r={title:w(a,"title"),imgUrl:w(a,"imgUrl"),imdbUrl:w(a,"imdbUrl"),imdbId:w(a,"imdbId"),description:w(a,"description")};e.props.addNewMovie(r),e.setState({inputs:f})}},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.inputs,r=t.disabledButton;return n.a.createElement("form",{className:"NewMovie",onSubmit:this.handleSubmit},a.map((function(t){return"description"===t.name?n.a.createElement("textarea",{key:t.name,type:"text",name:t.name,placeholder:t.placeholder,value:t.description,onChange:e.handleChange}):n.a.createElement("div",{key:t.name},n.a.createElement("input",{className:g()({NewMovie__input:!0,"NewMovie__input--error":t.error}),type:"text",name:t.name,placeholder:t.placeholder,value:t.value,onChange:e.handleChange}),n.a.createElement("p",{className:g()({error:!0,"error--displayed":t.error})},"Please enter the title"))})),n.a.createElement("button",{disabled:r,className:"NewMovie__button",type:"submit"},"Add"))}}]),a}(r.Component),N=a(9),E=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={movies:N},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(o.a)(e.movies),[t])}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(M,{addNewMovie:this.addMovie})))}}]),a}(r.Component);l.a.render(n.a.createElement(E,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.3611fd11.chunk.js.map