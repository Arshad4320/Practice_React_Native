import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { photUrl } from '../photUrl/Url';
import Axios from 'axios';

export default function UsingApi() {
const [postData,setPostData]=useState([]) 
  console.log(postData);
useEffect(()=>{
fetchData()
},[])

const fetchData=async()=>{
  try{
    const response=await Axios.get(photUrl)
    setPostData(response.data)

   
  }
  catch(err){
    console.log(err);
  }
}
  return (
<View style={style.container}>
 <ScrollView>
  
    {postData.map((list,index )=>{
      console.log(list);
return(
    <View  style={style.cardContainer} key={list.id}>
        <Image source={{uri:list.url}}
        style={style.imageStyle}
        />
         <Text style={style.textStyle}>
{list.title}
    </Text>
    </View>
)
    })}

 </ScrollView>
  
   
</View>
  )
}

const style=StyleSheet.create({
  
  container:{
flex:1,
alignItems:"center",
  },
  cardContainer:{
    backgroundColor:'lightblue',

  width:"75%",
   margin:15,
  padding:20,
   borderRadius:15
  },
  imageStyle:{
    height:300,
    width:"75%",
    padding:30,
    borderRadius:20,
  
    
    
  },
  textStyle:{
  
  },
})

// const obj=  {"albumId": 1, "id": 50, "thumbnailUrl": "https://via.placeholder.com/150/9e59da", "title": "et inventore quae ut tempore eius voluptatum", "url": "https://via.placeholder.com/600/9e59da"}