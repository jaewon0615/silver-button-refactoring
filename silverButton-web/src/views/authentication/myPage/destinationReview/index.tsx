/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import * as s from "./style";
import { FaTrash } from 'react-icons/fa';

export interface MyReviewType{
  id:number;
  userId:string;
  destinationId:number;
  rating:number;
  reviewText:string;
  createdAt:number;
  name:string;
  nickname:string;
}

export default function MyReview() {
  const { userId } = useParams<{ userId:string }>();
  const [ myReview, setMyReview] = useState<MyReviewType[]>([]);
  const [cookies] = useCookies(["token"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;

  const navigate = useNavigate();

  useEffect(() => {
    fetchMyReview();
  },[userId,cookies.token]);

  const fetchMyReview = async () =>{
    const token = cookies.token;

    if(!userId){
      console.error("failed");
      return;
    }

    try{
      const response = await axios.get(`http://localhost:4040/api/v1/review/${userId}`,{
        headers:{
          Authorization:`Bearer ${token}`
        },
      });
      setMyReview(response.data.data || []);
    } catch(e){
      console.error("failed",e);
    }
  };

  const handleDelete = async(reviewId:number) =>{
    const token = cookies.token;

    if(!window.confirm("정말 삭제하시겠습니까?"))
      return;

    try{
      await axios.delete(`http://localhost:4040/api/v1/review/${reviewId}`,{
        headers:{
          Authorization:`Bearer ${token}`
        },
      });
      setMyReview((prev) => prev.filter((review) => review.id !== reviewId));
      alert("리뷰가 삭제되었습니다");
    } catch(e){
      console.error("failed",e);
      alert("리뷰 삭제에 실패했습니다")
    }
  };


  const filteredDiaries = myReview.filter((myReview) =>
    myReview.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentRecords = filteredDiaries.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredDiaries.length / recordPerPage);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {'★'.repeat(fullStars)}{'☆'.repeat(emptyStars)}
      </>
    );
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);

    // 한국 시간(KST)으로 변환: UTC+9
    const koreaOffset = 9 * 60; // 9 hours in minutes
    const localDate = new Date(date.getTime() + koreaOffset * 60 * 1000);

    return localDate.toISOString().replace('T', ' ').split('.')[0]; // 'T' 제거하고 밀리초 제외
  };


  return (
    <div css={s.recordContainer}>
      <div css={s.conttSt}>
        <h1 css={s.resultText}>여행지 리뷰 관리</h1>
        <input type="text" placeholder="제목 검색..." value={searchTerm} onChange={handleSearchChange} css={s.searchInput} />
        {currentRecords.length > 0 ? (
          currentRecords.map((myReview) =>(
            <div key={myReview.id} css={s.recordItem}>
              <div css={s.itemCt}>
              <p css={s.title}>{myReview.name}</p>
              <h3 css={s.name}>{myReview.nickname}</h3>
              <div css={s.starRating}>{renderStars(myReview.rating)}</div>
              <h3>{myReview.reviewText}</h3>
              <p css={s.colck}>{formatDate(myReview.createdAt)}</p>
              </div>
             
              <div css={s.buttonCt}>
                <button onClick={() => handleDelete(myReview.id)} css={s.deleteButton}>
            <FaTrash css={s.icon} />
          </button>
                </div>
            </div>

           
          ))
        ):(
          <p css={s.errorMessage}>등록 리뷰가 없습니다.</p>
        )}
         {totalPages > 1 && (
          <div css={s.paginationContainer}>
            <button onClick={() => handlePageChange(currentPage - 1)} css={s.paginationButton} disabled={currentPage === 1}>
              &lt; 이전
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)} css={s.paginationButton}>
                {index + 1}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} css={s.paginationButton} disabled={currentPage === totalPages}>
              다음 &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
