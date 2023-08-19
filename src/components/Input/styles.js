import { StyleSheet, I18nManager } from 'react-native';
import { Colors, ScaleWidth, ScaleHeight, width } from '../../common/foundation';

export default StyleSheet.create({
  input: {
    flex: 1,
    color: Colors.darkBlue,
    textAlign: I18nManager.isRTL ? "right" : 'left',
    height: ScaleHeight(45),
    fontSize: ScaleWidth(13),
  },
  mainContainer: {
    width: width - ScaleWidth(50),
    alignSelf: 'center'
  },
  subContainer: {
    marginTop: ScaleHeight(17),
    width: width - ScaleWidth(50),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: ScaleWidth(10),
    borderWidth: ScaleWidth(1),
    borderColor: Colors.inputBackground,
    paddingHorizontal: ScaleWidth(10)
  },
  title: {
    color: Colors.gray,
    marginLeft: ScaleHeight(2),
    marginTop: ScaleHeight(6),
    fontSize: ScaleWidth(13)

  }, error: {
    color: Colors.denger,
    marginTop: ScaleHeight(5),
    marginLeft: ScaleHeight(5),
    fontSize: ScaleWidth(10)
  },
  eyeIcon: {
    marginHorizontal: ScaleWidth(5)
  }

});
