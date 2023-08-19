import { StyleSheet } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../../common/foundation'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: ScaleHeight(45),
        marginTop: ScaleHeight(11),
        backgroundColor: Colors.black
    },
    textView: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: ScaleWidth(27)
    },
    error: {
        fontSize: ScaleWidth(13),
        color: Colors.error,
        textAlign: 'center',
        paddingVertical: ScaleHeight(5),
        maxWidth: ScaleWidth('92%')
    },
    signup: {
        color: Colors.blue,
        fontWeight: 'bold'
    },
    genderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: ScaleHeight(15),
        marginHorizontal: ScaleWidth(50)
    },
    genderView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    gender: {
        marginEnd: ScaleWidth(5),
        fontSize: ScaleWidth(14),
        fontWeight: '600'
    }
})

export default styles