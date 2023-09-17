export default function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 167777215)
    .toString(16)
    .padStart(6, 0)}`;
}
