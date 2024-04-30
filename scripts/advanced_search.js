function checkInputs() {
    var allWords = document.getElementById('all_words').value.trim();
    var exactWord = document.getElementById('exact_word').value.trim();
    var anyWords = document.getElementById('any_words').value.trim();
    var noneWords = document.getElementById('none_words').value.trim();
    var searchBtn = document.getElementById('searchBtn');

    if (allWords === '' && exactWord === '' && anyWords === '' && noneWords === '') {
        searchBtn.disabled = true;
    } else {
        searchBtn.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(function(input) {
        input.addEventListener('input', checkInputs);
    });

    checkInputs();
});
