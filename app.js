// // let email = "  ali@gmail.com  ";

// // if (email.trim()) {
// //   console.log(email.trim());
// // } else {
// //   console.log("email noto'g'ri");
// // }

// let fullname = "   Ali   Valiyev   ";
// console.log(fullname.trim().length);
// fullname = fullname.trim().toLocaleUpperCase();
// console.log(fullname);
// let newfullname = "";
// for (let i of fullname) {
//   if (i !== " ") {
//     newfullname += i;
//   } else if (i === " ") {
//     newfullname += i;
//   }
// }

// console.log(newfullname.length);

//===============================================================================#

function sum(x, y) {
  return x + y;
}
console.log(sum(3, 2));
console.log(sum(-3, -6));
console.log(sum(7, 3));

//========================================================================

function tosekunds(minutes) {
  return minutes * 60;
}
console.log(tosekunds(5));
console.log(tosekunds(3));
console.log(tosekunds(2));

//=====================================================================================
function nextinteger(int) {
  return int + 1;
}

console.log(nextinteger(0));
console.log(nextinteger(9));
console.log(nextinteger(-3));

//=================================================================================================
// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

function uchburchakyizasi(asosi, balandlik) {
  return (asosi * balandlik) / 2;
}

console.log(uchburchakyizasi(3, 2));
console.log(uchburchakyizasi(7, 4));
console.log(uchburchakyizasi(10, 10));

//=============================================================================

// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.

function agetodays(age) {
  return age * 365;
}

console.log(agetodays(65));
console.log(agetodays(0));
console.log(agetodays(20));

//===========================================================================================

// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing

function sonnikubi(kubi) {
  return kubi ** 3;
}
console.log(sonnikubi(3));
console.log(sonnikubi(5));
console.log(sonnikubi(10));

//=====================================================================================================

// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin

function power(x, y) {
  return x * y;
}

console.log(power(230, 10));
console.log(power(110, 3));
console.log(power(480, 20));

//===================================================================================================

// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.
function hourtosekunds(hour) {
  return hour * 3600;
}
console.log(hourtosekunds(2));
console.log(hourtosekunds(10));
console.log(hourtosekunds(24));

//===============================================================================================================

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

function uchinchitomon(tomon1, tomon2) {
  return tomon1 + tomon2 - 1;
}
console.log(uchinchitomon(8, 10));
console.log(uchinchitomon(5, 7));
console.log(uchinchitomon(9, 2));

//======================================================================================
// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.

function qoldiq(son1, son2) {
  return son1 % son2;
}
console.log(qoldiq(1, 3));
console.log(qoldiq(3, 4));
console.log(qoldiq(-9, 45));
console.log(qoldiq(5, 5));

//==========================================================================================================

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni

function tortburchakyuzi(boyi, eni) {
  return boyi * eni;
}
console.log(tortburchakyuzi(6, 7));
console.log(tortburchakyuzi(20, 10));
console.log(tortburchakyuzi(2, 9));

//================================================================================================

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

function srtingqoshish(a) {
  return "Something" + " " + a;
}

console.log(srtingqoshish("Bob Jane"));
console.log(srtingqoshish("something"));
//============================================================================================

// // 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:
// kvadrat(5) ᔍ 25
// kvadrat(9) ᔍ 81
// kvadrat(100) ᔍ 10000

function kvadrat(b) {
  return b ** 2;
}

console.log(kvadrat(5));
console.log(kvadrat(9));
console.log(kvadrat(100));
//================================================================================================

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

function noldan(raqam) {
  return raqam <= 0;
}

console.log(noldan(5));
console.log(noldan(0));
console.log(noldan(-2));

//=======================================================================================

// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180

function ichkiburchalar(n) {
  return (n - 2) * 180;
}

console.log(ichkiburchalar(3));
console.log(ichkiburchalar(4));
console.log(ichkiburchalar(6));

//======================================================================================================

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang

function ochkolar(x, y) {
  return x * 2 + y * 3;
}

