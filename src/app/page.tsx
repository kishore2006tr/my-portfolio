import Hero from '@/components/hero/Hero';
import IntelligenceEngine from '@/components/dashboard/IntelligenceEngine';
import DataAnalyticsDashboard from '@/components/dashboard/DataAnalyticsDashboard';
import CertificatesAchievements from '@/components/certificates/CertificatesAchievements';
import ProjectRoller from '@/components/projects/ProjectRoller';

export default function Home() {
  return (
    <>
      <Hero />
      <IntelligenceEngine />
      <DataAnalyticsDashboard />
      <CertificatesAchievements />
      <ProjectRoller showTitle={true} />
    </>
  );
}
