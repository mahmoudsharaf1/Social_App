import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation'


const styles = StyleSheet.create({
    container: {
        marginHorizontal: ScaleWidth(20),
        marginTop: ScaleHeight(11),
        borderBottomWidth: ScaleWidth(1),
        paddingBottom: ScaleHeight(15),
        borderColor: Colors.inputBackground
    },
    userView: {
        flexDirection: 'row',
    },
    infoView: {
        margin: ScaleWidth(7)
    },
    name: {
        fontWeight: 'bold'
    },
    image: {
        width: ScaleHeight(42),
        height: ScaleHeight(42),
        borderRadius: ScaleHeight(21),
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: ScaleWidth(47)
    },
    comment: {
        maxWidth: ScaleWidth('90%'),
        fontSize: ScaleWidth(13),
        fontWeight: '500'
    },
    createAt: {
        fontSize: ScaleWidth(11),
        flexGrow: 1,
        textAlign: 'right',
        top: ScaleHeight(8)
    }
})
export default styles