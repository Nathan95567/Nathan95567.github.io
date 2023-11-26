document.addEventListener('DOMContentLoaded', function() {
    // function move(bottomID) {
    //     if(document.getElementById('bottomID').classList.contains('hidden')) {
    //         document.getElementById('bottomID').classList.remove('hidden');
    //     } else {
    //         document.getElementById('bottomID').classList.add('hidden');
    //     }
    // }
    // function moveProject() {
    //     move('detail-project');
    // }
    // function moveResume() {
    //     move('detail-resume');
    // }
    // function movePortfolio() {
    //     move('detail-portfolio');
    // }
    function coverProject() {
        if(!document.getElementById('detail-project').classList.contains('hidden')) {
            document.getElementById('detail-project').classList.add('hidden');
        }  
    }
    function coverResume() {
        if(!document.getElementById('detail-resume').classList.contains('hidden')) {
            document.getElementById('detail-resume').classList.add('hidden');
        }
    }
    function coverPortfolio() {
        if(!document.getElementById('detail-portfolio').classList.contains('hidden')) {
            document.getElementById('detail-portfolio').classList.add('hidden');
        }   
    }
    function moveProject() {
        coverResume;
        coverPortfolio;
        if(document.getElementById('detail-project').classList.contains('hidden')) {
            document.getElementById('detail-project').classList.remove('hidden');
        } 
        else {
            document.getElementById('detail-project').classList.add('hidden');
        }
    }
    function moveResume() {
        coverProject;
        coverPortfolio;
        if(document.getElementById('detail-resume').classList.contains('hidden')) {
            document.getElementById('detail-resume').classList.remove('hidden');
        } 
        else {
            document.getElementById('detail-resume').classList.add('hidden');
        }
    }
    function movePortfolio() {
        coverResume;
        coverProject;
        if(document.getElementById('detail-portfolio').classList.contains('hidden')) {
            document.getElementById('detail-portfolio').classList.remove('hidden');
        } 
        else {
            document.getElementById('detail-portfolio').classList.add('hidden');
        }
    }
    document.getElementById('project').onclick = moveProject;
    document.getElementById('resume').onclick = moveResume;
    document.getElementById('portfolio').onclick = movePortfolio;
});