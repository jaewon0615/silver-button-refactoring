/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [content, setContent] = useState<string>("");
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const contentEditableRef = useRef<HTMLDivElement | null>(null);

  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.innerHTML;
    console.log("입력된 내용:", newContent);
    setContent(newContent);
  };
  if (contentEditableRef.current) {
    console.log("이미지 삽입 전 내용:", contentEditableRef.current.innerHTML);
  }

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
              const range = document.getSelection()?.getRangeAt(0);
              if (range) {
                range.deleteContents();
                const imgNode = document.createElement("div");
                imgNode.innerHTML = imageTag;
                range.insertNode(imgNode);
              }
            }
            setImageFiles((prev) => [...prev, file]);
          }
        };

        reader.onerror = () => {
          alert("파일을 읽는 중 오류가 발생했습니다.");
        };

        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cookies.token) {
      alert("로그인 후 작성할 수 있습니다.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    imageFiles.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const res = await axios.post(
        "http://localhost:4040/api/v1/board/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("응답 데이터:", res.data);
      alert("게시글이 작성되었습니다.");
      navigate("/board");
    } catch (error) {
      console.error("게시글 작성 실패", error);
    }
  };

  const handleExit = () => {
    navigate("/board");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div css={S.formWrapper}>
      <h1 css={S.pageTitle}>게시글 작성</h1> 
      <form
        css={S.formContainer}
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
      >
        <div>
          <input
            css={S.titleInput}
            type="text"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            placeholder="제목"
            required
          />
        </div>

        <div>
          <div
            css={S.contentTextarea}
            contentEditable
            ref={contentEditableRef}
            onInput={handleContentChange}
            style={{
              minHeight: "200px",
              padding: "10px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
        </div>

        <div>
          <input
            css={S.fileInput}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div css={S.buttonContainer}>
          <button css={S.exitButton} type="button" onClick={handleExit}>
            작성 취소
          </button>
          <button css={S.submitButton} type="submit">
            게시글 작성
          </button>
        </div>
      </form>
    </div>
  );
}
