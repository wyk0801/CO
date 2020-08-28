
$(document).ready(function () {
    InitZstsg.init();
});


var InitZstsg = function () {

    var json =
        {
            "直属": {
                "name": "直属",
                "sub": [
                    {
                        "sname": "中山市实验小学"
                    }, {
                        "sname": "中山市石岐中心小学"
                    }, {
                        "sname": "中山市建勋中学"
                    }, {
                        "sname": "中山市实验中学"
                    }, {
                        "sname": "中山市华侨中学"
                    }, {
                        "sname": "中山市第一中学"
                    }, {
                        "sname": "中山市中山纪念中学"
                    }, {
                        "sname": "中山市第二中学"
                    }, {
                        "sname": "中山市东升高级中学"
                    }, {
                        "sname": "中山市桂山中学"
                    }, {
                        "sname": "中山市杨仙逸中学"
                    }, {
                        "sname": "中山市龙山中学"
                    }, {
                        "sname": "中山市东区中学"
                    }, {
                        "sname": "中山市濠头中学（中山市艺术学校）"
                    }, {
                        "sname": "中山市小榄中学（中山市外国语学校）"
                    }, {
                        "sname": "中山市古镇高级中学"
                    }, {
                        "sname": "中山市中等专业学校"
                    }, {
                        "sname": "中山市体育运动学校"
                    }, {
                        "sname": "中山市沙溪理工学校"
                    }, {
                        "sname": "中山市第一中等职业技术学校"
                    }, {
                        "sname": "中山市港口理工学校"
                    }, {
                        "sname": "中山火炬开发区理工学校"
                    }, {
                        "sname": "中山市建斌中等职业技术学校"
                    }, {
                        "sname": "中山市坦洲理工学校"
                    }, {
                        "sname": "中山市三乡镇理工学校"
                    }, {
                        "sname": "中山市东凤镇理工学校"
                    }, {
                        "sname": "中山市南朗理工学校"
                    }, {
                        "sname": "中山市特殊教育学校"
                    }
                ]
            },
            "开发区": {
                "name": "开发区",
                "sub": [
                    {
                        "sname": "开发区中心小学"
                    }, {
                        "sname": "开发区香晖园小学"
                    }, {
                        "sname": "开发区第一小学"
                    }, {
                        "sname": "开发区第二小学"
                    }, {
                        "sname": "开发区第三小学"
                    }, {
                        "sname": "开发区第四小学"
                    }, {
                        "sname": "开发区第五小学"
                    }, {
                        "sname": "开发区第六小学"
                    }, {
                        "sname": "开发区博凯小学"
                    }, {
                        "sname": "开发区第一中学"
                    }, {
                        "sname": "开发区第二中学"
                    }, {
                        "sname": "中山市卓雅外国语学校"
                    }, {
                        "sname": "中山市广东博文学校"
                    }, {
                        "sname": "中山市纪中雅居乐凯茵学校"
                    }, {
                        "sname": "中山市纪中三鑫凯茵学校"
                    }, {
                        "sname": "开发区新苗学校"
                    }, {
                        "sname": "中山市育英学校"
                    }
                ]
            }
        ,
            "石岐区": {
                "name": "石岐区",
                "sub": [
                    {
                        "sname": "石岐杨仙逸小学"
                    }, {
                        "sname": "石岐第一小学"
                    }, {
                        "sname": "石岐区厚兴郑伟权学校"
                    }, {
                        "sname": "石岐太平小学"
                    }, {
                        "sname": "石岐西厂小学"
                    }, {
                        "sname": "石岐第一城小学"
                    }, {
                        "sname": "石岐实验小学"
                    }, {
                        "sname": "石岐高家基小学"
                    }, {
                        "sname": "石岐区员峰小学"
                    }, {
                        "sname": "石岐张溪郑二小学"
                    }, {
                        "sname": "石岐岐江小学"
                    }, {
                        "sname": "石岐烟墩小学"
                    }, {
                        "sname": "石岐中学"
                    }, {
                        "sname": "石岐启发初级中学"
                    }, {
                        "sname": "北区中学"
                    }, {
                        "sname": "杨仙逸小学体育路学校"
                    }, {
                        "sname": "石岐中心小学大信学校"
                    }, {
                        "sname": "博爱小学"
                    }, {
                        "sname": "中港英文学校（小学部）"
                    }
                ]
            }
        ,
            "东区": {
                "name": "东区",
                "sub": [
                    {
                        "sname": "东区竹苑小学"
                    }, {
                        "sname": "东区水云轩小学"
                    }, {
                        "sname": "东区柏苑中心小学"
                    }, {
                        "sname": "东区雍景园小学"
                    }, {
                        "sname": "东区朗晴小学"
                    }, {
                        "sname": "东区紫岭小学"
                    }, {
                        "sname": "东区松苑中学"
                    }, {
                        "sname": "东区远洋学校"
                    }, {
                        "sname": "东区团益学校"
                    }, {
                        "sname": "东区艳阳学校"
                    }, {
                        "sname": "东区起湾学校"
                    }, {
                        "sname": "东区白沙湾学校"
                    }
                ]
            }
       ,
            "西区": {
                "name": "西区",
                "sub": [
                    {
                        "sname": "西区中心小学"
                    }, {
                        "sname": "西区小学"
                    }, {
                        "sname": "西区昌平小学"
                    }, {
                        "sname": "西区烟洲小学"
                    }, {
                        "sname": "西区沙朗小学"
                    }, {
                        "sname": "西区铁城小学"
                    }, {
                        "sname": "西区广丰小学"
                    }, {
                        "sname": "西区初级中学"
                    }, {
                        "sname": "西区铁城初级中学"
                    }, {
                        "sname": "西区翠景东方小学"
                    }, {
                        "sname": "中山市实验小学蓝波湾学校"
                    }, {
                        "sname": "中山市广浩学校"
                    }, {
                        "sname": "西区聚星学校"
                    }, {
                        "sname": "中山市新长江学校"
                    }
                ]
            }
        ,
            "南区": {
                "name": "南区",
                "sub": [
                    {
                        "sname": "南区北台小学"
                    }, {
                        "sname": "南区竹秀园中心小学"
                    }, {
                        "sname": "南区良都小学"
                    }, {
                        "sname": "中山市良都中学"
                    }, {
                        "sname": "中山市恒美学校"
                    }, {
                        "sname": "中山市侨中英才学校"
                    }
                ]
            }
        ,
            "小榄镇": {
                "name": "小榄镇",
                "sub": [
                    {
                        "sname": "小榄镇联丰小学"
                    }, {
                        "sname": "小榄镇中心小学"
                    }, {
                        "sname": "小榄镇永宁中心小学"
                    }, {
                        "sname": "小榄镇北区小学"
                    }, {
                        "sname": "小榄镇升平小学"
                    }, {
                        "sname": "小榄镇绩东二小学"
                    }, {
                        "sname": "小榄镇德星小学"
                    }, {
                        "sname": "小榄镇永康小学"
                    }, {
                        "sname": "小榄镇盛丰小学"
                    }, {
                        "sname": "小榄镇绩东一小学"
                    }, {
                        "sname": "小榄镇西区小学"
                    }, {
                        "sname": "小榄镇竹源小学"
                    }, {
                        "sname": "小榄镇埒西一小学"
                    }, {
                        "sname": "小榄镇绩西小学"
                    }, {
                        "sname": "小榄镇九洲基小学"
                    }, {
                        "sname": "小榄镇第一中学"
                    }, {
                        "sname": "小榄镇华侨中学"
                    }, {
                        "sname": "中山市永宁中学"
                    }, {
                        "sname": "小榄镇菊城中学"
                    }, {
                        "sname": "小榄镇第二中学"
                    }, {
                        "sname": "小榄吉安学校"
                    }, {
                        "sname": "中山市菊城小学"
                    }, {
                        "sname": "小榄丰华学校"
                    }, {
                        "sname": "小榄广源学校"
                    }, {
                        "sname": "小榄花城中学"
                    }, {
                        "sname": "小榄东阳学校"
                    }, {
                        "sname": "小榄福兴学校"
                    }, {
                        "sname": "中山市翔鸿学校"
                    }, {
                        "sname": "小榄华晖学校"
                    }, {
                        "sname": "小榄博华特殊教育学校"
                    }
                ]
            }
        ,
            "古镇镇": {
                "name": "古镇镇",
                "sub": [
                    {
                        "sname": "古镇镇海洲第一小学"
                    }, {
                        "sname": "古镇镇曹三小学"
                    }, {
                        "sname": "古镇镇曹一小学"
                    }, {
                        "sname": "古镇镇海洲第二小学"
                    }, {
                        "sname": "古镇镇古二小学"
                    }, {
                        "sname": "古镇镇古三小学"
                    }, {
                        "sname": "古镇镇镇南小学"
                    }, {
                        "sname": "古镇镇曹二小学"
                    }, {
                        "sname": "古镇镇古一小学"
                    }, {
                        "sname": "中山市曹步初级中学"
                    }, {
                        "sname": "中山市海洲初级中学"
                    }, {
                        "sname": "古镇学校"
                    }, {
                        "sname": "古镇新徽学校"
                    }
                ]
            }
        ,
            "横栏镇": {
                "name": "横栏镇",
                "sub": [
                    {
                        "sname": "横栏镇第二小学"
                    }, {
                        "sname": "横栏镇三沙小学"
                    }, {
                        "sname": "横栏镇四沙小学"
                    }, {
                        "sname": "横栏镇横栏小学"
                    }, {
                        "sname": "横栏中学"
                    }, {
                        "sname": "横栏港源学校"
                    }, {
                        "sname": "横栏华文学校"
                    }
                ]
            }
        ,
            "东升镇": {
                "name": "东升镇",
                "sub": [
                    {
                        "sname": "东升镇坦背小学"
                    }, {
                        "sname": "东升镇利生小学"
                    }, {
                        "sname": "东升镇益隆小学"
                    }, {
                        "sname": "东升镇同乐小学"
                    }, {
                        "sname": "东升镇同茂小学"
                    }, {
                        "sname": "东升镇新胜小学"
                    }, {
                        "sname": "东升镇太平小学"
                    }, {
                        "sname": "东升镇东升小学"
                    }, {
                        "sname": "东升胜龙小学"
                    }, {
                        "sname": "东升镇兆隆小学"
                    }, {
                        "sname": "东升镇裕民小学"
                    }, {
                        "sname": "东升镇东方小学"
                    }, {
                        "sname": "东升镇高沙小学"
                    }, {
                        "sname": "东升初级中学"
                    }, {
                        "sname": "东升镇旭日初级中学"
                    }, {
                        "sname": "中山市东升华盛学校"
                    }, {
                        "sname": "中山市东升桦珑学校"
                    }, {
                        "sname": "中山市东升求实学校"
                    }, {
                        "sname": "中山市丽景学校"
                    }
                ]
            }
        ,
            "港口镇": {
                "name": "港口镇",
                "sub": [
                    {
                        "sname": "港口镇民主小学"
                    }, {
                        "sname": "港口镇群众小学"
                    }, {
                        "sname": "港口镇西街小学"
                    }, {
                        "sname": "港口镇石特小学"
                    }, {
                        "sname": "港口镇下南小学"
                    }, {
                        "sname": "港口镇中心小学"
                    }, {
                        "sname": "港口镇中南小学"
                    }, {
                        "sname": "港口镇大丰小学"
                    }, {
                        "sname": "港口中学"
                    }, {
                        "sname": "港口镇大南中学"
                    }, {
                        "sname": "港口港源学校"
                    }, {
                        "sname": "华南师范大学中山附属小学"
                    }, {
                        "sname": "华南师范大学中山附属中学"
                    }
                ]
            }
        ,
            "沙溪镇": {
                "name": "沙溪镇",
                "sub": [
                    {
                        "sname": "沙溪镇云汉小学"
                    }, {
                        "sname": "沙溪镇港园小学"
                    }, {
                        "sname": "沙溪镇圣狮小学"
                    }, {
                        "sname": "沙溪镇乐群小学"
                    }, {
                        "sname": "沙溪镇虎逊小学"
                    }, {
                        "sname": "沙溪镇下泽小学"
                    }, {
                        "sname": "沙溪镇中心小学"
                    }, {
                        "sname": "沙溪镇象角小学"
                    }, {
                        "sname": "沙溪镇康乐小学"
                    }, {
                        "sname": "沙溪镇龙瑞小学"
                    }, {
                        "sname": "沙溪镇濠涌小学"
                    }, {
                        "sname": "沙溪镇龙头环学校"
                    }, {
                        "sname": "沙溪初级中学"
                    }, {
                        "sname": "中山市溪角初级中学"
                    }, {
                        "sname": "中山市申明亭学校"
                    }, {
                        "sname": "沙溪华强学校"
                    }
                ]
            }
       ,
            "大涌镇": {
                "name": "大涌镇",
                "sub": [
                    {
                        "sname": "大涌镇旗南小学"
                    }, {
                        "sname": "大涌南文小学"
                    }, {
                        "sname": "大涌镇岚田中心小学"
                    }, {
                        "sname": "大涌镇旗北小学"
                    }, {
                        "sname": "大涌镇安堂小学"
                    }, {
                        "sname": "中山市卓山中学"
                    }, {
                        "sname": "大涌旗风学校"
                    }
                ]
            }
        ,
            "黄圃镇": {
                "name": "黄圃镇",
                "sub": [
                    {
                        "sname": "黄圃镇马安小学"
                    }, {
                        "sname": "黄圃镇横档小学"
                    }, {
                        "sname": "黄圃镇大岑小学"
                    }, {
                        "sname": "黄圃镇新地中心小学"
                    }, {
                        "sname": "黄圃镇对甫小学"
                    }, {
                        "sname": "黄圃镇吴栏小学"
                    }, {
                        "sname": "黄圃镇大雁小学"
                    }, {
                        "sname": "黄圃镇新沙小学"
                    }, {
                        "sname": "黄圃镇石军小学"
                    }, {
                        "sname": "黄圃镇培红小学"
                    }, {
                        "sname": "黄圃镇团范小学"
                    }, {
                        "sname": "黄圃镇中学"
                    }, {
                        "sname": "黄圃镇马新初级中学"
                    }, {
                        "sname": "黄圃雏鹰学校"
                    }, {
                        "sname": "黄圃华洋学校"
                    }
                ]
            }
        ,
            "南头镇": {
                "name": "南头镇",
                "sub": [
                    {
                        "sname": "南头镇中心小学"
                    }, {
                        "sname": "南头镇升辉小学"
                    }, {
                        "sname": "南头镇民安小学"
                    }, {
                        "sname": "南头镇将军小学"
                    }, {
                        "sname": "南头镇初级中学"
                    }, {
                        "sname": "南头三鑫学校"
                    }, {
                        "sname": "南头华晖学校"
                    }
                ]
            }
        ,
            "东凤镇": {
                "name": "东凤镇",
                "sub": [
                    {
                        "sname": "东凤镇同安小学"
                    }, {
                        "sname": "东凤镇小沥小学"
                    }, {
                        "sname": "东凤镇吉昌小学"
                    }, {
                        "sname": "东凤镇西罟小学"
                    }, {
                        "sname": "东凤镇安乐小学"
                    }, {
                        "sname": "东凤镇凤鸣小学"
                    }, {
                        "sname": "东凤镇民和小学"
                    }, {
                        "sname": "东凤镇永益小学"
                    }, {
                        "sname": "东凤镇东罟小学"
                    }, {
                        "sname": "东凤镇中心小学"
                    }, {
                        "sname": "东凤中学"
                    }, {
                        "sname": "东凤镇第二中学"
                    }, {
                        "sname": "东凤东海学校"
                    }, {
                        "sname": "东凤穗成新徽学校"
                    }
                ]
            }
        ,
            "阜沙镇": {
                "name": "阜沙镇",
                "sub": [
                    {
                        "sname": "阜沙镇罗松小学"
                    }, {
                        "sname": "阜沙镇丰联小学"
                    }, {
                        "sname": "阜沙镇牛角小学"
                    }, {
                        "sname": "阜沙镇中心小学"
                    }, {
                        "sname": "中山市牛角初级中学"
                    }, {
                        "sname": "阜沙中学"
                    }, {
                        "sname": "阜沙鹏诚学校"
                    }
                ]
            }
        ,
            "三角镇": {
                "name": "三角镇",
                "sub": [
                    {
                        "sname": "三角镇光明小学"
                    }, {
                        "sname": "三角镇高平小学"
                    }, {
                        "sname": "三角镇蟠龙小学"
                    }, {
                        "sname": "三角镇沙栏小学"
                    }, {
                        "sname": "三角镇中心小学"
                    }, {
                        "sname": "三角镇三角小学"
                    }, {
                        "sname": "中山市沙栏初级中学"
                    }, {
                        "sname": "三角中学"
                    }, {
                        "sname": "三角四海学校"
                    }
                ]
            }
        ,
            "民众镇": {
                "name": "民众镇",
                "sub": [
                    {
                        "sname": "民众镇接源小学"
                    }, {
                        "sname": "民众镇民众中心小学"
                    }, {
                        "sname": "民众镇育才小学"
                    }, {
                        "sname": "民众镇新平小学"
                    }, {
                        "sname": "民众镇浪网小学"
                    }, {
                        "sname": "民众镇三民学校"
                    }, {
                        "sname": "中山市浪网中学"
                    }, {
                        "sname": "民众中学"
                    }, {
                        "sname": "民众新徽学校"
                    }, {
                        "sname": "民众锦标学校"
                    }, {
                        "sname": "民众德恒学校"
                    }
                ]
            }
        ,
            "南朗镇": {
                "name": "南朗镇",
                "sub": [
                    {
                        "sname": "南朗镇横门小学"
                    }, {
                        "sname": "南朗镇翠亨小学"
                    }, {
                        "sname": "南朗镇云衢小学"
                    }, {
                        "sname": "南朗镇南朗小学"
                    }, {
                        "sname": "南朗镇榄边小学"
                    }, {
                        "sname": "南朗镇云衢中学"
                    }, {
                        "sname": "南朗旗风学校"
                    }
                ]
            }
        ,
            "五桂山区": {
                "name": "五桂山区",
                "sub": [
                    {
                        "sname": "中山市五桂山学校"
                    }, {
                        "sname": "中山市龙泉学校"
                    }, {
                        "sname": "五桂山桂南学校"
                    }, {
                        "sname": "中港英文学校（中学部）"
                    }
                ]
            }
        ,
            "三乡镇": {
                "name": "三乡镇",
                "sub": [
                    {
                        "sname": "三乡镇新圩小学"
                    }, {
                        "sname": "三乡镇白石环小学"
                    }, {
                        "sname": "三乡镇载德小学"
                    }, {
                        "sname": "三乡镇大布小学"
                    }, {
                        "sname": "三乡镇雍陌小学"
                    }, {
                        "sname": "三乡镇光后中心小学"
                    }, {
                        "sname": "三乡镇平岚小学"
                    }, {
                        "sname": "三乡镇鸦岗小学"
                    }, {
                        "sname": "三乡镇初级中学"
                    }, {
                        "sname": "中山市博爱初级中学"
                    }, {
                        "sname": "三乡新民学校"
                    }, {
                        "sname": "三乡东华学校"
                    }, {
                        "sname": "中山市桂山君里学校"
                    }, {
                        "sname": "三乡平东学校"
                    }, {
                        "sname": "三乡南峰学校"
                    }, {
                        "sname": "中山市纪中三鑫双语学校"
                    }
                ]
            }
        ,
            "坦洲镇": {
                "name": "坦洲镇",
                "sub": [
                    {
                        "sname": "坦洲镇十四村小学"
                    }, {
                        "sname": "坦洲镇合胜小学"
                    }, {
                        "sname": "坦洲镇群联小学"
                    }, {
                        "sname": "坦洲镇林东小学"
                    }, {
                        "sname": "坦洲镇永二小学"
                    }, {
                        "sname": "坦洲镇裕洲小学"
                    }, {
                        "sname": "坦洲镇联一小学"
                    }, {
                        "sname": "坦洲镇新合小学"
                    }, {
                        "sname": "坦洲镇同胜小学"
                    }, {
                        "sname": "坦洲镇永一小学"
                    }, {
                        "sname": "坦洲镇前进小学"
                    }, {
                        "sname": "坦洲镇安阜小学"
                    }, {
                        "sname": "坦洲镇七村小学"
                    }, {
                        "sname": "坦洲镇第三初级中学"
                    }, {
                        "sname": "坦洲中学"
                    }, {
                        "sname": "坦洲实验中学"
                    }, {
                        "sname": "坦洲镇爱华学校"
                    }, {
                        "sname": "坦洲明德学校"
                    }, {
                        "sname": "坦洲华特雅学校"
                    }, {
                        "sname": "中山市广大汇翠学校"
                    }
                ]
            }
       ,
            "板芙镇": {
                "name": "板芙镇",
                "sub": [
                    {
                        "sname": "板芙镇板芙小学"
                    }, {
                        "sname": "板芙镇新联小学"
                    }, {
                        "sname": "板芙镇湖洲小学"
                    }, {
                        "sname": "板芙镇深湾小学"
                    }, {
                        "sname": "板芙镇广福小学"
                    }, {
                        "sname": "板芙镇板芙初级中学"
                    }, {
                        "sname": "板芙镇第一中学"
                    }, {
                        "sname": "板芙芙蓉学校"
                    }, {
                        "sname": "中山市同方学校"
                    }
                ]
            }
        ,
            "神湾镇": {
                "name": "神湾镇",
                "sub": [
                    {
                        "sname": "神湾中心小学"
                    }, {
                        "sname": "神湾中学"
                    }, {
                        "sname": "神湾育才学校"
                    }, {
                        "sname": "神湾神舟学校"
                    }
                ]
            }
        };




    //表单字段
    function GetSchoolItem() {
        $("#list1").val("");
        //$(".common-div").eq(3).empty();
        var html = '<span class="common-icon"><img src="/Content/login/image/common.png" /></span>';
        html +=
            '<input type="text" name="listpicker" onblur="textb(this)" id="list1" title="学校" iid="44" key="学校" req="true" data_length="50" pattern="null" errtip="学校名称必须是中文" placeholder="请选择学校" readonly="">';

        //$(".common-div").eq(3).html(html);
        $(".common-div").eq(3).show();

        var city = $("#list0").val();
        if (city === "") {
            return;
        }
        var sublist = json[city].sub;
        var len = sublist.length;
        var valist = [];
        for (var i = 0; i < len; i++) {
            valist.push(sublist[i].sname);
        }
        $("#list1").parent().show();
        //$("#text1")
        //    .picker({
        //        title: "请选择学校",
        //        cols: [
        //            {
        //                textAlign: 'center',
        //                values: valist
        //            }
        //        ]
        //    });
        //$("#text1").picker("setValue", valist[0]);


        $("#list1")
            .select("update", {
                title: "请选择学校",
                items: valist
            });
        //$("#text1").picker("setValue", valist[0]);

    };

    var Url = "http://zs.yibaolib.com/zstsg/index.html";

    function getZSInfo(url, compet_id, user_id) {
        $.ajax({
            url: url + "/API/Exam/Express",
            type: "post",
            dataType: "json",
            crossDomain: true == !(document.all),
            data: {
                "head": {
                    "method": "co.compet.zstsg",
                    "app_id": "co001",
                    "timestamp": "2017-03-30 14:3000",
                    "format": "json",
                    "version": 1.0,
                    "terminal_type": "web"
                },
                "param": {
                    "compet_id": compet_id,
                    "user_id": user_id
                }
            },
            success: function (data) {
                var dt = eval('(' + data + ')');
                if (dt.head.code === "102") {
                    $.alert("", "您已参加过一场大赛，不能多次参加", function () {
                        window.location.href = Url;//跳回地址需要自行改变
                    });
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    }

    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    function gettype() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
        var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
        var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
        var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
        var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
        var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
        var bIsAndroid = sUserAgent.match(/android/i) == 'android';

        if (bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM || bIsAndroid) {
            Url = "http://zs.yibaolib.com/zstsg/main.html";
        };
    }


    return {
        init: function () {//compet_id
            gettype();

            var compet_id = getQueryString("competId");
            if (compet_id === "66DA904EC21C65D0") {
                //$("#list0").parent().hide();
                $("#list1").parent().hide();
            }
            if (compet_id === "3D652CC9F4D7FBAA" || compet_id === "8479352BA774C7F0") {//A0EB23E9D068DA78    3D652CC9F4D7FBAA
                $("#list1").parent().hide();
                $("#list0")
                    .on("change",
                        function () {
                            GetSchoolItem();
                        });
            }
        },
        postzs: function (url, compet_id, user_id) {
            getZSInfo(url, compet_id, user_id);
        }
    }
}();


