const refresh = () => {
  const refreshBtn = document.querySelector('.refresh');

  refreshBtn.addEventListener('click', () => {
    window.location.reload();
  });
};

export default refresh;