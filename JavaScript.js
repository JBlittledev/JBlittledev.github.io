function showPage(pageId) {

    document.querySelectorAll('.container').forEach(function (page) {
        page.classList.add('hidden');
    });

    document.getElementById(pageId).classList.remove('hidden');
}

function openForm() {
    document.getElementById('formPopup').style.display = 'flex';
}

function closeForm() {
    document.getElementById('formPopup').style.display = 'none';
}

document.getElementById('openFormButton').addEventListener('click', openForm);

