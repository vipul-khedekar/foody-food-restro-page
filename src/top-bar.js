export function createTopBar() {
    const body = document.querySelector(`body`);

    const topBarContainer = document.createElement(`div`);
    topBarContainer.classList.add(`top-bar-container`);

    const logoContainer = document.createElement(`div`);
    logoContainer.classList.add(`logo`);

    const placesContainer = document.createElement(`div`);
    placesContainer.classList.add(`places`);

    const logoImg = document.createElement(`img`);
    logoImg.src = `../src/assets/icons/logo.png`;
    logoImg.alt = `logo`;

    const logoName = document.createElement(`div`);
    logoName.innerText = `Foody Food`;

    const placesAbout = document.createElement(`div`);
    placesAbout.innerText = `About`;

    const placesMenu = document.createElement(`div`);
    placesMenu.innerText = `Menu`;

    const placesContact = document.createElement(`div`);
    placesContact.innerText = `Contact`;

    logoContainer.append(logoImg);
    logoContainer.append(logoName);
    placesContainer.append(placesAbout);
    placesContainer.append(placesMenu);
    placesContainer.append(placesContact);
    topBarContainer.append(logoContainer);
    topBarContainer.append(placesContainer);
    body.append(topBarContainer);
}