// import 알아보기
// import { createServer } from "http";
// import { readFileSync } from "fs";

const http = require("http");
const fs = require("fs");
const app = http.createServer((request, response) => {
  let url = request.url;
  console.log(url);
  if (url == "/") {
    url = "/index.html";
  }
  if (url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  // reponse.end 안에 어떤 코드를 넣느냐에 따라 사용자에게 전송하는 데이터가 바뀜
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);

// var http = require('http');
// var fs = require('fs');
// var url = require('url'); // nodejs에 있는 모듈을 불러올때 require 사용
// // 모듈 : 기본적으로 제공하는 기능들을 그룹핑해놓은 각각의 그룹

// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     var title = queryData.id
//     console.log(queryData.id);
//     if(_url == '/'){
//       title = 'Welcome';
//     }
//     if(_url == '/favicon.ico'){
//       response.writeHead(404);
//       response.end();
//       return;
//     }
//     response.writeHead(200);
//     fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description){
//       var template = `
//       <!doctype html>
//       <html>
//         <head>
//           <title>WEB - ${title}</title>
//           <meta charset="utf-8">
//           <link rel="stylesheet" href="style.css">
//           <script src="colors.js"></script>
//         </head>
//         <body>
//           <h1><a href="/">WEB</a></h1>
//           <div id="grid">
//             <ol>
//               <li><a href="/?id=HTML">HTML</a></li>
//               <li><a href="/?id=CSS">CSS</a></li>
//               <li><a href="/?id=JavaScript">JavaScript</a></li>
//             </ol>
//             <div id="article">
//               <h2>${title}</h2>
//               <p>${description}</p>
//             </div>
//           </div>
//           <div id="nightMode">
//             <input type="button" value="night" onclick="
//               nightDayHandler(this);
//             ">
//           </div>
//         </body>
//       </html>
//     `;
//     response.end(template);
//     });

// });
// app.listen(3000);
