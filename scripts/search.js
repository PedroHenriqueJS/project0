function checkInput() {
    var searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput === '') {
        document.getElementById('searchBtn').disabled = true;
        document.getElementById('luckyBtn').disabled = true;
        return false; 
    }
    return true; 
}