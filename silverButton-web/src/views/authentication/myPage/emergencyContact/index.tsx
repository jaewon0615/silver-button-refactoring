/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import * as s from "./style";

export interface EmergencyContactType {
  id: number;
  userId: string;
  name: string;
  relation: string;
  phone: string;
  address: string;
  createdAt: number;
  memo: string;
}

export default function EmergencyContact() {
  const { id } = useParams<{ id: string }>();
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContactType[]>([]);
  const [cookies] = useCookies(["token"]);
  const [newContact, setNewContact] = useState<EmergencyContactType>({
    id: 0,
    userId: id || "",
    name: "",
    relation: "",
    phone: "",
    address: "",
    createdAt: Date.now(),
    memo: "",
  });
  
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 추가

  useEffect(() => {
    console.log("useParams()로 받은 id:", id);
    fetchEmergencyContacts();
  }, [id, cookies.token]);

  const fetchEmergencyContacts = async () => {
    const token = cookies.token;

    if (!id) {
      console.error("Error: id 값이 없습니다.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:4040/api/v1/emergency-contact/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("API 응답 데이터:", response.data);
      setEmergencyContacts(response.data.data || []);
    } catch (error) {
      console.error("Failed to fetch emergency contacts", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // 검색어 상태 업데이트
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = cookies.token;

    if (!id) {
      alert("유효하지 않은 사용자입니다.");
      return;
    }

    try {
      await axios.post(`http://localhost:4040/api/v1/emergency-contact/create`, newContact, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("비상 연락망 등록 완료");
      setNewContact({
        id: 0,
        userId: id,
        name: "",
        relation: "",
        phone: "",
        address: "",
        createdAt: Date.now(),
        memo: "",
      });

      fetchEmergencyContacts(); // 새로 등록 후 목록 갱신
    } catch (error) {
      console.error("Failed to save emergency contact", error);
      alert("비상 연락망 등록에 실패했습니다.");
    }
  };

  const handleDelete = async (contactId: number) => {
    const token = cookies.token;

    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      await axios.delete(`http://localhost:4040/api/v1/emergency-contact/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEmergencyContacts((prev) => prev.filter((contact) => contact.id !== contactId));
      alert("비상 연락망이 삭제되었습니다.");
    } catch (error) {
      console.error("Failed to delete emergency contact", error);
      alert("비상 연락망 삭제에 실패했습니다.");
    }
  };

  // 검색어에 따른 필터링
  const filteredContacts = emergencyContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div css={s.container}>
      <div css={s.recordContainer}>
        <h1 css={s.title}>비상 연락망 등록</h1>
        <form css={s.form} onSubmit={handleSubmit}>
          <div css={s.inputGroup}>
            <label css={s.label}>이름</label>
            <input type="text" name="name" value={newContact.name} onChange={handleInputChange} placeholder="예: 홍길동" required css={s.input} />
          </div>
          <div css={s.inputGroup}>
            <label css={s.label}>관계</label>
            <input type="text" name="relation" value={newContact.relation} onChange={handleInputChange} placeholder="예: 자녀" required css={s.input} />
          </div>
          <div css={s.inputGroup}>
            <label css={s.label}>휴대폰</label>
            <input type="text" name="phone" value={newContact.phone} onChange={handleInputChange} placeholder="예: 010-0000-0000" required css={s.input} />
          </div>
          <div css={s.inputGroup}>
            <label css={s.label}>주소</label>
            <input type="text" name="address" value={newContact.address} onChange={handleInputChange} placeholder="예: 00시 00구 00동 00로" required css={s.input} />
          </div>
          <div css={s.inputGroup}>
            <label css={s.label}>메모</label>
            <input type="text" name="memo" value={newContact.memo} onChange={handleInputChange} placeholder="예: 기타 메모" required css={s.input} />
          </div>
          <button type="submit" css={s.submitButton}>비상 연락망 등록</button>
        </form>
      </div>

      <div css={s.recordContainer}>
        <h1 css={s.resultText}>비상 연락망 목록</h1>
        <input
          type="text"
          placeholder="이름으로 검색..."
          value={searchTerm}
          onChange={handleSearchChange}
          css={s.searchInput} // 기존 CSS 사용
        />
        <div css={{ maxHeight: '70%', overflowY: 'auto' }}> {/* 스크롤을 위한 컨테이너 */}
          {filteredContacts.length > 0 ? (
            filteredContacts.map((record) => (
              <div key={record.id} css={s.recordItem}>
                <div>
                  <h3 css={s.nameText}>이름: {record.name}</h3>
                  <h3 css={s.resultPageText}>관계: {record.relation}</h3>
                  <h3 css={s.resultPageText}>휴대폰: {record.phone}</h3>
                  <h3 css={s.resultPageText}>주소: {record.address}</h3>
                  <h3 css={s.resultPageText}>기타메모: {record.memo}</h3>
                  <h3 css={s.resultPageText}>기록 일시: {new Date(record.createdAt).toLocaleDateString()}</h3>
                </div>
                <button onClick={() => handleDelete(record.id)} css={s.deleteButton}>삭제</button>
              </div>
            ))
          ) : (
            <p>등록된 연락처가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
