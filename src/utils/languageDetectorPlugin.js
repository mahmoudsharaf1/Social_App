import AsyncStorage from '@react-native-async-storage/async-storage';



const STORE_LANGUAGE_KEY = 'lang';

const languageDetectorPlugin = {
  type: 'languageDetector',
  async: true,
  init: () => { },
  detect: async function (callback) {
    try {
      //get stored language from Async storage
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(language => {
        if (language) {
          //if language was stored before, use this language in the app
          return callback('en');
        } else {
          //if language was not stored yet, use device's locale
          return callback('en');
        }
      });
    } catch (error) {
      crashlytics().recordError(error);
    }
  },
  cacheUserLanguage: async function (language) {
    try {
      //save a user's language choice in Async storage
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {
      crashlytics().recordError(error);
    }
  },
};

export default languageDetectorPlugin;
