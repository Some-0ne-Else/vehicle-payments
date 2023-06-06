import { DEFAULT_REQUEST_DELAY } from '@/constants/general';

export default function funcWithDelay(func: TimerHandler) {
  setTimeout(func, DEFAULT_REQUEST_DELAY);
}
