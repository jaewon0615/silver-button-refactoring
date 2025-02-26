/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import useAuthStore from "../../../stores/auth.store";

interface Board {
  id: number;
  title: string;
  content: string;
  username: string;
  writerId: number;
  createdAt: string;
  likes: number;
  views: number;
  imageUrl?: string;
  liked: boolean;
}

interface Comment {
  writer: String;
  id: number;
  boardId: number;
  content: string;
  writerId: number;
}

const BoardDetail = () => {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 ID 추출
  const [board, setBoard] = useState<Board | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [cookies] = useCookies(["token"]);
  const { user, isAuthenticated } = useAuthStore(); // useAuthStore에서 user 정보 가져오기
  const currentUserId = user?.id || null; // 인증된 사용자의 ID

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/board/view/${id}`
        );
        const boardData = response.data.data;
        setBoard(boardData);
      } catch (error) {
        console.error("게시글을 불러오는 데 실패했습니다.", error);
        alert("게시글을 불러오는 데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchBoard();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      if (!cookies.token) {
        console.error("토큰이 없습니다.");
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/comment/all?boardId=${id}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`, // Authorization 헤더에 토큰 추가
            },
          }
        );
        setComments(response.data.data);
      } catch (error: any) {
        alert("댓글을 불러오는 데 실패했습니다.");
      }
    };

    if (id) fetchComments(); // id가 있을 경우에만 fetch 실행
  }, [id, cookies.token]); // id나 cookies.token이 변경될 때마다 실행

  useEffect(() => {
    console.log("Updated commentData ->>", comments);
  }, [comments]); // comments 값이 변경될 때마다 출력

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // Shift+Enter가 아니면 댓글 작성
      e.preventDefault(); // 기본 엔터키 동작을 막고
      handleAddComment(); // 댓글 추가 함수 호출
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    const commentData = {
      content: newComment,
      boardId: id, // 게시글 ID
      writerId: user?.id,
    };

    console.log("commentData :: ", commentData);
    try {
      const response = await axios.post(
        `http://localhost:4040/api/v1/comment/create`,
        commentData,
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );

      // 댓글 작성 후, 댓글 목록을 갱신
      if (response.data.result) {
        console.log("댓글 추가 성공:", response.data.data);
        setComments((prevComments) => [...prevComments, response.data.data]); // 기존 댓글에 새 댓글 추가
        setNewComment(""); // 댓글 입력창 초기화
      } else {
        console.error("댓글 추가 실패:", response.data.message);
        alert("댓글 작성에 실패했습니다.");
      }
    } catch (error) {
      console.error("댓글 추가에 실패했습니다.", error);
      alert("서버와의 연결에 문제가 발생했습니다.");
    }
  };
  const handleDeleteComment = async (commentId: number) => {
    try {
      await axios.delete(
        `http://localhost:4040/api/v1/comment/delete/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("댓글 삭제에 실패했습니다.", error);
    }
  };

  const handleLike = async () => {
    const likeData = {
      boardId: id,
      userId: user?.id,
      liked: !board?.liked,
    };

    try {
      const response = await axios.post(
        `http://localhost:4040/api/v1/board-like/toggle`,
        likeData,
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );
      setBoard((prevBoard) => ({
        ...prevBoard!,
        liked: !prevBoard?.liked,
        likes: prevBoard?.liked ? prevBoard!.likes - 1 : prevBoard!.likes + 1,
      }));
    } catch (error) {
      console.error("좋아요 처리에 실패했습니다.", error);
    }
  };

  const handleEdit = () => {
    if (!currentUserId) {
      alert("로그인이 필요합니다.");
      navigate("/auth");
      return;
    }

    if (currentUserId !== board?.writerId) {
      alert("수정하려면 작성자여야 합니다.");
      return;
    }

    navigate(`/board/edit/${id}`);
  };

  const handleDelete = async () => {
    if (!user) {
      alert("로그인 상태여야 합니다.");
      return;
    }

    if (currentUserId !== board?.writerId) {
      alert("삭제 권한이 없습니다. 게시글 작성자만 삭제할 수 있습니다.");
      return;
    }

    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      try {
        console.log(
          "삭제 요청 URL:",
          `http://localhost:4040/api/v1/board/delete/${id}`
        );
  
        await axios.delete(`http://localhost:4040/api/v1/board/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
          data: {
            userId: currentUserId,
          },
        });

        alert("게시글이 삭제되었습니다.");
        navigate("/board");
      } catch (error) {
        console.error("게시글 삭제에 실패했습니다.", error);
        alert("게시글 삭제에 실패했습니다.");
      }
    }
  };

  const handleExit = () => {
    navigate("/board");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("ko-KR", options).format(date);
  };

  const sanitizeContent = (content: string, imageUrl?: string) => {
    // 로컬 이미지 경로(C:\)를 제거하는 정규식 처리
    let sanitizedContent = content.replace(/!\[.*?\]\(.*?\)/g, (match) => {
      // 이미지 URL만 추출하여 img 태그로 반환
      const imgUrl = match.match(/\(.*?\)/)?.[0].slice(1, -1); // ()안의 URL을 추출
      if (imgUrl) {
        return `<img src="${imgUrl}" alt="게시글 이미지" style="width:100%; height:auto;"/>`; 
      }
      return ''; // 이미지 경로가 없으면 빈 문자열 반환
    });
  
    // imageUrl이 제공된 경우, 이를 삽입하지만 이미 content에 이미지가 포함되었으면 중복되지 않게 처리
    if (imageUrl && !sanitizedContent.includes(imageUrl)) {
      sanitizedContent = `<img src="${imageUrl}" alt="게시글 이미지" style="width:100%; height:auto;"/><br/>${sanitizedContent}`;
    }
  
    return sanitizedContent;
  };
  
  


  
  if (isLoading) return <p>게시글을 불러오는 중...</p>;
  if (!board) return <p>게시글이 없습니다.</p>;

  return (
    <div css={S.mainBox}>
      <div css={S.upperBox}>
        <div css={S.contentContainer}>
          <div css={S.boardBox}>
            {board ? (
              <>
                <div css={S.boardHeader}>
                  <div css={S.boardTitle}>{board.title}</div>
                  <div css={S.boardAuthor}>{board.username}</div>
                </div>

                <div css={S.boardContent}>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizeContent(board.content, board.imageUrl), // sanitizeContent 호출
                      }}
                    />
                    
                  </div>
                </div>

                <div css={S.boardStats}>
                  <div css={S.likeViewContainer}>
                    <div css={S.clickableIcon} onClick={handleLike}>
                      추천  {board.likes}
                      조회수  {board.views}
                    </div>
                  </div>
                  <div css={S.boardTime}>{formatDate(board.createdAt)}</div>
                </div>
              </>
            ) : (
              <div css={S.boardHeader}>
                <div css={S.boardTitle}>게시글이 없습니다.</div>
                <div css={S.boardAuthor}>작성자: 알 수 없음</div>
              </div>
            )}
          </div>

          <div css={S.commentsBox}>
            <div css={S.commentList}>
              <h3>댓글</h3>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div css={S.commentItem} key={comment.id}>
                    <div css={S.commentHeader}>
                      <span>{comment.writer}</span>
                      {comment.writerId === currentUserId && (
                        <div
                          css={S.deleteButton}
                          onClick={() => handleDeleteComment(comment.id)}
                        >
                          삭제
                        </div>
                      )}
                    </div>
                    <div css={S.commentContent}>
                      <p>{comment.content}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>댓글이 없습니다.</p>
              )}
            </div>

            {isAuthenticated && (
              <div css={S.commentInputBox}>
                <textarea
                  css={S.commentInputStyle} // 텍스트 입력창 스타일
                  value={newComment} // 입력된 댓글 값
                  onChange={(e) => setNewComment(e.target.value)} // 값 변경 처리
                  placeholder="댓글을 작성하세요." // 안내 텍스트
                  onKeyDown={handleKeyDown}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div css={S.lowerBox}>
        <div css={S.actionBox}>
          <div css={S.buttonContainer}>
            {currentUserId === board?.writerId && (
              <>
                <div css={S.button} onClick={handleEdit}>
                  수정
                </div>
                <div css={S.button} onClick={handleDelete}>
                  삭제
                </div>
              </>
            )}
          </div>
          <div css={S.exitButtonContainer}>
            <div css={S.exitButton} onClick={handleExit}>
              나가기
            </div>
          </div>
        </div>

        {isAuthenticated && (
          <div css={S.fixedButtonContainer}>
            <div css={S.commentActionBox}>
              <div css={S.button} onClick={handleAddComment}>
                댓글 작성
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardDetail;
