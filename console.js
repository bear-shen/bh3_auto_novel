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