// بُن وهيل — fictional café brand, built as a Sarmadax portfolio sample. Prices in EGP.
window.MENU = {
  name: { ar: 'بُن وهيل', en: 'Bunn & Hail' },
  address: { ar: 'شارع ٢٦ يوليو، الزمالك، القاهرة', en: '26th of July St, Zamalek, Cairo' },
  maps: 'https://www.google.com/maps/search/?api=1&query=Zamalek+Cairo',
  categories: [
    { id: 'espresso', ar: 'قهوة إسبريسو', en: 'Espresso bar', icon: 'cup', items: [
      ['esp', 'إسبريسو', 'Espresso', 60],
      ['esp-double', 'دبل إسبريسو', 'Double espresso', 80],
      ['americano', 'أمريكانو', 'Americano', 75],
      ['cortado', 'كورتادو', 'Cortado', 90],
      ['flat-white', 'فلات وايت', 'Flat white', 105],
      ['cappuccino', 'كابتشينو', 'Cappuccino', 100],
      ['latte', 'لاتيه', 'Latte', 105],
      ['hail-latte', 'لاتيه بالهيل', 'Cardamom latte', 120, 'الأكثر طلباً', 'Most ordered'],
      ['spanish', 'سبانيش لاتيه', 'Spanish latte', 120],
      ['mocha', 'موكا', 'Mocha', 115],
    ]},
    { id: 'brew', ar: 'قهوة مختصة', en: 'Specialty brew', icon: 'drip', items: [
      ['v60-eth', 'V60 إثيوبي', 'Ethiopian V60', 140, 'مختصة', 'Single origin'],
      ['v60-col', 'V60 كولومبي', 'Colombian V60', 130],
      ['chemex', 'كيمكس لشخصين', 'Chemex for two', 220],
      ['turkish', 'قهوة تركي', 'Turkish coffee', 55],
      ['turkish-hail', 'تركي محوّج بالهيل', 'Turkish with cardamom', 65],
      ['saudi', 'قهوة عربي ودلّة', 'Arabic coffee pot', 160],
    ]},
    { id: 'cold', ar: 'مشروبات باردة', en: 'Iced & cold', icon: 'glass', items: [
      ['cold-brew', 'كولد برو', 'Cold brew', 110],
      ['iced-latte', 'آيس لاتيه', 'Iced latte', 110],
      ['iced-hail', 'آيس لاتيه بالهيل', 'Iced cardamom latte', 125],
      ['iced-spanish', 'آيس سبانيش لاتيه', 'Iced Spanish latte', 125],
      ['affogato', 'أفوجاتو', 'Affogato', 120],
      ['frappe-caramel', 'فرابيه كراميل', 'Caramel frappé', 135],
      ['frappe-pistachio', 'فرابيه فستق', 'Pistachio frappé', 150],
    ]},
    { id: 'fresh', ar: 'عصائر وموهيتو', en: 'Juices & mojito', icon: 'citrus', items: [
      ['orange', 'برتقال فريش', 'Fresh orange', 70],
      ['mango', 'مانجو', 'Mango', 90],
      ['lemon-mint', 'ليمون نعناع', 'Lemon mint', 65],
      ['mojito-passion', 'موهيتو باشن فروت', 'Passion fruit mojito', 110],
      ['mojito-berry', 'موهيتو توت', 'Mixed berry mojito', 110],
      ['hibiscus-cold', 'كركديه بارد بالليمون', 'Iced hibiscus & lime', 60],
    ]},
    { id: 'tea', ar: 'شاي وأعشاب', en: 'Tea & herbs', icon: 'leaf', items: [
      ['tea', 'شاي فتلة', 'Black tea', 35],
      ['tea-mint', 'شاي بالنعناع', 'Mint tea', 40],
      ['karak', 'شاي كرك', 'Karak tea', 60],
      ['matcha', 'ماتشا لاتيه', 'Matcha latte', 120],
      ['sahlab', 'سحلب بالمكسرات', 'Sahlab with nuts', 85],
      ['anise', 'ينسون', 'Anise', 35],
    ]},
    { id: 'sweet', ar: 'الحلو', en: 'Sweets', icon: 'cake', items: [
      ['basbousa', 'بسبوسة بالقشطة', 'Basbousa with cream', 85],
      ['cheesecake', 'تشيز كيك لوتس', 'Lotus cheesecake', 140],
      ['brownie', 'براوني دافي', 'Warm brownie', 110],
      ['croissant', 'كرواسون زبدة', 'Butter croissant', 70],
      ['date-cake', 'كيكة تمر بالهيل', 'Cardamom date cake', 95, 'من مطبخنا', 'Baked in-house'],
      ['om-ali', 'أم علي', 'Om Ali', 100],
    ]},
  ],
  // Signature strip at the top: [item id, Arabic label, English label, card tone]
  featured: [
    ['hail-latte', 'لاتيه بالهيل', 'Cardamom latte', '#E8D5BC', 'cup'],
    ['v60-eth', 'V60 إثيوبي', 'Ethiopian V60', '#D9C2A3', 'drip'],
    ['cold-brew', 'كولد برو', 'Cold brew', '#CBB08C', 'glass'],
    ['date-cake', 'كيكة تمر بالهيل', 'Cardamom date cake', '#E9C9A4', 'cake'],
    ['mojito-passion', 'موهيتو باشن فروت', 'Passion fruit mojito', '#EED9A8', 'citrus'],
  ],
};

// Owner edits from admin.html (stored on this device for the demo)
(function applyOverrides() {
  let o = {};
  try { o = JSON.parse(localStorage.getItem('bunn-overrides') || '{}'); } catch (e) {}
  for (const c of window.MENU.categories) {
    c.items = c.items.map(([id, ar, en, price, tagAr, tagEn]) => ({
      id, ar, en, tagAr, tagEn,
      price: o[id]?.price ?? price,
      basePrice: price,
      soldOut: !!o[id]?.soldOut,
    }));
  }
})();