console.log(ochkolar(1, 1));
console.log(ochkolar(7, 5));
console.log(ochkolar(38, 8));

//===================================================================================================
// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// Namuna:
// nameString("Mubashir") ᔍ "MubashirEdabit"
// nameString("Matt") ᔍ "MattEdabit"
// nameString("javaScript") ᔍ "javaScriptEdabit"

function nameString(ism) {
  return ism + "Edabit";
}

console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));

//==================================================================================================

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.
function ikkitaSon(x, y) {
  return x + y < 100;
}
console.log(ikkitaSon(22, 15));
console.log(ikkitaSon(83, 34));
console.log(ikkitaSon(3, 77));

//==================================================================================

// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) ᔍ [1]
// printArray(3) ᔍ [1, 2, 3]
// printArray(6) ᔍ [1, 2, 3, 4, 5, 6]

function printArray(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  return n;
}

console.log(printArray(2));
console.log(printArray(3));
console.log(printArray(6));
//====================================================================================

// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.

function oyoqlar(tovuq, qoy, sigir) {
  return tovuq * 2 + qoy * 4 + sigir * 4;
}

console.log(oyoqlar(2, 3, 5));
console.log(oyoqlar(1, 2, 3));
console.log(oyoqlar(5, 2, 8));

//=================================================================================

// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!

function and(d, m) {
  return d && m;
}

console.log(and(true, false));
console.log(and(true, true));
console.log(and(false, true));
console.log(and(false, false));

//=======================================================================================================

// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.

function tengmi(x, y) {
  return x === y;
}

console.log(tengmi(4, 8));
console.log(tengmi(5, 5));
console.log(tengmi(2, "2"));

//===============================================================================================
// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.

function futbolochko(yutishlar, duranglar, maglubiyatlar) {
  return yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0;
}
console.log(futbolochko(3, 4, 2));
console.log(futbolochko(5, 0, 2));
console.log(futbolochko(0, 0, 1));

//=================================================================================

// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.

function sekundlar(soat, minut) {
  return soat * 3600 + minut * 60;
}

console.log(sekundlar(1, 3));
console.log(sekundlar(2, 0));
console.log(sekundlar(0, 0));

//================================================================================================

// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:
// fun(4) ᔍ false
// fun(9) ᔍ false
// fun(7) ᔍ true

function fun(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(fun(4));
console.log(fun(9));
console.log(fun(7));

//=============================================================================================

// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.
// function tengMi(x, y) {
// // code...
// }
// Namuna:
// checkEquality(1, true) ᔍ false
// // raqam bilan mantiqiy qiymat => bir-biriga teng emas
// checkEquality(0, "0") ᔍ false
// // raqam va string => ma'lumot turlari to'g'ri
// 13
// DASTURLASHDAN MASALALAR
// kelmaydi.
// checkEquality(1, 1) ᔍ true
// // raqam va raqam => bir-biriga ikkala holatda ham
// teng

function tengMi(x, y) {
  return x === y;
}

console.log(tengMi(1, true));
console.log(tengMi(0, "0"));
console.log(tengMi(1, 1));

//=========================================================================================================

// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// boolean qiymatni stringga o’girib qaytarib bersin

function booleanToString(bool) {
  return String(bool);
}

console.log(booleanToString(true)); // "true"
console.log(booleanToString(false)); // "false"

//=======================================================================================================

// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin.
// Namuna:
// arrowFunc(3) ᔍ 3
// arrowFunc("3") ᔍ "3"
// arrowFunc(true) ᔍ true

let arrowFunc = (x) => x;
console.log(arrowFunc(3));
console.log(arrowFunc("3"));
console.log(arrowFunc(true));

//===========================================================================================================

// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini
// qaytarsin.

function framesoni(minut, frame) {
  return minut * 60 * frame;
}

console.log(framesoni(1, 1));
console.log(framesoni(10, 1));
console.log(framesoni(10, 25));
