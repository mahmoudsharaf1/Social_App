import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../../common/foundation'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: ScaleWidth(90),
        height: ScaleHeight(90),
        alignSelf: 'center'
    },
    text: {
        fontSize: ScaleWidth(27),
        fontWeight: 'bold',
        paddingVertical: ScaleHeight(7),
        color: Colors.white
    }
})
export default styles