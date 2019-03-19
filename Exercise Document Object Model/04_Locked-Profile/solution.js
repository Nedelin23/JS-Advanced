function solve() {
    let profilesHtmlCollection = document.getElementsByClassName('profile');
    let profiles = Array.prototype.slice.call( profilesHtmlCollection );


    for (let profileElement of profiles) {
        let button = profileElement.getElementsByTagName('button')[0];
        button.addEventListener('click', showHiddenFields.bind(this, profileElement))
    }

    function showHiddenFields(profileElement) {
        let unlockedRadioButtonElemnent = profileElement.getElementsByTagName('input')[1];
        let checked = unlockedRadioButtonElemnent.checked;
        if(!checked) return;

        let userHiddenFields = profileElement.getElementsByTagName('div')[1];
        userHiddenFields.style.display = 'block';


        let button = Array.from(profileElement.getElementsByTagName('button'));
        button[0].textContent = 'Hide it';
        button[0].addEventListener('click', hideHiddenFields.bind(this, profileElement));
    }

    function hideHiddenFields(profileElement) {
        let unlockedRadioButtonElemnent = profileElement.getElementsByTagName('input')[1];
        let checked = unlockedRadioButtonElemnent.checked;
        if(!checked) return;

        let userHiddenFields = profileElement.getElementsByTagName('div')[1];
        userHiddenFields.style.display = 'none';

        let button = Array.from(profileElement.getElementsByTagName('button'));
        button[0].textContent = 'Show more';
        button[0].addEventListener('click', showHiddenFields.bind(this, profileElement));
    }
}