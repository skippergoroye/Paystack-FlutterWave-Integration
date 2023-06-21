// import React from 'react';
// import  { Paystack }  from 'react-native-paystack-webview';
// import { View } from 'react-native';





// // Pay stack pay
// export default function Pay () {
//   return (
//     <View style={{ flex: 1 }}>
//       <Paystack  
        // paystackKey="pk_test_0e7022154630cce96d3c8f23caa914ae10577dee"
        // paystackSecretKey="sk_test_2154ecce70d7d7a4b4d57891222f3118e339eb87"
        // amount={'25000.00'}
        // billingEmail="skippergoroye@gmail.com"
        // billingMobile="+23409072665384"
        // billingName="skipper"
        // activityIndicatorColor="green"
//         onCancel={(e) => {
//         //   console.log(e)
//         }}
//         onSuccess={(res) => {
//         //   console.log(res)
//         }}
//         autoStart={true}
//       />
//     </View>
//   );
// }





// Modal PopUp

import React, { useRef } from 'react';
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import PayStackImage from '../assets/paystack.png'

export default function Payment (){
  const paystackWebViewRef = useRef(paystackProps.PayStackRef); 

  return (
    <View style={{flex: 1}}>
      <Paystack
        paystackKey="pk_test_0e7022154630cce96d3c8f23caa914ae10577dee"
        paystackSecretKey="sk_test_2154ecce70d7d7a4b4d57891222f3118e339eb87"
        amount={'25000.00'}
        billingEmail="skippergoroye@gmail.com"
        billingMobile="+23409072665384"
        billingName="skipper"
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        ref={paystackWebViewRef}
      />

        <TouchableOpacity 
          onPress={()=> paystackWebViewRef.current.startTransaction()} 
        > 
          <View style={styles.paystack}>
            <View style={styles.logo}>
                <Image 
                    source={PayStackImage}
                    style={styles.image}
                />
                <Text style={styles.text}>paystack</Text>
            </View>
            <Text style={styles.pay}>Pay Now</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
}


const styles = StyleSheet.create({
    paystack: {
    flex: 1,
    marginTop: 400,
    },
    image: {
        width: 50,
        height: 80,
        marginBottom: 40
    },
    logo: {
        flexDirection: 'row',
        alignItems: "center",
        paddingRight: 50
    },
    text: {
        marginBottom: 50,
        fontSize: 30,
        fontWeight: "bold"
    },
    pay: {
      backgroundColor: "#0ba1d8",
      color: "white",
      minWidth: "30%",
      
      padding: 5,
      borderRadius: 15,
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
    },
  });
  




