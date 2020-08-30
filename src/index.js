const $app=document.getElementById('app');
function strReverse(str){
    return str.split('').reverse().join('');
}
const strInput="Hello World";
const strHolder="The result will be here ...";
const strHtml=`
<img src="./src/assets/logo.PNG" alt="logo"/>
<h1>${strInput}</h1>
<button id="do">Show the reverse of"${strInput}"</button>
<button id="reset">Do reset</button>
<p id="result">${strHolder}</p>
`;
$app.innerHTML=strHtml;
const $result=document.getElementById('result');
document.getElementById('do').onclick=function(){
    $result.innerHTML=`The reverse of "${strInput}" is "${strReverse(strInput)}"`;
};
document.getElementById('reset').onclick=function(){
    $result.innerHTML=strHolder;
};

