




// スクロールアニメーション　ここから

gsap.timeline({})
    .fromTo(".start",

        {y:60,opacity:0.2},
        {y:0,opacity:1,duration:2,
            stagger:{
                each:0.1,
            }
        }
    );
   


gsap.fromTo(".concept",
  {
    opacity: 0, // 開始時の透明度
    y: 60// 開始時のY軸方向の位置（ピクセル）
  },
  {
    opacity: 1, // 終了時の透明度
    y: 0, // 終了時のY軸方向の位置
    duration: 1, // アニメーションの期間（秒）
    scrollTrigger: {
      trigger: ".concept",
      start: "top center", // スクロール位置の開始点
      end: "bottom center", // スクロール位置の終了点
      toggleActions: "play none none none"
    }
  });




  gsap.fromTo(".rooms",
  {
    opacity: 0, // 開始時の透明度
    y: 60// 開始時のY軸方向の位置（ピクセル）
  },
  {
    opacity: 1, // 終了時の透明度
    y: 0, // 終了時のY軸方向の位置
    duration: 1, // アニメーションの期間（秒）
    scrollTrigger: {
      trigger: ".rooms",
      start: "top center", // スクロール位置の開始点
      end: "bottom center", // スクロール位置の終了点
      toggleActions: "play none none none"
    }
  });


  gsap.fromTo(".travel",
  {
    opacity: 0, // 開始時の透明度
    y: 60// 開始時のY軸方向の位置（ピクセル）
  },
  {
    opacity: 1, // 終了時の透明度
    y: 0, // 終了時のY軸方向の位置
    duration: 1, // アニメーションの期間（秒）
    scrollTrigger: {
      trigger: ".travel",
      start: "top center", // スクロール位置の開始点
      end: "bottom center", // スクロール位置の終了点
      toggleActions: "play none none none"
    }
  });


  gsap.fromTo(".more",
  {
    opacity: 0, // 開始時の透明度
    y: 60// 開始時のY軸方向の位置（ピクセル）
  },
  {
    opacity: 1, // 終了時の透明度
    y: 0, // 終了時のY軸方向の位置
    duration: 1, // アニメーションの期間（秒）
    scrollTrigger: {
      trigger: ".more",
      start: "top center", // スクロール位置の開始点
      end: "bottom center", // スクロール位置の終了点
      toggleActions: "play none none none"
    }
  });


  // スクロールアニメーション　ここまで





  // リンクアニメーション　ここまで


// 各リンクに対してクリックイベントを設定




  // リンクアニメーション　ここから



  



