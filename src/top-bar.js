function createTopBar() {
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

    const placesAbout = document.createElement(`a`);
    placesAbout.innerText = `About`;
    placesAbout.href = `../src/landing.js`;

    const placesMenu = document.createElement(`a`);
    placesMenu.innerText = `Menu`;
    placesMenu.href = `../src/menu.js`;

    const placesContact = document.createElement(`a`);
    placesContact.innerText = `Contact`;
    placesContact.href = `../src/contact.js`;

    logoContainer.append(logoImg);
    logoContainer.append(logoName);
    placesContainer.append(placesAbout);
    placesContainer.append(placesMenu);
    placesContainer.append(placesContact);
    topBarContainer.append(logoContainer);
    topBarContainer.append(placesContainer);
    body.append(topBarContainer);
}

export {
    createTopBar,
}