function checkInput() {
    var searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput === '') {
        document.getElementById('searchBtn').disabled = true;
        return false; 
    }
    return true; 
}

document.getElementById('searchInput').addEventListener('input', function() {
    var searchBtn = document.getElementById('searchBtn');
    if (this.value.trim() === '') {
        searchBtn.disabled = true;
    } else {
        searchBtn.disabled = false;
    }
});