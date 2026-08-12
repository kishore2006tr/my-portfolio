import ProjectRoller from '@/components/projects/ProjectRoller';

export const metadata = {
  title: 'Projects Showcase | Kishore Portfolio',
  description: 'Explore Kishore AI/ML models, full-stack applications, and data analytics case studies.',
};

export default function ProjectsPage() {
  return (
    <div className="py-12 bg-white">
      <ProjectRoller showTitle={true} />
    </div>
  );
}
