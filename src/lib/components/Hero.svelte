<script lang="ts">
  import { onMount } from "svelte"
  import { fade, fly } from "svelte/transition"

  let visible = false;

  onMount(() => {
    // Set visible to true after a short delay for animations
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<div class="hero fullWidth">
  <div class="hero-background">
    <div class="grid-container">
      <div class="grid-pattern"></div>
      <div class="grid-fade-overlay"></div>
    </div>
    <div class="code-particles">
      <div class="particle p1">function()</div>
      <div class="particle p2">const data = []</div>
      <div class="particle p3">() =></div>
      <div class="particle p4">npm install</div>
      <div class="particle p5">return</div>
      <div class="particle p6">div</div>
      <div class="particle p7">async</div>
      <div class="particle p8">export</div>
      <div class="particle p9">await</div>
      <div class="particle p10">.then()</div>
      <div class="particle p11">useState()</div>
      <div class="particle p12">try/catch</div>
      <div class="particle p13">git commit</div>
      <div class="particle p14">import</div>
      <div class="particle p15">fetch()</div>
      <div class="particle p16">forEach()</div>
      <div class="particle p17">console.log</div>
      <div class="particle p18">map()</div>
      <div class="particle p19">Promise</div>
      <div class="particle p20">addEventListener</div>
      <div class="particle p21">let x = 0</div>
      <div class="particle p22">reduce()</div>
      <div class="particle p23">foo</div>
      <div class="particle p24">bar</div>
    </div>
    <div class="gradient-overlay"></div>
  </div>

  <div class="hero-content">
    {#if visible}
      <h1 class="title" in:fly={{ y: 20, duration: 800, delay: 200 }}>
        Loke<span class="accent">.</span>dev
      </h1>
      <p class="tagline" in:fly={{ y: 20, duration: 800, delay: 400 }}>
        Web Developer
      </p>
      <div class="cta-container" in:fade={{ duration: 1000, delay: 800 }}>
        <a href="/projects" class="cta-button primary">View Projects</a>
        <a href="/contact" class="cta-button secondary">Get in Touch</a>
      </div>
    {/if}
  </div>
</div>

<style>
  .hero {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    min-height: 80vh;

    @media (max-width: 768px) {
      padding: 2rem 0;
      min-height: 70vh;
    }
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /* Restore grid container and pattern styles */
  .grid-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .grid-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
    background-size: 30px 30px;
    transform: perspective(800px) rotateX(10deg);
    transform-origin: center top;
    animation: grid-move 20s linear infinite;
  }

  .grid-fade-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      transparent 20%,
      rgba(3, 14, 41, 0.3) 60%,
      rgba(3, 14, 41, 0.8) 100%
    );
    pointer-events: none;
  }

  @keyframes grid-move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 30px;
    }
  }

  .code-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    perspective: 1000px;
  }

  .particle {
    position: absolute;
    color: rgba(255, 255, 255, 0.4);
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 20px rgba(255, 41, 93, 0.1);
    transform-style: preserve-3d;
    animation: float-code 15s ease-in-out infinite;
    opacity: 0;
  }

  .particle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
      rgba(252, 68, 228, 0.1),
      rgba(75, 46, 198, 0.1),
      rgba(255, 186, 2, 0.1),
      rgba(255, 41, 93, 0.1)
    );
    border-radius: 4px;
    z-index: -1;
  }

  .p1 {
    top: 12%;
    left: 13%;
    animation-delay: 0s;
  }

  .p2 {
    top: 8%;
    left: 36%;
    animation-delay: -2s;
  }

  .p3 {
    top: 11%;
    left: 64%;
    animation-delay: -4s;
  }

  .p4 {
    top: 9%;
    left: 87%;
    animation-delay: -6s;
  }

  .p5 {
    top: 27%;
    left: 6%;
    animation-delay: -8s;
  }

  .p6 {
    top: 23%;
    left: 32%;
    animation-delay: -10s;
  }

  .p7 {
    top: 26%;
    left: 54%;
    animation-delay: -12s;
  }

  .p8 {
    top: 24%;
    left: 77%;
    animation-delay: -14s;
  }

  .p9 {
    top: 42%;
    left: 17%;
    animation-delay: -16s;
  }

  .p10 {
    top: 38%;
    left: 40%;
    animation-delay: -18s;
  }

  .p11 {
    top: 41%;
    left: 60%;
    animation-delay: -1s;
  }

  .p12 {
    top: 39%;
    left: 83%;
    animation-delay: -3s;
  }

  .p13 {
    top: 57%;
    left: 10%;
    animation-delay: -5s;
  }

  .p14 {
    top: 53%;
    left: 28%;
    animation-delay: -7s;
  }

  .p15 {
    top: 31%;
    left: 38%;
    animation-delay: -9s;
  }

  .p16 {
    top: 54%;
    left: 73%;
    animation-delay: -11s;
  }

  .p17 {
    top: 72%;
    left: 13%;
    animation-delay: -13s;
  }

  .p18 {
    top: 68%;
    left: 36%;
    animation-delay: -15s;
  }

  .p19 {
    top: 71%;
    left: 64%;
    animation-delay: -17s;
  }

  .p20 {
    top: 69%;
    left: 87%;
    animation-delay: -19s;
  }

  .p21 {
    top: 87%;
    left: 6%;
    animation-delay: -21s;
  }

  .p22 {
    top: 83%;
    left: 32%;
    animation-delay: -22s;
  }

  .p23 {
    top: 86%;
    left: 54%;
    animation-delay: -23s;
  }

  .p24 {
    top: 84%;
    left: 77%;
    animation-delay: -24s;
  }

  @keyframes float-code {
    0% {
      transform: translateZ(-50px) translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 0.7;
    }
    50% {
      transform: translateZ(50px) translateY(-20px) translateX(20px) rotate(5deg);
      opacity: 0.7;
    }
    80% {
      opacity: 0.7;
    }
    100% {
      transform: translateZ(-50px) translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
  }

  /* Add variation to animations */
  .p1, .p5, .p9, .p13, .p17, .p21 {
    animation-name: float-code-1;
  }

  .p2, .p6, .p10, .p14, .p18, .p22 {
    animation-name: float-code-2;
  }

  .p3, .p7, .p11, .p15, .p19, .p23 {
    animation-name: float-code-3;
  }

  .p4, .p8, .p12, .p16, .p20, .p24 {
    animation-name: float-code-4;
  }

  @keyframes float-code-1 {
    0% {
      transform: translateZ(-50px) translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 0.7;
    }
    50% {
      transform: translateZ(50px) translateY(-20px) translateX(20px) rotate(5deg);
      opacity: 0.7;
    }
    80% {
      opacity: 0.7;
    }
    100% {
      transform: translateZ(-50px) translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
  }

  @keyframes float-code-2 {
    0% {
      transform: translateZ(-30px) translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 0.6;
    }
    50% {
      transform: translateZ(40px) translateY(15px) translateX(-25px) rotate(-3deg);
      opacity: 0.6;
    }
    80% {
      opacity: 0.6;
    }
    100% {
      transform: translateZ(-30px) translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
  }

  @keyframes float-code-3 {
    0% {
      transform: translateZ(-20px) translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 0.5;
    }
    50% {
      transform: translateZ(30px) translateY(-15px) translateX(-15px) rotate(2deg);
      opacity: 0.5;
    }
    80% {
      opacity: 0.5;
    }
    100% {
      transform: translateZ(-20px) translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
  }

  @keyframes float-code-4 {
    0% {
      transform: translateZ(-40px) translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
    20% {
      opacity: 0.65;
    }
    50% {
      transform: translateZ(45px) translateY(10px) translateX(30px) rotate(-2deg);
      opacity: 0.65;
    }
    80% {
      opacity: 0.65;
    }
    100% {
      transform: translateZ(-40px) translateY(0) translateX(0) rotate(0deg);
      opacity: 0;
    }
  }

  /* Vary animation durations */
  .p1, .p11, .p21 { animation-duration: 18s; }
  .p2, .p12, .p22 { animation-duration: 22s; }
  .p3, .p13, .p23 { animation-duration: 16s; }
  .p4, .p14, .p24 { animation-duration: 24s; }
  .p5, .p15 { animation-duration: 20s; }
  .p6, .p16 { animation-duration: 19s; }
  .p7, .p17 { animation-duration: 23s; }
  .p8, .p18 { animation-duration: 17s; }
  .p9, .p19 { animation-duration: 21s; }
  .p10, .p20 { animation-duration: 25s; }

  .p2, .p7, .p13, .p18, .p23 {
    font-size: 12px;
    padding: 6px 10px;
  }

  .p4, .p9, .p15, .p20, .p22 {
    font-size: 16px;
    padding: 9px 14px;
  }

  .p6, .p11, .p16, .p21, .p24 {
    font-size: 11px;
    padding: 5px 8px;
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(3, 14, 41, 0.5) 0%, rgba(3, 14, 41, 0.8) 70%, rgba(3, 14, 41, 0.95) 100%);
    z-index: 1;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 2rem;
    text-align: center;
    max-width: 800px;
    width: 100%;
    z-index: 2;
  }

  .title {
    color: #fff;
    font-size: calc(36px + 5vw);
    letter-spacing: -0.03em;
    font-weight: 800;
    line-height: 1em;
    margin: 0;
    position: relative;
    display: inline-block;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .accent {
    color: var(--color-primary, #FF295D);
    position: relative;
    display: inline-block;
    animation: pulse 4s infinite ease-in-out;
  }

  .tagline {
    color: rgba(255, 255, 255, 0.85);
    font-size: calc(16px + 0.5vw);
    font-weight: 400;
    letter-spacing: 0.05em;
    margin-top: 1.5rem;
    position: relative;
    display: inline-block;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .cta-container {
    display: flex;
    gap: 1rem;
    margin-top: 2.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .cta-button:hover::before {
    transform: translateX(0);
  }

  .cta-button.primary {
    background-color: var(--color-primary, #FF295D);
    color: white;
    box-shadow: 0 4px 12px rgba(255, 41, 93, 0.3);
  }

  .cta-button.primary:hover {
    box-shadow: 0 6px 16px rgba(255, 41, 93, 0.4);
    transform: translateY(-2px);
  }

  .cta-button.secondary {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .cta-button.secondary:hover {
    border-color: var(--color-primary, #FF295D);
    transform: translateY(-2px);
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: calc(28px + 5vw);
    }

    .tagline {
      font-size: calc(14px + 0.5vw);
      margin-top: 1rem;
    }

    .cta-container {
      flex-direction: column;
      width: 100%;
      gap: 0.75rem;
    }

    .cta-button {
      width: 100%;
    }
  }
</style>
