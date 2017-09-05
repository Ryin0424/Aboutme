/* jQuery 部分 */
$('document').ready(function(){

	$('.fa-bars').click(function(event) { /*開啟關閉手機版menu*/
		$('.menu-mobile').slideToggle(300);
	});

	// $('.go-next').click(function(e) { /*點擊.go-next前往#about*/
	// 	e.preventDefault();
	// 	$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
	// });

	$('#go-top').click(function(e) { /*點擊.go-top前往頁首*/
		e.preventDefault();
		$('html,body').animate({scrollTop:0}, 1000);
	});
	$('.go-top').click(function(e) { /*點擊.go-top前往頁首*/
		e.preventDefault();
		$('html,body').animate({scrollTop:0}, 1000);
	});
	

	/* 任何href包含.scrollTo屬性之元件皆套用效果*/
	$('.scrollTo').click(function(e){ /* 動畫移動到指定地點 */
		e.preventDefault(); //取消原本的href效果
		var target = $(this).attr('href'); //讀取href內容
		var targetPos = $(target).offset().top;
		$('html, body').animate({scrollTop: targetPos}, 1000);
	  });


	var showSkill = false; // 預設為flase；避免重複觸發 顯示progress-bar狀態，須寫於scroll之外(避免每次滾動都重複執行)

	/*   滾動時變化  */
	$(document).scroll(function(e){ 
		
		var scrollPos = $(window).scrollTop(); // 取得目前卷軸位置(高度)
		var windowHeight = $(window).height(); // 取得目前視窗(於卷軸高度中的)位置(高度)

		/* 處理header變化 */
		if(scrollPos<50){ /* 當畫面置頂時，header高100，無底線；h1及menu水平置中*/
			$('.header').css({'height':'100px',
							  'border-bottom':'none',
							  'background-color':'rgba(62, 62, 62, 0.88)'})
			$('h1').css({'margin-top':'20px',
						 'margin-left':'5%'})
			$('ul.menu li a').css({'line-height':'100px',
								   'color':'#fff'})

			$('.fa-bars').css({'color':'#fff', //漢堡圖
							   'border':'1px solid #fff',
							   'margin-top':'28px'})
			$('.menu-mobile').css({'top':'100px', //手機版menu
								   'background-color':'rgba(62, 62, 62, 0.88)',
								   'border-top':'1px solid rgba(245, 245, 245, 0.75)',})
			$('.menu-mobile li a').css({'color':'#fff'})					   
		}
		if(scrollPos>50){ /* 當畫面離開頂部，header縮小，增加底線；h1及menu水平置中*/
			$('.header').css({'height':'70px',
							  'border-bottom':'1px solid #333',
							  'background-color':'#fff'})
			$('h1').css({'margin-top':'0px',
						 'margin-left':'8%'})
			$('ul.menu li a').css({'line-height':'70px',
								   'color':'#000'})

			$('.fa-bars').css({'color':'#000', //漢堡圖
							   'border':'1px solid #000',
							   'margin-top':'13px'})
			$('.menu-mobile').css({'top':'70px', //手機版menu
							   'background-color':'rgba(255, 255, 255, 0.85)',
							   'border-top':'',})
			$('.menu-mobile li a').css({'color':'#000'})
		}
		
		/* progress bar */
		var skillTop = $('#skills').position().top; // 取得skills區塊的頂部高度
		if (skillTop <= (scrollPos + windowHeight / 4) && !showSkill) { // 當卷軸高度+1/4個螢幕高度 位置 >= skills區塊頂部高度時觸發 
		  showSkill = true; // 當showSkill狀態為true，則不再執行此(顯示progress-bar狀態)方程式
		  $('#skills .progress-bar').each(function(){
			var ValueWidth = $(this).data('progress'); // 讀出data-progress儲存之數值 = ValueWidth
			$(this).css('width', ValueWidth + '%');
		  });
		}

		/* animated */
		$('.animated').each(function(){
			var thisPos = $(this).offset().top; // 取得該物件座標(高度)
			if((windowHeight + scrollPos) >= thisPos) { // 當[視窗座標+滾動座標](當前座標) >= 物件座標 (即物件完整顯示於螢幕時)
			   $(this).addClass('fadeIn');
			}
		});	
	})
})


/* Google Map API */
var map;
function initMap() {
	var Ryin = {lat: 24.187270, lng: 120.619731};
	map = new google.maps.Map
	(document.getElementById('map'), {
		center: Ryin, /*連絡資訊位置*/
		zoom: 18 /*縮放比例*/
	});
	var marker = new google.maps.Marker({
		position: Ryin,
        map: map,
        title: '聯絡我'
    });
}
