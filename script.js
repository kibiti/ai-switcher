document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`${targetTab}-tab`).classList.add('active');
    });
  });

  // AI Switcher logic
  const searchForm = document.getElementById('search-form');
  const searchQuery = document.getElementById('search-query');
  const engineSection = document.getElementById('engine-section');
  const backButton = document.getElementById('back-button');
  const engineButtons = document.querySelectorAll('.engine-btn');

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (searchQuery.value.trim() !== '') {
      searchForm.style.display = 'none';
      engineSection.style.display = 'block';
    }
  });

  backButton.addEventListener('click', function() {
    engineSection.style.display = 'none';
    searchForm.style.display = 'flex';
  });

  engineButtons.forEach(button => {
    button.addEventListener('click', function() {
      const urlTemplate = this.getAttribute('data-url');
      const query = encodeURIComponent(searchQuery.value.trim());
      const url = urlTemplate.replace('%QUERY%', query);
      window.open(url, '_blank');
    });
  });
});
