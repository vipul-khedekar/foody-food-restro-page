function createLandingPage() {
    const body = document.querySelector(`body`);

    const landingPageContainer = document.createElement(`div`);
    landingPageContainer.classList.add(`landing-page-container`);

    const heroContainer = document.createElement(`div`);
    heroContainer.classList.add(`hero-container`);
    heroContainer.style.backgroundImage = `url(../src/assets/images/hero.jpg)`;

    const descriptionContainer = document.createElement(`div`);
    descriptionContainer.classList.add(`description-container`);

    const heroText = document.createElement(`p`);
    heroText.innerText = `The best foody place in Town`;

    const heroButton = document.createElement(`button`);
    heroButton.type = `button`;
    heroButton.innerText = `Book a Table`;

    const descriptionText = document.createElement(`p`);
    descriptionText.innerText = `It started out simply from an idea to feed people the best dishes they have ever tasted in their life. It won't be free though, we need to make profits. But hey you get ambiance in return.`;

    const descriptionImage = document.createElement(`img`);
    descriptionImage.src = `../src/assets/images/description.jpg`;
    descriptionImage.alt = `description-image`;

    heroContainer.append(heroText);
    heroContainer.append(heroButton);
    descriptionContainer.append(descriptionText);
    descriptionContainer.append(descriptionImage);
    landingPageContainer.append(heroContainer);
    landingPageContainer.append(descriptionContainer);
    body.append(landingPageContainer);
}

export {
    createLandingPage,
}