export const smoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href')?.substring(1);
  if (!targetId) return;

  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}; 