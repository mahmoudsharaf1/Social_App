import { StyleSheet } from 'react-native'
import {
    Colors,
    ScaleHeight,
    ScaleWidth
} from '../../../common/foundation'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    button: {
        width: '100%',
        height: ScaleHeight(45),
        marginTop: ScaleHeight(32),
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
        top: ScaleHeight(11)
    },
    signup: {
        color: Colors.blue,
        fontWeight: 'bold'
    },
})
export default styles