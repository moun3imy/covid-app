import LOCALES from '../locales';
import KEYS from './keys';
export default {
  [LOCALES.ARABIC]: {
    ...KEYS,

    [KEYS.TITLE]: 'تعقب حالة فيروس كورونا',
    [KEYS.SUBTITLE]: 'تتبع تطورانتشار فيروس كورونا في المغرب',
    [KEYS.STATISTICS]: ' الإحصائيات العامة',
    [KEYS.LAST_UPDATED]: ' اخر تحديث يوم {day} على الساعة {hour}',

    // [KEYS.NUMBER_OF_CASES]: 'عدد حالات',
    [KEYS.STATUS_RECOVERED]: 'حالات الشفاء',
    [KEYS.STATUS_DEATHS]: 'حالات الموت',
    [KEYS.STATUS_CONFIRMED]: 'الحالات المؤكدة',
    [KEYS.STATUS_NEGATIVES]: 'الحالات السلبية',

    [KEYS.STATISTICS_BY_REGION]: 'الإحصائيات حسب الجهات',

    // REGIONS
    [KEYS.REGIONS_CASES]: 'الرقم الحالي',
    [KEYS.REGIONS_OLD_CASES]: 'الرقم السابق',
    [KEYS.REGIONS_PERCENTAGE_CASES]: 'نسبة التغير',
    [KEYS.REGIONS_NAME]: 'الجهة',
    [KEYS.REGIONS_BeniMellalKhénifra]: 'بني ملال - خنيفرة',
    [KEYS.REGIONS_CasaSettat]: 'الدار البيضاء - سطات',
    [KEYS.REGIONS_MarrakechSafi]: ' مراكش - آسفي',
    [KEYS.REGIONS_RabatSaléKenitra]: 'الرباط - سلا - القنيطرة',
    [KEYS.REGIONS_Fèsmeknes]: 'فاس - مكناس',
    [KEYS.REGIONS_TangerTetouanAlHoceima]: 'طنجة - تطوان - الحسيمة',
    [KEYS.REGIONS_Oriental]: 'الشرق',
    [KEYS.REGIONS_Daraatafilalet]: ' درعة - تافيلالت',
    [KEYS.REGIONS_SoussMassa]: 'سوس - ماسة',
    [KEYS.REGIONS_LaâyouneSakiaElHamra]: 'العيون - الساقية الحمراء',
    [KEYS.REGIONS_DakhlaOuedEdDahab]: 'الداخلة - وادي الذهب',
    [KEYS.REGIONS_GuelmimOuedNoun]: 'كلميم - واد نون',

    [KEYS.INCREASE]: 'زيادة',
    [KEYS.DECREASE]: 'زيادة',
    [KEYS.INCREASE_FROM_YESTERDAY]:
      '{percentage}  {type} منذ الأمس ({number})    ',
    [KEYS.LIGHT]: 'لون فاتح',
    [KEYS.DARK]: 'لون غامق',
    [KEYS.SPINNER_LOADING]: 'جار التحميل ...',
  },
};
