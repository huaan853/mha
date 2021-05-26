;(function () {
    var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
    var _html = document.getElementsByTagName('html')[0];
    view_width>640?_html.style.fontSize=640/16 +'px':_html.style.fontSize =view_width/16+'px';
})();

var globalComponent ={
    carousel:function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationType: 'bullets',
            paginationClickable: true,
            spaceBetween: 30,
            //将3秒（3000） 改为 2秒（2000）
            autoplay : 2000,
            loop:true
        });
    },
    carouselTwo:function (num) {
        //将3秒（3000） 改为 2秒（2000）
        var _autoplay = num > 1 ? 2000 : false;
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationType: 'bullets',
            paginationClickable: true,
            spaceBetween: 30,
            autoplay : _autoplay,
            loop:true
        });
    },
    tabList:function (tabs,tabCont) {
        tabs.on('click',function(){
            var index=tabs.index(this);
            $(this).addClass('current').siblings().removeClass('current');
            tabCont.eq(index).removeClass('hide-item').siblings().addClass('hide-item');
        });
    },
    meetInfo:function (items) {
        var defHide=items.find('dl :gt(1)');
        defHide.hide();
        items.on('click',function () {
            $(this).toggleClass('open').find('dl :gt(1)').toggle();
        })
    },
    toggleItem: function (title) {
        title.on('click',function () {
            $(this).toggleClass('open').siblings().toggle()
        })
    },
    getSchedule: function (dateLiCont,dateCont) {
        var dateTabs=dateLiCont.find('.date-list li'),
            dateTabsLen=dateTabs.length,
            itemIndex=0,
            count=1,
            btn=dateLiCont.find('.date-sel-btn');
        var shift=$('.date-list').width()-$('.date-sel-btn').width()/2;


        dateTabs.on('click',function () {
            var index=$(this).index();
            $(this).addClass('current').siblings().removeClass('current');
            dateCont.eq(index).removeClass('hide-item').siblings().addClass('hide-item');
        });
        btn.on('click',function () {
            var curItem=dateTabs.filter('.current');
            var nextShift=$('.date-list').width()-$('.date-sel-btn').width()/2;
            if($(this).data('ctrl')==='prev'){
                itemIndex--;

                if(curItem.index()===0){
                    itemIndex=0;
                }else if(curItem.index()%4==0){
                    count--;
                    if(curItem.index()==4){
                        dateTabs.eq(0).css('margin-left',0);
                    }else {
                        count--;
                        shift=shift*count;
                        dateTabs.eq(0).css('margin-left',-shift);
                    }
                    if(count==0){
                        count=1;
                    }
                }

                curItem.removeClass('current').prev().addClass('current');
            }else{

                itemIndex++;
                if(curItem.index()===dateTabsLen-1){
                    itemIndex=dateTabsLen-1;

                }
                else if(curItem.index()==4*count-1){
                    nextShift=nextShift*count;
                    dateTabs.eq(0).css('margin-left',-nextShift);
                    count++;
                }


                curItem.removeClass('current').next().addClass('current');
            }
            dateTabs.eq(itemIndex).addClass('current').siblings().removeClass('current');
            dateCont.eq(itemIndex).removeClass('hide-item').siblings().addClass('hide-item');

        })
    },
    enterAd:function (ad,time,tt,url) {
        var count=tt;
        time.html(count);
        // ad.delay(3000).fadeOut();
        var timer=setInterval(function () {
            time.html(--count)
        },1000);
        setTimeout(function () {
            clearInterval(timer)
            location.href = url;
        },tt*1000)
    }
}