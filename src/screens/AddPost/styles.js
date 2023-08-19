import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth, height, width } from '../../common/foundation';



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: width - ScaleWidth(20),
        marginTop: ScaleHeight(23)
    },
    postButton: {
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        height: ScaleHeight(25),
        width: ScaleWidth(50),
        borderRadius: ScaleHeight(20),
    },
    post: {
        color: Colors.white,
        fontSize: ScaleWidth(15),
        fontWeight: 'bold'
    },
    inputStyle: {
        borderWidth: 0,
        width: width - ScaleWidth(20),
        alignSelf: 'center',
        marginTop: ScaleHeight(27),
        height: ScaleHeight(170),
        shadowColor: Colors.gray,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.62,
        elevation: 4,
    },
    image: {
        width: ScaleWidth('32%'),
        height: ScaleHeight('12%'),
        borderRadius: ScaleHeight(5),
        marginTop: ScaleHeight(10),
        marginLeft: ScaleWidth(10)
    },
    pictureButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.inputBackground,
        width: ScaleWidth(80),
        padding: ScaleHeight(7),
        borderRadius: ScaleHeight(5),
        position: 'absolute',
        bottom: ScaleHeight(20),
        marginLeft: ScaleWidth(20),
    },
    photoText: {
        color: Colors.blue,
        marginLeft: ScaleWidth(5),
        fontWeight: '700'
    }
})
export default styles;