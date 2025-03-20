/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from "@emotion/react";
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { aX } from '@fullcalendar/core/internal-common';
import { response } from 'express';

export interface ExerciseType{
  id:number;
  userId:string;
  exerciseType:string;
  duration:number;
  caloriesBurned:number;
  intensity:string;
  exerciseDate:number;
  location:string;
  notes:string;
  createdAt:number;
}

export default function Exercise() {
  const { id } = useParams<{ id:string }>();
  const [exerciseItem, setExerciseItem] = useState<ExerciseType[]>([]);
  const [newExercise, setNewExercise] = useState<ExerciseType>({
    id:0,
    userId:"",
    exerciseType:"",
    duration:0,
    caloriesBurned:0,
    intensity:"",
    exerciseDate:0,
    location:"",
    notes:"",
    createdAt:0,
  });

  const [cookies] = useCookies(["token"]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;

  const navigate = useNavigate();

  const fetchExercises = async () => {
    const token = cookies.token;
    if(id && token){
      try{
        const response = await axios.get(`http://localhost:4040/api/v1/exercise/${id}`,{
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }
      );
      setExerciseItem(response.data.data);
      } catch(e){
        console.error("Failed",e);
      }
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewExercise({ ...newExercise, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 기본 제출 방지
    const token = cookies.token;

    if(token){
      try{
        const respose = await axios.post(`http://localhost:4040/api/v1/exercise/`,newExercise,{
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }
      );

      alert("운동 기록이 저장되었습니다.");

      setNewExercise({
        id:0,
        userId:"",
        exerciseType:"",
        duration:0,
        caloriesBurned:0,
        intensity:"",
        exerciseDate:0,
        location:"",
        notes:"",
        createdAt:0,
      });

      } catch(e){
        console.error("Failed to save health record", e);
        alert("운동 기록 제출에 실패했습니다."); // 오류 발생 시 알림
      }
    }

  return (
    <div>index</div>
  )
}
