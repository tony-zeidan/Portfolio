const useSpotlight = () => {
  const onMouseMove = (event) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    target.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  };

  return onMouseMove;
};

export default useSpotlight;
