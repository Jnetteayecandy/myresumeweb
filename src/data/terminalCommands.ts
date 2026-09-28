import { personalInfo, flagshipProject, bentoProjects, skillCategories, sideJobsAndHobbies } from './portfolioData';

export interface TerminalOutput {
  type: 'text' | 'success' | 'error' | 'warning' | 'info' | 'ascii';
  content: string;
}

export const executeCommand = (
  cmd: string, 
  onAction?: (action: string) => void
): TerminalOutput[] => {
  const trimmed = cmd.trim();
  const parts = trimmed.split(' ');
  const command = parts[0].toLowerCase();
  const args = parts.slice(1).join(' ');

  if (!command) {
    return [];
  }

  switch (command) {
    case 'help':
      return [
        { type: 'info', content: '⚡ Wipaporn Portfolio Shell v3.0 (Type a command and press Enter)' },
        { type: 'text', content: '  whoami          - Print student background & education (PSU Phuket)' },
        { type: 'text', content: '  pil             - Inspect PIL Management System flagship project' },
        { type: 'text', content: '  projects        - List top software engineering and web works' },
        { type: 'text', content: '  skills          - Display technical stack (Python, Java, React, SQL)' },
        { type: 'text', content: '  hobbies         - View creative side job & personal hobbies' },
        { type: 'text', content: '  contact         - Reveal contact details & channels' },
        { type: 'text', content: '  resume          - Open recruiter-ready CV previewer' },
        { type: 'text', content: '  clear           - Clear terminal history' },
      ];

    case 'whoami':
      return [
        { type: 'success', content: `[IDENTITY]: ${personalInfo.name} (${personalInfo.nameTh})` },
        { type: 'text', content: `Role:      ${personalInfo.title}` },
        { type: 'text', content: `Education: ${personalInfo.education.degree}` },
        { type: 'text', content: `Campus:    ${personalInfo.education.institution}` },
        { type: 'text', content: `Status:    ${personalInfo.status}` },
        { type: 'text', content: `Location:  ${personalInfo.location}` },
        { type: 'info', content: `\n"${personalInfo.bio}"` },
      ];

    case 'pil':
      if (onAction) onAction('open_pil');
      return [
        { type: 'success', content: `[FLAGSHIP]: ${flagshipProject.title}` },
        { type: 'text', content: `Subtitle:   ${flagshipProject.subtitle}` },
        { type: 'text', content: `Partner:    ${flagshipProject.collaboration}` },
        { type: 'text', content: `Live URL:   ${flagshipProject.liveUrl} (Guest Access Ready)` },
        { type: 'info', content: `\nDescription: ${flagshipProject.description}` },
        { type: 'text', content: `Metrics:    ${flagshipProject.metrics?.map(m => `${m.label}: ${m.value}`).join(' | ')}` },
        { type: 'warning', content: '>> Launching interactive PIL case study window on screen...' }
      ];

    case 'projects':
      return [
        { type: 'info', content: '=== SELECTED SOFTWARE ENGINEERING WORKS ===' },
        { type: 'success', content: `1. ★ ${flagshipProject.title} [FLAGSHIP] - ${flagshipProject.liveUrl}` },
        ...bentoProjects.map((p, idx) => ({
          type: 'text' as const,
          content: `${idx + 2}. ${p.title} (${p.subtitle})\n   Tags: [${p.tags.join(', ')}]`
        })),
        { type: 'info', content: '\nTip: Type "pil" to deep dive into the PIL Management System.' }
      ];

    case 'skills':
      return [
        { type: 'info', content: '=== CORE TECHNICAL PROFICIENCIES ===' },
        ...skillCategories.flatMap(cat => [
          { type: 'warning' as const, content: `[${cat.category.toUpperCase()}]` },
          { 
            type: 'text' as const, 
            content: cat.skills.map(s => `  • ${s.name.padEnd(20)} [${'█'.repeat(Math.round(s.level / 10))}${'░'.repeat(10 - Math.round(s.level / 10))}] ${s.level}%`).join('\n') 
          }
        ])
      ];

    case 'hobbies':
      return [
        { type: 'info', content: '=== CREATIVE SIDE JOB & HOBBIES ===' },
        { type: 'success', content: `📸 Side Job: ${sideJobsAndHobbies.sideJob.title}` },
        { type: 'text', content: `   ${sideJobsAndHobbies.sideJob.description}` },
        ...sideJobsAndHobbies.hobbies.map(h => ({
          type: 'text' as const,
          content: `${h.icon} ${h.title}: ${h.description}`
        }))
      ];

    case 'contact':
      return [
        { type: 'info', content: '=== DIRECT COMMUNICATION CHANNELS ===' },
        { type: 'text', content: `📧 Email:    ${personalInfo.email}` },
        { type: 'text', content: `💼 LinkedIn: ${personalInfo.linkedin}` },
        { type: 'text', content: `🐙 GitHub:   ${personalInfo.github}` },
        { type: 'success', content: 'Open for Full-Stack Developer & Software Engineer opportunities!' }
      ];

    case 'resume':
      if (onAction) onAction('open_resume');
      return [
        { type: 'success', content: '>> Launching interactive Resume window...' }
      ];

    case 'sudo':
      if (args === 'hire' || args === 'hire-me') {
        if (onAction) onAction('confetti');
        return [
          { type: 'ascii', content: `
  __  __ _____ _____  ______ _____  _ 
 |  \\/  |_   _|  __ \\|  ____|  __ \\| |
 | \\  / | | | | |__) | |__  | |  | | |
 | |\\/| | | | |  _  /|  __| | |  | | |
 | |  | |_| |_| | \\ \\| |____| |__| |_|
 |_|  |_|_____|_|  \\_\\______|_____/(_)
          `},
          { type: 'success', content: '🎉 ACCESS GRANTED: Offer letter protocol initialized!' },
          { type: 'text', content: `Candidate: ${personalInfo.name} has been flagged as TOP PRIORITY.` },
          { type: 'info', content: `Direct line: ${personalInfo.email}` },
        ];
      }
      return [
        { type: 'error', content: `sudo: ${args || 'command'}: permission denied. Try 'sudo hire'` }
      ];

    default:
      return [
        { type: 'error', content: `zsh: command not found: ${command}. Type 'help' for available commands.` }
      ];
  }
};
