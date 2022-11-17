const popupSection = document.querySelector('.popup-section')
const popup = document.querySelectorAll('.popup')

const boxes = document.querySelectorAll('.box')

boxes.forEach((box, index) => {
    const popupHeading = document.querySelector('.popup-heading')
    const popupParagraph = document.querySelector('.popup-paragraph')

    box.addEventListener('click', () => {
        popupSection.style.display = "flex"
        if(index == 0) {
            popup[0].style.display = "flex"
            popupHeading.innerHTML = "Co to jest hosting?"
            popupParagraph.innerHTML = "Mianem hostingu określamy zarówno czynność serwera polegającą na udostępnieniu użytkownikowi określonej przestrzeni z pomocą której, jego zasoby (te które chce aby były dostępne dla innych) są hostowane, czyli udostępniane w sieci Internet. Hostingiem nazywamy także usługę/produkt, np. Hosting internetowy z oferty home.pl, a więc określoną część serwera, przeznaczoną do konfiguracji i kontroli przez jednego użytkownika. <br> Użytkownik dysponujący usługą hostingu, może kontrolować co jest widoczne w sieci Internet, a co pozostaje jego prywatnym zasobem, dostępnym w sieci, ale niewidocznym dla innych użytkowników. Analogicznie konfiguracja hostingu zamyka się w jego obrębie i nie ma wpływu na działanie usług innych użytkowników serwera (oraz jego wydzielonych dla nich zasobów, tj. hostingów)."
        }
        else if(index == 1) {
            popup[0].style.display = "flex"
            popupHeading.innerHTML = "Przekroczenie limitu transferu"
            popupParagraph.innerHTML = "Gdy limit transferu przekroczy wyznaczoną wartość, strona zostaje zablokowana do czasu odnowienia transferu. Okres rozliczeniowy transferu przypada zwykle raz na miesiąc lub rok."
        }
        else {
            popup[1].style.display = "flex"
        }
    })
})


const closeButton = document.querySelectorAll('.close-button')

closeButton.forEach((button) => {
    button.addEventListener('click', () => {
        popupSection.style.display = "none"
        popup.forEach((popup) => {
            popup.style.display = "none"
        })
    })
})