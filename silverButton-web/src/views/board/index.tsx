/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React, { useEffect, useMemo, useState } from "react";
import Pagination from "../../components/Pagination";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import BasicImage from "../../views/board/BasicImage.png";
import { CgLayoutGrid } from "react-icons/cg";

interface Post {
  id: number;
  title: string;
  content: string;
  username: string; // 작성자 이름 포함
  createdAt: string;
  likes: number;
  views: number;
  commentCount: number; // 댓글 수 추가
  imageUrl?: string;
}

export default function Board() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [cookies] = useCookies(["token"]);
  const [searchType, setSearchType] = useState<string>("title");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  // 댓글 수를 가져오는 함수
  const fetchCommentCount = async (postId: number) => {
    try {
      const response = await axios.get(`http://localhost:4040/api/v1/comments/count/${postId}`);
      return response.data.count || 0; // 댓글 수가 없다면 0으로 반환
    } catch (error) {
      console.error("댓글 수를 가져오는 데 실패했습니다.", error);
      return 0; // 댓글 수를 가져오지 못하면 0으로 처리
    }
  };

  // 게시글을 가져오는 함수 (댓글 수 포함)
  const fetchPosts = async (page: number) => {
    if (page < 1 || (totalPages > 0 && page > totalPages)) {
      console.warn("Invalid page number:", page);
      return;
    }

    try {
      const params: any = { page: page - 1, size: 10, sort: "createdAt,DESC" };
      let url = "http://localhost:4040/api/v1/board/all";

      if (searchQuery.trim()) {
        console.log("검색어", searchQuery);
        if (searchType === "title") {
          params["keyword"] = searchQuery.trim();
          url = "http://localhost:4040/api/v1/board/search/title";
        } else if (searchType === "author") {
          params["name"] = searchQuery.trim();
          url = "http://localhost:4040/api/v1/board/search/name";
        }
      }

      const headers = cookies.token
        ? { Authorization: `Bearer ${cookies.token}` }
        : {}; // Authorization 헤더 포함

      const response = await axios.get(url, {
        params,
        headers, // 헤더에 토큰 추가
      });

      const data = response.data.data;

      // 디버깅: API 응답 데이터 확인
      console.log("API Response 전체 데이터:", response.data);
      console.log("게시글 데이터:", data.content);

      if (data && data.content) {
        // 댓글 수를 추가하여 게시글 데이터를 처리
        const postsWithCommentCount = await Promise.all(
          data.content.map(async (post: Post) => {
            const commentCount = await fetchCommentCount(post.id); // 댓글 수를 가져옵니다
            return { ...post, commentCount }; // 댓글 수를 포함한 게시글 객체
          })
        );

        setPosts(postsWithCommentCount); // 댓글 수를 포함한 게시글 목록 설정
        setTotalPages(data.totalPages); // 백엔드에서 totalPages 제공 필요

        console.log("전체 페이지 수:", data.totalPages); // data.totalPages 값 출력
      } else {
        setPosts([]); // 검색 결과가 없으면 빈 배열로 설정
        setTotalPages(1); // 페이지는 1로 설정
        console.log("게시글이 없습니다."); // 결과 없을 때 출력
      }
    } catch (e: any) {
      console.error("Failed to fetch posts data", e);
      // HTTP 상태 코드 404 처리
      if (e.response && e.response.status === 404) {
        console.warn("No posts found for the given query");
        setPosts([]);
        setTotalPages(1);
      }
    }
  };

  // 첫 로딩 시 전체 게시글 조회
  useEffect(() => {
    fetchPosts(1); // 초기 상태로 전체 게시글 조회
  }, []);

  // 게시글 클릭 시 상세 페이지로 이동
  const handlePostClick = (id: number) => {
    navigate(`/board/${id}`); // 게시글 ID를 경로에 포함
  };

  // 검색 처리
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }
    setCurrentPage(1); // 검색 시 페이지를 1로 초기화
    fetchPosts(1); // 검색 조건 적용
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // 게시글 데이터 출력
  useEffect(() => {
    console.log("Posts after fetch:", posts); // 상태 값이 변경된 후 출력
  }, [posts]);

  // 페이지 클릭 핸들러
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    fetchPosts(page); // 페이지 변경 시 게시글 다시 불러오기
  };

  const handlePreGroupClick = () => {
    setCurrentPage((prev) => Math.max(prev - 10, 1));
  };

  const handleNextGroupClick = () => {
    setCurrentPage((prev) => Math.min(prev + 10, totalPages));
  };

  const handleCreatePostClick = () => {
    // 로그인 여부 확인
    if (!cookies.token) {
      alert("로그인 후 게시글을 작성할 수 있습니다.");
      navigate("/auth"); // 로그인 페이지로 이동
    } else {
      navigate("/board/create"); // 게시글 작성 페이지로 이동
    }
  };

  const extractImagesFromHtml = (content: string): string[] => {
    if (!content) return [];

    // Markdown 형식에서 이미지 URL을 추출하는 정규식
    const markdownImageRegex = /!\[.*?\]\((.*?)\)/g;

    // Markdown에서 이미지 URL을 추출
    const imageUrls = [];
    let match;
    while ((match = markdownImageRegex.exec(content)) !== null) {
      imageUrls.push(match[1]);
    }

    return imageUrls;
  };

  const removeImagesFromHtml = (htmlContent: string): string => {
    const doc = new DOMParser().parseFromString(htmlContent, "text/html");

    // 이미지 태그만 제거
    const images = doc.querySelectorAll("img");
    images.forEach((img) => img.remove());

    // 수정된 HTML 반환
    return doc.body.innerHTML;
  };

  const getSummary = (content: string) => {
    // HTML 태그 제거 후 텍스트만 추출
    const textContent = removeImagesFromHtml(content);

    // 첫 번째 문장만 추출 (문장 끝은 . 또는 ? 또는 !로 간주)
    const firstSentence = textContent.split(/[.!?]/)[0];

    // 15자까지만 잘라서 반환
    return firstSentence.length > 15
      ? `${firstSentence.slice(0, 15)}`
      : firstSentence;
  };

  const displayedPosts = useMemo(() => posts, [posts]);

  return (
    <div css={S.containerStyle}>
      <div css={S.contentBoxStyle}>
        <h1 css={S.pageTitle}>게시판</h1>
        <div css={S.headerContainerStyle}>
          <div css={S.searchContainerStyle}>
            <select
              css={S.searchSelectStyle}
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="title">제목</option>
              <option value="author">작성자</option>
            </select>

            <input
              css={S.searchInputStyle}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="검색어를 입력하세요"
            />

            <div css={S.searchButtonStyle} onClick={handleSearch}>
              검색
            </div>

            <div css={S.buttonContainerStyle}>
              <div css={S.boardLinkStyle} onClick={handleCreatePostClick}>
                게시글 작성
              </div>
            </div>
          </div>
        </div>

        <div>
          {posts.length === 0 ? (
            <p>게시글이 없습니다.</p>
          ) : (
            <div css={S.boardContainerStyle}>
              {posts.map((post) => {
                const contentSummary = getSummary(post.content);
                const contentHtml = post.content; // 전체 HTML을 받아옵니다
                const images = extractImagesFromHtml(contentHtml); // HTML에서 이미지 URL을 추출

                return (
                  <div
                    css={S.boardItemStyle}
                    key={post.id}
                    onClick={() => handlePostClick(post.id)}
                  >
                    <div css={S.boardItemContentStyle}>
                      <div css={S.boardHeaderStyle}>
                        <div css={S.boardTitleStyle}>{post.title}</div>
                      </div>

                      <div
                        css={S.boardContentStyle}
                        dangerouslySetInnerHTML={{ __html: contentSummary }}
                      />

                      <div css={S.boardFooterStyle}>
                        <div css={S.usernameStyle}>
                          {post.username || "작성자 없음"}
                        </div>
                        <div css={S.createdAtStyle}>
                          {new Date(post.createdAt).toLocaleString()}
                        </div>
                        <div css={S.likesStyle}>추천 {post.likes}</div>
                        <div css={S.viewsStyle}>조회수 {post.views}</div>
                        <div css={S.likesStyle}>댓글 수 {post.commentCount}</div> {/* 댓글 수 표시 */}
                      </div>
                    </div>

                    <div>
                      <img
                        css={S.boardImageStyle}
                        src={images.length > 0 ? images[0] : BasicImage}
                        alt="게시글 미리보기 이미지"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
          handlePreGroupClick={handlePreGroupClick}
          handleNextGroupClick={handleNextGroupClick}
        />
      </div>
    </div>
  );
}
