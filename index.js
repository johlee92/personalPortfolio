function handleHomePage() {
    console.log('handle home page');

    const homePageHtml = `
    <section class="home-message">
        Web Developer. Engineer by training. <br>
        Ventures. Investing. Strategy. <br>
        Adventures. Burner. Athlete. <br>
        Denver. San Francisco. <br>
    </section>`;

    const removedContent = `
    <section class="home-buttons mobile-screen">
        <button type="button" class="view-aboutme">About Me</button>
        <button type="button" class="view-portfolio">Projects</button>
        <button type="button" class="view-blog">Blog</button>
        <button type="button" class="view-photos">Photos</button>
    </section>`;

    $('.main-section').html(homePageHtml);
} 

function handleAboutMe() {
    console.log('handle about me page');

    const aboutMeHtml = `
    <section class = "about-me-message">
        <img class="about-me-image" src='images/about-me-photo.JPG' alt="picture in about me with me hiking" width=100%>
        <br>
        I’m a web developer and an engineer by training. I enjoy working with a team to materialize an idea, to solve problems, and to improve efficiency. I love being challenged intellectually. <br> <br>
        When I have free time, I can be found doing something active (e.g. hiking a 14er, surfing, swimming). I seek new adventures and enjoy having new experiences. I’m also an avid manga reader. <br> <br>
        I am currently based out of Denver, CO. I’ve lived in Philadelphia, New York City, Los Angeles, and San Francisco.
    </section>`;

    $('.main-section').html(aboutMeHtml);
}

function handlePortfolio() {
    console.log('handle portfolio and projects');

    let projectsArray = [];
    //learn how to turn this into the forEach() function
    for (let i = 0; i < PROJECTS.length; i++) {
        projectsArray.push(createProjectsHtml(PROJECTS[i]));
    };

    //confirm that it is best practice to use JSON.stringify to turn the array into a string for html
    const portfolioHtml = projectsArray.join('');
    $('.main-section').html(portfolioHtml);
}

function createProjectsHtml(projectObj) {
    let projectTechnologies = createTechnologiesHtml(projectObj);
    
    return `
    <div class="project-card">
        <img src='${projectObj.screenshot}' alt="${projectObj.title}" width=100%>
        <section class="project-card-description">
            <h2>${projectObj.title}</h2>
            <section class="project-card-technologies">
                ${projectTechnologies}
            </section>
            <p>${projectObj.description}</p>
            <section class="project-card-buttons">
                <a href="${projectObj.repoLink}" target="_blank"><button type="button" class="view-project">View Code</button></a>
                <a href="${projectObj.liveLink}" target="_blank"><button type="button" class="view-project">View Project</button></a>
            </section>
        </section>
    </div>`;
}

//function to dynamically create the icon images for technologies used in a project
//how do I make this more fail proof? I'm thinking there are edge cases that are not represented here
function createTechnologiesHtml(projectObj) {
    let arrayTechnologies = projectObj.technologies;

    if (arrayTechnologies.length === 0){
        return '';
    }

    if (!arrayTechnologies){
        return '';
    }

    let technologiesHtml = '';

    for (let i = 0; i < arrayTechnologies.length; i++) {
        if (arrayTechnologies[i].toLowerCase() === 'javascript') {
            technologiesHtml += `<img src='images/javascript.png' alt="JavaScript icon" height=30 width=30>`;
        } else if (arrayTechnologies[i].toLowerCase() === 'html') {
            technologiesHtml += `<img src='images/html.png' alt="HTML5 icon" height=30 width=30>`;
        } else if (arrayTechnologies[i].toLowerCase() === 'css') {
            technologiesHtml += `<img src='images/css.jpg' alt="CSS icon" height=30 width=30>`;
        }
    };

    return technologiesHtml;
}

function handleBlog() {
    console.log('handle blog');

    const blogHtml = `
    <section class="home-message">
        Coming soon!
    </section>`;

    $('.main-section').html(blogHtml);
}

function handlePhotos() {
    console.log('handle photos');

    const photosHtml = `
    <section class="home-message">
        Coming soon!
    </section>`;

    $('.main-section').html(photosHtml);
}

function handleMenu() {
    console.log('handle menu');

    $('.menu-dropdown').toggleClass('hidden');
}

//handleNavigation listens for all clicks on navigtation specific places
//what's a better way of writing this function to handle user input? (look into different "views")
//name could be called "initialize" because it's starting the navigation
//if you call handleNavigation() twice, you create two click handlers, could execute twice resulting ina bug that's hard to fix, won't notice a problem until odd behavior
//the above comment applies to all initializations
function handleNavigation() {
    $('body').on('click','.view-menu',function(){
        handleMenu();
    });

    $('body').on('click','.view-homeMessage',function(){
        handleHomePage();
        removeNavEmphasis();
        $('.menu-dropdown').addClass('hidden');
        $('.nav-menu.view-homeMessage').addClass('navEmphasize');
    });
    
    $('body').on('click','.view-aboutme',function(){
        handleAboutMe();
        removeNavEmphasis();
        $('.menu-dropdown').addClass('hidden');
        $('.nav-menu.view-aboutme').addClass('navEmphasize');
    });

    $('body').on('click','.view-portfolio',function(){
        handlePortfolio();
        removeNavEmphasis();
        $('.menu-dropdown').addClass('hidden');
        $('.nav-menu.view-portfolio').addClass('navEmphasize');
    });

    $('body').on('click','.view-blog',function(){
        handleBlog();
        removeNavEmphasis();
        $('.menu-dropdown').addClass('hidden');
        $('.nav-menu.view-blog').addClass('navEmphasize');
    });

    $('body').on('click','.view-photos',function(){
        handlePhotos();
        removeNavEmphasis();
        $('.menu-dropdown').addClass('hidden');
        $('.nav-menu.view-photos').addClass('navEmphasize');
    });
}

//function to remove the emphasis placed when an user is in another section
//what's the more efficient way to write this code? [runtime and loadtime. don't want the same queries over and over again]
function removeNavEmphasis() {
    $('.view-homeMessage').removeClass('navEmphasize');
    $('.view-aboutme').removeClass('navEmphasize');
    $('.view-portfolio').removeClass('navEmphasize');
    $('.view-blog').removeClass('navEmphasize');
    $('.view-photos').removeClass('navEmphasize');
    //the below code looks for all elements with the class and remove the class. This is not a user performance increase. This is code simplification
    //$('.navEmphasize').removeClass('navEmphasize');
}

function personalWebsiteStart() {
    handleHomePage();
    handleNavigation();
}

$(personalWebsiteStart)