/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function EditPost() {
  const { id } = useParams<{ id: string }>(); // URL에서 id 값을 가져옵니다.
  const [post, setPost] = useState({
    title: "",
    content: "",
    imageUrl: "", // 기존 이미지 URL
  });
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const contentEditableRef = useRef<HTMLDivElement | null>(null);

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
  

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/board/view/${id}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        );
        const postData = response.data.data;

        setPost({
          title: postData.title,
          content: sanitizeContent(postData.content, postData.imageUrl),
          imageUrl: postData.imageUrl || "", // 기존 이미지 URL 설정
        });

        if (contentEditableRef.current) {
          contentEditableRef.current.innerHTML = sanitizeContent(postData.content, postData.imageUrl);
        }
      } catch (error) {
        console.error("Failed to fetch post:", error);
        alert("게시글을 불러오는 데 실패했습니다.");
      }
    };

    if (id) fetchPost();
  }, [id, cookies.token]);

  // 내용 변경 시 상태 업데이트
  const handleContentChange = () => {
    const editor = contentEditableRef.current;
    if (editor) {
      setPost({ ...post, content: editor.innerHTML });
    }
  };

  // 파일 변경 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      Array.from(files).forEach((file) => {
        if (!file.type.startsWith("image/")) {
          alert("이미지 파일만 업로드 가능합니다.");
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === "string") {
            const imageTag = `<img src="${reader.result}" alt="Uploaded Image" style="max-width: 100%; margin: 10px 0;" />`;

            if (contentEditableRef.current) {
              const currentContent = contentEditableRef.current.innerHTML;
              const updatedContent = currentContent + imageTag;
              contentEditableRef.current.innerHTML = updatedContent;
              setPost({ ...post, content: updatedContent });
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("content", post.content);

    try {
      await axios.put(
        `http://localhost:4040/api/v1/board/edit/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("게시글이 수정되었습니다.");
      navigate(`/board/${id}`); // 수정된 게시글의 상세 페이지로 이동
    } catch (error) {
      console.error("Failed to update post:", error);
      alert("게시글 수정에 실패했습니다.");
    }
  };

  const handleExit = () => {
    navigate(`/board/${id}`); // 상세페이지로 이동
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e); // 엔터 키를 누르면 제출
    }
  };

  return (
    <div css={S.containerStyle}>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} css={S.formStyle}>
        <div>
          <input
            css={S.inputStyle}
            type="text"
            value={post.title}
            onChange={(e) =>
              setPost({ ...post, title: (e.target as HTMLInputElement).value })
            }
            placeholder="제목"
            required
          />
        </div>
        <div css={S.contentWrapperStyle}>
          <div
            ref={contentEditableRef}
            id="contentEditable"
            contentEditable
            css={S.contentTextareaStyle}
            onInput={handleContentChange}
            suppressContentEditableWarning={true}
          ></div>
        </div>

        <div>
          <input
            css={S.inputStyle}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <div css={S.buttonContainerStyle}>
          <button css={S.submitButtonStyle} type="submit">
            수정하기
          </button>
          <button css={S.exitButtonStyle} type="button" onClick={handleExit}>
            나가기
          </button>
        </div>
      </form>
    </div>
  );
}
