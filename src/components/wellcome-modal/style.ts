import styled from "styled-components";

export const WellcomeMain = styled.div`
  @keyframes slideUpExit {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  .slide-up-exit {
    animation: slideUpExit 0.6s forwards;
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0758b4ff 0%, #0758b4ff 100%);
  cursor: pointer;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const WellcomeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.75rem;
  border: 0;
  padding: 3rem;
  text-align: center;
  max-width: 28rem;
  margin: 0 1rem;
  background: rgba(255, 255, 255, 0.95);
  color: var(--text-card-foreground, #111827);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 6px 18px rgba(118, 75, 162, 0.06);
  transition: all 300ms ease;
  will-change: transform, box-shadow, opacity;
  transform-origin: center;
  animation: scaleIn 220ms ease both;
  @keyframes scaleIn {
    from {
      transform: scale(0.98);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(118, 75, 162, 0.12);
  }

  .card-content {
    margin-bottom: 2rem;
  }

  .card-title {
    font-weight: 800;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    margin-bottom: 1rem;
  }
  .card-p {
    font-size: 1.125rem;
    color: var(--text-muted-foreground, #6b7280);
  }
`;
