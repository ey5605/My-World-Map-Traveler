import { OceanColorTheme, RegionGroup, Subdivision, HighlightColorTheme } from '../types';

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
  { id: 'AUS-2653', countryId: '036', code: 'ACT', nameEn: 'Australian Capital Territory', nameHe: 'טריטוריית הבירה (קנברה)', regionGroup: 'au_act', regionGroupNameHe: 'טריטוריית הבירה', icon: '🏛️' },
  { id: 'AUS-1932', countryId: '036', code: 'JBT', nameEn: 'Jervis Bay Territory', nameHe: 'טריטוריית מפרץ ג׳רוויס', regionGroup: 'au_act', regionGroupNameHe: 'טריטוריית הבירה', icon: '⚓' }
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

export const CN_SUBDIVISIONS: Subdivision[] = [
  { id: 'CHN-1150', countryId: '156', code: 'CN-GS', nameEn: "Gansu", nameHe: "גאנסו (דונחואנג ודרך המשי)", regionGroup: 'cn_northwest', regionGroupNameHe: "צפון-מערב סין ודרך המשי", icon: '🐪' },
  { id: 'CHN-1151', countryId: '156', code: 'CN-QH', nameEn: "Qinghai", nameHe: "צ׳ינגהאי (אגם צ׳ינגהאי ורמת טיבט)", regionGroup: 'cn_northwest', regionGroupNameHe: "צפון-מערב סין ודרך המשי", icon: '🦅' },
  { id: 'CHN-1152', countryId: '156', code: 'CN-GX', nameEn: "Guangxi", nameHe: "גואנגשי (גווילין ויאנגשואו)", regionGroup: 'cn_south', regionGroupNameHe: "דרום ומרכז סין", icon: '🏞️' },
  { id: 'CHN-1153', countryId: '156', code: 'CN-GZ', nameEn: "Guizhou", nameHe: "גוויג׳ואו", regionGroup: 'cn_southwest', regionGroupNameHe: "דרום-מערב סין", icon: '🌉' },
  { id: 'CHN-1154', countryId: '156', code: 'CN-CQ', nameEn: "Chongqing", nameHe: "צ׳ונגצ׳ינג", regionGroup: 'cn_southwest', regionGroupNameHe: "דרום-מערב סין", icon: '🌶️' },
  { id: 'CHN-1155', countryId: '156', code: 'CN-BJ', nameEn: "Beijing", nameHe: "בייג׳ינג (עיר הבירה)", regionGroup: 'cn_north', regionGroupNameHe: "צפון סין", icon: '🏛️' },
  { id: 'CHN-1178', countryId: '156', code: 'CN-FJ', nameEn: "Fujian", nameHe: "פוג׳יין (שיאמן)", regionGroup: 'cn_east', regionGroupNameHe: "מזרח סין", icon: '🌊' },
  { id: 'CHN-1179', countryId: '156', code: 'CN-AH', nameEn: "Anhui", nameHe: "אנחווי (הרי חואנגשאן)", regionGroup: 'cn_east', regionGroupNameHe: "מזרח סין", icon: '🏔️' },
  { id: 'CHN-1180', countryId: '156', code: 'CN-GD', nameEn: "Guangdong", nameHe: "גואנגדונג (שנג׳ן, גואנגג׳ואו וקנטון)", regionGroup: 'cn_south', regionGroupNameHe: "דרום ומרכז סין", icon: '🏭' },
  { id: 'CHN-1662', countryId: '156', code: 'CN-XZ', nameEn: "Xizang", nameHe: "טיבט (להסה והימלאיה)", regionGroup: 'cn_southwest', regionGroupNameHe: "דרום-מערב סין", icon: '🏔️' },
  { id: 'CHN-1756', countryId: '156', code: 'CN-XJ', nameEn: "Xinjiang", nameHe: "שינג׳יאנג (אורומצ׳י וקשגאר)", regionGroup: 'cn_northwest', regionGroupNameHe: "צפון-מערב סין ודרך המשי", icon: '🏜️' },
  { id: 'CHN-1775', countryId: '156', code: 'CN-HI', nameEn: "Hainan", nameHe: "האינאן (האי הטרופי וסניה)", regionGroup: 'cn_south', regionGroupNameHe: "דרום ומרכז סין", icon: '🏝️' },
  { id: 'CHN-1803', countryId: '156', code: 'CN-NX', nameEn: "Ningxia", nameHe: "נינגשיה", regionGroup: 'cn_northwest', regionGroupNameHe: "צפון-מערב סין ודרך המשי", icon: '🍇' },
  { id: 'CHN-1804', countryId: '156', code: 'CN-SN', nameEn: "Shaanxi", nameHe: "שאאנשי (שיאן וחיילי הטרקוטה)", regionGroup: 'cn_northwest', regionGroupNameHe: "צפון-מערב סין ודרך המשי", icon: '🏺' },
  { id: 'CHN-1805', countryId: '156', code: 'CN-SX', nameEn: "Shanxi", nameHe: "שאנשי (דאטונג)", regionGroup: 'cn_north', regionGroupNameHe: "צפון סין", icon: '⛩️' },
  { id: 'CHN-1807', countryId: '156', code: 'CN-HB', nameEn: "Hubei", nameHe: "חוביי (ווהאן וסכר שלושת הערוצים)", regionGroup: 'cn_south', regionGroupNameHe: "דרום ומרכז סין", icon: '🌊' },
  { id: 'CHN-1808', countryId: '156', code: 'CN-HN', nameEn: "Hunan", nameHe: "חונאן (פארק ג׳אנגג׳יאג׳יה / אווטאר)", regionGroup: 'cn_south', regionGroupNameHe: "דרום ומרכז סין", icon: '⛰️' },
  { id: 'CHN-1809', countryId: '156', code: 'CN-SC', nameEn: "Sichuan", nameHe: "סצ׳ואן (צ׳נגדו, פנדות וג׳יוג׳איגואו)", regionGroup: 'cn_southwest', regionGroupNameHe: "דרום-מערב סין", icon: '🐼' },
  { id: 'CHN-1810', countryId: '156', code: 'CN-YN', nameEn: "Yunnan", nameHe: "יונאן (קונמינג, דאלי וליג׳יאנג)", regionGroup: 'cn_southwest', regionGroupNameHe: "דרום-מערב סין", icon: '🌺' },
  { id: 'CHN-1811', countryId: '156', code: 'CN-HE', nameEn: "Hebei", nameHe: "חביי", regionGroup: 'cn_north', regionGroupNameHe: "צפון סין", icon: '🌾' },
  { id: 'CHN-1812', countryId: '156', code: 'CN-HA', nameEn: "Henan", nameHe: "חנאן (מנזר שאולין)", regionGroup: 'cn_south', regionGroupNameHe: "דרום ומרכז סין", icon: '🥋' },
  { id: 'CHN-1813', countryId: '156', code: 'CN-LN', nameEn: "Liaoning", nameHe: "ליאונינג (דאליאן)", regionGroup: 'cn_northeast', regionGroupNameHe: "צפון-מזרח סין (מנצ׳וריה)", icon: '🚢' },
  { id: 'CHN-1814', countryId: '156', code: 'CN-SD', nameEn: "Shandong", nameHe: "שאנדונג (צ׳ינגדאו)", regionGroup: 'cn_east', regionGroupNameHe: "מזרח סין", icon: '🍺' },
  { id: 'CHN-1816', countryId: '156', code: 'CN-TJ', nameEn: "Tianjin", nameHe: "טיאנג׳ין", regionGroup: 'cn_north', regionGroupNameHe: "צפון סין", icon: '🏙️' },
  { id: 'CHN-1817', countryId: '156', code: 'CN-JX', nameEn: "Jiangxi", nameHe: "ג׳יאנגשי", regionGroup: 'cn_east', regionGroupNameHe: "מזרח סין", icon: '🏺' },
  { id: 'CHN-1818', countryId: '156', code: 'CN-JS', nameEn: "Jiangsu", nameHe: "ג׳יאנגסו (נאנג׳ינג וסוג׳ואו)", regionGroup: 'cn_east', regionGroupNameHe: "מזרח סין", icon: '🏯' },
  { id: 'CHN-1819', countryId: '156', code: 'CN-SH', nameEn: "Shanghai", nameHe: "שנגחאי", regionGroup: 'cn_east', regionGroupNameHe: "מזרח סין", icon: '🏙️' },
  { id: 'CHN-1820', countryId: '156', code: 'CN-ZJ', nameEn: "Zhejiang", nameHe: "ג׳ג׳יאנג (האנגג׳ואו)", regionGroup: 'cn_east', regionGroupNameHe: "מזרח סין", icon: '🍵' },
  { id: 'CHN-1828', countryId: '156', code: 'CN-JL', nameEn: "Jilin", nameHe: "ג׳ילין (הרי צ׳אנגבאי)", regionGroup: 'cn_northeast', regionGroupNameHe: "צפון-מזרח סין (מנצ׳וריה)", icon: '🌲' },
  { id: 'CHN-1838', countryId: '156', code: 'CN-NM', nameEn: "Inner Mongol", nameHe: "מונגוליה הפנימית", regionGroup: 'cn_north', regionGroupNameHe: "צפון סין", icon: '🐎' },
  { id: 'CHN-1839', countryId: '156', code: 'CN-HL', nameEn: "Heilongjiang", nameHe: "חיילונגג׳יאנג (פסטיבל הקרח בחרבין)", regionGroup: 'cn_northeast', regionGroupNameHe: "צפון-מזרח סין (מנצ׳וריה)", icon: '❄️' }
];

