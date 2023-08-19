import { StyleSheet } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth, height } from '../../common/foundation'


const styles = StyleSheet.create({
    container: {
        marginTop: ScaleHeight(21),
        borderTopWidth: ScaleWidth(1),
        paddingVertical: ScaleHeight(7),
        borderColor: Colors.inputBackground
    },
    userHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoView: {
        margin: ScaleWidth(7)
    },
    image: {
        width: ScaleHeight(42),
        height: ScaleHeight(42),
        borderRadius: ScaleHeight(21),
    },
    imageView: {
        alignSelf: 'center'
    },
    imagePost: {
        width: ScaleWidth('100%'),
        height: ScaleHeight('50%'),
        borderRadius: ScaleHeight(5),
    },
    name: {

    },
    createAt: {
        color: Colors.gray
    },
    textView: {
        paddingVertical: ScaleHeight(13),

    },
    text: {
        lineHeight: ScaleHeight(17),
    },

    textSee: {
        color: Colors.male,
        fontWeight: '600',


    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: ScaleWidth(80),
        marginTop: ScaleHeight(17),

    },
    textIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    length: {
        fontSize: ScaleWidth(16),
        marginStart: ScaleWidth(5)
    }
})

export default styles