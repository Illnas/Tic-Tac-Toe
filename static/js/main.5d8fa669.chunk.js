(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var s=r(1),a=r.n(s),c=r(4),o=r.n(c),n=(r(9),r(2)),i=r(0),l=function(e){var t=e.refPlayerOne,r=e.borderState,s=e.victoryOne;return!1===r?t.current.style.border="solid 2px black":!0===r&&(t.current.style.border=""),Object(i.jsxs)("div",{className:"contained",children:[Object(i.jsx)("div",{ref:t,className:"playerOne",children:"Player One"}),Object(i.jsxs)("div",{className:"victory",children:["Victories: ",s]})]})},d=function(e){var t=e.refPlayerTwo,r=e.borderState,s=e.victoryTwo;return!0===r?t.current.style.border="solid 2px black":!1===r&&(t.current.style.border=""),Object(i.jsxs)("div",{className:"contained",children:[Object(i.jsx)("div",{ref:t,className:"playerTwo",children:"Player Two"}),Object(i.jsxs)("div",{className:"victory",children:["Victories: ",s]})]})},O=function(e){var t=e.setBorderState,r=e.refDisplay,a=Object(s.useRef)();return Object(i.jsxs)("div",{ref:a,className:"start",children:[Object(i.jsx)("h2",{className:"startingTitle",children:"Welcome to Tic-Tac-Toe"}),Object(i.jsx)("button",{className:"startBtn",onClick:function(){return t(!1),r.current.style.display="flex",void(a.current.style.display="none")},children:"Start"})]})},j=function(e){var t=e.refDisplay,r=e.refNewGame,s=e.setBorderState,a=e.setRestart,c=e.setPosition,o=e.winner,n=e.victoryOne,l=e.setVictoryOne,d=e.victoryTwo,O=e.setVictoryTwo;return Object(i.jsxs)("div",{ref:r,className:"newGame",children:[Object(i.jsx)("h2",{children:o}),Object(i.jsx)("button",{className:"startBtn",onClick:function(){return a(Math.floor(1e5*Math.random())),c(Array(9).fill(null)),s(!1),r.current.style.display="none",t.current.style.display="flex","Player One has won!"===o&&l(n+1),void("Player Two has won!"===o&&O(d+1))},children:"Play Again!"})]})},b=function(e){var t=e.borderState,r=e.setBorderState,a=e.value,c=e.position,o=Object(s.useState)(""),l=Object(n.a)(o,2),d=l[0],O=l[1],j=Object(s.useState)(!1),b=Object(n.a)(j,2),u=b[0],y=b[1];return Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"button",className:"btn",onClick:function(e){!1===t&&(O("X"),y(!0),r(!t),c[a]="X"),!0===t&&(O("O"),r(!t),y(!0),c[a]="O")},disabled:u,value:a,children:d})})},u=function(e){var t=e.borderState,r=e.setBorderState,s=e.position,a=e.restart;return Object(i.jsxs)("div",{id:"gridStyle",children:[Object(i.jsxs)("div",{className:"btn-group",role:"group",children:[Object(i.jsx)(b,{borderState:t,setBorderState:r,position:s,value:0,restart:a}),Object(i.jsx)(b,{borderState:t,setBorderState:r,position:s,value:1,restart:a}),Object(i.jsx)(b,{borderState:t,setBorderState:r,position:s,value:2,restart:a})]}),Object(i.jsxs)("div",{className:"btn-group",role:"group",children:[Object(i.jsx)(b,{borderState:t,setBorderState:r,position:s,value:3,restart:a}),Object(i.jsx)(b,{borderState:t,setBorderState:r,position:s,value:4,restart:a}),Object(i.jsx)(b,{borderState:t,setBorderState:r,position:s,value:5,restart:a})]}),Object(i.jsxs)("div",{className:"btn-group",role:"group",children:[Object(i.jsx)(b,{borderState:t,setBorderState:r,position:s,value:6,restart:a}),Object(i.jsx)(b,{borderState:t,setBorderState:r,position:s,value:7,restart:a}),Object(i.jsx)(b,{borderState:t,setBorderState:r,position:s,value:8,restart:a})]})]})};var y=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),r=Object(s.useRef)(),a=Object(s.useRef)(),c=Object(s.useState)(null),o=Object(n.a)(c,2),b=o[0],y=o[1],v=Object(s.useState)(Array(9).fill(null)),p=Object(n.a)(v,2),x=p[0],f=p[1],S=Object(s.useState)(0),h=Object(n.a)(S,2),w=h[0],X=h[1],m=Object(s.useState)(0),B=Object(n.a)(m,2),N=B[0],T=B[1],g=Object(s.useState)(0),P=Object(n.a)(g,2),k=P[0],R=P[1],V="";return("X"===x[0]&&"X"===x[1]&&"X"===x[2]||"X"===x[0]&&"X"===x[3]&&"X"===x[6]||"X"===x[0]&&"X"===x[4]&&"X"===x[8]||"X"===x[1]&&"X"===x[4]&&"X"===x[7]||"X"===x[2]&&"X"===x[5]&&"X"===x[8]||"X"===x[2]&&"X"===x[4]&&"X"===x[6]||"X"===x[3]&&"X"===x[4]&&"X"===x[5]||"X"===x[6]&&"X"===x[7]&&"X"===x[8])&&(r.current.style.display="none",a.current.style.display="flex",V="Player One has won!"),("O"===x[0]&&"O"===x[1]&&"O"===x[2]||"O"===x[0]&&"O"===x[3]&&"O"===x[6]||"O"===x[0]&&"O"===x[4]&&"O"===x[8]||"O"===x[1]&&"O"===x[4]&&"O"===x[7]||"O"===x[2]&&"O"===x[4]&&"O"===x[6]||"O"===x[2]&&"O"===x[5]&&"O"===x[8]||"O"===x[3]&&"O"===x[4]&&"O"===x[5]||"O"===x[6]&&"O"===x[7]&&"O"===x[8])&&(r.current.style.display="none",a.current.style.display="flex",V="Player Two has won!"),!0===x.every((function(e){return null!==e}))&&(r.current.style.display="none",a.current.style.display="flex",V="It's a draw!"),console.log(x),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{id:"showgrid",ref:r,children:[Object(i.jsx)(l,{refPlayerOne:e,borderState:b,refDisplay:r,victoryOne:N}),Object(i.jsx)(u,{className:"showgrid",borderState:b,setBorderState:y,position:x,restart:w},w),Object(i.jsx)(d,{refPlayerTwo:t,borderState:b,victoryTwo:k})]}),Object(i.jsx)(O,{setBorderState:y,refDisplay:r}),Object(i.jsx)(j,{refNewGame:a,refDisplay:r,setBorderState:y,setRestart:X,setPosition:f,winner:V,victoryOne:N,setVictoryOne:T,victoryTwo:k,setVictoryTwo:R})]})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))},9:function(e,t,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.5d8fa669.chunk.js.map