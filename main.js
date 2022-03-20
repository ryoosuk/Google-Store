$(function(){
    //「開く」がクリックされた場合
    $('.hum-menu[data-state="inactive"] button').on('click',function(){
        if($('body').css('overflow-y') == 'auto'){
            $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効
            $('.hum-menu[data-state="inactive"]').attr('data-state','active');
            console.log("open");
        } else if ($('body').css('overflow-y') == 'hidden'){
            $('.hum-menu[data-state="active"]').attr('data-state','inactive');                  // モーダルウィンドウを非表示
            $('body').css('overflow-y', 'auto');     // 本文の縦スクロールを有効
            console.log("close");
        };
    });
});