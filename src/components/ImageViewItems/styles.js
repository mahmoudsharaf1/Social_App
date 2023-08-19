import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation'



const styles = StyleSheet.create({
    container: {

        backgroundColor: Colors.black,

    },
    imageViewer: {
        // height: ScaleHeight('100%'),
        // width: ScaleHeight('100%'),
        flex: 1
    },
    textPostView: {
        zIndex: 1,
        width: ScaleWidth('100%'),
        borderTopLeftRadius: ScaleHeight(9),
        borderTopRightRadius: ScaleHeight(9),
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.transparent
    },
    text: {
        color: Colors.white,
        fontSize: ScaleWidth(14),
        padding: ScaleHeight(23),
        // paddingTop: ScaleHeight(23)
    },
    headerContainer: {
        marginHorizontal: ScaleWidth(20),
        marginTop: ScaleHeight(50),
        position: 'absolute',
        zIndex: 1,
    },
    iconView: {
        width: ScaleHeight(30),
        height: ScaleHeight(30),
        borderRadius: ScaleHeight(15),
        backgroundColor: Colors.transparent,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSee: {
        color: Colors.gray
    },
    seeMoreText: {
        alignSelf: 'flex-start',
        padding: ScaleHeight(23),
        bottom: 20
    }
})
export default styles