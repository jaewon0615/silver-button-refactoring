import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageClick: (page: number) => void;
  handlePreGroupClick: () => void;
  handleNextGroupClick: () => void;
}

const paginationBoxStyle = css`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const buttonStyle = css`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e2e8f0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  //   &:focus {
  //     outline: 2px solid #1a73e8;
  //   }
`;

const pageListStyle = css`
  display: flex;
  gap: 16px;
`;

const pageStyle = (isActice: boolean) => css`
  color: ${isActice ? "#1a73e8" : "#6b7280"};
  font-size: 14px;
  font-weight: ${isActice ? "700" : "400"};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${!isActice && "#374151"};
  }
`;
const ButtonWrap = ({
  pageNumbers,
  currentPage,
  handlePageClick,
}: {
  pageNumbers: Array<number>;
  currentPage: number;
  handlePageClick: any;
}) => {
  return (
    <div css={pageListStyle}>
      {pageNumbers.map((page) => (
        <div
          key={page}
          css={pageStyle(page === currentPage)}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default function Pagination({
  totalPages,
  currentPage,
  handlePageClick,
  handlePreGroupClick,
  handleNextGroupClick,
}: PaginationProps) {
  const groupSize = 10;
  const currentGroup = Math.floor((currentPage - 1) / groupSize);
  const startPage = currentGroup * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  console.log("렌더링 중인 페이지 번호:", pageNumbers);
  return (
    <div css={paginationBoxStyle}>
      <button
        css={buttonStyle}
        onClick={handlePreGroupClick}
        disabled={currentPage <= 1}
      >
        <AiOutlineLeft size={24} />
      </button>

      <ButtonWrap
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />

      <button
        css={buttonStyle}
        onClick={handleNextGroupClick}
        disabled={currentPage >= totalPages}
      >
        <AiOutlineRight size={24} />
      </button>
    </div>
  );
}
