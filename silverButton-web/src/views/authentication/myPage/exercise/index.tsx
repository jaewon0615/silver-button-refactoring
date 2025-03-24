/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from "@emotion/react";
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { aX } from '@fullcalendar/core/internal-common';
import { response } from 'express';
import * as s from "./style";
import "react-datepicker/dist/react-datepicker.css";
import { FaTrash } from 'react-icons/fa';

export interface ExerciseType{
  id:number;
  userId:string;
  exerciseType:string;
  duration:number;
  caloriesBurned:number;
  intensity:number;
  exerciseDate:number;
  location:string;
  notes:string;
  createdAt:number;
  heart:number;
  weight:number;
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
    intensity:0,
    exerciseDate:0,
    location:"",
    notes:"",
    createdAt:0,
    heart:0,
    weight:0,
  });

  const [cookies] = useCookies(["token"]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;

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
        intensity:0,
        exerciseDate:0,
        location:"",
        notes:"",
        createdAt:0,
        heart:0,
        weight:0,
      });

      } catch(e){
        console.error("Failed to save health record", e);
        alert("운동 기록 제출에 실패했습니다."); // 오류 발생 시 알림
      }
    }
  };

  const handleDelete = async (exerciseId: number) => {
    const token = cookies.token;
    if(token){
      try{
        await axios.delete(`http://localhost:4040/api/v1/exercise/${exerciseId}`,{
          headers:{
            Authorization:`Bearer ${token}`,
          },
        });
        
        setExerciseItem((prev) =>
          prev.filter((exercise) => exercise.id !== exerciseId)
        );
        alert("운동 기록이 삭제되었습니다.")
      } catch (e) {
        console.error("Failed to delete exercise record", e);
        alert("운동 기록 삭제에 실패했습니다.");
      }
    }
  };

  const handleGraphView = () => {
    
    if (id) {
      navigate(`/exercise/${id}`);
    }
  }; 

  useEffect(() =>{
    fetchExercises();
  },[id, cookies.token]);

    // 페이지네이션 관련 계산
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = exerciseItem.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(exerciseItem.length / recordsPerPage);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    }; 


  return (
    <div css={s.container}>
      <div css={s.conttSt}>
      <div css={s.recordContainer}>
        <h1 css={s.title}>운동 기록 추가</h1>
        <form css={s.form} onSubmit={handleSubmit}>
          <div css={s.inputGroup}>
            <label css={s.label}>운동 종류</label>
            <input 
              type="text"
              name="exerciseType"
              value={newExercise.exerciseType}
              onChange={handleInputChange}
              placeholder="예: 달리기,걷기,테니스,배드민턴"
              required
              css={s.input}
              />
          </div>
          <div css={s.inputGroupunder}>
            <label css={s.label}>운동 시간</label>
            <input 
              type="number"
              name="duration"
              value={newExercise.duration}
              onChange={handleInputChange}
              placeholder="예: 30분,60분,80분"
              required
              css={s.input}/>
          </div>
          <div css={s.inputGroupunder}>
            <label css={s.label}>소모한 칼로리</label>
            <input 
              type="number"
              name="caloriesBurned"
              value={newExercise.caloriesBurned}
              onChange={handleInputChange}
              placeholder="예: 400칼로리,800칼로리"
              required
              css={s.input}/>
          </div>
          <div css={s.inputGroupunder}>
            <label css={s.label}>운동 강도<span css={s.span}>(1 - 매우 낮음 | 2 - 낮음 | 3 - 보통 | 4 - 강함 | 5 - 매우 강함)
              </span> </label>
            <input 
              type="number"
              name="intensity"
              value={newExercise.intensity}
              onChange={handleInputChange}
              placeholder=" 1 - 매우 낮음 | 2 - 낮음 | 3 - 보통 | 4 - 강함 | 5 - 매우 강함"
              required
              css={s.input} />
          </div>
          <div css={s.inputGroupunder}>
            <label css={s.label}>운동 장소</label>
            <input 
              type="text"
              name="location"
              value={newExercise.location}
              onChange={handleInputChange}
              placeholder="예: 공원,헬스장,운동장"
              required
              css={s.input} />
          </div>
          <div css={s.inputGroupunder}>
            <label css={s.label}>운동 날짜</label>
            <input 
              type="date"
              name="exerciseDate"
              onChange={handleInputChange}
              required
              css={s.input} />
          </div>
          <div css={s.inputGroupunder}>
            <label css={s.label}>평균 심박수</label>
            <input 
              type="number"
              name="heart"
              value={newExercise.heart}
              onChange={handleInputChange}
              required
              css={s.input} />
          </div>
          <div css={s.inputGroupunder}>
            <label css={s.label}>체중</label>
            <input 
              type="number"
              name="weight"
              value={newExercise.weight}
              onChange={handleInputChange}
              required
              css={s.input} />
          </div>
        
          {/* <div css={s.inputGroupunder1}>
            <label css={s.label}>메모</label>
            <input 
              type="text"
              name="notes"
              value={newExercise.notes}
              onChange={handleInputChange}
              placeholder="예: 기타 메모"
              required
              css={s.input} />
          </div> */}
          <button type="submit" css={s.submitButton}>
            운동 기록 제출
          </button>
        </form>
      </div>

      <div css={s.resultContainer}>
        <h1 css={s.resultText}>운동 기록 목록</h1>
        {currentRecords.length > 0 ? (
          currentRecords.map((exercise) => (
            <div key={exercise.id} css={s.recordItem}>
              <div>
              <h3 css={s.datePageText}>
  운동 날짜: {new Date(exercise.exerciseDate).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })}
</h3>
                <h3 css={s.resultPageText}> 운동 종류: {exercise.exerciseType}</h3>
                <h3 css={s.resultPageText}>운동 시간:{exercise.duration}분</h3>
                <h3 css={s.resultPageText}>소모한 칼로리:{exercise.caloriesBurned}kcal</h3>
                <h3 css={s.resultPageText}>운동 강도:{exercise.intensity}</h3>
                <h3 css={s.resultPageText}>운동 장소:{exercise.location}</h3>
                <h3 css={s.resultPageText}>평균 심박수:{exercise.heart}bpm</h3>
                <h3 css={s.resultPageText}>체중:{exercise.weight}kg</h3>
                
                <h3 css={s.resultPageText}>메모:{exercise.notes}</h3>
                <h3 css={s.dataText}>제출 날짜: {new Date(exercise.createdAt).toLocaleDateString()}</h3>
              </div>
              <div>
                <button onClick={() => handleDelete(exercise.id)} css={s.deleteButton}>
            <FaTrash />
          </button>
                </div>
            </div>
          ))
        
        ):(
          <p css={s.errorMessage}>등록된 운동 기록이 없습니다.</p>
        )}

        <button onClick={handleGraphView} css={s.chartButton}>
          그래프 보기
        </button>

        {totalPages > 1 && (
          <div css={s.paginationContainer}>
            <button onClick={() => handlePageChange(currentPage - 1)} css={s.paginationButton}
              disabled = {currentPage === 1}>
                &lt; 이전
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)} css={s.paginationButton}>
                {index + 1}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} css={s.paginationButton}
              disabled={currentPage === totalPages}>
                다음 &gt;
            </button>
          </div>
        )}
      </div>
      </div>
      
    </div>
  );
}

