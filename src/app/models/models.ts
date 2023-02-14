export interface Education {
  institute: string;
  course: string;
  duration: string;
  score: string;
}

export interface Skill {
  name: string;
  level: string;
  rating: number;
}

export interface Project {
  title: string;
  technologies: string;
  description: string[];
}

export interface Service {
  title: string;
  description: string[];
}

export interface IWorkExperience {
  title: string;
  subTitle?: string;
  duration?: string;
  technologies?: string[];
  technicalTools?: string[];
  responsibilities?: string[];
  projects?: any[];
  description: string[];
}
