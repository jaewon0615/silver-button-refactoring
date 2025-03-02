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
  username: string;
  createdAt: string;
  likes: number;
  views: number;
  commentCount: number;
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

  const fetchCommentCount = async (postId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/comments/count/${postId}`
      );
      return response.data.count || 0;
    } catch (error) {
      console.error("댓글 수를 가져오는 데 실패했습니다.", error);
      return 0;
    }
  };

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
        : {};

      const response = await axios.get(url, {
        params,
        headers,
      });

      const data = response.data.data;

      console.log("API Response 전체 데이터:", response.data);
      console.log("게시글 데이터:", data.content);

      if (data && data.content) {
        const postsWithCommentCount = await Promise.all(
          data.content.map(async (post: Post) => {
            const commentCount = await fetchCommentCount(post.id);
            return { ...post, commentCount };
          })
        );

        setPosts(postsWithCommentCount);
        setTotalPages(data.totalPages);

        console.log("전체 페이지 수:", data.totalPages);
      } else {
        setPosts([]);
        setTotalPages(1);
        console.log("게시글이 없습니다.");
      }
    } catch (e: any) {
      console.error("Failed to fetch posts data", e);
      if (e.response && e.response.status === 404) {
        console.warn("No posts found for the given query");
        setPosts([]);
        setTotalPages(1);
      }
    }
  };

  useEffect(() => {
    fetchPosts(1);
  }, []);

  const handlePostClick = (id: number) => {
    navigate(`/board/${id}`);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }
    setCurrentPage(1);
    fetchPosts(1);
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    console.log("Posts after fetch:", posts);
  }, [posts]);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    fetchPosts(page);
  };

  const handlePreGroupClick = () => {
    setCurrentPage((prev) => Math.max(prev - 10, 1));
  };

  const handleNextGroupClick = () => {
    setCurrentPage((prev) => Math.min(prev + 10, totalPages));
  };

  const handleCreatePostClick = () => {
    if (!cookies.token) {
      alert("로그인 후 게시글을 작성할 수 있습니다.");
      navigate("/auth");
    } else {
      navigate("/board/create");
    }
  };

  const extractImagesFromHtml = (content: string): string[] => {
    if (!content) return [];

    const markdownImageRegex = /!\[.*?\]\((.*?)\)/g;

    const imageUrls = [];
    let match;
    while ((match = markdownImageRegex.exec(content)) !== null) {
      imageUrls.push(match[1]);
    }

    return imageUrls;
  };

  const removeImagesFromHtml = (htmlContent: string): string => {
    const doc = new DOMParser().parseFromString(htmlContent, "text/html");

    const images = doc.querySelectorAll("img");
    images.forEach((img) => img.remove());

    return doc.body.innerHTML;
  };

  const getSummary = (content: string) => {
    const textContent = removeImagesFromHtml(content);
    const firstSentence = textContent.split(/[.!?]/)[0];

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
                const contentHtml = post.content;
                const images = extractImagesFromHtml(contentHtml);
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
                        <div css={S.likesStyle}>
                          댓글 수 {post.commentCount}
                        </div>
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
