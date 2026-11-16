/** فقط این فایل را برای شخصی‌سازی تغییر بده. */
export const CONFIG = {
  herName: 'خانوم قشنگم',
  myName: 'یه نفر که خیلی دوستت داره',
  elephantName: 'فندق',
  welcome: 'یه مأموریت کوچولو فقط برای تو دارم…',
  secretNote: 'قرار نیست همه‌ی روزا عالی باشن؛ فقط می‌خوام بدونی توی روزای سرد هم یه نفر هست که با تمام وجود هواتو داره. 🤍',
  finalNote: 'تو انتخاب می‌کنی، من با ذوق کنارت میام. حتی اگه انتخابت فقط یه بغل باشه.',
  unknownIranianRestaurant: 'همون رستوران ایرانی که قرار بود با هم بریم 🤭',
  fastFoodRestaurant: 'لیتل ایتالی',
  favoriteCafe: 'کافه تایپ',
  favoritePastryShop: 'شیرینی فرانسه',
  saffronPastryShop: 'شیرینی زعفرانیه',
  invitationDate: 'هر وقتی که حال دلت خوب بود',
  maps: { littleItaly:'', cafeType:'', frenchPastry:'', saffronPastry:'', iranian:'' },
  choices: {
    moods: [
      {id:'sparkly',emoji:'🥰',title:'آفتابی و خوشحال'}, {id:'meh',emoji:'🌥️',title:'یه‌کم بی‌حوصله'},
      {id:'hug',emoji:'🫂',title:'بغل لازمم'}, {id:'grumpy',emoji:'😒',title:'قهرم باهات'},
      {id:'storm',emoji:'⛈️',title:'اعصاب ندارم'}, {id:'unknown',emoji:'🥹',title:'خودمم نمی‌دونم'}
    ],
    comforts: [
      {id:'fine',emoji:'🌷',title:'خوبم، نگران نباش'}, {id:'little',emoji:'🧡',title:'یه‌کم درد دارم'},
      {id:'lots',emoji:'🥺',title:'امروز خیلی درد دارم'}, {id:'tired',emoji:'💤',title:'فقط خسته‌ام'},
      {id:'secret',emoji:'🧸',title:'فقط نازم رو بکش'}
    ],
    wishes: [
      {id:'adventure',emoji:'🍂',title:'یه ماجراجویی کوچولو'}, {id:'cozy',emoji:'🕯️',title:'یه جای گرم و دنج'},
      {id:'taste',emoji:'🍰',title:'یه چیز خوشمزه'}, {id:'home',emoji:'🧸',title:'یه قرار خونگی'},
      {id:'mystery',emoji:'🎁',title:'سورپرایزم کن'}, {id:'none',emoji:'☁️',title:'فعلاً هیچ‌چی'}
    ],
    cuisines: [
      {id:'fast',emoji:'🍕',title:'یه چیز فست‌فودی'}, {id:'iranian',emoji:'🍚',title:'غذای ایرانی'},
      {id:'sweet',emoji:'🍰',title:'فقط شیرینی'}, {id:'notHungry',emoji:'🫶',title:'گرسنه نیستم'}
    ],
    places: [
      {id:'cafeType',emoji:'☕',title:'یه گوشه‌ی دنج برای حرف زدن'},
      {id:'frenchPastry',emoji:'🥐',title:'یه شیرینی‌فروشی نوستالژیک'},
      {id:'saffronPastry',emoji:'🥐',title:'یه شیرینی‌فروشی با دانمارکی‌های خوشمزه'},
      {id:'walk',emoji:'🍁',title:'قدم‌زدن زیر برگ‌ها'},
      {id:'drive',emoji:'🎶',title:'ماشین‌سواری و موزیک'},
      {id:'home',emoji:'🏠',title:'خونه، پتو و آرامش'}
    ],
    drinks: [
      {id:'hotChocolate',emoji:'☕',title:'یه نوشیدنی شکلاتی و گرم'},
      {id:'latte',emoji:'🥛',title:'یه چیز شیری و خوش‌عطر'},
      {id:'tea',emoji:'🫖',title:'چای و یه عالمه حرف'},
      {id:'masala',emoji:'🍵',title:'یه نوشیدنی پر از ادویه'},
      {id:'coffee',emoji:'☕',title:'قهوه برای بیدار شدن'},
      {id:'cold',emoji:'🧊',title:'برخلاف هوا، یه چیز خنک'},
      {id:'whatever',emoji:'🎲',title:'انتخاب با تو!'}
    ],
    sweets: [
      {id:'danish',emoji:'🥐',title:'دانمارکی تازه و خوشمزه'},
      {id:'croissant',emoji:'🥐',title:'کروسان و چیزای کره‌ای'},
      {id:'cake',emoji:'🍰',title:'کیک نرم و خامه‌ای'},
      {id:'cookie',emoji:'🍪',title:'کوکی شکلاتی'},
      {id:'nothing',emoji:'💗',title:'فعلاً شیرینی نمی‌خوام'}
    ]
  }
} as const;
