<script lang="ts">
  import Button from "./Button.svelte"
  import CodeParticle from "./CodeParticle.svelte"

  type Particle = {
    content: string;
    top: string;
    left: string;
    delay: string;
    textSize?: string;
    color?: string;
    customClass?: string;
    rotate?: string;
    scale?: string;
    initialOpacity?: string;
    duration?: string;
    movementRange?: string;
    spinAmount?: string;
  };

  const particles: Particle[] = [
    { content: "function()", top: "8%", left: "13%", delay: "0s", color: "primary", initialOpacity: "opacity-30", duration: "20s", movementRange: "20px", spinAmount: "4deg" },
    { content: "const", top: "3%", left: "32%", delay: "0s", color: "white", initialOpacity: "opacity-20", duration: "22s", movementRange: "15px", spinAmount: "3deg" },
    { content: "div", top: "18%", left: "42%", delay: "0s", color: "primary", scale: "0.9", initialOpacity: "opacity-25", duration: "24s", movementRange: "25px", spinAmount: "6deg" },
    { content: "export", top: "14%", left: "87%", delay: "0s", color: "secondary", initialOpacity: "opacity-20", duration: "26s", movementRange: "18px", spinAmount: "5deg" },

    { content: "() =>", top: "11%", left: "64%", delay: "0.5s", rotate: "-2deg", duration: "18s", movementRange: "22px", initialOpacity: "opacity-0", spinAmount: "7deg" },
    { content: "return", top: "27%", left: "6%", delay: "0.8s", rotate: "1deg", duration: "20s", movementRange: "16px", initialOpacity: "opacity-0", spinAmount: "2deg" },
    { content: "async", top: "22%", left: "74%", delay: "1.2s", rotate: "-1deg", duration: "22s", movementRange: "20px", initialOpacity: "opacity-0", spinAmount: "4deg" },

    { content: "await", top: "42%", left: "17%", delay: "2s", scale: "0.9", duration: "24s", movementRange: "24px", spinAmount: "3deg" },
    { content: ".then()", top: "32%", left: "40%", delay: "2.5s", color: "secondary", duration: "26s", movementRange: "18px", spinAmount: "5deg" },
    { content: "useState()", top: "38%", left: "80%", delay: "3s", color: "primary", rotate: "-1deg", duration: "18s", movementRange: "22px", spinAmount: "6deg" },

    { content: "import", top: "55%", left: "25%", delay: "4s", textSize: "text-xs", duration: "20s", movementRange: "15px", spinAmount: "4deg" },
    { content: "<Svelte>", top: "58%", left: "70%", delay: "5s", color: "secondary", scale: "0.95", duration: "22s", movementRange: "20px", spinAmount: "7deg" },
    { content: "props", top: "52%", left: "10%", delay: "6s", color: "primary", rotate: "-1deg", duration: "24s", movementRange: "18px", spinAmount: "3deg" },

    { content: "class", top: "15%", left: "50%", delay: "8s", color: "secondary", scale: "0.9", duration: "26s", movementRange: "25px", spinAmount: "5deg" },
    { content: "extends", top: "48%", left: "55%", delay: "10s", color: "primary", scale: "0.85", duration: "18s", movementRange: "16px", spinAmount: "4deg" },
    { content: "let", top: "35%", left: "85%", delay: "12s", color: "white", scale: "0.8", duration: "20s", movementRange: "20px", spinAmount: "2deg" },
    { content: "export default", top: "65%", left: "45%", delay: "14s", color: "secondary", scale: "0.9", duration: "22s", movementRange: "22px", spinAmount: "6deg" },

    { content: "interface", top: "72%", left: "28%", delay: "7s", color: "primary", scale: "0.85", duration: "24s", movementRange: "19px", spinAmount: "5deg" },
    { content: "type", top: "78%", left: "65%", delay: "9s", color: "white", scale: "0.8", duration: "21s", movementRange: "17px", spinAmount: "3deg" },
    { content: "npm", top: "85%", left: "15%", delay: "11s", color: "secondary", scale: "0.9", duration: "23s", movementRange: "21px", spinAmount: "4deg" }
  ];
</script>

<div class="relative flex justify-center items-center p-8 min-h-[70vh] fullWidth overflow-hidden md:p-16 md:min-h-[80vh]">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute inset-0 bg-30px transform perspective-800px rotate-x-5 origin-top-center opacity-90"
        style="background-size: 30px 30px; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px); mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0) 100%);"
      ></div>
    </div>

    <div class="absolute inset-0 perspective-[1000px]">
      {#each particles as particle}
        <CodeParticle
          content={particle.content}
          top={particle.top}
          left={particle.left}
          delay={particle.delay}
          textSize={particle.textSize || 'text-sm'}
          color={particle.color || 'white'}
          customClass={particle.customClass || ''}
          rotate={particle.rotate || '0deg'}
          scale={particle.scale || '1'}
          initialOpacity={particle.initialOpacity || 'opacity-0'}
          duration={particle.duration || '20s'}
          movementRange={particle.movementRange || '20px'}
          spinAmount={particle.spinAmount || '4deg'}
        />
      {/each}
    </div>

    <div class="absolute inset-0 bg-radial-gradient from-background/10 via-background/40 to-background/70 z-[1]"></div>
  </div>

  <div class="relative z-10 text-center flex flex-col items-center justify-center p-8 max-w-[900px] w-full">
    <h1 class="text-6xl font-extrabold text-white mb-4 leading-none tracking-tight text-shadow-lg md:text-8xl">
      SvelteKit<span class="text-primary">.</span>Blog
    </h1>
    <p class="text-2xl text-white/80 mb-12 tracking-wide text-shadow-md md:text-4xl">
      Modern Blog Template
    </p>
    <div class="flex flex-col gap-6 justify-center mt-4 md:flex-row md:gap-6 md:items-center">
      <Button href="/journal" variant="primary" className="px-10 py-3 text-base font-medium shadow-lg shadow-primary/30 w-full md:w-auto md:text-lg">Read Blog</Button>
      <Button href="/about" variant="secondary" className="px-10 py-3 text-base font-medium w-full md:w-auto md:text-lg">About</Button>
    </div>
  </div>
</div>

