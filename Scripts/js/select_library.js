/*
*表示选择图书馆控件
*/
var librarydata = '[{"libraryId":"1","libraryName":"上海川远科技","libraryCode":"shcykj","libraryAllCode":"shanghaichuanyuankeji"},{"libraryId":"1","libraryName":"江阴市少年儿童图书馆","libraryCode":"jyssnettsg","libraryAllCode":"jiangyingshishaonianertongtushuguan"},{"libraryId":"1","libraryName":"上海青浦图书馆","libraryCode":"shqptsg","libraryAllCode":"shanghaiqinputushuguan"},{"libraryId":"1","libraryName":"张家港市少年儿童图书馆","libraryCode":"zjgssnettsg","libraryAllCode":"zhangjiagangshishaonianertongtushuguan"},{"libraryId":"1","libraryName":"上海徐家汇图书馆","libraryCode":"shxjhtsg","libraryAllCode":"shanghaixujiahuitushuguan"},{"libraryId":"1","libraryName":"上海松江图书馆","libraryCode":"shsjtsg","libraryAllCode":"shanghaisongjiangqutushuguan"},{"libraryId":"1","libraryName":"河南洛阳少儿图书馆","libraryCode":"hnlysetsg","libraryAllCode":"helanluoyangshaoertushuguan"},{"libraryId":"1","libraryName":"武汉少儿图书馆","libraryCode":"whsetsg","libraryAllCode":"wuhanshaoertushuguan"}]';
//表示获取选择图书馆控件
function getLibraryBuy(e) {

    $("body .dqld_div").remove();
    var librarylist = eval(librarydata);
    var newStr = new Array();
    newStr.push("<div class=\"dqld_div\" style=\"\"><div class=\"title\">请选择图书馆</div><div class=\"close-select\">关闭</div><div class=\"cont\"><ul>");
    for (var i = 0, psize = librarylist.length; i < psize; i++) {
        newStr.push('<li onclick="checkSelect(\'' + librarylist[i].libraryName + '\',\'' + librarylist[i].libraryCode + '\')">' + librarylist[i].libraryName + '</li>');
    }
    newStr.push("</ul></div></div>");
    $("body").append(newStr.join(""));
    $(".close-select").click(function () {
        $("body .dqld_div").remove();
    });
}
//输入检测图书馆控件
function selectchange(e) {
    $("body .dqld_div").remove();
    var svl = $(e).val();
    var librarylist = eval(librarydata);
    var newStr = new Array();
    newStr.push("<div class=\"dqld_div\" style=\"\"><div class=\"title\">请选择图书馆</div><div class=\"close-select\">关闭</div><div class=\"cont\"><ul>");
    for (var i = 0, psize = librarylist.length; i < psize; i++) {
        if (librarylist[i].libraryCode.indexOf(svl) >= 0 || librarylist[i].libraryAllCode.indexOf(svl) >= 0 || librarylist[i].libraryName.indexOf(svl) >= 0)
            newStr.push('<li onclick="checkSelect(\'' + librarylist[i].libraryName + '\',\'' + librarylist[i].libraryCode + '\')">' + librarylist[i].libraryName + '</li>');

    }
    if (newStr.length <= 1) {
        getLibraryBuy(e);
    }

    newStr.push("</ul></div></div>");
    $("body").append(newStr.join(""));
    $(".close-select").click(function () {
        $("body .dqld_div").remove();
    });
}

//选择图书馆
function checkSelect(e, b) {
    $("#homecity_name").val(e);
    $("#homecity_name").parent().next()[0].innerText = '';
    $("#cityid").val(b);
    $("body .dqld_div").remove();
}

$(function () {

    $.ajax({
        url: "/Account/Getlibray",
        type: "post",
        dataType: "text",
        data: { "competId": $("#hid_competid").val() },
        async: false,
        success: function (data) {
            var result = eval('(' + data + ')');
            if (result.head.code === "200") {
                librarydata = result.param.List;
                //alert("获取图书成功!");
            } else {
                $("#homecity_name").parent().next()[0].innerText = '获取图书失败'

            }
        }
    });

    $("#homecity_name").bind('click', function () {
        getLibraryBuy(this);
    });
    $("#homecity_name").bind("input", function () {
        selectchange(this);
    });
    //图书馆
    $("#homecity_name").bind("blur", function () {
        GetLibrayExit();
    });
    ////文本改变时
    //$(document).on('click', function (e) {
    //    GetLibrayExit();
    //});
});
function GetLibrayExit() {
    var lib = $("#homecity_name").val();//图书馆
    //判断是否存在
    var librarylist = eval(librarydata);
    for (var i = 0, psize = librarylist.length; i < psize; i++) {
        if (librarylist[i].libraryName == lib) {
            Eunit = true;
            $("#homecity_name").parent().next()[0].innerText = '';
            break;
        } else {
            //$("#homecity_name").parent().next()[0].innerText = '该图书馆未找到!';
            //Eunit = false;

        }
    }
}
