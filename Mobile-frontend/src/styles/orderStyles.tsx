import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { Colors } from "../utils/Constants";

export const orderStyles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 5,
        borderColor: "#F0F2F5",
        backgroundColor: "#fff",
    },
    listContainer: {
        padding: 16,
        borderBottomWidth: 5,
        borderColor: "#F0F2F5",
        flex: 1,
        backgroundColor: "#fff",
    },
    heading: {
        fontSize: scale(14),
        fontWeight: "600",
        color: "#000",
        marginBottom: 8,
    },
    subHeading: {
        fontSize: scale(12),
        fontWeight: "400",
        color: "#555",
        flex: 1,
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    btn: {
        backgroundColor: Colors.active,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    btnText: {
        color: "#fff",
        fontSize: scale(12),
        fontWeight: "500",
    },
    order: {
        marginTop: 16,
        padding: 12,
        borderColor: "#E0E0E0",
        backgroundColor: "#FAFAFA",
    },
    orderContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 12,
    },
    orderDetails: {
        width: '60%'
    },
    itemName: {
        fontSize: scale(12),
        fontWeight: "500",
        color: "#000",
        marginBottom: 4,
    },
    price: {
        fontSize: scale(12),
        fontWeight: "400",
        color: "#555",
    },
    deliveryDate: {
        fontSize: scale(10),
        fontWeight: "400",
        color: "#777",
        textAlign: "right",
    },
    address: {
        fontSize: scale(10),
        fontWeight: "400",
        marginTop: 8,
        marginBottom: 5,
        color: "#444",
        textAlign: "right",
    },
    emptyText: {
        fontSize: scale(12),
        color: "#222",
        textAlign: "center",
        marginVertical: 40,
    },
    statusContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        borderColor: "#333",
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 4
    },
    statusText: {
        fontSize: scale(9)
    }
});