import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth, width } from '../../common/foundation'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        position: 'absolute',
        bottom: ScaleHeight(35)
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.white,
        shadowColor: Colors.gray,
        height: ScaleHeight(57),
        borderRadius: ScaleWidth(10),
        width: width - ScaleWidth(20),

        padding: ScaleHeight(10),
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    input: {
        maxWidth: ScaleWidth('80%')
    },
    send: {
        fontSize: ScaleWidth(15),
        color: Colors.blue,
        fontWeight: '600',
    }
})
export default styles