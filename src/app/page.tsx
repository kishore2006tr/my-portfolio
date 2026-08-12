import Hero from '@/components/hero/Hero';
import IntelligenceEngine from '@/components/dashboard/IntelligenceEngine';
import DataAnalyticsDashboard from '@/components/dashboard/DataAnalyticsDashboard';
import ProjectRoller from '@/components/projects/ProjectRoller';

export default function Home() {
  return (
    <>
      <Hero />
      <IntelligenceEngine />
      <DataAnalyticsDashboard />
      <ProjectRoller showTitle={true} />
    </>
  );
}
