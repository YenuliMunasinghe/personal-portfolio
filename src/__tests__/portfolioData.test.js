import { describe, it, expect } from 'vitest';
import {
  personalInfo,
  skillsData,
  projectsData,
  educationData,
  certificationsData,
  articlesData,
  competitionsData,
  volunteeringData,
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

  it('should describe FinFlow as an ongoing enhancement with AI work in progress', () => {
    const finflow = projectsData.find((project) => project.id === 'finflow');
    const aiFeature = finflow?.contributions.find(
      (contribution) => contribution.title === 'AI-Powered Financial Insight Generator'
    );

    expect(finflow?.status).toBe('Ongoing Enhancement');
    expect(finflow?.tags).toEqual(expect.arrayContaining(['Gemini API', 'Google Gen AI SDK', 'Zod']));
    expect(aiFeature?.status).toBe('In Progress');
  });

  it('should include live demo URLs for FinFlow and MyBlog', () => {
    const finflow = projectsData.find((project) => project.id === 'finflow');
    const myblog = projectsData.find((project) => project.id === 'myblog');

    expect(finflow?.liveUrl).toBe('https://fin-flow-coral-seven.vercel.app');
    expect(myblog?.liveUrl).toBe('https://myblog-forwho.lovestoblog.com/');
  });

  it('should contain education and certification items with images', () => {
    expect(Array.isArray(educationData)).toBe(true);
    expect(educationData.length).toBeGreaterThan(0);
    expect(Array.isArray(certificationsData)).toBe(true);
    expect(certificationsData.length).toBeGreaterThan(0);
    certificationsData.forEach((cert) => {
      expect(cert.title).toBeDefined();
      expect(cert.provider).toBeDefined();
      expect(cert.image).toBeDefined();
      expect(cert.image).toMatch(/^\/certificates\//);
      expect(cert.link).toBeUndefined();
    });
  });

  it('should contain articles, competitions, and volunteering datasets', () => {
    expect(Array.isArray(articlesData)).toBe(true);
    expect(articlesData.length).toBeGreaterThan(0);
    articlesData.forEach((article) => {
      expect(article.id).toBeDefined();
      expect(article.title).toBeDefined();
      expect(article.link).toBeDefined();
    });

    expect(Array.isArray(competitionsData)).toBe(true);
    expect(competitionsData.length).toBeGreaterThan(0);
    competitionsData.forEach((comp) => {
      expect(comp.title).toBeDefined();
      expect(comp.organizer).toBeDefined();
    });

    expect(Array.isArray(volunteeringData)).toBe(true);
    expect(volunteeringData.length).toBeGreaterThan(0);
    volunteeringData.forEach((vol) => {
      expect(vol.role).toBeDefined();
      expect(vol.organization).toBeDefined();
    });
  });
});
