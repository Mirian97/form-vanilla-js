const select = document.querySelector("#genero-musical")
const inputMusica = document.querySelector("input");
const generosMusicais = {
    pop: ["Easy on me - Adele", "As it was - Harry Styles", "I ain't Worried - OneRepublic", "Levitating - Dua Lipa"],
    rock: ["Back In Black — AC/DC", "Livin' on a Prayer - Bon Jovi", "Rock And roll all nite - Kiss", "We will rock you - Queen"],
    sertanejo: ["Evidências - Chitãozinho & Xororó", "Morena - Luan Santana", "Ela é demais - Rick e Renner", "Foi pá pum - Simone e Simaria"],
}

select.addEventListener("change", () => {
    const aleatorio = Math.floor(Math.random() * generosMusicais.pop.length);
    const genero = select.value;
    inputMusica.value = generosMusicais[genero][aleatorio];
})
