function yj() {//动态页面的ui
	if (!$('.detail-content div').length) {
		return;
	}
	$('body').append('<div id="copyToCS">一键</div>')
    $('#copyToCS').css({ 'width': '50px', 'height': '50px' });
    $('#copyToCS').css('position', 'fixed')
    $('#copyToCS').css('top', '70px')
    $('#copyToCS').css('left', '350px')
    $('#copyToCS').css('background-image', 'linear-gradient(to top, #00c6fb 0%, #005bea 100%)')
    $('#copyToCS').css('color', 'white')
    $('#copyToCS').css('font-size', 'large')
    $('#copyToCS').css('z-index', 100000)
    $('#copyToCS').css({ '-webkit-transform': 'skew(20deg)', '-moz-transform': 'skew(20deg)', '-o-transform': 'skew(20deg)' })
    $('#copyToCS').css('border-radius', '25px')
    $('#copyToCS').css({ 'text-align': 'center', 'line-height': '50px' })
    $('#copyToCS').css('cursor', 'pointer')
    $('#copyToCS').css({
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
    });
	$('body').append('<div id="zlhbg">不抽</div>')
    $('#zlhbg').css({ 'width': '50px', 'height': '50px' });
    $('#zlhbg').css('position', 'fixed')
    $('#zlhbg').css('top', '150px')
    $('#zlhbg').css('left', '350px')
    $('#zlhbg').css('background-image', 'linear-gradient(to top, #00c6fb 0%, #005bea 100%)')
    $('#zlhbg').css('color', 'white')
    $('#zlhbg').css('font-size', 'large')
    $('#zlhbg').css('z-index', 100000)
    $('#zlhbg').css({ '-webkit-transform': 'skew(20deg)', '-moz-transform': 'skew(20deg)', '-o-transform': 'skew(20deg)' })
    $('#zlhbg').css('border-radius', '25px')
    $('#zlhbg').css({ 'text-align': 'center', 'line-height': '50px' })
    $('#zlhbg').css('cursor', 'pointer')
    $('#zlhbg').css({
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
    });
}
function anniu() {
    var wer = `
		<div id="blp">
		<div id="anniu">检查</div>
		<div id="hhh"></div>
		<div><input type="text" id="amount" style="border:0; color:#f6931f; font-weight:bold;"></div>
		</div>
		<style>
		#hhh{
		margin-top: 10px;
		width: 200px;
		}
		#amount{
		 margin-left: 80px;
		 width:55px;
		}
		#anniu{
		 cursor: pointer;
		  width: 100px; /*宽*/
		  height: 30px; /*高*/
		 margin-left: 50px;
		  text-align: center; /*字体水平居中*/
		  font-size: 14px; /*字体大小*/
		  line-height: 30px; /*行高*/
		  color: #fff;
		  text-transform: uppercase; /*字体大写*/
		  text-decoration: none; /*字体增加装饰：去除下划线*/
		  font-family: sans-serif; /*非衬线体*/
		  box-sizing: border-box; /*盒模型大小规则*/
		  background: linear-gradient(
			90deg,#03a9f4, #f441a5, #ffeb3b, 
		  #03a9f4, #f441a5, #ffeb3b, #03a9f4); /*渐变背景*/
		  border-radius: 60px; /*边框圆角*/
		  background-size: 400%; /*背景大小*/
		  z-index: 10000; /*层叠定位*/
		  -webkit-user-select:none;

			 				-moz-user-select:none;

							-ms-user-select:none;

							user-select:none;

		}
		#anniu:hover{
		  animation: animate 8s linear infinite alternate; /*动画: 名称 时间 线性 循环 播放完回退播放*/
		}
		@keyframes animate{
		  0%{
			background-position: 0%; /*修改背景定位，实现渐变色炫光*/
		  }
		  50%{
			background-position: 100%;
		  }
		  100%{
			background-position: 0%;
		  }
		}
		#anniu::before{ /*之前添加*/
		  content: ''; /*内容*/
 
		  z-index: -1; 
		  background: linear-gradient(
			90deg,#03a9f4, #f441a5, #ffeb3b, #03a9f4, 
		  #f441a5, #ffeb3b, #03a9f4);
		  border-radius: 40px;
		  background-size: 400%;
		  filter: blur(20px); /*过渡：模糊*/
		  opacity: 0; /*透明度*/
		  transition: 1s; /*过渡时间*/
		}
		#anniu:hover::before{
		  filter: blur(20px);
		  opacity: 1;
		  animation: animate 8s linear infinite; /*注意动画名称统一*/
		}
			</style>
	`
    $("body").append(wer);
    $('#blp').css('position', 'fixed');
    $('#blp').css('top', '410px');
    $('#blp').css('left', '1100px');
    $('#hhh').slider({
        range: true,
        min: 0,
        max: 6,
        values: [0, 1],
        step: 0.1,
        slide: function (event, ui) {
            $("#amount").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount").val($("#hhh").slider("values", 0) +
        " - " + $("#hhh").slider("values", 1));
    $("#progressbar").progressbar({ 'value': 0 });
    $("#progressbar").hide();
}