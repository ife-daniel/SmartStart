
import { TouchableOpacity , Text } from "react-native"

const Button = ({text, buttonStyle, textStyle, onPress})=>{

    return(
        <TouchableOpacity onPress={onPress} style={{
            backgroundColor:'#0077B6', borderRadius:8, height:48, paddingVertical:8,
            paddingHorizontal: 14, justifyContent:'center', marginVertical:12, ...buttonStyle}}>            
            <Text style={{color:'white', textAlign:'center', 
                fontWeight:'bold', fontSize:14, ...textStyle}}>{text}</Text>
        </TouchableOpacity>
        
    )
}

export default Button;