import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth, height, width } from '../../common/foundation'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: ScaleHeight(43),
        marginHorizontal: ScaleWidth(20)
    },
    title: {
        fontWeight: 'bold',
        fontSize: ScaleWidth(18),
    },
    body: {
        marginHorizontal: ScaleWidth(20),
        marginTop: ScaleHeight(27),
        paddingBottom: ScaleHeight(200)
    },
    userData: {
        alignSelf: 'center',
    },
    name: {
        fontSize: ScaleWidth(16),
        fontWeight: 'bold',
        marginTop: ScaleHeight(7),
        textAlign: 'center',

    },
    imageView: {
        borderWidth: ScaleWidth(1.4),
        width: ScaleHeight(86),
        height: ScaleHeight(86),
        borderRadius: ScaleHeight(45),
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: Colors.warning,
    },
    image: {
        alignSelf: 'center',
        width: ScaleHeight(78),
        height: ScaleHeight(78),
        borderRadius: ScaleHeight(39),

    },
    postView: {
        padding: ScaleHeight(5),
        alignSelf: 'center'
    },
    imagePost: {
        width: width - ScaleHeight(50),
        height: ScaleHeight('20%'),
        borderRadius: ScaleHeight(10),
    },
    flatList: {
        // alignSelf: 'center',
        marginTop: ScaleHeight(27)
    },
    cameraView: {
        position: 'absolute',
        bottom: ScaleHeight(0),
        right: ScaleWidth(0),
        alignSelf: 'flex-end',
        backgroundColor: Colors.white,
        width: ScaleWidth(23),
        height: ScaleWidth(23),
        borderRadius: ScaleWidth(12.5),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: ScaleWidth(0.2),
        borderColor: Colors.gray,
        shadowColor: Colors.gray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    emptyView: {
        bottom: ScaleHeight(30),
    },
    addWall: {
        width: ScaleWidth(300),
        height: ScaleHeight(300),
        alignSelf: 'center',
    },
    textEmpty: {
        fontWeight: '700',
        color: Colors.error
    },
    textEmptyView: {
        position: 'absolute',
        zIndex: 1,
        bottom: ScaleHeight(140),
        alignSelf: 'center'
    }
})
export default styles