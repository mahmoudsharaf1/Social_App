import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,

    },
    icon: {
        marginTop: ScaleHeight('30%')
    },
    text: {
        fontSize: ScaleWidth(16),
        color: Colors.gray
    }
})
export default styles