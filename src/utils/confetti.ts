import confetti from 'canvas-confetti';

export function fireConfetti() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#00F0FF', '#8B5CF6', '#FFFFFF']
  });
  fire(0.2, {
    spread: 60,
    colors: ['#3B82F6', '#10B981', '#00F0FF']
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    colors: ['#F59E0B', '#EC4899', '#8B5CF6']
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

