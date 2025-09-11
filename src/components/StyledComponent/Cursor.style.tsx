import { Box, styled, keyframes } from '@mui/material';

export const ripple = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(4);
    opacity: 0;
  }
`;

export const RippleDot = styled(Box)<{ x: number; y: number }>(({ x, y }) => ({
  position: 'fixed',
  left: x,
  top: y,
  width: '12px',
  height: '12px',
  background: 'radial-gradient(circle, #fff 0%, transparent 70%)',
  borderRadius: '50%',
  pointerEvents: 'none',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
  boxShadow: '0 0 15px 8px rgba(200, 240, 255, 0.6)',
  animation: `${ripple} 1.2s ease-out forwards`,
}));
