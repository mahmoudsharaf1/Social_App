import { StyleSheet } from "react-native";
import { Colors, ScaleHeight, ScaleWidth } from "../../common/foundation";

const styles = StyleSheet.create({
    container: {

        backgroundColor: Colors.secondary,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: ScaleWidth(10),
        flexDirection: 'row'
    },
    txt: {
        fontSize: ScaleWidth(16),
        color: "white"

    }
})

export default styles