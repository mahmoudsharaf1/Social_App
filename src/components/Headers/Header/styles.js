import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../../common/foundation'


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: ScaleWidth(1),
        borderColor: Colors.inputBackground,
        marginTop: ScaleHeight(10),
        paddingBottom: ScaleHeight(15),
        marginHorizontal: ScaleWidth(20)
    },
    title: {
        fontSize: ScaleWidth(18),
        fontWeight: 'bold',
        // flexGrow: 1,
        // textAlign: 'center'
    },
    rightView: {
        width: ScaleWidth(20)
    }
})
export default styles