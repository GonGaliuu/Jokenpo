const abrirModal = document.getElementById('abrir_modal');
abrirModal.addEventListener('click', ()=>{
    var modal = document.createElement('div');
    var modalTitle = document.createElement('div');
    var modalTitleTitulo = document.createElement('div');
    var modalTitleParagrafo = document.createElement('p');
    var modalTitleImagem = document.createElement('img');
    var modalImagem = document.createElement('div');
    var modalImagemImagem = document.createElement('img');
    modalTitleParagrafo.textContent = 'REGRAS!';
    modalTitleImagem.src = 'assets/img/icon-close.svg';
    modalTitleImagem.id = 'close-modal';
    modalImagemImagem.src = 'assets/img/image-rules.svg';
    modal.className = 'modal';
    modalTitle.className = 'modal-title';
    modalTitleTitulo.className = 'modal-title__titulo';
    modalTitleParagrafo.className = 'modal-title__paragrafo';
    modalTitleImagem.className = 'modal-title__imagem';
    modalImagem.className = 'modal__imagem';
    modalImagemImagem.className = 'modal__imagem--imagem';
    document.body.appendChild(modal);
    modal.appendChild(modalTitle);
    modalTitle.appendChild(modalTitleTitulo);
    modalTitle.appendChild(modalImagem);
    modalTitleTitulo.appendChild(modalTitleParagrafo);
    modalTitleTitulo.appendChild(modalTitleImagem);
    modalImagem.appendChild(modalImagemImagem);
    const fecharModal = document.getElementById('close-modal');
    fecharModal.addEventListener('click', ()=>{
        document.body.removeChild(modal);
        modal.removeChild(modalTitle);
        modalTitle.removeChild(modalTitleTitulo);
        modalTitle.removeChild(modalImagem);
        modalTitleTitulo.removeChild(modalTitleParagrafo);
        modalTitleTitulo.removeChild(modalTitleImagem);
        modalImagem.removeChild(modalImagemImagem);
    })
})