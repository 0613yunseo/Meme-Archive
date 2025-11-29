import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import DetailHeader from '../components/DetailHeader';
import DetailBreadcrumb from '../components/DetailBreadcrumb';
import DetailMainImage from '../components/DetailMainImage';
import DetailTagList from '../components/DetailTagList';
import DetailDescription from '../components/DetailDescription';
import DetailRelatedMemes from '../components/DetailRelatedMemes';
import DetailPrevNextNavigation from '../components/DetailPrevNextNavigation';
import DetailSimilarList from '../components/DetailSimilarList';
import Footer from '../components/Footer';

const ArchiveDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="archive-detail-page">
      <Header />
      <DetailHeader />
      <DetailBreadcrumb />
      <div className="detail-content">
        <div className="detail-main-section">
          <DetailMainImage />
          <DetailTagList />
          <DetailDescription />
        </div>
        <DetailRelatedMemes />
        <DetailSimilarList />
      </div>
      <DetailPrevNextNavigation />
      <Footer />
    </div>
  );
};

export default ArchiveDetailPage;

