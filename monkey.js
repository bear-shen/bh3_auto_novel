// ==UserScript==
// @name         hb3 auto novel
// @version      0.1
// @description  崩崩崩小说自动翻书
// @author       https://github.com/bear-shen
// @include        https://event.bh3.com/*
// @grant        none
// ==/UserScript==

//@todo 逆熵第三章的分支注意需要手选，默认第二个
let hasRemark=0;
let run=0;
function loadRemark(){
    if(hasRemark)return;
    $('.remark_btn').click();
    hasRemark=1;
    setTimeout(()=>{
        $('.home_btn_remark').click();
        hasRemark=2;
    },250);
}
run=setInterval(()=>{
    //
    if($('.remark_btn')[0].style.opacity!="0"){
        loadRemark()
    }
    if(hasRemark==1)return;
    hasRemark=0;
    //封面
    if($('.cg').length){
        $('.cg').click();
    }
    //步进
    $('.character-center').click();
},500);