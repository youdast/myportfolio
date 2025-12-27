import api from './api';

const portfolioService = {
  // Get all projects
  getProjects: async () => {
    try {
      const response = await api.get('/api/v1/portfolio/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  // Get all skills
  getSkills: async () => {
    try {
      const response = await api.get('/api/v1/portfolio/skills');
      return response.data;
    } catch (error) {
      console.error('Error fetching skills:', error);
      throw error;
    }
  },

  // Get profile information
  getProfile: async () => {
    try {
      const response = await api.get('/api/v1/portfolio/profile');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  },
};

export default portfolioService;
