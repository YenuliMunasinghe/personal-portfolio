import { describe, it, expect } from 'vitest';
import {
  personalInfo,
  skillsData,
  projectsData,
  educationData,
  certificationsData,
} from '../data/portfolioData';

describe('portfolioData integrity tests', () => {
  it('should contain valid personal information', () => {
    expect(personalInfo.name).toBe('Yenuli Munasinghe');
    expect(personalInfo.title).toBeDefined();
    expect(personalInfo.email).toContain('@');
    expect(personalInfo.github).toContain('github.com');
  });

  it('should contain structured skills categories with skill items', () => {
    expect(Array.isArray(skillsData)).toBe(true);
    expect(skillsData.length).toBeGreaterThan(0);
    skillsData.forEach((category) => {
      expect(category.category).toBeDefined();
      expect(Array.isArray(category.skills)).toBe(true);
      expect(category.skills.length).toBeGreaterThan(0);
    });
  });

  it('should contain complete project definitions', () => {
    expect(Array.isArray(projectsData)).toBe(true);
    expect(projectsData.length).toBeGreaterThan(0);
    projectsData.forEach((project) => {
      expect(project.id).toBeDefined();
      expect(project.title).toBeDefined();
      expect(project.shortDescription).toBeDefined();
      expect(Array.isArray(project.tags)).toBe(true);
    });
  });

  it('should contain education and certification items', () => {
    expect(Array.isArray(educationData)).toBe(true);
    expect(educationData.length).toBeGreaterThan(0);
    expect(Array.isArray(certificationsData)).toBe(true);
    expect(certificationsData.length).toBeGreaterThan(0);
  });
});
