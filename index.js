//点击发送按钮函数
$('#submit').click(function() {
    // 获取输入框数据
    var val = $('#inp').val();
    //如果有数据
    if (val) {
        //页面渲染
        renderDom('mine', val);
        //输入框调入空字符串清空
        $('#inp').val('');
        $.ajax({
            url: "http://www.tuling123.com/openapi/api", //接口地址
            type: "post",
            dataType: "json",
            data: {
                key: "8d2e895401e94978b81d652a7c2aca30", //APIKey
                info: val //用户文本
            },
            success: function(res) {
                console.log(res)
                renderDom('robot', res.text)
            }
        })
    }
})



$('#inp').on('keydown', function(e) {
    console.log(e.keyCode)
    if (e.keyCode == 13) {
        $('#submit').trigger('click');
    }
})


//渲染函数
function renderDom(who, msg) {
    //要渲染的结构
    var str = '<div><div class="avitor"></div><div class="text">' + msg + '</div></div>';
    //添加类名，添加到对应区域’
    $(str).addClass(who).appendTo($('.content-box'));
    // scrollHeight  --->滚动条的高度
    var contentHeight = $('.content-box')[0].scrollHeight;
    var viewHeight = $('.content-box')[0].clientHeight;
    // scrollTop  --->滚动条垂直偏移
    $('.content-box').scrollTop(contentHeight - viewHeight);
}