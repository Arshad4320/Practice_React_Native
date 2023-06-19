// import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'

// export default function ArrayData() {
//     const [data,setData]=useState([
//         {id:1,name:"rohim"},
//         {id:2,name:"korim"},
//         {id:3,name:"korim"},
//         {id:4,name:"korim"},
//         {id:5,name:"korim"},
//         {id:6,name:"korim"},
//         {id:7,name:"korim"},
//         {id:8,name:"korim"},
//         {id:9,name:"korim"}
//     ])
// // const handleClick=(oldId)=>{
// // setData(prevData=>{
// //     return prevData.filter(tempData=>{
// //         if(tempData.id !=oldId){
// //             return tempData
// //         }
// //     })
// // })
// // }
// const handleClick=(oldId)=>{
// setData(prevId=>{
//     return prevId.filter(tempId=>{
//         if(oldId!=tempId.id){
//             return oldId
//         }
//     })
// })
// }
//   return (
//       <View >
       
//            {/* <ScrollView>
//              {data.map((value)=>{
//                 console.log(value.name);
//                 return (
//                     <View  key={value.id}>
//                     <Text style={styles.textStyle}>{value.name}</Text>
//                 </View>
//                 )
//             })}
//            </ScrollView> */}
//            <FlatList
//            data={data}
//            renderItem={({item})=>{
//         return(
//             <TouchableOpacity onPress={()=>{handleClick(item.id)}}>
//                  <Text style={styles.textStyle}>{item.name}</Text>
//             </TouchableOpacity>
//         )
//            }}
           
           
//            />
//       </View>
   
//   )
// }

// const styles=StyleSheet.create({
//     container:{
//       flex:1
//     },
//     textStyle:{
//         fontSize:22,
//        textAlign:'center',
//        backgroundColor:'lightblue',
//        color:"red",
//        marginHorizontal:15,
//        margin:10,
//        padding:20
//     }
// })