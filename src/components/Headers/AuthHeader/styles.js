import { StyleSheet } from "react-native";
import { Colors, ScaleHeight, ScaleWidth, width } from "../../../common/foundation";

const styles = StyleSheet.create({
    container: {
        width,
        backgroundColor: Colors.white,
    },
    backButton: {
        height: ScaleWidth(36),
        width: ScaleWidth(36),
        marginTop: ScaleHeight(20),
        marginLeft: ScaleWidth(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        alignSelf: 'center',
        marginTop: ScaleHeight(18)
    },
    txt: {
        fontSize: ScaleWidth(16),
        marginVertical: ScaleHeight(27),
        marginLeft: ScaleWidth(20),
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default styles