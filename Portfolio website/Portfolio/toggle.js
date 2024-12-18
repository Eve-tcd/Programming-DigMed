function toggleDarkMode(){
    let darkOn = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', darkOn ? 'enabled' : 'disabled');
    document.getElementById('darkModeToggle').checked = darkOn;

}

document.addEventListener('DOMContentLoaded', () => {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
    if(darkModeEnabled){
        document.body.classList.add('dark-mode');
    }

    document.getElementById('darkModeToggle').checked = darkModeEnabled;

    document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);
});
