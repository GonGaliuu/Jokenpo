const abrirModal = document.getElementById('abrir_modal');
abrirModal.addEventListener('click', ()=>{
    const modal = document.createElement('div');
    const modalTitle = document.createElement('div');
    const modalTitleTitulo = document.createElement('div');
    const modalTitleParagrafo = document.createElement('p');
    const modalTitleImagem = document.createElement('img');
    const modalImagem = document.createElement('div');
    const modalImagemImagem = document.createElement('img');
    modalTitleParagrafo.textContent = 'RULES';
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
})

const fecharModal = document.getElementById('close-modal');
fecharModal.addEventListener('click', ()=>{
    alert('Sim')
})