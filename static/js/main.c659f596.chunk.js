(this.webpackJsonpforecast=this.webpackJsonpforecast||[]).push([[0],{22:function(e,t,r){e.exports=r(37)},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(10),c=r.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=r(8),s=(r(31),r(2)),u=r(3),l=r(5),p=r(4),f=r(6),d=r(21),m="https://api.openweathermap.org/data/2.5/weather",E="&appid=7825ce4ffa896c5019e53087c858568a&units=metric&lang=en",v="https://openweathermap.org/img/wn/";function h(e){var t=e.coord,r=Object(d.a)(e.weather,1)[0],a=r.icon,n=r.description,o=e.main,c=o.temp,i=o.pressure,s=o.humidity,u=e.wind.speed;return{cityName:e.name,temperature:c,pressure:i,humidity:s,windSpeed:u,icon:a,description:n,coords:t}}var O={SET_GEOLOCATION:"SET_GEOLOCATION",FETCH_GEO_SUCCESS:"FETCH_GEO_SUCCESS",FETCH_GEO_ERROR:"FETCH_GEO_ERROR"};function y(e){var t="".concat(m,"?lat=").concat(e.lat,"&lon=").concat(e.lon).concat(E);return function(e){fetch(t).then((function(t){t.json().then((function(r){var a;console.log(t,r),t.ok?e((a=r,{type:O.FETCH_GEO_SUCCESS,payload:a})):e(b(r.message))}))}),(function(t){return e(b(t))}))}}function b(e){return{type:O.FETCH_GEO_ERROR,payload:e}}r(32);function g(e){return n.a.createElement("div",{className:"param"},n.a.createElement("div",{className:"name"},e.name),n.a.createElement("div",{className:"value"},e.value))}r(33),r(34);function C(e){return n.a.createElement("div",{className:"loader"},n.a.createElement("img",{src:"/loader.svg",alt:"loader"}),n.a.createElement("p",null,"Forecast is loading..."))}var j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetch()}},{key:"render",value:function(){return this.props.forecast?this.renderWeather():this.renderLoader()}},{key:"renderLoader",value:function(){return n.a.createElement(C,null)}},{key:"renderWeather",value:function(){var e,t=this.props,r=t.forecast,a=r.cityName,o=r.temperature,c=r.icon,i=r.windSpeed,s=r.description,u=r.pressure,l=r.humidity,p=r.coords,f=(p=void 0===p?{}:p).lat,d=p.lon,m=t.onDelete;return n.a.createElement("div",{className:"weather"},n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"city-name"},a),n.a.createElement("div",{className:"temperature"},o," \u2103"),n.a.createElement("img",{src:(e=c,"".concat(v).concat(e,".png")),alt:"Weather icon"})),n.a.createElement(g,{name:"Wind",value:"".concat(i," m/s")}),n.a.createElement(g,{name:"Cloudness",value:s}),n.a.createElement(g,{name:"Pressure",value:"".concat(u," hPa")}),n.a.createElement(g,{name:"Humidity",value:"".concat(l,"%")}),n.a.createElement(g,{name:"Coords",value:"".concat(f,", ").concat(d)}),m&&n.a.createElement("button",{className:"button",onClick:m},"X"))}}]),t}(n.a.Component),_=(r(35),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getGeolocation()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"geolocation"},n.a.createElement("h1",{className:"header"},"Refresh geolocation"),n.a.createElement("button",{className:"button",onClick:function(){return e.handleClick()}},"Get geolocation"),this.props.error?n.a.createElement("div",{className:"error"},"Error: ",this.props.error):this.props.coords&&n.a.createElement(j,{onFetch:function(){return e.props.fetchWeatherByCoords(e.props.coords)},forecast:this.props.forecast}))}},{key:"handleClick",value:function(){this.getGeolocation()}},{key:"getGeolocation",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var r={lat:t.coords.latitude,lon:t.coords.longitude};e.props.setGeolocation(r),e.props.fetchWeatherByCoords(e.props.coords)}),(function(){e.props.setGeolocation({lat:43.02,lon:44.68}),e.props.fetchWeatherByCoords(e.props.coords)})):this.props.fetchGeoError("your browser does not support geolocation")}}]),t}(n.a.Component));var F=Object(i.b)((function(e){return{coords:e.geo.coords,forecast:e.geo.forecast,error:e.geo.error}}),(function(e){return{setGeolocation:function(t){e(function(e){return{type:O.SET_GEOLOCATION,payload:e}}(t))},fetchWeatherByCoords:function(t){e(y(t))},fetchGeoError:function(t){e(b(t))}}}))(_),S=r(12);function T(e){return n.a.createElement("form",{className:"add-favorite",onSubmit:function(t){return e.onSubmit(t)}},n.a.createElement("input",{className:"input",type:"text",name:"cityName",placeholder:"City name",required:!0}),n.a.createElement("input",{className:"button",type:"submit",value:"Add to favorite"}))}var N={ADD_FAVORITE:"ADD_FAVORITE",DELETE_FAVORITE:"DELETE_FAVORITE",FETCH_FAV_SUCCESS:"FETCH_FAV_SUCCESS",FETCH_FAV_ERROR:"FETCH_FAV_ERROR"};function R(e){var t="".concat(m,"?q=").concat(e).concat(E);return function(r){fetch(t).then((function(t){t.json().then((function(a){console.log(t,a),t.ok?r(function(e,t){return{type:N.FETCH_FAV_SUCCESS,payload:{apiResponse:e,cityName:t}}}(a,e)):r(w(a.message,e))}))}),(function(t){return r(w(t,e))}))}}function w(e,t){return{type:N.FETCH_FAV_ERROR,payload:{error:e,cityName:t}}}r(36);var k=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"favorites"},n.a.createElement("h1",null,"Favorites"),n.a.createElement(T,{onSubmit:function(t){return e.handleAddFavorite(t)}}),this.props.error&&n.a.createElement("div",{className:"error"},"Error: ",this.props.error),n.a.createElement("div",{className:"forecasts"},Object(S.a)(this.props.favorites.entries()).map((function(t){return n.a.createElement(j,{key:t[0],onFetch:function(){return e.props.fetchWeatherByCityName(t[0])},onDelete:function(){return e.props.deleteFavorite(t[0])},forecast:t[1]})}))))}},{key:"handleAddFavorite",value:function(e){e.preventDefault();var t=e.currentTarget.elements.cityName.value;this.props.addFavorite(t)}}]),t}(n.a.Component);var A=Object(i.b)((function(e){return{favorites:e.fav.favorites,error:e.fav.error}}),(function(e){return{addFavorite:function(t){e(function(e){return{type:N.ADD_FAVORITE,payload:e}}(t))},deleteFavorite:function(t){e(function(e){return{type:N.DELETE_FAVORITE,payload:e}}(t))},fetchWeatherByCityName:function(t){e(R(t))}}}))(k),D=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(F,null),n.a.createElement(A,null))}}]),t}(n.a.Component),G=r(9),P=r(19),H=r.n(P),V=r(20),I=r(11),W="favorites";function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var B={favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=JSON.parse(localStorage.getItem(e)),r=[];return null!==t&&Array.isArray(t)&&(r=t),new Map(r.map((function(e){return[e,void 0]})))}()};function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var J=Object(G.d)(Object(G.c)({fav:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(r,!0).forEach((function(t){Object(I.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{error:!1,favorites:new Map(e.favorites)}),t.type){case N.ADD_FAVORITE:e.favorites.has(t.payload)||e.favorites.set(t.payload);break;case N.DELETE_FAVORITE:e.favorites.delete(t.payload);break;case N.FETCH_FAV_SUCCESS:var r=h(t.payload.apiResponse);e.favorites.delete(t.payload.cityName),e.favorites.set(r.cityName,r);break;case N.FETCH_FAV_ERROR:e.error=t.payload.error,e.favorites.delete(t.payload.cityName)}return e},geo:function(e,t){switch(e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(r,!0).forEach((function(t){Object(I.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{error:!1}),t.type){case O.SET_GEOLOCATION:e.coords=t.payload;break;case O.FETCH_GEO_SUCCESS:e.forecast=h(t.payload);break;case O.FETCH_GEO_ERROR:e.error=t.payload}return e}}),Object(G.a)(H.a,V.a));J.subscribe((function(){localStorage.setItem(W,JSON.stringify(Object(S.a)(J.getState().fav.favorites.keys())))}));var M=J;c.a.render(n.a.createElement(i.a,{store:M},n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.c659f596.chunk.js.map