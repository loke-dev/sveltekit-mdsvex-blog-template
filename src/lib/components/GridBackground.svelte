<script>
  // No props or logic needed for this component
</script>

<div class="grid-background" aria-hidden="true">
  <div class="grid-container">
    <div class="grid-pattern"></div>
    <div class="grid-fade-overlay"></div>
  </div>
</div>

<style>
  .grid-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -20;
    overflow: hidden;
    pointer-events: none;
    touch-action: none;
    user-select: none;
  }

  .grid-container,
  .grid-pattern,
  .grid-fade-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    touch-action: none;
    user-select: none;
  }

  .grid-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 30px 30px;
    transform: perspective(800px) rotateX(5deg);
    transform-origin: center top;
    animation: grid-move 30s linear infinite;
    opacity: 0.7;
  }

  .grid-fade-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      transparent 10%,
      rgba(3, 14, 41, 0.1) 50%,
      rgba(3, 14, 41, 0.4) 100%
    );
  }

  @keyframes grid-move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 30px;
    }
  }
</style>