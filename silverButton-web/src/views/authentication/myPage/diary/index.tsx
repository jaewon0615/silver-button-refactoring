import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';

export interface DiaryType{
  id:number;
  userId:string;
  title:string;
  content:string;
  weather:string;
  mood:string;
  createdAt:number;
}

export default function Diary() {
  const { id } = useParams<{ id:string}>();
  const [diarys, setDiarys] = useState<DiaryType[]>([]);
  const [cookies] = useCookies(["token"]);
  const [ newDiatry, setNewDiary] = useState<DiaryType>
  ({
    id:0,
    userId: id || "",
    title:"",
    content:"",
    weather:"",
    mood:"",
    createdAt:Date.now(),
  });

  const fetchDiarys = async() => {
    const token = cookies.token;

    if(!id){
      console.error("Error: id값이 없습니다");
      return;
    }

    try{
      const response = await axios.get(`http://localhost:4040/api/v1/diary/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        },
      });
      console.log("API 응답 데이터:", response.data);
      setDiarys(response.data.data || []);
    } catch(error){
      console.error("error");
    }
  };

  

  return (
    <div>오늘의 일기</div>
  )
}
