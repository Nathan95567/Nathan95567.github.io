document.addEventListener('DOMContentLoaded', function() {
    function move() {
        if(document.getElementById('detail-resume').classList.contains('hidden')) {
            document.getElementById('detail-resume').classList.remove('hidden');
        } else {
            document.getElementById('detail-resume').classList.add('hidden');
        }
    }
    document.getElementById('resume').onclick = move;
});