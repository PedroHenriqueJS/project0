const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const luckyBtn = document.getElementById('luckyBtn');

searchInput.addEventListener('input', function() {
    if (this.value.trim() === '') {
        searchBtn.disabled = true;
        luckyBtn.disabled = true;
    } else {
        searchBtn.disabled = false;
        luckyBtn.disabled = false;
    }
});