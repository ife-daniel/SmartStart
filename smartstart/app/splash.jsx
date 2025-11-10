import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

export default function Splash() {
    return (

        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
            <Image
                source={require("../assets/images/Logo-and-Name.png")}
                style={{ width: 200, height: 200, resizeMode: "contain" }}
            />
        </SafeAreaView>

    )
};
