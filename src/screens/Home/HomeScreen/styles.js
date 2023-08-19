import { StyleSheet } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../../common/foundation'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: ScaleHeight(17),
        borderBottomWidth: ScaleWidth(1),
        borderColor: Colors.inputBackground
    },
    title: {
        fontSize: ScaleWidth(18),
        fontWeight: 'bold',
    },
    body: {
        marginHorizontal: ScaleWidth(15),
        marginTop: ScaleHeight(35),
        paddingBottom: ScaleHeight(60)
    },
    loader: {
        marginTop: ScaleHeight(12)
    }
})

export default styles