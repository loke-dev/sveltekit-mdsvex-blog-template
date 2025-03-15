<script lang="ts">
    import { fly } from "svelte/transition"
  import Button from "./Button.svelte"
</script>

<div class="relative flex justify-center items-center p-16 min-h-[80vh] fullWidth overflow-hidden md:p-8 md:min-h-[70vh]">
  <div class="absolute inset-0 overflow-hidden">
    <!-- Grid background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-grid-pattern bg-30px transform perspective-800px rotate-x-5 origin-top-center animate-grid-move"></div>
      <div class="absolute inset-0 bg-radial-fade pointer-events-none"></div>
    </div>

    <!-- Code particles -->
    <div class="absolute inset-0 perspective-[1000px]">
      <!-- Particle 1 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[12%] left-[13%]">function()</div>
      <!-- Particle 2 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[8%] left-[36%] animation-delay-2s">const data = []</div>
      <!-- Particle 3 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[11%] left-[64%] animation-delay-4s">() =></div>
      <!-- Particle 4 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[9%] left-[87%] animation-delay-6s">npm install</div>
      <!-- Particle 5 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[27%] left-[6%] animation-delay-8s">return</div>
      <!-- Particle 6 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[23%] left-[32%] animation-delay-10s">div</div>
      <!-- Particle 7 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[26%] left-[54%] animation-delay-12s">async</div>
      <!-- Particle 8 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[24%] left-[77%] animation-delay-14s">export</div>
      <!-- Particle 9 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[42%] left-[17%] animation-delay-16s">await</div>
      <!-- Particle 10 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[38%] left-[40%] animation-delay-18s">.then()</div>
      <!-- Particle 11 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[41%] left-[60%] animation-delay-1s">useState()</div>
      <!-- Particle 12 -->
      <div class="absolute text-white/40 font-mono text-sm p-2 rounded bg-white/5 shadow-glow-primary transform-style-preserve-3d animate-float-code opacity-0 top-[39%] left-[83%] animation-delay-3s">try/catch</div>
    </div>

    <!-- Gradient overlay -->
    <div class="absolute inset-0 bg-radial-gradient from-background/50 via-background/80 to-background/95 z-[1]"></div>
  </div>

  <div class="relative z-10 text-center flex flex-col items-center justify-center p-8 max-w-[800px] w-full">
    <h1 in:fly={{ y: 200, duration: 2000, delay: 200 }} class="text-6xl font-extrabold text-white mb-4 leading-none tracking-tight text-shadow-lg md:text-5xl">
      Loke<span class="text-primary animate-pulse">.</span>dev
    </h1>
    <p class="text-2xl text-white/80 mb-8 tracking-wide text-shadow-md md:text-xl">
      Web Developer
    </p>
    <div class="flex gap-4 justify-center mt-4 md:flex-col md:items-center">
      <Button href="/projects" variant="primary">View Projects</Button>
      <Button href="/contact" variant="outline">Get in Touch</Button>
    </div>
  </div>
</div>

