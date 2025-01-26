import myPortfolio from './data.js';

const portfolioList = document.getElementById("portfolio-list");
let portfolioItem = '';
const truncatetext = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

myPortfolio.forEach(item => {
    const truncatedDescription = truncatetext(item.description, 10);
    const truncatedTitle = truncatetext(item.title, 3);

    portfolioItem += `<div class="card bg-black m-2" style="width: 18rem;" id="${item.id}">
            <img src="${item.image}" class="card-img-top" alt="foto projek">
            <div class="card-body">
              <h5 class="card-title">${truncatedTitle}</h5>
              <p class="card-text">${truncatedDescription}</p>
              <button type="button" class="btn btn-detail" data-bs-toggle="modal" data-bs-target="#modal-${item.id}">
               Details
              </button>

              <!-- Modal -->
            <div class="modal fade" id="modal-${item.id}" tabindex="-1" aria-labelledby="modalLabel-${item.id}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalLabel-${item.id}">${item.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${item.description}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <a href="${item.url}" class="btn btn-link" target="_blank">Go to link</a>
                </div>
                </div>
            </div>
            </div>

            </div>
          </div>`;
});
portfolioList.innerHTML = portfolioItem;

const scrollUp = document.getElementById('scrollup');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        scrollUp.classList.remove("hidden");
        scrollUp.style.display = "block";
    } else {
        scrollUp.classList.add("hidden");
        setTimeout(() => {
            scrollUp.style.display = "none";
        }, 300);
    }
});

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});