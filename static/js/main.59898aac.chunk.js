(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports=[{userId:1,id:1,title:"Asinus asinorum sinum currus",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]},21:function(e,t,a){},27:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(22),r=a.n(l),c=a(40),i=(a(21),a(5)),s=a(6),d=a(8),u=a(7),m=a(9),p=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.completed,n=e.toggleCompleted,l=e.deleteOne;return o.a.createElement("li",{className:a?"completed":""},o.a.createElement("div",{className:"view"},o.a.createElement("input",{className:"toggle",type:"checkbox",onClick:n,defaultChecked:a}),o.a.createElement("label",null,t),o.a.createElement("button",{className:"destroy",onClick:l})))}}]),t}(n.Component),E=a(10),f=a(42),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:E},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Todos"),o.a.createElement("input",{className:"new-todo",placeholder:"What needs doing?",onKeyDown:this.props.addTodo,autoFocus:!0})),o.a.createElement("section",{className:"main"},o.a.createElement("ul",{className:"todo-list"},t.map(function(t){return o.a.createElement(p,{key:t.id,title:t.title,completed:t.completed,toggleCompleted:e.props.toggleCompleted(t.id),deleteOne:e.props.deleteOne(t.id)})}))),o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},o.a.createElement("strong",null,this.props.completed)," items(s) left"),o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement(f.a,{exact:!0,to:"/",activeClassName:"selected"},"All")),o.a.createElement("li",null,o.a.createElement(f.a,{exact:!0,to:"/active",activeClassName:"selected"},"Active")),o.a.createElement("li",null,o.a.createElement(f.a,{exact:!0,to:"/completed",activeClassName:"selected"},"Completed"))),o.a.createElement("button",{className:"clear-completed",onClick:this.deleteAll},"Clear Completed")))}}]),t}(n.Component),h=a(41),b=a(11),g=a(15),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).toggleCompleted=function(e){return function(t){a.props.toggleCompleted(e)}},a.deleteOne=function(e){return function(t){a.props.toggleCompleted(e)}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todos,t={toggleCompleted:this.toggleCompleted,deleteOne:this.deleteOne,completed:e.filter(function(e){return!e.completed}).length};return o.a.createElement("section",{className:"todoapp"},o.a.createElement(h.a,null,o.a.createElement(b.a,{path:"/active",render:function(a){return o.a.createElement(O,Object.assign({},a,t,{todos:e.filter(function(e){return!e.completed})}))}}),o.a.createElement(b.a,{path:"/completed",render:function(a){return o.a.createElement(O,Object.assign({},a,t,{todos:e.filter(function(e){return e.completed})}))}}),o.a.createElement(b.a,{path:"/",render:function(a){return o.a.createElement(O,Object.assign({},a,t,{todos:e}))}})))}}]),t}(n.Component),j=Object(g.b)(function(e){return{todos:e.todoList}},function(e){return{deleteOne:function(t){return e(function(e){return{type:"DELETE_TODO",payload:e}}(t))},toggleCompleted:function(t){return e(function(e){return{type:"TOGGLE_TODO",payload:e}}(t))}}})(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(14),w=a(26),y=a(12),N={todoList:E},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_TODO":var a=e.todoList.map(function(e){return e.id===t.payload&&(e.completed=!e.completed),e});return Object(y.a)({},e,{todoList:a});case"ADD_TODO":var n={userId:1,id:Math.floor(5e8*Math.random()),title:t.payload,completed:!1};return Object(y.a)({},e,{todos:Object(w.a)(e.todoList).concat([n])});case"DELETE_TODO":var o=e.todoList.filter(function(e){return e.id!==t.payload});return Object(y.a)({},e,{todoList:o});case"CLEAR_COMPLETED_TODOS":var l=e.todoList.filter(function(e){return!e.completed});return Object(y.a)({},e,{todoList:l});default:return e}},T=Object(C.b)(L,window._REDUX_DEVTOOLS_EXTENSION_&&window._REDUX_DEVTOOLS_EXTENSION_());r.a.render(o.a.createElement(function(){return o.a.createElement(g.a,{store:T},o.a.createElement(c.a,{basename:"/todos-part-4"},o.a.createElement(j,null)))},null),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.59898aac.chunk.js.map