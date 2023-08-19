import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation'



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black
    },
    image: {
        width: ScaleHeight(200),
        height: ScaleHeight(200)
    },
    text: {
        color: Colors.white,
        fontSize: ScaleWidth(18),
        fontWeight: 'bold',

    },
    subText: {
        color: Colors.white,
        fontSize: ScaleWidth(18),
        marginTop: ScaleHeight(5)
    },
})
export default styles