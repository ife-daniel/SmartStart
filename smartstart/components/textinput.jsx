
import { View, TextInput , Text } from "react-native"

const InputField = ({text, inputStyle, textStyle, icon, renderIcon })=>{

    return(
        <View style={{backgroundColor:'white', 
            borderRadius:24, borderColor:'grey', borderWidth:1.5,
            height:42, padding:8, paddingRight:12, marginVertical:12,
            justifyContent:'space-between', alignItems:'center', flexDirection:'row',
            ...inputStyle}}>

        <TextInput style={{flex:1,
            color:'black', textAlign:'left', paddingHorizontal:4,
            fontWeight:'medium', fontSize:18, ...textStyle
            }}/>
       
        {renderIcon && icon}
        </View>

    )
}

export default InputField;