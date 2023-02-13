
import React, { useState } from "react";
import { Text, View, TextInput , StyleSheet,TouchableOpacity} from 'react-native';

const initialState={
   email:"",
   password:"",
}
     const LoginScreen =  () => { 
      const [state, setName] = useState(initialState);
      
    
     
      return ( 
      <View style={styles.form}>
         <Text style={styles.title}>Log in</Text>

    <View style={styles.tumb}>
      <TextInput style={styles.input}  placeholder="E-mail" placeholderTextColor="#ffffff" value={state.email}
       onChangeText={(value)=>setName(prevState=>({...prevState , email:value}))}/>
      </View>

      <View style={styles.tumb} >
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ffffff" secureTextEntry={true} value={state.password}
      onChangeText={(value)=>setName(prevState=>({...prevState , password:value}))}/>
      </View>

      <TouchableOpacity style={styles.btn} activeOpacity={0.8} >
        <Text style={styles.btnTitle}>Loin</Text>
        </TouchableOpacity>
      
    </View>
   )}
   
   const styles = StyleSheet.create({
      title:{
    marginBottom:30,
    textAlign:"center",
    fontSize:30,
    color:"#474747",
    

        },
        form:{
         marginHorizontal:40,
         
      },
      tumb:{
marginTop:15
      },
        imputText:{
          color:"#1a1a1a",
           fontSize:18,
           marginBottom:10
        },
       
      input:{
        borderWidth:3 ,
        borderColor:"#dbfff4",
        padding:2  ,
        borderRadius:5 ,
        backgroundColor: "#393e40",
        color:"#dbfff4" ,
        textAlign: 'center',
        fontSize:15 ,
        
      },
      btn:{
        
        height:40,
        marginTop:30,
        borderRadius:5,
          justifyContent: 'center',
          alignItems: 'center',
          ...Platform.select({
            android:{
              backgroundColor:"#f8f8ff",
            
            },
          })
      },
      btnTitle:{
        fontSize:16,
        color:"#00bfff",
      
      },
     
   })
   export default LoginScreen