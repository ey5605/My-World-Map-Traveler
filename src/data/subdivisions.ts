import { OceanColorTheme, RegionGroup, Subdivision } from '../types';

export const US_STATES: Subdivision[] = [
  // Alaska & Hawaii
  { id: 'US-02', countryId: '840', code: 'AK', nameEn: 'Alaska', nameHe: 'אלסקה', regionGroup: 'us_alaska', regionGroupNameHe: 'אלסקה', icon: '🏔️' },
  { id: 'US-15', countryId: '840', code: 'HI', nameEn: 'Hawaii', nameHe: 'הוואי', regionGroup: 'us_hawaii', regionGroupNameHe: 'הוואי', icon: '🌺' },
  
  // West Coast
  { id: 'US-06', countryId: '840', code: 'CA', nameEn: 'California', nameHe: 'קליפורניה', regionGroup: 'us_west_coast', regionGroupNameHe: 'החוף המערבי', icon: '🌴' },
  { id: 'US-41', countryId: '840', code: 'OR', nameEn: 'Oregon', nameHe: 'אורגון', regionGroup: 'us_west_coast', regionGroupNameHe: 'החוף המערבי', icon: '🌲' },
  { id: 'US-53', countryId: '840', code: 'WA', nameEn: 'Washington', nameHe: 'וושינגטון (מדינה)', regionGroup: 'us_west_coast', regionGroupNameHe: 'החוף המערבי', icon: '☕' },
  
  // East Coast
  { id: 'US-36', countryId: '840', code: 'NY', nameEn: 'New York', nameHe: 'ניו יורק', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי', icon: '🗽' },
  { id: 'US-12', countryId: '840', code: 'FL', nameEn: 'Florida', nameHe: 'פלורידה', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי', icon: '☀️' },
  { id: 'US-25', countryId: '840', code: 'MA', nameEn: 'Massachusetts', nameHe: 'מסצ׳וסטס (בוסטון)', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי', icon: '🎓' },
  { id: 'US-34', countryId: '840', code: 'NJ', nameEn: 'New Jersey', nameHe: 'ניו ג׳רזי', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-42', countryId: '840', code: 'PA', nameEn: 'Pennsylvania', nameHe: 'פנסילבניה', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-51', countryId: '840', code: 'VA', nameEn: 'Virginia', nameHe: 'וירג׳יניה', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-37', countryId: '840', code: 'NC', nameEn: 'North Carolina', nameHe: 'צפון קרוליינה', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-45', countryId: '840', code: 'SC', nameEn: 'South Carolina', nameHe: 'דרום קרוליינה', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-13', countryId: '840', code: 'GA', nameEn: 'Georgia', nameHe: 'ג׳ורג׳יה (אטלנטה)', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-24', countryId: '840', code: 'MD', nameEn: 'Maryland', nameHe: 'מרילנד', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-11', countryId: '840', code: 'DC', nameEn: 'Washington D.C.', nameHe: 'וושינגטון די.סי. (עיר הבירה)', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי', icon: '🏛️' },
  { id: 'US-09', countryId: '840', code: 'CT', nameEn: 'Connecticut', nameHe: 'קונטיקט', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-23', countryId: '840', code: 'ME', nameEn: 'Maine', nameHe: 'מיין', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-33', countryId: '840', code: 'NH', nameEn: 'New Hampshire', nameHe: 'ניו המפשייר', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-44', countryId: '840', code: 'RI', nameEn: 'Rhode Island', nameHe: 'רוד איילנד', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-10', countryId: '840', code: 'DE', nameEn: 'Delaware', nameHe: 'דלאוור', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  { id: 'US-50', countryId: '840', code: 'VT', nameEn: 'Vermont', nameHe: 'ורמונט', regionGroup: 'us_east_coast', regionGroupNameHe: 'החוף המזרחי' },
  
  // Midwest
  { id: 'US-17', countryId: '840', code: 'IL', nameEn: 'Illinois', nameHe: 'אילינוי (שיקגו)', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון', icon: '🏙️' },
  { id: 'US-39', countryId: '840', code: 'OH', nameEn: 'Ohio', nameHe: 'אוהיו', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  { id: 'US-26', countryId: '840', code: 'MI', nameEn: 'Michigan', nameHe: 'מישיגן', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  { id: 'US-55', countryId: '840', code: 'WI', nameEn: 'Wisconsin', nameHe: 'ויסקונסין', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  { id: 'US-18', countryId: '840', code: 'IN', nameEn: 'Indiana', nameHe: 'אינדיאנה', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  { id: 'US-27', countryId: '840', code: 'MN', nameEn: 'Minnesota', nameHe: 'מינסוטה', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  { id: 'US-29', countryId: '840', code: 'MO', nameEn: 'Missouri', nameHe: 'מיזורי', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  { id: 'US-19', countryId: '840', code: 'IA', nameEn: 'Iowa', nameHe: 'איווה', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  { id: 'US-20', countryId: '840', code: 'KS', nameEn: 'Kansas', nameHe: 'קנזס', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  { id: 'US-31', countryId: '840', code: 'NE', nameEn: 'Nebraska', nameHe: 'נברסקה', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  { id: 'US-46', countryId: '840', code: 'SD', nameEn: 'South Dakota', nameHe: 'דרום דקוטה', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  { id: 'US-38', countryId: '840', code: 'ND', nameEn: 'North Dakota', nameHe: 'צפון דקוטה', regionGroup: 'us_midwest', regionGroupNameHe: 'המערב התיכון' },
  
  // South
  { id: 'US-48', countryId: '840', code: 'TX', nameEn: 'Texas', nameHe: 'טקסס', regionGroup: 'us_south', regionGroupNameHe: 'הדרום', icon: '🤠' },
  { id: 'US-22', countryId: '840', code: 'LA', nameEn: 'Louisiana', nameHe: 'לואיזיאנה (ניו אורלינס)', regionGroup: 'us_south', regionGroupNameHe: 'הדרום', icon: '🎷' },
  { id: 'US-47', countryId: '840', code: 'TN', nameEn: 'Tennessee', nameHe: 'טנסי (נאשוויל)', regionGroup: 'us_south', regionGroupNameHe: 'הדרום', icon: '🎸' },
  { id: 'US-01', countryId: '840', code: 'AL', nameEn: 'Alabama', nameHe: 'אלבמה', regionGroup: 'us_south', regionGroupNameHe: 'הדרום' },
  { id: 'US-28', countryId: '840', code: 'MS', nameEn: 'Mississippi', nameHe: 'מיסיסיפי', regionGroup: 'us_south', regionGroupNameHe: 'הדרום' },
  { id: 'US-05', countryId: '840', code: 'AR', nameEn: 'Arkansas', nameHe: 'ארקנסו', regionGroup: 'us_south', regionGroupNameHe: 'הדרום' },
  { id: 'US-21', countryId: '840', code: 'KY', nameEn: 'Kentucky', nameHe: 'קנטקי', regionGroup: 'us_south', regionGroupNameHe: 'הדרום' },
  { id: 'US-54', countryId: '840', code: 'WV', nameEn: 'West Virginia', nameHe: 'מערב וירג׳יניה', regionGroup: 'us_south', regionGroupNameHe: 'הדרום' },
  { id: 'US-40', countryId: '840', code: 'OK', nameEn: 'Oklahoma', nameHe: 'אוקלהומה', regionGroup: 'us_south', regionGroupNameHe: 'הדרום' },
  
  // Mountain & Southwest
  { id: 'US-32', countryId: '840', code: 'NV', nameEn: 'Nevada', nameHe: 'נבדה (לאס וגאס)', regionGroup: 'us_mountain_sw', regionGroupNameHe: 'הרי הרוקי והדרום-מערב', icon: '🎰' },
  { id: 'US-04', countryId: '840', code: 'AZ', nameEn: 'Arizona', nameHe: 'אריזונה (גרנד קניון)', regionGroup: 'us_mountain_sw', regionGroupNameHe: 'הרי הרוקי והדרום-מערב', icon: '🏜️' },
  { id: 'US-08', countryId: '840', code: 'CO', nameEn: 'Colorado', nameHe: 'קולורדו (הרי הרוקי)', regionGroup: 'us_mountain_sw', regionGroupNameHe: 'הרי הרוקי והדרום-מערב', icon: '🏔️' },
  { id: 'US-49', countryId: '840', code: 'UT', nameEn: 'Utah', nameHe: 'יוטה (פארקים לאומיים)', regionGroup: 'us_mountain_sw', regionGroupNameHe: 'הרי הרוקי והדרום-מערב', icon: '🏜️' },
  { id: 'US-35', countryId: '840', code: 'NM', nameEn: 'New Mexico', nameHe: 'ניו מקסיקו', regionGroup: 'us_mountain_sw', regionGroupNameHe: 'הרי הרוקי והדרום-מערב' },
  { id: 'US-16', countryId: '840', code: 'ID', nameEn: 'Idaho', nameHe: 'איידהו', regionGroup: 'us_mountain_sw', regionGroupNameHe: 'הרי הרוקי והדרום-מערב' },
  { id: 'US-30', countryId: '840', code: 'MT', nameEn: 'Montana', nameHe: 'מונטנה (ילוסטון)', regionGroup: 'us_mountain_sw', regionGroupNameHe: 'הרי הרוקי והדרום-מערב' },
  { id: 'US-56', countryId: '840', code: 'WY', nameEn: 'Wyoming', nameHe: 'ויומינג (גרנד טיטון וילוסטון)', regionGroup: 'us_mountain_sw', regionGroupNameHe: 'הרי הרוקי והדרום-מערב' },

  // Territories
  { id: 'US-72', countryId: '840', code: 'PR', nameEn: 'Puerto Rico', nameHe: 'פוארטו ריקו', regionGroup: 'us_territories', regionGroupNameHe: 'טריטוריות ארה״ב', icon: '🏝️' }
];

export const CA_PROVINCES: Subdivision[] = [
  { id: 'CAN-633', countryId: '124', code: 'BC', nameEn: 'British Columbia', nameHe: 'בריטיש קולומביה', regionGroup: 'ca_bc', regionGroupNameHe: 'בריטיש קולומביה', icon: '🌲' },
  { id: 'CAN-682', countryId: '124', code: 'ON', nameEn: 'Ontario', nameHe: 'אונטריו', regionGroup: 'ca_on', regionGroupNameHe: 'אונטריו', icon: '🍁' },
  { id: 'CAN-683', countryId: '124', code: 'QC', nameEn: 'Quebec', nameHe: 'קוויבק', regionGroup: 'ca_qc', regionGroupNameHe: 'קוויבק', icon: '⚜️' },
  { id: 'CAN-632', countryId: '124', code: 'AB', nameEn: 'Alberta', nameHe: 'אלברטה', regionGroup: 'ca_prairies', regionGroupNameHe: 'מחוזות הערבה', icon: '🏔️' },
  { id: 'CAN-631', countryId: '124', code: 'SK', nameEn: 'Saskatchewan', nameHe: 'ססקצ׳ואן', regionGroup: 'ca_prairies', regionGroupNameHe: 'מחוזות הערבה' },
  { id: 'CAN-630', countryId: '124', code: 'MB', nameEn: 'Manitoba', nameHe: 'מניטובה', regionGroup: 'ca_prairies', regionGroupNameHe: 'מחוזות הערבה' },
  { id: 'CAN-685', countryId: '124', code: 'NS', nameEn: 'Nova Scotia', nameHe: 'נובה סקוטיה', regionGroup: 'ca_atlantic', regionGroupNameHe: 'המחוזות האטלנטיים' },
  { id: 'CAN-684', countryId: '124', code: 'NB', nameEn: 'New Brunswick', nameHe: 'ניו ברנזוויק', regionGroup: 'ca_atlantic', regionGroupNameHe: 'המחוזות האטלנטיים' },
  { id: 'CAN-686', countryId: '124', code: 'NL', nameEn: 'Newfoundland and Labrador', nameHe: 'ניופאונדלנד ולברדור', regionGroup: 'ca_atlantic', regionGroupNameHe: 'המחוזות האטלנטיים' },
  { id: 'CAN-687', countryId: '124', code: 'PE', nameEn: 'Prince Edward Island', nameHe: 'אי הנסיך אדוארד', regionGroup: 'ca_atlantic', regionGroupNameHe: 'המחוזות האטלנטיים' },
  { id: 'CAN-636', countryId: '124', code: 'YT', nameEn: 'Yukon', nameHe: 'יוקון', regionGroup: 'ca_territories', regionGroupNameHe: 'הטריטוריות הצפוניות', icon: '❄️' },
  { id: 'CAN-635', countryId: '124', code: 'NT', nameEn: 'Northwest Territories', nameHe: 'הטריטוריות הצפון-מערביות', regionGroup: 'ca_territories', regionGroupNameHe: 'הטריטוריות הצפוניות' },
  { id: 'CAN-634', countryId: '124', code: 'NU', nameEn: 'Nunavut', nameHe: 'נונאווט', regionGroup: 'ca_territories', regionGroupNameHe: 'הטריטוריות הצפוניות' }
];

export const AU_STATES: Subdivision[] = [
  { id: 'AUS-2654', countryId: '036', code: 'NSW', nameEn: 'New South Wales', nameHe: 'ניו סאות׳ ויילס (סידני)', regionGroup: 'au_nsw', regionGroupNameHe: 'ניו סאות׳ ויילס', icon: '🌉' },
  { id: 'AUS-2656', countryId: '036', code: 'VIC', nameEn: 'Victoria', nameHe: 'ויקטוריה (מלבורן)', regionGroup: 'au_vic', regionGroupNameHe: 'ויקטוריה', icon: '☕' },
  { id: 'AUS-2657', countryId: '036', code: 'QLD', nameEn: 'Queensland', nameHe: 'קווינסלנד (בריזבן והשונית)', regionGroup: 'au_qld', regionGroupNameHe: 'קווינסלנד', icon: '🌴' },
  { id: 'AUS-2651', countryId: '036', code: 'WA', nameEn: 'Western Australia', nameHe: 'מערב אוסטרליה (פרת׳)', regionGroup: 'au_wa', regionGroupNameHe: 'מערב אוסטרליה', icon: '🏜️' },
  { id: 'AUS-2655', countryId: '036', code: 'SA', nameEn: 'South Australia', nameHe: 'דרום אוסטרליה (אדלייד)', regionGroup: 'au_sa', regionGroupNameHe: 'דרום אוסטרליה', icon: '🍷' },
  { id: 'AUS-2660', countryId: '036', code: 'TAS', nameEn: 'Tasmania', nameHe: 'טסמניה (הובארט)', regionGroup: 'au_tas', regionGroupNameHe: 'טסמניה', icon: '🌲' },
  { id: 'AUS-2650', countryId: '036', code: 'NT', nameEn: 'Northern Territory', nameHe: 'הטריטוריה הצפונית (אולורו)', regionGroup: 'au_nt', regionGroupNameHe: 'הטריטוריה הצפונית', icon: '🐊' },
  { id: 'AUS-2653', countryId: '036', code: 'ACT', nameEn: 'Australian Capital Territory', nameHe: 'טריטוריית הבירה (קנברה)', regionGroup: 'au_act', regionGroupNameHe: 'טריטוריית הבירה', icon: '🏛️' }
];

export const EG_SUBDIVISIONS: Subdivision[] = [
  {
    id: 'EG-SIN',
    countryId: '818',
    code: 'SIN',
    nameEn: 'Sinai Peninsula',
    nameHe: 'חצי האי סיני (שארם א-שייח׳, דהב, טאבה, נואיבה)',
    regionGroup: 'eg_sinai',
    regionGroupNameHe: 'אזור סיני',
    icon: '🏖️'
  },
  {
    id: 'EG-MAIN',
    countryId: '818',
    code: 'MAIN',
    nameEn: 'Mainland Egypt',
    nameHe: 'שאר מצרים (קהיר, הפירמידות, לוקסור, אלכסנדריה, אסואן)',
    regionGroup: 'eg_mainland',
    regionGroupNameHe: 'שאר המדינה',
    icon: '🏛️'
  }
];

export const ALL_SUBDIVISIONS: Subdivision[] = [
  ...US_STATES,
  ...CA_PROVINCES,
  ...AU_STATES,
  ...EG_SUBDIVISIONS
];

export const REGION_GROUPS: RegionGroup[] = [
  // United States Regions
  {
    id: 'us_west_coast',
    countryId: '840',
    nameEn: 'West Coast',
    nameHe: 'החוף המערבי (קליפורניה, וושינגטון, אורגון)',
    icon: '🌊',
    subdivisionIds: ['US-06', 'US-41', 'US-53']
  },
  {
    id: 'us_east_coast',
    countryId: '840',
    nameEn: 'East Coast',
    nameHe: 'החוף המזרחי (ניו יורק, פלורידה, בוסטון ועוד)',
    icon: '🗽',
    subdivisionIds: ['US-36', 'US-12', 'US-25', 'US-34', 'US-42', 'US-51', 'US-37', 'US-45', 'US-13', 'US-24', 'US-11', 'US-09', 'US-23', 'US-33', 'US-44', 'US-10', 'US-50']
  },
  {
    id: 'us_alaska',
    countryId: '840',
    nameEn: 'Alaska',
    nameHe: 'אלסקה',
    icon: '🏔️',
    subdivisionIds: ['US-02']
  },
  {
    id: 'us_hawaii',
    countryId: '840',
    nameEn: 'Hawaii',
    nameHe: 'הוואי',
    icon: '🌺',
    subdivisionIds: ['US-15']
  },
  {
    id: 'us_mountain_sw',
    countryId: '840',
    nameEn: 'Mountain & Southwest',
    nameHe: 'הרי הרוקי והדרום-מערב (לאס וגאס, אריזונה, קולורדו, יוטה)',
    icon: '🏜️',
    subdivisionIds: ['US-32', 'US-04', 'US-08', 'US-49', 'US-35', 'US-16', 'US-30', 'US-56']
  },
  {
    id: 'us_midwest',
    countryId: '840',
    nameEn: 'Midwest',
    nameHe: 'המערב התיכון (שיקגו, מישיגן, אוהיו ועוד)',
    icon: '🌾',
    subdivisionIds: ['US-17', 'US-39', 'US-26', 'US-55', 'US-18', 'US-27', 'US-29', 'US-19', 'US-20', 'US-31', 'US-46', 'US-38']
  },
  {
    id: 'us_south',
    countryId: '840',
    nameEn: 'The South',
    nameHe: 'הדרום (טקסס, ניו אורלינס, נאשוויל ועוד)',
    icon: '🤠',
    subdivisionIds: ['US-48', 'US-22', 'US-47', 'US-01', 'US-28', 'US-05', 'US-21', 'US-54', 'US-40']
  },
  {
    id: 'us_territories',
    countryId: '840',
    nameEn: 'U.S. Territories',
    nameHe: 'טריטוריות ארה״ב (פוארטו ריקו)',
    icon: '🏝️',
    subdivisionIds: ['US-72']
  },

  // Canada Regions
  {
    id: 'ca_bc',
    countryId: '124',
    nameEn: 'British Columbia',
    nameHe: 'בריטיש קולומביה (ונקובר והחוף הפסיפי)',
    icon: '🌲',
    subdivisionIds: ['CAN-633']
  },
  {
    id: 'ca_on',
    countryId: '124',
    nameEn: 'Ontario',
    nameHe: 'אונטריו (טורונטו, אוטווה ומפלי הניאגרה)',
    icon: '🍁',
    subdivisionIds: ['CAN-682']
  },
  {
    id: 'ca_qc',
    countryId: '124',
    nameEn: 'Quebec',
    nameHe: 'קוויבק (מונטריאול וקוויבק סיטי)',
    icon: '⚜️',
    subdivisionIds: ['CAN-683']
  },
  {
    id: 'ca_prairies',
    countryId: '124',
    nameEn: 'Prairies',
    nameHe: 'מחוזות הערבה (אלברטה/באנף, ססקצ׳ואן, מניטובה)',
    icon: '🌾',
    subdivisionIds: ['CAN-632', 'CAN-631', 'CAN-630']
  },
  {
    id: 'ca_atlantic',
    countryId: '124',
    nameEn: 'Atlantic Canada',
    nameHe: 'המחוזות האטלנטיים (נובה סקוטיה, ניו ברנזוויק, ניופאונדלנד)',
    icon: '🌊',
    subdivisionIds: ['CAN-685', 'CAN-684', 'CAN-686', 'CAN-687']
  },
  {
    id: 'ca_territories',
    countryId: '124',
    nameEn: 'Northern Territories',
    nameHe: 'הטריטוריות הצפוניות (יוקון, הטריטוריות הצפון-מערביות, נונאווט)',
    icon: '❄️',
    subdivisionIds: ['CAN-636', 'CAN-635', 'CAN-634']
  },

  // Australia Regions
  {
    id: 'au_nsw',
    countryId: '036',
    nameEn: 'New South Wales',
    nameHe: 'ניו סאות׳ ויילס (סידני וההרים הכחולים)',
    icon: '🌉',
    subdivisionIds: ['AUS-2654']
  },
  {
    id: 'au_vic',
    countryId: '036',
    nameEn: 'Victoria',
    nameHe: 'ויקטוריה (מלבורן ודרך האוקיינוס הגדולה)',
    icon: '☕',
    subdivisionIds: ['AUS-2656']
  },
  {
    id: 'au_qld',
    countryId: '036',
    nameEn: 'Queensland',
    nameHe: 'קווינסלנד (בריזבן, גולד קוסט ושונית המחסום)',
    icon: '🌴',
    subdivisionIds: ['AUS-2657']
  },
  {
    id: 'au_wa',
    countryId: '036',
    nameEn: 'Western Australia',
    nameHe: 'מערב אוסטרליה (פרת׳ והמרחבים)',
    icon: '🏜️',
    subdivisionIds: ['AUS-2651']
  },
  {
    id: 'au_sa',
    countryId: '036',
    nameEn: 'South Australia',
    nameHe: 'דרום אוסטרליה (אדלייד ועמק בארוסה)',
    icon: '🍷',
    subdivisionIds: ['AUS-2655']
  },
  {
    id: 'au_tas',
    countryId: '036',
    nameEn: 'Tasmania',
    nameHe: 'טסמניה (הובארט וטבע פראי)',
    icon: '🌲',
    subdivisionIds: ['AUS-2660']
  },
  {
    id: 'au_nt',
    countryId: '036',
    nameEn: 'Northern Territory',
    nameHe: 'הטריטוריה הצפונית (אולורו / איירס רוק ודרווין)',
    icon: '🐊',
    subdivisionIds: ['AUS-2650']
  },
  {
    id: 'au_act',
    countryId: '036',
    nameEn: 'Australian Capital Territory',
    nameHe: 'טריטוריית הבירה (קנברה)',
    icon: '🏛️',
    subdivisionIds: ['AUS-2653']
  },

  // Egypt Regions
  {
    id: 'eg_sinai',
    countryId: '818',
    nameEn: 'Sinai Peninsula',
    nameHe: 'חצי האי סיני (שארם, דהב, טאבה, נואיבה)',
    icon: '🏖️',
    subdivisionIds: ['EG-SIN']
  },
  {
    id: 'eg_mainland',
    countryId: '818',
    nameEn: 'Mainland Egypt',
    nameHe: 'שאר מצרים (קהיר, הפירמידות, לוקסור, אלכסנדריה, אסואן)',
    icon: '🏛️',
    subdivisionIds: ['EG-MAIN']
  }
];

// Highlight Color Palettes with vibrant standout colors!
export const HIGHLIGHT_THEMES = [
  {
    id: 'neon-cyan',
    nameHe: 'טורקיז זוהר (ברירת מחדל)',
    nameEn: 'Electric Cyan',
    hex: '#06b6d4',
    borderHex: '#22d3ee',
    glow: 'rgba(6, 182, 212, 0.4)'
  },
  {
    id: 'sunset-gold',
    nameHe: 'זהב שקיעה',
    nameEn: 'Sunset Gold',
    hex: '#f59e0b',
    borderHex: '#fbbf24',
    glow: 'rgba(245, 158, 11, 0.4)'
  },
  {
    id: 'emerald-green',
    nameHe: 'ירוק אמרלד',
    nameEn: 'Emerald Green',
    hex: '#10b981',
    borderHex: '#34d399',
    glow: 'rgba(16, 185, 129, 0.4)'
  },
  {
    id: 'coral-rose',
    nameHe: 'קורל ורוד זוהר',
    nameEn: 'Vivid Coral',
    hex: '#f43f5e',
    borderHex: '#fb7185',
    glow: 'rgba(244, 63, 94, 0.4)'
  },
  {
    id: 'purple-neon',
    nameHe: 'סגול ניאון',
    nameEn: 'Neon Violet',
    hex: '#8b5cf6',
    borderHex: '#a78bfa',
    glow: 'rgba(139, 92, 246, 0.4)'
  }
];

// Ocean Background Color Themes (5 colors: Bright Sea Green, Warm Yellow, Classic Navy, Pearl Gray, Pure White)
export const OCEAN_THEMES: OceanColorTheme[] = [
  {
    id: 'ocean-teal',
    nameHe: 'טורקיז-ירקרק בהיר',
    nameEn: 'Bright Sea Green',
    hex: '#2dd4bf',
    borderPreview: '#14b8a6',
    isLight: true,
    landFill: '#1e293b',
    landStroke: '#334155',
    landHoverFill: '#334155',
    landHoverStroke: '#64748b',
    graticuleColor: '#0f766e',
    graticuleOpacity: 0.35
  },
  {
    id: 'ocean-yellow',
    nameHe: 'צהוב אטלס חם',
    nameEn: 'Warm Atlas Yellow',
    hex: '#fef08a',
    borderPreview: '#facc15',
    isLight: true,
    landFill: '#1e293b',
    landStroke: '#334155',
    landHoverFill: '#334155',
    landHoverStroke: '#64748b',
    graticuleColor: '#ca8a04',
    graticuleOpacity: 0.25
  },
  {
    id: 'ocean-navy',
    nameHe: 'כחול אוקיינוס',
    nameEn: 'Classic Navy Ocean',
    hex: '#080c14',
    borderPreview: '#1e293b',
    isLight: false,
    landFill: '#1e293b',
    landStroke: '#334155',
    landHoverFill: '#334155',
    landHoverStroke: '#64748b',
    graticuleColor: '#1e293b',
    graticuleOpacity: 0.4
  },
  {
    id: 'ocean-pearl',
    nameHe: 'אפור פנינה',
    nameEn: 'Pearl Light Gray',
    hex: '#e2e8f0',
    borderPreview: '#cbd5e1',
    isLight: true,
    landFill: '#1e293b',
    landStroke: '#334155',
    landHoverFill: '#334155',
    landHoverStroke: '#64748b',
    graticuleColor: '#cbd5e1',
    graticuleOpacity: 0.5
  },
  {
    id: 'ocean-white',
    nameHe: 'לבן צח',
    nameEn: 'Pure White',
    hex: '#ffffff',
    borderPreview: '#e2e8f0',
    isLight: true,
    landFill: '#1e293b',
    landStroke: '#334155',
    landHoverFill: '#334155',
    landHoverStroke: '#64748b',
    graticuleColor: '#cbd5e1',
    graticuleOpacity: 0.5
  }
];

export function getOceanTheme(hexOrId?: string): OceanColorTheme {
  if (!hexOrId) return OCEAN_THEMES[2]; // Default is Classic Navy
  const found = OCEAN_THEMES.find(t => t.hex.toLowerCase() === hexOrId.toLowerCase() || t.id === hexOrId);
  if (found) return found;
  if (hexOrId === '#083344' || hexOrId === '#000000' || hexOrId === '#1e293b') {
    if (hexOrId === '#083344') return OCEAN_THEMES[0];
  }
  return OCEAN_THEMES[2];
}

