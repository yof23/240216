'use strict';
{

  const widthValue = document.body.clientWidth;

  // もどる・つぎへの設定
  const prevArrows = document.querySelectorAll('.prevArrow');
  const topArrows  = document.querySelectorAll('.topArrow');
  const nextArrows = document.querySelectorAll('.nextArrow');
  prevArrows.forEach(prevArrow => {
    prevArrow.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: window.scrollX - widthValue,
        behavior: 'smooth'
      });
    });
  });
  topArrows.forEach(topArrow => {
    topArrow.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  });
  nextArrows.forEach(nextArrow => {
    nextArrow.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: window.scrollX + widthValue,
        behavior: 'smooth'
      });
    });
  });


  // スクロールイベント
  window.addEventListener('scroll', function() {
    // メニューバー
    const navarrow = document.querySelector('.navarrow');
    if (window.scrollX > widthValue - 100) {
      navarrow.classList.remove('moveUp8svh');
    } else {
      navarrow.classList.add('moveUp8svh');
    }

    // 背景
    const bgSenro = this.document.querySelector('.bg-senro');
    const bgYama1 = document.querySelector('.bg-yama1');
    const bgYama2 = document.querySelector('.bg-yama2');
    const bgYama3 = document.querySelector('.bg-yama3');
    const tree = document.querySelector('.bg-tree');
    bgSenro.style.transform = `translateX(${window.scrollX / 1.8}px)`;
    bgYama1.style.transform = `translateX(${window.scrollX / 1.1}px)`;
    bgYama2.style.transform = `translateX(${window.scrollX / 1.2}px)`;
    bgYama3.style.transform = `translateX(${window.scrollX / 1.3}px)`;
    tree.style.transform    = `translateX(${window.scrollX / 1.5}px)`;
  });


  // 目次のクリック動作
  const p1 = document.querySelector('.p1');
  p1.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue,
      behavior: 'smooth'
    });
  });
  const p2 = document.querySelector('.p2');
  p2.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 2,
      behavior: 'smooth'
    });
  });
  const p3 = document.querySelector('.p3');
  p3.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 3,
      behavior: 'smooth'
    });
  });
  const p4 = document.querySelector('.p4');
  p4.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 4,
      behavior: 'smooth'
    });
  });
  const p5 = document.querySelector('.p5');
  p5.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 5,
      behavior: 'smooth'
    });
  });
  const p6 = document.querySelector('.p6');
  p6.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 6,
      behavior: 'smooth'
    });
  });
  const p7 = document.querySelector('.p7');
  p7.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 7,
      behavior: 'smooth'
    });
  });
  const p8 = document.querySelector('.p8');
  p8.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 8,
      behavior: 'smooth'
    });
  });
  const p9 = document.querySelector('.p9');
  p9.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 9,
      behavior: 'smooth'
    });
  });
  const p10 = document.querySelector('.p10');
  p10.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 10,
      behavior: 'smooth'
    });
  });
  const p11 = document.querySelector('.p11');
  p11.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 11,
      behavior: 'smooth'
    });
  });
  const p12 = document.querySelector('.p12');
  p12.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 12,
      behavior: 'smooth'
    });
  });
  const p13 = document.querySelector('.p13');
  p13.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 13,
      behavior: 'smooth'
    });
  });
  const p14 = document.querySelector('.p14');
  p14.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 14,
      behavior: 'smooth'
    });
  });
  const p15 = document.querySelector('.p15');
  p15.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 15,
      behavior: 'smooth'
    });
  });
  const p16 = document.querySelector('.p16');
  p16.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 16,
      behavior: 'smooth'
    });
  });
  const p17 = document.querySelector('.p17');
  p17.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 17,
      behavior: 'smooth'
    });
  });
  const p18 = document.querySelector('.p18');
  p18.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: widthValue * 18,
      behavior: 'smooth'
    });
  });


  // 現在の時刻の取得
  const nowMonths  = document.querySelectorAll('.nowMonth');
  const nowDates   = document.querySelectorAll('.nowDate');
  const nowYoubis  = document.querySelectorAll('.nowYoubi');
  const nowHours   = document.querySelectorAll('.nowHour');
  const nowMinutes = document.querySelectorAll('.nowMinute');
  const nowSeconds = document.querySelectorAll('.nowSecond');
  function getNowTime() {
    const now = new Date();
    nowMonths.forEach(nowMonth => {
      nowMonth.textContent = now.getMonth() + 1;
    });
    nowDates.forEach(nowDate => {
      nowDate.textContent = now.getDate();
    });
    nowYoubis.forEach(nowYoubi => {
      const YoubiArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      nowYoubi.textContent = YoubiArr[now.getDay()];
    });
    nowHours.forEach(nowHour => {
      nowHour.textContent = now.getHours();
    });
    nowMinutes.forEach(nowMinute => {
      nowMinute.textContent = ("0" + now.getMinutes()).slice(-2);
    });
    nowSeconds.forEach(nowSecond => {
      nowSecond.textContent = ("0" + now.getSeconds()).slice(-2);
    });
    setTimeout(getNowTime, 1000);
  }
  window.onload = function() {
    getNowTime();
  }

}
