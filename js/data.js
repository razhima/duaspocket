/* =========================
   DATA.JS - AUTHENTIC DUAS (NO DUPLICATES, NO DUMMY DATA)
========================= */

/* =========================
   CATEGORIES
========================= */

const defaultCategories = [
{ id: 1, name: "Morning & Evening", icon: "🌅" },
{ id: 2, name: "Sleep", icon: "🌙" },
{ id: 3, name: "Travel", icon: "✈️" },
{ id: 4, name: "Prayer", icon: "🕌" },
{ id: 5, name: "Daily Life", icon: "📖" },
{ id: 6, name: "Protection", icon: "🛡️" },
{ id: 7, name: "Food & Drink", icon: "🍽️" },
{ id: 8, name: "Forgiveness", icon: "🤲" }
];

/* =========================
   INIT CATEGORIES (FIRST TIME ONLY)
========================= */

if (!localStorage.getItem("categories")) {
localStorage.setItem("categories", JSON.stringify(defaultCategories));
}

/* =========================
   AUTHENTIC DUAS DATABASE (NO REPEATS)
========================= */

if (!localStorage.getItem("duas")) {

const duas = [

/* =========================
   1
========================= */
{
id: 1,
title: "Morning Dhikr",
category: "Morning & Evening",
arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
translation: "We have entered the morning and all dominion belongs to Allah.",
reference: "Sahih Muslim 2723",
favorite: false
},

/* =========================
   2
========================= */
{
id: 2,
title: "Evening Dhikr",
category: "Morning & Evening",
arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ",
translation: "We have entered the evening and all dominion belongs to Allah.",
reference: "Sahih Muslim 2723",
favorite: false
},

/* =========================
   3
========================= */
{
id: 3,
title: "Morning Protection Dua",
category: "Morning & Evening",
arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا",
translation: "O Allah, by You we enter the morning and by You we enter the evening.",
reference: "Abu Dawood 5068",
favorite: false
},

/* =========================
   4
========================= */
{
id: 4,
title: "Before Sleeping",
category: "Sleep",
arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
translation: "In Your name, O Allah, I die and I live.",
reference: "Sahih al-Bukhari 6324",
favorite: false
},

/* =========================
   5
========================= */
{
id: 5,
title: "Sleep Protection",
category: "Sleep",
arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
translation: "O Allah, protect me from Your punishment on the Day You resurrect Your servants.",
reference: "Abu Dawood 5045",
favorite: false
},

/* =========================
   6
========================= */
{
id: 6,
title: "Travel Dua",
category: "Travel",
arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
translation: "Glory be to Him who has subjected this for us.",
reference: "Sahih Muslim 1342",
favorite: false
},

/* =========================
   7
========================= */
{
id: 7,
title: "Travel Protection",
category: "Travel",
arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى",
translation: "O Allah, we ask You for righteousness and piety in this journey.",
reference: "Sahih Muslim 1342",
favorite: false
},

/* =========================
   8
========================= */
{
id: 8,
title: "After Prayer",
category: "Prayer",
arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ",
translation: "O Allah, You are Peace and from You comes peace.",
reference: "Sahih Muslim 591",
favorite: false
},

/* =========================
   9
========================= */
{
id: 9,
title: "Tasbeeh After Salah",
category: "Prayer",
arabic: "سُبْحَانَ اللَّهِ، الْحَمْدُ لِلَّهِ، اللَّهُ أَكْبَرُ",
translation: "Glory be to Allah, all praise is for Allah, Allah is the Greatest.",
reference: "Sahih Muslim 597",
favorite: false
},

/* =========================
   10
========================= */
{
id: 10,
title: "Entering Home",
category: "Daily Life",
arabic: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا",
translation: "In the name of Allah we enter and leave.",
reference: "Abu Dawood 5096",
favorite: false
},

/* =========================
   11
========================= */
{
id: 11,
title: "Leaving Home",
category: "Daily Life",
arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
translation: "In the name of Allah, I trust in Allah.",
reference: "Abu Dawood 5095",
favorite: false
},

/* =========================
   12
========================= */
{
id: 12,
title: "Before Eating",
category: "Food & Drink",
arabic: "بِسْمِ اللَّهِ",
translation: "In the name of Allah.",
reference: "Sahih Muslim 2017",
favorite: false
},

/* =========================
   13
========================= */
{
id: 13,
title: "After Eating",
category: "Food & Drink",
arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا",
translation: "All praise is for Allah who fed us.",
reference: "Abu Dawood 4023",
favorite: false
},

/* =========================
   14
========================= */
{
id: 14,
title: "Bathroom Entry",
category: "Daily Life",
arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ",
translation: "O Allah, I seek refuge in You from evil and evil beings.",
reference: "Sahih al-Bukhari 142",
favorite: false
},

/* =========================
   15
========================= */
{
id: 15,
title: "Bathroom Exit",
category: "Daily Life",
arabic: "غُفْرَانَكَ",
translation: "I seek Your forgiveness.",
reference: "Abu Dawood 30",
favorite: false
},

/* =========================
   16
========================= */
{
id: 16,
title: "Protection from Evil",
category: "Protection",
arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ",
translation: "I seek refuge in the perfect words of Allah.",
reference: "Sahih Muslim 2708",
favorite: false
},

/* =========================
   17
========================= */
{
id: 17,
title: "General Protection",
category: "Protection",
arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ",
translation: "In the name of Allah with whose name nothing can harm.",
reference: "Abu Dawood 5088",
favorite: false
},

/* =========================
   18
========================= */
{
id: 18,
title: "Seeking Forgiveness",
category: "Forgiveness",
arabic: "أَسْتَغْفِرُ اللَّهَ",
translation: "I seek forgiveness from Allah.",
reference: "Sahih al-Bukhari 6307",
favorite: false
},

/* =========================
   19
========================= */
{
id: 19,
title: "Repentance Dua",
category: "Forgiveness",
arabic: "اللَّهُمَّ اغْفِرْ لِي وَتُبْ عَلَيَّ",
translation: "O Allah, forgive me and accept my repentance.",
reference: "Ibn Majah 3814",
favorite: false
},

/* =========================
   20
========================= */
{
id: 20,
title: "Gratitude Dua",
category: "Daily Life",
arabic: "الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ",
translation: "All praise is for Allah in every situation.",
reference: "General authentic narration",
favorite: false
}

];

localStorage.setItem("duas", JSON.stringify(duas));

}

/* =========================
   SAFE HELPERS
========================= */

function getAllDuas(){
return JSON.parse(localStorage.getItem("duas")) || [];
}

function getAllCategories(){
return JSON.parse(localStorage.getItem("categories")) || [];
}