export const RU_SUBDIVISIONS: Subdivision[] = [
  { id: 'RUS-2167', countryId: '643', code: 'RU-TOM', nameEn: "Tomsk", nameHe: "טומסק (עיר האוניברסיטאות והעץ)", regionGroup: 'ru_siberia', regionGroupNameHe: "סיביר ואגם באיקל", icon: '🪵' },
  { id: 'RUS-2279', countryId: '643', code: 'RU-AD', nameEn: "Adygey", nameHe: "רפובליקת אדיגיה", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז" },
  { id: 'RUS-2280', countryId: '643', code: 'RU-KC', nameEn: "Karachay-Cherkess", nameHe: "קראצ׳אי-צ׳רקסיה (דומבאי)", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז" },
  { id: 'RUS-2303', countryId: '643', code: 'RU-IN', nameEn: "Ingush", nameHe: "רפובליקת אינגושטיה", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז" },
  { id: 'RUS-2304', countryId: '643', code: 'RU-KB', nameEn: "Kabardin-Balkar", nameHe: "קברדינו-בלקריה (הר אלברוס הגבוה)", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '🏔️' },
  { id: 'RUS-2305', countryId: '643', code: 'RU-SE', nameEn: "North Ossetia", nameHe: "צפון אוסטיה - אלניה", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז" },
  { id: 'RUS-2306', countryId: '643', code: 'RU-STA', nameEn: "Stavropol'", nameHe: "סטברופול (פיאטיגורסק וקיסלובודסק)", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '♨️' },
  { id: 'RUS-2321', countryId: '643', code: 'RU-CHU', nameEn: "Chukchi Autonomous Okrug", nameHe: "צ׳וקוטקה (מיצר ברינג והקוטב הצפוני)", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה", icon: '🦭' },
  { id: 'RUS-2324', countryId: '643', code: 'RU-KGD', nameEn: "Kaliningrad", nameHe: "קלינינגרד (מובלעת הים הבלטי)", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג", icon: '⚓' },
  { id: 'RUS-2333', countryId: '643', code: 'RU-MUR', nameEn: "Murmansk", nameHe: "מורמנסק (חוג הקוטב והזוהר הצפוני)", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג", icon: '🌌' },
  { id: 'RUS-2334', countryId: '643', code: 'RU-NGR', nameEn: "Novgorod", nameHe: "נובגורוד הגדולה", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג" },
  { id: 'RUS-2335', countryId: '643', code: 'RU-PSK', nameEn: "Pskov", nameHe: "פסקוב", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג" },
  { id: 'RUS-2336', countryId: '643', code: 'RU-LEN', nameEn: "Leningrad", nameHe: "מחוז לנינגרד (סביבות פטרבורג)", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג", icon: '🌲' },
  { id: 'RUS-2337', countryId: '643', code: 'RU-SPE', nameEn: "City of St. Petersburg", nameHe: "סנקט פטרבורג (ארמון החורף וההרמיטאז׳)", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג", icon: '🏰' },
  { id: 'RUS-2342', countryId: '643', code: 'RU-BRY', nameEn: "Bryansk", nameHe: "בריאנסק", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2343', countryId: '643', code: 'RU-SMO', nameEn: "Smolensk", nameHe: "סמולנסק", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2353', countryId: '643', code: 'RU-KR', nameEn: "Karelia", nameHe: "רפובליקת קרליה (אגמי לדוגה ואונגה)", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג", icon: '🛶' },
  { id: 'RUS-2354', countryId: '643', code: 'RU-ARK', nameEn: "Arkhangel'sk", nameHe: "ארכנגלסק (הים הלבן)", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג", icon: '❄️' },
  { id: 'RUS-2355', countryId: '643', code: 'RU-IVA', nameEn: "Ivanovo", nameHe: "איבנובו (עיר הטקסטיל)", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2359', countryId: '643', code: 'RU-VLG', nameEn: "Vologda", nameHe: "וולוגדה", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג" },
  { id: 'RUS-2356', countryId: '643', code: 'RU-KOS', nameEn: "Kostroma", nameHe: "קוסטרומה (טבעת הזהב)", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2357', countryId: '643', code: 'RU-NIZ', nameEn: "Nizhegorod", nameHe: "ניז׳ני נובגורוד (מפגש הוולגה והאוקה)", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה", icon: '🏰' },
  { id: 'RUS-2358', countryId: '643', code: 'RU-TVE', nameEn: "Tver'", nameHe: "טבר", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2360', countryId: '643', code: 'RU-YAR', nameEn: "Yaroslavl'", nameHe: "ירוסלבל (טבעת הזהב)", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז", icon: '🏰' },
  { id: 'RUS-2361', countryId: '643', code: 'RU-KLU', nameEn: "Kaluga", nameHe: "קלוגה", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2362', countryId: '643', code: 'RU-KRS', nameEn: "Kursk", nameHe: "קורסק", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2363', countryId: '643', code: 'RU-LIP', nameEn: "Lipetsk", nameHe: "ליפצק", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2364', countryId: '643', code: 'RU-MOW', nameEn: "Moskovskaya", nameHe: "מחוז מוסקבה (סביבות הבירה)", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז", icon: '🏘️' },
  { id: 'RUS-2365', countryId: '643', code: 'RU-MOS', nameEn: "Moskva", nameHe: "מוסקבה (עיר הבירה)", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז", icon: '🏛️' },
  { id: 'RUS-2366', countryId: '643', code: 'RU-ORL', nameEn: "Orel", nameHe: "אוריול", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2367', countryId: '643', code: 'RU-ROS', nameEn: "Rostov", nameHe: "רוסטוב על הדון", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '🚢' },
  { id: 'RUS-2368', countryId: '643', code: 'RU-TUL', nameEn: "Tula", nameHe: "טולה", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2369', countryId: '643', code: 'RU-VGG', nameEn: "Volgograd", nameHe: "וולגוגרד (סטלינגרד לשעבר)", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '🎖️' },
  { id: 'RUS-2370', countryId: '643', code: 'RU-BEL', nameEn: "Belgorod", nameHe: "בלגורוד", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2371', countryId: '643', code: 'RU-KDA', nameEn: "Krasnodar", nameHe: "קרסנודאר (סוצ׳י וחוף הים השחור)", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '🌴' },
  { id: 'RUS-2372', countryId: '643', code: 'RU-MO', nameEn: "Mordovia", nameHe: "רפובליקת מורדוביה (סרנסק)", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה" },
  { id: 'RUS-2373', countryId: '643', code: 'RU-PNZ', nameEn: "Penza", nameHe: "פנזה", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה" },
  { id: 'RUS-2374', countryId: '643', code: 'RU-RYA', nameEn: "Ryazan'", nameHe: "ריאזאן", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2375', countryId: '643', code: 'RU-TAM', nameEn: "Tambov", nameHe: "טמבוב", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2376', countryId: '643', code: 'RU-VLA', nameEn: "Vladimir", nameHe: "ולדימיר (טבעת הזהב)", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז", icon: '⛪' },
  { id: 'RUS-2377', countryId: '643', code: 'RU-VOR', nameEn: "Voronezh", nameHe: "וורונז׳", regionGroup: 'ru_central', regionGroupNameHe: "מחוז מוסקבה והמרכז" },
  { id: 'RUS-2378', countryId: '643', code: 'RU-BA', nameEn: "Bashkortostan", nameHe: "רפובליקת בשקורטוסטן (אופה)", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה", icon: '🍯' },
  { id: 'RUS-2379', countryId: '643', code: 'RU-CHE', nameEn: "Chelyabinsk", nameHe: "צ׳ליאבינסק", regionGroup: 'ru_ural', regionGroupNameHe: "הרי האורל", icon: '🏭' },
  { id: 'RUS-2380', countryId: '643', code: 'RU-KGN', nameEn: "Kurgan", nameHe: "קורגן", regionGroup: 'ru_ural', regionGroupNameHe: "הרי האורל" },
  { id: 'RUS-2381', countryId: '643', code: 'RU-NEN', nameEn: "Nenets", nameHe: "המחוז האוטונומי של הניינץ", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג" },
  { id: 'RUS-2382', countryId: '643', code: 'RU-YAN', nameEn: "Yamal-Nenets", nameHe: "ימלו-ננץ (חצי האי ימאל והקוטב)", regionGroup: 'ru_ural', regionGroupNameHe: "הרי האורל", icon: '❄️' },
  { id: 'RUS-2383', countryId: '643', code: 'RU-KO', nameEn: "Komi", nameHe: "רפובליקת קומי", regionGroup: 'ru_northwest', regionGroupNameHe: "צפון-מערב רוסיה וסנקט פטרבורג" },
  { id: 'RUS-2384', countryId: '643', code: 'RU-KIR', nameEn: "Kirov", nameHe: "קירוב", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה" },
  { id: 'RUS-2385', countryId: '643', code: 'RU-ME', nameEn: "Mariy-El", nameHe: "רפובליקת מארי אל (יושקר-אולה)", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה" },
  { id: 'RUS-2386', countryId: '643', code: 'RU-SVE', nameEn: "Sverdlovsk", nameHe: "סברדלובסק (יקטרינבורג וקו הגבול אירופה-אסיה)", regionGroup: 'ru_ural', regionGroupNameHe: "הרי האורל", icon: '💎' },
  { id: 'RUS-2387', countryId: '643', code: 'RU-UD', nameEn: "Udmurt", nameHe: "רפובליקת אודמורטיה (איז׳בסק)", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה" },
  { id: 'RUS-2388', countryId: '643', code: 'RU-AST', nameEn: "Astrakhan'", nameHe: "אסטרחן (דלתת הוולגה והים הכספי)", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '🐟' },
  { id: 'RUS-2389', countryId: '643', code: 'RU-CU', nameEn: "Chuvash", nameHe: "רפובליקת צ׳ובשיה (צ׳בוקסרי)", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה" },
  { id: 'RUS-2390', countryId: '643', code: 'RU-KL', nameEn: "Kalmyk", nameHe: "רפובליקת קלמיקיה (מקדשים בודהיסטיים)", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '🛕' },
  { id: 'RUS-2392', countryId: '643', code: 'RU-SAM', nameEn: "Samara", nameHe: "סמארה", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה", icon: '🚀' },
  { id: 'RUS-2391', countryId: '643', code: 'RU-ORE', nameEn: "Orenburg", nameHe: "אורנבורג", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה" },
  { id: 'RUS-2393', countryId: '643', code: 'RU-SAR', nameEn: "Saratov", nameHe: "סראטוב", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה" },
  { id: 'RUS-2394', countryId: '643', code: 'RU-TA', nameEn: "Tatarstan", nameHe: "רפובליקת טטרסטן (קאזאן)", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה", icon: '🕌' },
  { id: 'RUS-2395', countryId: '643', code: 'RU-ULY', nameEn: "Ul'yanovsk", nameHe: "אוליאנובסק", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה" },
  { id: 'RUS-2396', countryId: '643', code: 'RU-KHM', nameEn: "Khanty-Mansiy", nameHe: "חנטי ומנסי - יוגרה", regionGroup: 'ru_ural', regionGroupNameHe: "הרי האורל" },
  { id: 'RUS-2397', countryId: '643', code: 'RU-OMS', nameEn: "Omsk", nameHe: "אומסק", regionGroup: 'ru_siberia', regionGroupNameHe: "סיביר ואגם באיקל" },
  { id: 'RUS-2398', countryId: '643', code: 'RU-TYU', nameEn: "Tyumen'", nameHe: "טיומן (העיר הרוסית הראשונה בסיביר)", regionGroup: 'ru_ural', regionGroupNameHe: "הרי האורל", icon: '♨️' },
  { id: 'RUS-2399', countryId: '643', code: 'RU-ALT', nameEn: "Altay", nameHe: "מחוז אלטאי (ברנאול)", regionGroup: 'ru_siberia', regionGroupNameHe: "סיביר ואגם באיקל" },
  { id: 'RUS-2400', countryId: '643', code: 'RU-AL', nameEn: "Gorno-Altay", nameHe: "רפובליקת אלטאי (הרי אלטאי הקסומים והבלאחה)", regionGroup: 'ru_siberia', regionGroupNameHe: "סיביר ואגם באיקל", icon: '🏔️' },
  { id: 'RUS-2401', countryId: '643', code: 'RU-KEM', nameEn: "Kemerovo", nameHe: "קמרובו (שריגש וסקי בקוזבאס)", regionGroup: 'ru_siberia', regionGroupNameHe: "סיביר ואגם באיקל", icon: '⛷️' },
  { id: 'RUS-2402', countryId: '643', code: 'RU-KK', nameEn: "Khakass", nameHe: "רפובליקת חקסיה", regionGroup: 'ru_siberia', regionGroupNameHe: "סיביר ואגם באיקל" },
  { id: 'RUS-2403', countryId: '643', code: 'RU-NVS', nameEn: "Novosibirsk", nameHe: "נובוסיבירסק (בירת סיביר ואקדמגורודוק)", regionGroup: 'ru_siberia', regionGroupNameHe: "סיביר ואגם באיקל", icon: '🐻' },
  { id: 'RUS-2416', countryId: '643', code: 'RU-CE', nameEn: "Chechnya", nameHe: "רפובליקת צ׳צ׳ניה (גרוזני)", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '🕌' },
  { id: 'RUS-2417', countryId: '643', code: 'RU-DA', nameEn: "Dagestan", nameHe: "רפובליקת דגסטן (הרי הקווקז ודרבנט)", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '⛰️' },
  { id: 'RUS-2602', countryId: '643', code: 'RU-IRK', nameEn: "Irkutsk", nameHe: "אירקוטסק (שער לאגם באיקל)", regionGroup: 'ru_siberia', regionGroupNameHe: "סיביר ואגם באיקל", icon: '🌊' },
  { id: 'RUS-2603', countryId: '643', code: 'RU-KYA', nameEn: "Krasnoyarsk", nameHe: "מחוז קרסנויארסק (עמודי סטולבי)", regionGroup: 'ru_siberia', regionGroupNameHe: "סיביר ואגם באיקל", icon: '🌲' },
  { id: 'RUS-2605', countryId: '643', code: 'RU-TY', nameEn: "Tuva", nameHe: "רפובליקת טובה (שירת הגרון ומרכז אסיה)", regionGroup: 'ru_siberia', regionGroupNameHe: "סיביר ואגם באיקל", icon: '🎶' },
  { id: 'RUS-2606', countryId: '643', code: 'RU-BU', nameEn: "Buryat", nameHe: "רפובליקת בוריאטיה (אולן-אודה ומזרח באיקל)", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה", icon: '🏮' },
  { id: 'RUS-2609', countryId: '643', code: 'RU-AMU', nameEn: "Amur", nameHe: "מחוז אמור (בלגובשצ׳נסק)", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה" },
  { id: 'RUS-2610', countryId: '643', code: 'RU-ZAB', nameEn: "Chita", nameHe: "עבר הבאיקל (צ׳יטה)", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה" },
  { id: 'RUS-2611', countryId: '643', code: 'RU-PRI', nameEn: "Primor'ye", nameHe: "פרימוריה (ולדיווסטוק וחוף האוקיינוס השקט)", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה", icon: '🐅' },
  { id: 'RUS-2612', countryId: '643', code: 'RU-SA', nameEn: "Sakha (Yakutia)", nameHe: "רפובליקת סאחה / יקוטיה (קוטב הקור ועמודי לנה)", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה", icon: '🧊' },
  { id: 'RUS-2613', countryId: '643', code: 'RU-YEV', nameEn: "Yevrey", nameHe: "המחוז היהודי האוטונומי (בירוביג׳אן)", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה", icon: '✡️' },
  { id: 'RUS-2614', countryId: '643', code: 'RU-KHA', nameEn: "Khabarovsk", nameHe: "חברובסק (נהר אמור)", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה", icon: '🚢' },
  { id: 'RUS-2615', countryId: '643', code: 'RU-MAG', nameEn: "Maga Buryatdan", nameHe: "מגדן (ים אוחוצק)", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה" },
  { id: 'RUS-2616', countryId: '643', code: 'RU-SAK', nameEn: "Sakhalin", nameHe: "מחוז סחלין ואיי קוריל", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה", icon: '🏝️' },
  { id: 'RUS-283', countryId: '643', code: 'UA-43', nameEn: "Crimea", nameHe: "חצי האי קרים (יאלטה וסימפרופול)", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '🏖️' },
  { id: 'RUS-3200', countryId: '643', code: 'RU-PER', nameEn: "Perm'", nameHe: "מחוז פרם (מערב האורל)", regionGroup: 'ru_volga', regionGroupNameHe: "אגן נהר הוולגה" },
  { id: 'RUS-3468', countryId: '643', code: 'RU-KAM', nameEn: "Kamchatka", nameHe: "חצי האי קמצ׳טקה (הרי געש, דובים וגייזרים)", regionGroup: 'ru_fareast', regionGroupNameHe: "המזרח הרחוק וקמצ׳טקה", icon: '🌋' },
  { id: 'RUS-5482', countryId: '643', code: 'UA-40', nameEn: "Sevastopol", nameHe: "סבסטופול", regionGroup: 'ru_south', regionGroupNameHe: "דרום רוסיה, סוצ׳י והקווקז", icon: '⚓' }
];

export const BR_SUBDIVISIONS: Subdivision[] = [
  { id: 'BRA-576', countryId: '076', code: 'BR-AC', nameEn: "Acre", nameHe: "אקרי", regionGroup: 'br_north', regionGroupNameHe: "צפון ברזיל והאמזונס" },
  { id: 'BRA-595', countryId: '076', code: 'BR-RO', nameEn: "Rondônia", nameHe: "רונדוניה", regionGroup: 'br_north', regionGroupNameHe: "צפון ברזיל והאמזונס" },
  { id: 'BRA-670', countryId: '076', code: 'BR-RR', nameEn: "Roraima", nameHe: "רוריימה (הר רוריימה)", regionGroup: 'br_north', regionGroupNameHe: "צפון ברזיל והאמזונס", icon: '⛰️' },
  { id: 'BRA-592', countryId: '076', code: 'BR-AM', nameEn: "Amazonas", nameHe: "אמזונאס (יער הגשם, מנאוס ונהר האמזונס)", regionGroup: 'br_north', regionGroupNameHe: "צפון ברזיל והאמזונס", icon: '🌳' },
  { id: 'BRA-594', countryId: '076', code: 'BR-PA', nameEn: "Pará", nameHe: "פארה (בלם ושפך האמזונס)", regionGroup: 'br_north', regionGroupNameHe: "צפון ברזיל והאמזונס", icon: '🦜' },
  { id: 'BRA-600', countryId: '076', code: 'BR-MS', nameEn: "Mato Grosso do Sul", nameHe: "מאטו גרוסו דו סול (בוניטו והפנטנל הדרומי)", regionGroup: 'br_central', regionGroupNameHe: "מרכז-מערב ברזיל", icon: '🐠' },
  { id: 'BRA-681', countryId: '076', code: 'BR-AP', nameEn: "Amapá", nameHe: "אמפה", regionGroup: 'br_north', regionGroupNameHe: "צפון ברזיל והאמזונס" },
  { id: 'BRA-602', countryId: '076', code: 'BR-MT', nameEn: "Mato Grosso", nameHe: "מאטו גרוסו (הפנטנל ויער האמזונס)", regionGroup: 'br_central', regionGroupNameHe: "מרכז-מערב ברזיל", icon: '🐆' },
  { id: 'BRA-613', countryId: '076', code: 'BR-PR', nameEn: "Paraná", nameHe: "פרנה (קוריטיבה ומפלי איגואסו)", regionGroup: 'br_south', regionGroupNameHe: "דרום ברזיל", icon: '💦' },
  { id: 'BRA-599', countryId: '076', code: 'BR-DF', nameEn: "Distrito Federal", nameHe: "המחוז הפדרלי (ברזיליה עיר הבירה)", regionGroup: 'br_central', regionGroupNameHe: "מרכז-מערב ברזיל", icon: '🏛️' },
  { id: 'BRA-1294', countryId: '076', code: 'BR-GO', nameEn: "Goiás", nameHe: "גויאס (גויאניה וצ׳פדה דוס ויידיירוס)", regionGroup: 'br_central', regionGroupNameHe: "מרכז-מערב ברזיל", icon: '🌾' },
  { id: 'BRA-596', countryId: '076', code: 'BR-TO', nameEn: "Tocantins", nameHe: "טוקנטינס (פארק ז׳לאפאו)", regionGroup: 'br_north', regionGroupNameHe: "צפון ברזיל והאמזונס", icon: '💦' },
  { id: 'BRA-1311', countryId: '076', code: 'BR-SP', nameEn: "São Paulo", nameHe: "סאו פאולו (המטרופולין הגדול)", regionGroup: 'br_southeast', regionGroupNameHe: "דרום-מזרח ברזיל", icon: '🏙️' },
  { id: 'BRA-593', countryId: '076', code: 'BR-MA', nameEn: "Maranhão", nameHe: "מרניאו (דיונות לנסויס מרניינסס)", regionGroup: 'br_northeast', regionGroupNameHe: "צפון-מזרח ברזיל", icon: '🏜️' },
  { id: 'BRA-627', countryId: '076', code: 'BR-RJ', nameEn: "Rio de Janeiro", nameHe: "ריו דה ז׳ניירו (קופהקבנה, הקורקובדו וקרנבל)", regionGroup: 'br_southeast', regionGroupNameHe: "דרום-מזרח ברזיל", icon: '🏖️' },
  { id: 'BRA-622', countryId: '076', code: 'BR-PI', nameEn: "Piauí", nameHe: "פיאווי (פארק סרה דה קפיברה)", regionGroup: 'br_northeast', regionGroupNameHe: "צפון-מזרח ברזיל" },
  { id: 'BRA-601', countryId: '076', code: 'BR-MG', nameEn: "Minas Gerais", nameHe: "מינאס ז׳ראיס (בלו הוריזונטה ואורו פרטו)", regionGroup: 'br_southeast', regionGroupNameHe: "דרום-מזרח ברזיל", icon: '☕' },
  { id: 'BRA-625', countryId: '076', code: 'BR-ES', nameEn: "Espírito Santo", nameHe: "אספיריטו סאנטו (ויטוריה)", regionGroup: 'br_southeast', regionGroupNameHe: "דרום-מזרח ברזיל", icon: '⛵' },
  { id: 'BRA-624', countryId: '076', code: 'BR-BA', nameEn: "Bahia", nameHe: "באהיה (סלבדור ופלוריניו)", regionGroup: 'br_northeast', regionGroupNameHe: "צפון-מזרח ברזיל", icon: '🥁' },
  { id: 'BRA-621', countryId: '076', code: 'BR-CE', nameEn: "Ceará", nameHe: "סיארה (פורטלזה וז׳ריקווקוארה)", regionGroup: 'br_northeast', regionGroupNameHe: "צפון-מזרח ברזיל", icon: '🌴' },
  { id: 'BRA-629', countryId: '076', code: 'BR-SE', nameEn: "Sergipe", nameHe: "סרז׳יפה (אראקז׳ו)", regionGroup: 'br_northeast', regionGroupNameHe: "צפון-מזרח ברזיל" },
  { id: 'BRA-623', countryId: '076', code: 'BR-AL', nameEn: "Alagoas", nameHe: "אלגואס (מסייאו והבריכות הטבעיות)", regionGroup: 'br_northeast', regionGroupNameHe: "צפון-מזרח ברזיל", icon: '🌊' },
  { id: 'BRA-628', countryId: '076', code: 'BR-RN', nameEn: "Rio Grande do Norte", nameHe: "ריו גראנדה דו נורטה (נאטאל ופיפה)", regionGroup: 'br_northeast', regionGroupNameHe: "צפון-מזרח ברזיל", icon: '☀️' },
  { id: 'BRA-1313', countryId: '076', code: 'BR-PE', nameEn: "Pernambuco", nameHe: "פרנמבוקו (רסיפה, אולינדה ופרננדו די נורוניה)", regionGroup: 'br_northeast', regionGroupNameHe: "צפון-מזרח ברזיל", icon: '🏝️' },
  { id: 'BRA-626', countryId: '076', code: 'BR-PB', nameEn: "Paraíba", nameHe: "פאראיבה (ז׳ואאו פסואה)", regionGroup: 'br_northeast', regionGroupNameHe: "צפון-מזרח ברזיל" },
  { id: 'BRA-614', countryId: '076', code: 'BR-SC', nameEn: "Santa Catarina", nameHe: "סנטה קטרינה (פלוריאנופוליס וחופי הגלישה)", regionGroup: 'br_south', regionGroupNameHe: "דרום ברזיל", icon: '🏄' },
  { id: 'BRA-612', countryId: '076', code: 'BR-RS', nameEn: "Rio Grande do Sul", nameHe: "ריו גראנדה דו סול (פורטו אלגרה ותרבות הגאוצ׳ו)", regionGroup: 'br_south', regionGroupNameHe: "דרום ברזיל", icon: '🥩' }
];

export const IN_SUBDIVISIONS: Subdivision[] = [
  { id: 'IND-3259', countryId: '356', code: 'IN-SK', nameEn: "Sikkim", nameHe: "סיקים (הר קנצ׳נג׳נגה ומנזרי בודהיזם)", regionGroup: 'in_northeast', regionGroupNameHe: "צפון-מזרח הודו (שבע האחיות)", icon: '🏔️' },
  { id: 'IND-20011', countryId: '356', code: 'IN-TG', nameEn: "Telangana", nameHe: "טלנגאנה (היידראבאד ומצודת גולקונדה)", regionGroup: 'in_south', regionGroupNameHe: "דרום הודו", icon: '💎' },
  { id: 'IND-20012', countryId: '356', code: 'IN-LA', nameEn: "Ladakh", nameHe: "לדאק (לה, עמק נוברה ומנזרים טיבטיים)", regionGroup: 'in_north', regionGroupNameHe: "צפון הודו וההימלאיה", icon: '🦅' },
  { id: 'IND-2427', countryId: '356', code: 'IN-CH', nameEn: "Chandigarh", nameHe: "צ׳אנדיגאר (העיר המתוכננת של לה קורבוזיה)", regionGroup: 'in_north', regionGroupNameHe: "צפון הודו וההימלאיה", icon: '🏛️' },
  { id: 'IND-2428', countryId: '356', code: 'IN-DL', nameEn: "Delhi", nameHe: "דלהי (ניו דלהי, עיר הבירה)", regionGroup: 'in_north', regionGroupNameHe: "צפון הודו וההימלאיה", icon: '🏛️' },
  { id: 'IND-2429', countryId: '356', code: 'IN-HP', nameEn: "Himachal Pradesh", nameHe: "הימאצ׳ל פרדש (מנאלי, דהרמסאלה ושימלה)", regionGroup: 'in_north', regionGroupNameHe: "צפון הודו וההימלאיה", icon: '🏔️' },
  { id: 'IND-2430', countryId: '356', code: 'IN-HR', nameEn: "Haryana", nameHe: "הריאנה (גורגאון)", regionGroup: 'in_north', regionGroupNameHe: "צפון הודו וההימלאיה" },
  { id: 'IND-2431', countryId: '356', code: 'IN-JK', nameEn: "Jammu and Kashmir", nameHe: "ג׳אמו וקשמיר (סרינגאר ועמק קשמיר)", regionGroup: 'in_north', regionGroupNameHe: "צפון הודו וההימלאיה", icon: '❄️' },
  { id: 'IND-2441', countryId: '356', code: 'IN-AP', nameEn: "Andhra Pradesh", nameHe: "אנדרה פרדש (ויזאג ומקדש טירופאטי)", regionGroup: 'in_south', regionGroupNameHe: "דרום הודו", icon: '🛕' },
  { id: 'IND-2442', countryId: '356', code: 'IN-KL', nameEn: "Kerala", nameHe: "קראלה (חופי ורקלה, תעלות בקווטרס ומטעי תה במונאר)", regionGroup: 'in_south', regionGroupNameHe: "דרום הודו", icon: '🌴' },
  { id: 'IND-2443', countryId: '356', code: 'IN-LD', nameEn: "Lakshadweep", nameHe: "לקשאדוויפ (איי האלמוגים)", regionGroup: 'in_south', regionGroupNameHe: "דרום הודו", icon: '🏝️' },
  { id: 'IND-2444', countryId: '356', code: 'IN-OR', nameEn: "Odisha", nameHe: "אודישה (מקדש השמש בקונארק ופורי)", regionGroup: 'in_east', regionGroupNameHe: "מזרח הודו", icon: '🌊' },
  { id: 'IND-2445', countryId: '356', code: 'IN-DH', nameEn: "Dadra and Nagar Haveli and Daman and Diu", nameHe: "דאדרה ונאגר הבלי ודמאן ודיו", regionGroup: 'in_west', regionGroupNameHe: "מערב ומרכז הודו" },
  { id: 'IND-2446', countryId: '356', code: 'IN-KA', nameEn: "Karnataka", nameHe: "קרנאטקה (בנגלורו, המפי ומייסור)", regionGroup: 'in_south', regionGroupNameHe: "דרום הודו", icon: '💻' },
  { id: 'IND-3265', countryId: '356', code: 'IN-GA', nameEn: "Goa", nameHe: "גואה (חופים, מסיבות וארכיטקטורה פורטוגזית)", regionGroup: 'in_west', regionGroupNameHe: "מערב ומרכז הודו", icon: '🏖️' },
  { id: 'IND-2474', countryId: '356', code: 'IN-AN', nameEn: "Andaman and Nicobar", nameHe: "איי אנדמן וניקובר (חופי הבלוק וצלילה)", regionGroup: 'in_northeast', regionGroupNameHe: "צפון-מזרח הודו (שבע האחיות)", icon: '🤿' },
  { id: 'IND-2477', countryId: '356', code: 'IN-AS', nameEn: "Assam", nameHe: "אסאם (מטעי תה וקרנפי פארק קזירנגה)", regionGroup: 'in_northeast', regionGroupNameHe: "צפון-מזרח הודו (שבע האחיות)", icon: '🦏' },
  { id: 'IND-2478', countryId: '356', code: 'IN-MN', nameEn: "Manipur", nameHe: "מניפור (אגם לוקטאק)", regionGroup: 'in_northeast', regionGroupNameHe: "צפון-מזרח הודו (שבע האחיות)" },
  { id: 'IND-2479', countryId: '356', code: 'IN-NL', nameEn: "Nagaland", nameHe: "נאגאלנד (פסטיבל הורנביל)", regionGroup: 'in_northeast', regionGroupNameHe: "צפון-מזרח הודו (שבע האחיות)", icon: '🪶' },
  { id: 'IND-2489', countryId: '356', code: 'IN-ML', nameEn: "Meghalaya", nameHe: "מגהלאיה (גשרי השורשים החיים של צ׳ראפונג׳י)", regionGroup: 'in_northeast', regionGroupNameHe: "צפון-מזרח הודו (שבע האחיות)", icon: '🌿' },
  { id: 'IND-3249', countryId: '356', code: 'IN-PB', nameEn: "Punjab", nameHe: "פנג׳אב (אמריטסר ומקדש הזהב)", regionGroup: 'in_north', regionGroupNameHe: "צפון הודו וההימלאיה", icon: '✨' },
  { id: 'IND-3250', countryId: '356', code: 'IN-RJ', nameEn: "Rajasthan", nameHe: "ראג׳סטאן (ג׳איפור, אודאיפור, ג׳ודפור וארמונות)", regionGroup: 'in_west', regionGroupNameHe: "מערב ומרכז הודו", icon: '🏰' },
  { id: 'IND-3253', countryId: '356', code: 'IN-UP', nameEn: "Uttar Pradesh", nameHe: "אוטר פרדש (הטאג׳ מהאל באגרה ו-ורנאסי)", regionGroup: 'in_north', regionGroupNameHe: "צפון הודו וההימלאיה", icon: '🕌' },
  { id: 'IND-3254', countryId: '356', code: 'IN-UT', nameEn: "Uttarakhand", nameHe: "אוטראקהאנד (רישיקש, הרידוואר והגנגס)", regionGroup: 'in_north', regionGroupNameHe: "צפון הודו וההימלאיה", icon: '🧘' },
  { id: 'IND-3256', countryId: '356', code: 'IN-JH', nameEn: "Jharkhand", nameHe: "ג׳הרקאנד (מפלים ויערות)", regionGroup: 'in_east', regionGroupNameHe: "מזרח הודו" },
  { id: 'IND-3257', countryId: '356', code: 'IN-WB', nameEn: "West Bengal", nameHe: "מערב בנגל (קולקטה ורכס דרג׳ילינג)", regionGroup: 'in_east', regionGroupNameHe: "מזרח הודו", icon: '☕' },
  { id: 'IND-3258', countryId: '356', code: 'IN-BR', nameEn: "Bihar", nameHe: "ביהאר (בודה גאיה ועץ הבודהה)", regionGroup: 'in_east', regionGroupNameHe: "מזרח הודו", icon: '🪷' },
  { id: 'IND-3260', countryId: '356', code: 'IN-CT', nameEn: "Chhattisgarh", nameHe: "צ׳האטיסגאר", regionGroup: 'in_west', regionGroupNameHe: "מערב ומרכז הודו" },
  { id: 'IND-3261', countryId: '356', code: 'IN-MP', nameEn: "Madhya Pradesh", nameHe: "מאדיה פרדש (מקדשי קהג׳וראהו ושמורות טיגריסים)", regionGroup: 'in_west', regionGroupNameHe: "מערב ומרכז הודו", icon: '🐅' },
  { id: 'IND-3262', countryId: '356', code: 'IN-PY', nameEn: "Puducherry", nameHe: "פודוצ׳רי (פונדיצ׳רי הצרפתית ואורוויל)", regionGroup: 'in_south', regionGroupNameHe: "דרום הודו", icon: '🥐' },
  { id: 'IND-3263', countryId: '356', code: 'IN-TN', nameEn: "Tamil Nadu", nameHe: "טמיל נאדו (צ׳נאי, מדוראי ומקדשים דראווידיים)", regionGroup: 'in_south', regionGroupNameHe: "דרום הודו", icon: '🛕' },
  { id: 'IND-3264', countryId: '356', code: 'IN-GJ', nameEn: "Gujarat", nameHe: "גוג׳ראט (אחמדאבאד ואריות אסייתיים)", regionGroup: 'in_west', regionGroupNameHe: "מערב ומרכז הודו", icon: '🦁' },
  { id: 'IND-3299', countryId: '356', code: 'IN-AR', nameEn: "Arunachal Pradesh", nameHe: "ארונאצ׳ל פרדש (מנזר טוואנג)", regionGroup: 'in_northeast', regionGroupNameHe: "צפון-מזרח הודו (שבע האחיות)", icon: '🏔️' },
  { id: 'IND-3300', countryId: '356', code: 'IN-MZ', nameEn: "Mizoram", nameHe: "מיזורם", regionGroup: 'in_northeast', regionGroupNameHe: "צפון-מזרח הודו (שבע האחיות)" },
  { id: 'IND-3301', countryId: '356', code: 'IN-TR', nameEn: "Tripura", nameHe: "טריפורה", regionGroup: 'in_northeast', regionGroupNameHe: "צפון-מזרח הודו (שבע האחיות)" },
  { id: 'IND-2447', countryId: '356', code: 'IN-MH', nameEn: "Maharashtra", nameHe: "מהראשטרה (מומבאי, בוליווד ומערות אלורה)", regionGroup: 'in_west', regionGroupNameHe: "מערב ומרכז הודו", icon: '🎬' }
];

export const UK_SUBDIVISIONS: Subdivision[] = [
  {
    id: 'GBR-ENG',
    countryId: '826',
    code: 'ENG',
    nameEn: 'England',
    nameHe: 'אנגליה (לונדון, מנצ׳סטר, ליברפול, אוקספורד, ברמינגהאם)',
    regionGroup: 'uk_england',
    regionGroupNameHe: 'אנגליה',
    icon: '💂‍♂️'
  },
  {
    id: 'GBR-SCT',
    countryId: '826',
    code: 'SCT',
    nameEn: 'Scotland',
    nameHe: 'סקוטלנד (אדינבורו, גלאזגו, ההיילנדס, לוך נס, האי סקאי)',
    regionGroup: 'uk_scotland',
    regionGroupNameHe: 'סקוטלנד',
    icon: '🏔️'
  },
  {
    id: 'GBR-WLS',
    countryId: '826',
    code: 'WLS',
    nameEn: 'Wales',
    nameHe: 'ויילס (קארדיף, סוונסי, שמורת הטבע סנודוניה)',
    regionGroup: 'uk_wales',
    regionGroupNameHe: 'ויילס',
    icon: '🐉'
  },
  {
    id: 'GBR-NIR',
    countryId: '826',
    code: 'NIR',
    nameEn: 'Northern Ireland',
    nameHe: 'צפון אירלנד (בלפסט, סוללת הענק, דרי)',
    regionGroup: 'uk_northern_ireland',
    regionGroupNameHe: 'צפון אירלנד',
    icon: '☘️'
  }
];

export const FR_REGIONS: Subdivision[] = [
  {
    id: 'FRA-11',
    countryId: '250',
    code: 'FR-11',
    nameEn: 'Île-de-France',
    nameHe: 'איל-דה-פראנס (פריז, ורסאי, מגדל אייפל, דיסנילנד)',
    regionGroup: 'fr_paris',
    regionGroupNameHe: 'איל-דה-פראנס ופריז',
    icon: '🗼'
  },
  {
    id: 'FRA-84',
    countryId: '250',
    code: 'FR-84',
    nameEn: 'Auvergne-Rhône-Alpes',
    nameHe: 'אוברן-רון-אלפ (ליון, שאמוני ומון בלאן, האלפים הצרפתיים, אנסי)',
    regionGroup: 'fr_alps_east',
    regionGroupNameHe: 'האלפים ומזרח צרפת',
    icon: '🏔️'
  },
  {
    id: 'FRA-93',
    countryId: '250',
    code: 'FR-93',
    nameEn: "Provence-Alpes-Côte d'Azur",
    nameHe: "פרובנס-אלפ-קוט ד'אזור (הריביירה הצרפתית, ניס, קאן, מרסיי, סן טרופה)",
    regionGroup: 'fr_south_med',
    regionGroupNameHe: 'דרום צרפת והים התיכון',
    icon: '🏖️'
  },
  {
    id: 'FRA-76',
    countryId: '250',
    code: 'FR-76',
    nameEn: 'Occitanie',
    nameHe: 'אוקסיטניה (טולוז, מונפלייה, מבצר קרקסון, הפירנאים)',
    regionGroup: 'fr_south_med',
    regionGroupNameHe: 'דרום צרפת והים התיכון',
    icon: '🏰'
  },
  {
    id: 'FRA-75',
    countryId: '250',
    code: 'FR-75',
    nameEn: 'Nouvelle-Aquitaine',
    nameHe: 'נובל-אקיטן (בורדו וכרמי היין, ביאריץ, עמק הדורדון)',
    regionGroup: 'fr_west_atlantic',
    regionGroupNameHe: 'מערב צרפת והאוקיינוס האטלנטי',
    icon: '🍷'
  },
  {
    id: 'FRA-53',
    countryId: '250',
    code: 'FR-53',
    nameEn: 'Brittany',
    nameHe: 'ברטאן (רן, סן-מלו, ברסט, צוקי האוקיינוס)',
    regionGroup: 'fr_west_atlantic',
    regionGroupNameHe: 'מערב צרפת והאוקיינוס האטלנטי',
    icon: '⛵'
  },
  {
    id: 'FRA-28',
    countryId: '250',
    code: 'FR-28',
    nameEn: 'Normandy',
    nameHe: 'נורמנדי (מון סן-מישל, רואן, חופי הנחיתה של יום ה-D)',
    regionGroup: 'fr_west_atlantic',
    regionGroupNameHe: 'מערב צרפת והאוקיינוס האטלנטי',
    icon: '🌊'
  },
  {
    id: 'FRA-44',
    countryId: '250',
    code: 'FR-44',
    nameEn: 'Grand Est',
    nameHe: 'גראנד אסט (שטרסבורג, דרך היין של אלזס, חבל שמפניה, קולמר)',
    regionGroup: 'fr_alps_east',
    regionGroupNameHe: 'האלפים ומזרח צרפת',
    icon: '🍾'
  },
  {
    id: 'FRA-32',
    countryId: '250',
    code: 'FR-32',
    nameEn: 'Hauts-de-France',
    nameHe: 'או-דה-פראנס (ליל, קאלה, אמיין)',
    regionGroup: 'fr_loire_valley',
    regionGroupNameHe: 'עמק הלואר ומרכז צרפת',
    icon: '🏛️'
  },
  {
    id: 'FRA-52',
    countryId: '250',
    code: 'FR-52',
    nameEn: 'Pays de la Loire',
    nameHe: 'פיי דה לה לואר (נאנט, עמק הלואר, אנז׳ה)',
    regionGroup: 'fr_loire_valley',
    regionGroupNameHe: 'עמק הלואר ומרכז צרפת',
    icon: '🏰'
  },
  {
    id: 'FRA-24',
    countryId: '250',
    code: 'FR-24',
    nameEn: 'Centre-Val de Loire',
    nameHe: 'סנטר-עמק הלואר (טירות שמבור, שנונסו, אורליאן)',
    regionGroup: 'fr_loire_valley',
    regionGroupNameHe: 'עמק הלואר ומרכז צרפת',
    icon: '👑'
  },
  {
    id: 'FRA-27',
    countryId: '250',
    code: 'FR-27',
    nameEn: 'Bourgogne-Franche-Comté',
    nameHe: 'בורגון-פראנש-קונטה (דיז׳ון, יקבי בורגונדי, בזאנסון)',
    regionGroup: 'fr_loire_valley',
    regionGroupNameHe: 'עמק הלואר ומרכז צרפת',
    icon: '🍇'
  },
  {
    id: 'FRA-94',
    countryId: '250',
    code: 'FR-94',
    nameEn: 'Corsica',
    nameHe: 'קורסיקה (אז׳אקסיו, בסטיה, מפרצי הטורקיז)',
    regionGroup: 'fr_south_med',
    regionGroupNameHe: 'דרום צרפת והים התיכון',
    icon: '🏝️'
  }
];

export const IT_REGIONS: Subdivision[] = [
  // North-West
  {
    id: 'IT-25',
    countryId: '380',
    code: 'IT-25',
    nameEn: 'Lombardy',
    nameHe: 'לומברדיה (מילאנו, אגם קומו, אגם גארדה, ברגמו)',
    regionGroup: 'it_north_west',
    regionGroupNameHe: 'צפון-מערב איטליה',
    icon: '🏙️'
  },
  {
    id: 'IT-21',
    countryId: '380',
    code: 'IT-21',
    nameEn: 'Piedmont',
    nameHe: 'פיימונטה (טורינו, כרמי ברולו, לאנגה, האלפים)',
    regionGroup: 'it_north_west',
    regionGroupNameHe: 'צפון-מערב איטליה',
    icon: '🏔️'
  },
  {
    id: 'IT-42',
    countryId: '380',
    code: 'IT-42',
    nameEn: 'Liguria',
    nameHe: 'ליגוריה (ג׳נובה, צ׳ינקווה טרה, פורטופינו, הריביירה)',
    regionGroup: 'it_north_west',
    regionGroupNameHe: 'צפון-מערב איטליה',
    icon: '⛵'
  },
  {
    id: 'IT-23',
    countryId: '380',
    code: 'IT-23',
    nameEn: 'Aosta Valley',
    nameHe: 'ואל ד׳אוסטה (עמק אאוסטה, מון בלאן ומטרהורן, קורמאיור)',
    regionGroup: 'it_north_west',
    regionGroupNameHe: 'צפון-מערב איטליה',
    icon: '⛷️'
  },

  // North-East
  {
    id: 'IT-34',
    countryId: '380',
    code: 'IT-34',
    nameEn: 'Veneto',
    nameHe: 'ונטו (ונציה, ורונה, פדובה, הרי הדולומיטים)',
    regionGroup: 'it_north_east',
    regionGroupNameHe: 'צפון-מזרח איטליה והדולומיטים',
    icon: '🎭'
  },
  {
    id: 'IT-32',
    countryId: '380',
    code: 'IT-32',
    nameEn: 'Trentino-South Tyrol',
    nameHe: 'טרנטינו - אלטו אדיג׳ה (הרי הדולומיטים, בולצאנו, אגם קארצה, טרנטו)',
    regionGroup: 'it_north_east',
    regionGroupNameHe: 'צפון-מזרח איטליה והדולומיטים',
    icon: '🏔️'
  },
  {
    id: 'IT-45',
    countryId: '380',
    code: 'IT-45',
    nameEn: 'Emilia-Romagna',
    nameHe: 'אמיליה-רומאניה (בולוניה, מודנה, פארמה, חופי רימיני)',
    regionGroup: 'it_north_east',
    regionGroupNameHe: 'צפון-מזרח איטליה והדולומיטים',
    icon: '🍝'
  },
  {
    id: 'IT-36',
    countryId: '380',
    code: 'IT-36',
    nameEn: 'Friuli-Venezia Giulia',
    nameHe: 'פריולי-ונציה ג׳וליה (טריאסטה, אודינה, הרי האלפים היוליים)',
    regionGroup: 'it_north_east',
    regionGroupNameHe: 'צפון-מזרח איטליה והדולומיטים',
    icon: '🏰'
  },

  // Central
  {
    id: 'IT-62',
    countryId: '380',
    code: 'IT-62',
    nameEn: 'Lazio',
    nameHe: 'לאציו (רומא, הוותיקן, הקולוסיאום, טיבולי)',
    regionGroup: 'it_central',
    regionGroupNameHe: 'מרכז איטליה',
    icon: '🏛️'
  },
  {
    id: 'IT-52',
    countryId: '380',
    code: 'IT-52',
    nameEn: 'Tuscany',
    nameHe: 'טוסקנה (פירנצה, סיינה, פיזה, כרמי קיאנטי, סן ג׳ימיניאנו)',
    regionGroup: 'it_central',
    regionGroupNameHe: 'מרכז איטליה',
    icon: '🍷'
  },
  {
    id: 'IT-55',
    countryId: '380',
    code: 'IT-55',
    nameEn: 'Umbria',
    nameHe: 'אומבריה (הלב הירוק של איטליה, פרוג׳ה, אסיזי, אורבייטו)',
    regionGroup: 'it_central',
    regionGroupNameHe: 'מרכז איטליה',
    icon: '🌳'
  },
  {
    id: 'IT-57',
    countryId: '380',
    code: 'IT-57',
    nameEn: 'Marche',
    nameHe: 'מארקה (אנקונה, אורבינו, חופי ריביירה דל קונרו)',
    regionGroup: 'it_central',
    regionGroupNameHe: 'מרכז איטליה',
    icon: '🎨'
  },
  {
    id: 'IT-65',
    countryId: '380',
    code: 'IT-65',
    nameEn: 'Abruzzo',
    nameHe: 'אברוצו (הפארק הלאומי גראן סאסו, ל׳אקווילה, הרי האפנינים)',
    regionGroup: 'it_central',
    regionGroupNameHe: 'מרכז איטליה',
    icon: '🐻'
  },

  // South
  {
    id: 'IT-72',
    countryId: '380',
    code: 'IT-72',
    nameEn: 'Campania',
    nameHe: 'קמפניה (נאפולי, חוף אמאלפי, האי קאפרי, סורנטו, פומפיי)',
    regionGroup: 'it_south',
    regionGroupNameHe: 'דרום איטליה וחוף אמאלפי',
    icon: '🍋'
  },
  {
    id: 'IT-75',
    countryId: '380',
    code: 'IT-75',
    nameEn: 'Apulia (Puglia)',
    nameHe: 'פוליה (בארי, בתי הטרולי באלברובלו, לצ׳ה, חצי האי סלנטו)',
    regionGroup: 'it_south',
    regionGroupNameHe: 'דרום איטליה וחוף אמאלפי',
    icon: '🫒'
  },
  {
    id: 'IT-78',
    countryId: '380',
    code: 'IT-78',
    nameEn: 'Calabria',
    nameHe: 'קלבריה (טרופאה, רג׳ו קלבריה, שפיץ המגף)',
    regionGroup: 'it_south',
    regionGroupNameHe: 'דרום איטליה וחוף אמאלפי',
    icon: '🌶️'
  },
  {
    id: 'IT-77',
    countryId: '380',
    code: 'IT-77',
    nameEn: 'Basilicata',
    nameHe: 'בזיליקטה (עיר המערות מָטֶרָה, פוטנצה, מאראטאה)',
    regionGroup: 'it_south',
    regionGroupNameHe: 'דרום איטליה וחוף אמאלפי',
    icon: '🪨'
  },
  {
    id: 'IT-67',
    countryId: '380',
    code: 'IT-67',
    nameEn: 'Molise',
    nameHe: 'מוליזה (קמפובאסו, חופי תרמולי, רכס מאטסה)',
    regionGroup: 'it_south',
    regionGroupNameHe: 'דרום איטליה וחוף אמאלפי',
    icon: '🌾'
  },

  // Islands
  {
    id: 'IT-82',
    countryId: '380',
    code: 'IT-82',
    nameEn: 'Sicily',
    nameHe: 'סיציליה (פלרמו, קטניה, טאורמינה, הר אתנה, סירקוזה)',
    regionGroup: 'it_islands',
    regionGroupNameHe: 'איי איטליה (סיציליה וסרדיניה)',
    icon: '🌋'
  },
  {
    id: 'IT-88',
    countryId: '380',
    code: 'IT-88',
    nameEn: 'Sardinia',
    nameHe: 'סרדיניה (קליארי, קוסטה סמרלדה, חופי קאלא גונורה)',
    regionGroup: 'it_islands',
    regionGroupNameHe: 'איי איטליה (סיציליה וסרדיניה)',
    icon: '🏝️'
  }
];

export const ALL_SUBDIVISIONS: Subdivision[] = [
  ...US_STATES,
  ...CA_PROVINCES,
  ...AU_STATES,
  ...EG_SUBDIVISIONS,
  ...CN_SUBDIVISIONS,
  ...RU_SUBDIVISIONS,
  ...BR_SUBDIVISIONS,
  ...IN_SUBDIVISIONS,
  ...UK_SUBDIVISIONS,
  ...FR_REGIONS,
  ...IT_REGIONS
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
    nameHe: 'טריטוריית הבירה (קנברה ומפרץ ג׳רוויס)',
    icon: '🏛️',
    subdivisionIds: ['AUS-2653', 'AUS-1932']
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
  },

  // China Regions
  {
    id: 'cn_northwest',
    countryId: '156',
    nameEn: "Northwest & Silk Road",
    nameHe: "צפון-מערב ודרך המשי (שאאנשי / שיאן, גאנסו, שינג׳יאנג)",
    icon: '🐪',
    subdivisionIds: ["CHN-1150","CHN-1151","CHN-1756","CHN-1803","CHN-1804"]
  },
  {
    id: 'cn_south',
    countryId: '156',
    nameEn: "South & Central China",
    nameHe: "דרום ומרכז סין (גואנגדונג, גואנגשי, האינאן, חוביי, חונאן ועוד)",
    icon: '🌴',
    subdivisionIds: ["CHN-1152","CHN-1180","CHN-1775","CHN-1807","CHN-1808","CHN-1812"]
  },
  {
    id: 'cn_southwest',
    countryId: '156',
    nameEn: "Southwest China",
    nameHe: "דרום-מערב סין (סצ׳ואן / פנדות, יונאן, טיבט וצ׳ונגצ׳ינג)",
    icon: '🐼',
    subdivisionIds: ["CHN-1153","CHN-1154","CHN-1662","CHN-1809","CHN-1810"]
  },
  {
    id: 'cn_north',
    countryId: '156',
    nameEn: "North China",
    nameHe: "צפון סין (בייג׳ינג, טיאנג׳ין, מונגוליה הפנימית ועוד)",
    icon: '🏛️',
    subdivisionIds: ["CHN-1155","CHN-1805","CHN-1811","CHN-1816","CHN-1838"]
  },
  {
    id: 'cn_east',
    countryId: '156',
    nameEn: "East China",
    nameHe: "מזרח סין (שנגחאי, ג׳יאנגסו, ג׳ג׳יאנג, פוג׳יין ועוד)",
    icon: '🏙️',
    subdivisionIds: ["CHN-1178","CHN-1179","CHN-1814","CHN-1817","CHN-1818","CHN-1819","CHN-1820"]
  },
  {
    id: 'cn_northeast',
    countryId: '156',
    nameEn: "Northeast China (Manchuria)",
    nameHe: "צפון-מזרח סין / מנצ׳וריה (חרבין, ג׳ילין, ליאונינג)",
    icon: '❄️',
    subdivisionIds: ["CHN-1813","CHN-1828","CHN-1839"]
  },

  // Russia Regions
  {
    id: 'ru_siberia',
    countryId: '643',
    nameEn: "Siberian Federal District",
    nameHe: "סיביר ואגם באיקל (נובוסיבירסק, אירקוטסק, קרסנויארסק, אלטאי)",
    icon: '🐻',
    subdivisionIds: ["RUS-2167","RUS-2397","RUS-2399","RUS-2400","RUS-2401","RUS-2402","RUS-2403","RUS-2602","RUS-2603","RUS-2605"]
  },
  {
    id: 'ru_south',
    countryId: '643',
    nameEn: "Southern & Caucasus Federal District",
    nameHe: "דרום רוסיה, סוצ׳י והקווקז (סוצ׳י, קרים, דגסטן, צ׳צ׳ניה, אלברוס)",
    icon: '🌴',
    subdivisionIds: ["RUS-2279","RUS-2280","RUS-2303","RUS-2304","RUS-2305","RUS-2306","RUS-2367","RUS-2369","RUS-2371","RUS-2388","RUS-2390","RUS-2416","RUS-2417","RUS-283","RUS-5482"]
  },
  {
    id: 'ru_fareast',
    countryId: '643',
    nameEn: "Far Eastern Federal District",
    nameHe: "המזרח הרחוק וקמצ׳טקה (ולדיווסטוק, קמצ׳טקה, יקוטיה, צ׳וקוטקה, בירוביג׳אן)",
    icon: '🌋',
    subdivisionIds: ["RUS-2321","RUS-2606","RUS-2609","RUS-2610","RUS-2611","RUS-2612","RUS-2613","RUS-2614","RUS-2615","RUS-2616","RUS-3468"]
  },
  {
    id: 'ru_northwest',
    countryId: '643',
    nameEn: "Northwestern Federal District",
    nameHe: "צפון-מערב וסנקט פטרבורג (פטרבורג, קלינינגרד, מורמנסק, קרליה)",
    icon: '🏰',
    subdivisionIds: ["RUS-2324","RUS-2333","RUS-2334","RUS-2335","RUS-2336","RUS-2337","RUS-2353","RUS-2354","RUS-2359","RUS-2381","RUS-2383"]
  },
  {
    id: 'ru_central',
    countryId: '643',
    nameEn: "Central Federal District",
    nameHe: "מחוז מוסקבה והמרכז (מוסקבה, ולדימיר, ירוסלבל ועוד)",
    icon: '🏛️',
    subdivisionIds: ["RUS-2342","RUS-2343","RUS-2355","RUS-2356","RUS-2358","RUS-2360","RUS-2361","RUS-2362","RUS-2363","RUS-2364","RUS-2365","RUS-2366","RUS-2368","RUS-2370","RUS-2374","RUS-2375","RUS-2376","RUS-2377"]
  },
  {
    id: 'ru_volga',
    countryId: '643',
    nameEn: "Volga Federal District",
    nameHe: "אגן נהר הוולגה (טטרסטן / קאזאן, ניז׳ני נובגורוד, סמארה, בשקורטוסטן)",
    icon: '🕌',
    subdivisionIds: ["RUS-2357","RUS-2372","RUS-2373","RUS-2378","RUS-2384","RUS-2385","RUS-2387","RUS-2389","RUS-2392","RUS-2391","RUS-2393","RUS-2394","RUS-2395","RUS-3200"]
  },
  {
    id: 'ru_ural',
    countryId: '643',
    nameEn: "Ural Federal District",
    nameHe: "הרי האורל (יקטרינבורג, צ׳ליאבינסק, ימאל-ננץ)",
    icon: '💎',
    subdivisionIds: ["RUS-2379","RUS-2380","RUS-2382","RUS-2386","RUS-2396","RUS-2398"]
  },

  // Brazil Regions
  {
    id: 'br_north',
    countryId: '076',
    nameEn: "North Region (Amazon)",
    nameHe: "צפון ברזיל ויערות האמזונס (אמזונאס / מנאוס, פארה, רוריימה, טוקנטינס)",
    icon: '🌳',
    subdivisionIds: ["BRA-576","BRA-595","BRA-670","BRA-592","BRA-594","BRA-681","BRA-596"]
  },
  {
    id: 'br_central',
    countryId: '076',
    nameEn: "Central-West Region",
    nameHe: "מרכז-מערב ברזיל (ברזיליה עיר הבירה, גויאס, הפנטנל)",
    icon: '🏛️',
    subdivisionIds: ["BRA-600","BRA-602","BRA-599","BRA-1294"]
  },
  {
    id: 'br_south',
    countryId: '076',
    nameEn: "South Region",
    nameHe: "דרום ברזיל (פרנה ומפלי איגואסו, סנטה קטרינה, ריו גראנדה דו סול)",
    icon: '💦',
    subdivisionIds: ["BRA-613","BRA-614","BRA-612"]
  },
  {
    id: 'br_southeast',
    countryId: '076',
    nameEn: "Southeast Region",
    nameHe: "דרום-מזרח ברזיל (סאו פאולו, ריו דה ז׳ניירו, מינאס ז׳ראיס)",
    icon: '🏖️',
    subdivisionIds: ["BRA-1311","BRA-627","BRA-601","BRA-625"]
  },
  {
    id: 'br_northeast',
    countryId: '076',
    nameEn: "Northeast Region",
    nameHe: "צפון-מזרח ברזיל (באהיה / סלבדור, פרנמבוקו, סיארה, מרניאו)",
    icon: '🥁',
    subdivisionIds: ["BRA-593","BRA-622","BRA-624","BRA-621","BRA-629","BRA-623","BRA-628","BRA-1313","BRA-626"]
  },

  // India Regions
  {
    id: 'in_northeast',
    countryId: '356',
    nameEn: "Northeast India (Seven Sisters)",
    nameHe: "צפון-מזרח הודו ושבע האחיות (אסאם, סיקים, מגהלאיה, איי אנדמן וניקובר)",
    icon: '🦏',
    subdivisionIds: ["IND-3259","IND-2474","IND-2477","IND-2478","IND-2479","IND-2489","IND-3299","IND-3300","IND-3301"]
  },
  {
    id: 'in_south',
    countryId: '356',
    nameEn: "South India",
    nameHe: "דרום הודו (קרנאטקה / בנגלורו, קראלה, טמיל נאדו, טלנגאנה / היידראבאד)",
    icon: '🌴',
    subdivisionIds: ["IND-20011","IND-2441","IND-2442","IND-2443","IND-2446","IND-3262","IND-3263"]
  },
  {
    id: 'in_north',
    countryId: '356',
    nameEn: "North India & Himalayas",
    nameHe: "צפון הודו וההימלאיה (דלהי, קשמיר, לדאק, הימאצ׳ל, רישיקש, פנג׳אב, טאג׳ מהאל)",
    icon: '🏔️',
    subdivisionIds: ["IND-20012","IND-2427","IND-2428","IND-2429","IND-2430","IND-2431","IND-3249","IND-3253","IND-3254"]
  },
  {
    id: 'in_east',
    countryId: '356',
    nameEn: "East India",
    nameHe: "מזרח הודו (מערב בנגל / קולקטה, ביהאר, אודישה, ג׳הרקאנד)",
    icon: '☕',
    subdivisionIds: ["IND-2444","IND-3256","IND-3257","IND-3258"]
  },
  {
    id: 'in_west',
    countryId: '356',
    nameEn: "West & Central India",
    nameHe: "מערב ומרכז הודו (מומבאי / מהראשטרה, גואה, ראג׳סטאן, גוג׳ראט, מאדיה פרדש)",
    icon: '🏰',
    subdivisionIds: ["IND-2445","IND-3265","IND-3250","IND-3260","IND-3261","IND-3264","IND-2447"]
  },

  // United Kingdom Constituent Nations & Regions
  {
    id: 'uk_england',
    countryId: '826',
    nameEn: 'England',
    nameHe: 'אנגליה (לונדון, מנצ׳סטר, אוקספורד)',
    icon: '💂‍♂️',
    subdivisionIds: ['GBR-ENG']
  },
  {
    id: 'uk_scotland',
    countryId: '826',
    nameEn: 'Scotland',
    nameHe: 'סקוטלנד (אדינבורו, גלאזגו, ההיילנדס)',
    icon: '🏔️',
    subdivisionIds: ['GBR-SCT']
  },
  {
    id: 'uk_wales',
    countryId: '826',
    nameEn: 'Wales',
    nameHe: 'ויילס (קארדיף, שמורת סנודוניה)',
    icon: '🐉',
    subdivisionIds: ['GBR-WLS']
  },
  {
    id: 'uk_northern_ireland',
    countryId: '826',
    nameEn: 'Northern Ireland',
    nameHe: 'צפון אירלנד (בלפסט, סוללת הענק)',
    icon: '☘️',
    subdivisionIds: ['GBR-NIR']
  },

  // France Regions
  {
    id: 'fr_paris',
    countryId: '250',
    nameEn: 'Île-de-France & Paris',
    nameHe: 'איל-דה-פראנס ופריז (מגדל אייפל, ורסאי, דיסנילנד)',
    icon: '🗼',
    subdivisionIds: ['FRA-11']
  },
  {
    id: 'fr_south_med',
    countryId: '250',
    nameEn: 'French Riviera, Occitanie & Corsica',
    nameHe: 'דרום צרפת, הריביירה, אוקסיטניה וקורסיקה (ניס, קאן, מרסיי, טולוז, קורסיקה)',
    icon: '🏖️',
    subdivisionIds: ['FRA-93', 'FRA-76', 'FRA-94']
  },
  {
    id: 'fr_west_atlantic',
    countryId: '250',
    nameEn: 'Atlantic Coast, Brittany & Normandy',
    nameHe: 'החוף האטלנטי, ברטאן, נורמנדי ובורדו (בורדו, מון סן-מישל, ברטאן)',
    icon: '🌊',
    subdivisionIds: ['FRA-75', 'FRA-53', 'FRA-28']
  },
  {
    id: 'fr_alps_east',
    countryId: '250',
    nameEn: 'French Alps, Lyon & Alsace',
    nameHe: 'האלפים הצרפתיים, ליון ואלזס (שאמוני / מון בלאן, ליון, שטרסבורג, שמפניה)',
    icon: '🏔️',
    subdivisionIds: ['FRA-84', 'FRA-44']
  },
  {
    id: 'fr_loire_valley',
    countryId: '250',
    nameEn: 'Loire Valley, Central France & Burgundy',
    nameHe: 'עמק הלואר, מרכז צרפת ובורגון (טירות הלואר, שמבור, נאנט, דיז׳ון, ליל)',
    icon: '🏰',
    subdivisionIds: ['FRA-52', 'FRA-24', 'FRA-27', 'FRA-32']
  },

  // Italy Regions
  {
    id: 'it_north_west',
    countryId: '380',
    nameEn: 'North-West Italy',
    nameHe: 'צפון-מערב איטליה (מילאנו, אגם קומו, טורינו, צ׳ינקווה טרה, ואל ד׳אוסטה)',
    icon: '🏙️',
    subdivisionIds: ['IT-25', 'IT-21', 'IT-42', 'IT-23']
  },
  {
    id: 'it_north_east',
    countryId: '380',
    nameEn: 'North-East Italy & Dolomites',
    nameHe: 'צפון-מזרח איטליה והדולומיטים (ונציה, ורונה, בולוניה, הדולומיטים)',
    icon: '🎭',
    subdivisionIds: ['IT-34', 'IT-32', 'IT-45', 'IT-36']
  },
  {
    id: 'it_central',
    countryId: '380',
    nameEn: 'Central Italy',
    nameHe: 'מרכז איטליה (רומא, הוותיקן, פירנצה / טוסקנה, אומבריה, אברוצו)',
    icon: '🏛️',
    subdivisionIds: ['IT-62', 'IT-52', 'IT-55', 'IT-57', 'IT-65']
  },
  {
    id: 'it_south',
    countryId: '380',
    nameEn: 'South Italy & Amalfi Coast',
    nameHe: 'דרום איטליה וחוף אמאלפי (נאפולי, אמאלפי, קאפרי, פוליה, קלבריה, מָטֶרָה)',
    icon: '🍋',
    subdivisionIds: ['IT-72', 'IT-75', 'IT-78', 'IT-77', 'IT-67']
  },
  {
    id: 'it_islands',
    countryId: '380',
    nameEn: 'Italian Islands (Sicily & Sardinia)',
    nameHe: 'איי איטליה (סיציליה, הר אתנה, פלרמו, סרדיניה וקוסטה סמרלדה)',
    icon: '🌋',
    subdivisionIds: ['IT-82', 'IT-88']
  }
];

export const HIGHLIGHT_THEMES: HighlightColorTheme[] = [
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
