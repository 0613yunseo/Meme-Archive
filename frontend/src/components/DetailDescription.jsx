import React from 'react';

const DetailDescription = ({ description }) => {
  const defaultDescription = `
    GOAT은 "Greatest Of All Time"의 약자로 "최고"를 의미하는 표현입니다. 
    2010년대부터 농구선수 마이클 조던을 지칭하며 널리 사용되기 시작했으며, 
    이후 크리스티아누 호날두 등 다양한 스포츠 스타에게 적용되며 많은 변형이 생겨났습니다. 
    현재는 스포츠 중계 등에서도 자주 사용되고 있습니다.
    
    GOAT은 뛰어나고 훌륭한 대상을 찬양하는 의미로 사용되며, 
    염소 이모티콘과 함께 사용되거나 다양한 결합 형태로 사용됩니다. 
    "그저 GOAT" 또는 "GOAT" 등으로 사용되며, 존경과 탁월함을 강조하는 표현으로 자주 사용됩니다.
  `;

  return (
    <div className="detail-description">
      <p className="description-text">
        {description || defaultDescription}
      </p>
    </div>
  );
};

export default DetailDescription;

