import en from '../translate/en';
import pt from '../translate/pt';

export default function translate(lng) {
    const dictionary = {
        ...en,
        ...pt
    };

    const arrLanguages = (Object.keys(dictionary));
    
    const indexNewLng = arrLanguages.indexOf(lng) + 1 > arrLanguages.length - 1 ?
        0 :
        arrLanguages.indexOf(lng) + 1;
    
    const language = {
        lng: arrLanguages[indexNewLng],
        dictionary: dictionary[arrLanguages[indexNewLng]]
    };

    return (language);
};