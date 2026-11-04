export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year: string;
  status?: 'IN DEVELOPMENT' | 'COMPLETED';
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
