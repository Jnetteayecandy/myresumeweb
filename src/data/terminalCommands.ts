import { personalInfo, flagshipProject, bentoProjects, skillCategories } from './portfolioData';

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
        { type: 'info', content: '⚡ Wipaporn OS Shell v2.4.0 (Type a command and press Enter)' },
        { type: 'text', content: '  whoami          - Print brief overview about Wipaporn' },
        { type: 'text', content: '  pil             - Inspect PIL Management System flagship study' },
        { type: 'text', content: '  projects        - List top software engineering projects' },
        { type: 'text', content: '  skills          - Display system capability & tech stack diagnostics' },
        { type: 'text', content: '  contact         - Reveal contact details & social channels' },
        { type: 'text', content: '  resume          - Open clean PDF-style resume window' },
        { type: 'text', content: '  sudo hire       - Execute high-priority hiring protocol 🎉' },
        { type: 'text', content: '  matrix          - Activate cyber rain effect' },
        { type: 'text', content: '  clear           - Clear terminal history' },
      ];

    case 'whoami':
      return [
        { type: 'success', content: `[IDENTITY CONFIRMED]: ${personalInfo.name}` },
        { type: 'text', content: `Role:     ${personalInfo.title}` },
        { type: 'text', content: `Status:   ${personalInfo.status}` },
        { type: 'text', content: `Location: ${personalInfo.location}` },
        { type: 'info', content: `\n"${personalInfo.bio}"` },
      ];

    case 'pil':
      if (onAction) onAction('open_pil');
      return [
        { type: 'success', content: `[OPENING WINDOW]: ${flagshipProject.title}` },
        { type: 'text', content: `Subtitle:   ${flagshipProject.subtitle}` },
        { type: 'text', content: `Partner:    ${flagshipProject.collaboration}` },
        { type: 'info', content: `\nDescription: ${flagshipProject.description}` },
        { type: 'text', content: `Metrics:    ${flagshipProject.metrics?.map(m => `${m.label}: ${m.value}`).join(' | ')}` },
        { type: 'warning', content: '>> Launching interactive PIL case study window on screen...' }
      ];

    case 'projects':
      return [
        { type: 'info', content: '=== RECENT SOFTWARE ENGINEERING PROJECTS ===' },
        { type: 'success', content: `1. ★ ${flagshipProject.title} [FEATURED]` },
        { type: 'text', content: `   ${flagshipProject.subtitle} - Built with ${flagshipProject.tags.slice(0, 4).join(', ')}` },
        ...bentoProjects.map((p, idx) => ({
          type: 'text' as const,
          content: `${idx + 2}. ${p.title} (${p.subtitle})\n   Tags: [${p.tags.join(', ')}]`
        })),
        { type: 'info', content: '\nTip: Type "pil" to deep dive into the PIL Management System.' }
      ];

    case 'skills':
      return [
        { type: 'info', content: '=== SYSTEM CAPABILITIES & TECH STACK ===' },
        ...skillCategories.flatMap(cat => [
          { type: 'warning' as const, content: `[${cat.category.toUpperCase()}]` },
          { 
            type: 'text' as const, 
            content: cat.skills.map(s => `  • ${s.name.padEnd(20)} [${'█'.repeat(Math.round(s.level / 10))}${'░'.repeat(10 - Math.round(s.level / 10))}] ${s.level}%`).join('\n') 
          }
        ])
      ];

    case 'contact':
      return [
        { type: 'info', content: '=== DIRECT COMM CHANNELS ===' },
        { type: 'text', content: `📧 Email:    ${personalInfo.email}` },
        { type: 'text', content: `💼 LinkedIn: ${personalInfo.linkedin}` },
        { type: 'text', content: `🐙 GitHub:   ${personalInfo.github}` },
        { type: 'success', content: 'Feel free to reach out for software engineering roles or collaborations!' }
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

    case 'matrix':
      return [
        { type: 'success', content: '01010111 01101001 01110000 01100001 01110000 01101111 01110010 01101110' },
        { type: 'info', content: 'Follow the white rabbit... Wake up, Neo. The matrix has you.' }
      ];

    default:
      return [
        { type: 'error', content: `zsh: command not found: ${command}. Type 'help' for available commands.` }
      ];
  }
};

