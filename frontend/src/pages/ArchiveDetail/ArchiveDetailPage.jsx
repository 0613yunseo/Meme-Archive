import { useParams } from "react-router-dom";

export default function ArchiveDetailPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: "80px" }}>
      <h1>Meme Detail</h1>
      <p>선택한 밈 ID: {id}</p>
      <p>👉 여기에 밈 이미지 / 설명 / 투표 UI 들어가면 됨</p>
    </div>
  );
}
