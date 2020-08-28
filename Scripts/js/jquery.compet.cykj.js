/// <reference path="D:\CO\SHCYCompetOnline\ChuanYuan.Web.Kj\Views/Exam/Exam.cshtml" />
/// <reference path="D:\CO\SHCYCompetOnline\ChuanYuan.Web.Kj\Views/Exam/Exam.cshtml" />
/************************************************************************ 
 * Project Name：$rootnamespace$   
 * Project Description：      
 * Class Name：$safeitemrootname$ 
 * Version：v2.0.0.0  
 * Explain：      
 * Author :  HeFei 
 * Create Time：$time$ 
 * Update Time：$time$ 
 * WeChat：DerekChou2014
************************************************************************ 
 * Copyright @ 上海川远信息科技有限公司 $year$. All rights reserved. 
************************************************************************/

//题目页面初始化
function Init(examType) {
    $("#tab2").addClass(examType);
    $(".bg-kk").attr("src", "../Content/images/" + formatName(examType, "2") + "_bg.png");
}

//公用通过类型获取值
function formatName(name, types) {
    var str = "";
    $.ajax({
        url: "GetValueByEnumsName",
        type: "post",
        dataType: "text",
        async: false,
        data: { ens: name, type: types },
        success: function (data) {
            str = data;
        }
    });
    return str;
}
