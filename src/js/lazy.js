// selecione o elemento que deseja carregar
const headerSection = document.getElementById('header');

// função que verifica se o elemento está visível na tela
function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  return (vertInView && horInView);
}

// função que carrega a seção quando o usuário chegar nela
function loadSection() {
  if (isElementVisible(headerSection)) {
    image_01 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-02-book.webp">
        <!-- <source media="(min-width: 768px)" srcset="./src/images/tablet/section-02-book.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-02-book.webp"> -->
        <img loading="lazy" src="./src/images/desktop/section-02-book.webp" alt="Capa e página do livro S.O.S Biomagnetico">
      </picture>
    `;

    image_02 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-02-woman.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-02-woman.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-02-woman.webp">
        <img loading="lazy" src="./src/images/desktop/section-02-woman.webp" alt="Mulher com dor aplicando os imãs">
      </picture>
    `;

    image_03 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-01.webp">
        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-01.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-01.webp">
        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-01.webp" alt="Impotência sexual">
      </picture>
    `;

    image_04 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-02.webp">
        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-02.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-02.webp">
        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-02.webp" alt="Resfriado/Gripe">
      </picture>
    `;

    image_05 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-03.webp">
        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-03.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-03.webp">
        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-03.webp" alt="Dores">
      </picture>
    `;

    image_06 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-04.webp">
        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-04.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-04.webp">
        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-04.webp" alt="Depressão">
      </picture>
    `;

    image_07 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-05.webp">
        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-05.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-05.webp">
        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-05.webp" alt="Obesidade">
      </picture>
    `;

    image_08 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-06.webp">
        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-06.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-06.webp">
        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-06.webp" alt="Asma">
      </picture>
    `;

    image_09 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-07.webp">
        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-07.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-07.webp">
        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-07.webp" alt="Aumento de energia">
      </picture>
    `;

    image_10 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-08.webp">
        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-08.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-08.webp">
        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-08.webp" alt="Medo">
      </picture>
    `;

    image_11 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-natural.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-03-natural.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-natural.webp">
        <img loading="lazy" src="./src/images/desktop/section-03-natural.webp" alt="100% natural e indolor">
      </picture>
    `;

    image_12 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-anatomy.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-anatomy.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-anatomy.webp">
        <img loading="lazy" src="./src/images/desktop/section-04-anatomy.webp" alt="Boneco de anatomia">
      </picture>
    `;

    image_13 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-bio+magnets.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-bio+magnets.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-bio+magnets.webp">
        <img loading="lazy" src="./src/images/desktop/section-04-bio+magnets.webp" alt="Boneco + imãs">
      </picture>
    `;

    image_14 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-claudia.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-claudia.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-claudia.webp">
        <img loading="lazy" src="./src/images/desktop/section-04-claudia.webp" alt="Claudia Molla">
      </picture>
    `;

    image_15 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-bio.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-bio.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-bio.webp">
        <img loading="lazy" src="./src/images/desktop/section-04-bio.webp" alt="Boneco com pontos biomagneticos">
      </picture>
    `;

    image_16 = `
      <picture>
        <img loading="lazy" src="./src/images/desktop/section-04-curved-bg.webp" alt="Background curvado">
      </picture>
    `;

    image_17 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-unsplash-01.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-unsplash-01.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-unsplash-01.webp">
        <img loading="lazy" src="./src/images/desktop/section-04-unsplash-01.webp" alt="Pessoas">
      </picture>
    `;

    image_18 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-unsplash-02.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-unsplash-02.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-unsplash-02.webp">
        <img loading="lazy" src="./src/images/desktop/section-04-unsplash-02.webp" alt="Planta">
      </picture>
    `;

    image_19 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-book.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-book.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-book.webp">
        <img loading="lazy" src="./src/images/desktop/section-04-book.webp" alt="Mãos segurando o livro S.O.S Biomagnetico">
      </picture>
    `;

    image_20 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-unsplash-03.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-unsplash-03.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-unsplash-03.webp">
        <img loading="lazy" src="./src/images/desktop/section-04-unsplash-03.webp" alt="Cientista">
      </picture>
    `;

    image_21 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-unsplash-04.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-unsplash-04.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-unsplash-04.webp">
        <img loading="lazy" src="./src/images/desktop/section-04-unsplash-04.webp" alt="Machucado">
      </picture>
    `;

    image_22 = `
      <picture>
        <img loading="lazy" src="./src/images/desktop/section-05-arrow.webp" alt="Vetor">
      </picture>
    `;

    image_23 = `
      <picture>
        <img loading="lazy" src="./src/images/desktop/section-05-arrow.webp" alt="Vetor">
      </picture>
    `;

    image_24 = `
      <picture>
        <img loading="lazy" src="./src/images/desktop/section-05-arrow.webp" alt="Vetor">
      </picture>
    `;

    image_25 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-05-book.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-05-book.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-05-book.webp">
        <img loading="lazy" src="./src/images/desktop/section-05-book.webp" alt="Livro S.O.S Biomagnetico aberto">
      </picture>
    `;

    image_26 = `
      <picture>
        <img loading="lazy" src="./src/images/desktop/section-05-arrow.webp" alt="Vecor">
      </picture>
    `;

    image_29 = `
      <picture>
        <img loading="lazy" src="./src/images/desktop/section-06-arrow.webp" alt="Vetor">
      </picture>
    `;

    image_31 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-06-magnets.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-06-magnets.webp">
        <img loading="lazy" src="./src/images/desktop/section-06-magnets.webp" alt="Dois imãs de brinde">
      </picture>
    `;

    image_34 = `
      <picture>
        <img loading="lazy" src="./src/images/desktop/section-07-bg.webp" alt="Background de imãs">
      </picture>
    `;

    image_35 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-01.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-01.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-01.webp">
        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-01.webp" alt="Dores">
      </picture>
    `;

    image_36 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-02.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-02.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-02.webp">
        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-02.webp" alt="Problemas físicos">
      </picture>
    `;

    image_37 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-03.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-03.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-03.webp">
        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-03.webp" alt="Vírus">
      </picture>
    `;

    image_38 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-04.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-04.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-04.webp">
        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-04.webp" alt="Fungos">
      </picture>
    `;

    image_39 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-05.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-05.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-05.webp">
        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-05.webp" alt="Bactérias">
      </picture>
    `;

    image_40 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-06.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-06.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-06.webp">
        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-06.webp" alt="Doenças">
      </picture>
    `;

    image_41 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-07.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-07.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-07.webp">
        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-07.webp" alt="Problemas emocionais">
      </picture>
    `;

    image_42 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-08-book.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-08-book.webp">
        <img loading="lazy" src="./src/images/desktop/section-08-book.webp" alt="Livro S.O.S Biomagnetico + Imãs">
      </picture>
    `;

    image_43 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-09-cells-close.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-09-cells-close.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-09-cells-close.webp">
        <img loading="lazy" src="./src/images/desktop/section-09-cells-close.webp" alt="Celulas">
      </picture>
    `;

    image_44 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-09-cells-open.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-09-cells-open.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-09-cells-open.webp">
        <img loading="lazy" src="./src/images/desktop/section-09-cells-open.webp" alt="Celulas">
      </picture>
    `;

    image_45 = `
      <picture>
        <img loading="lazy" src="./src/images/desktop/section-11-claudia.webp" alt="Claudia Molla">
      </picture>
    `;

    image_46 = `
      <picture>
        <img loading="lazy" src="./src/images/desktop/section-13-claudia.webp" alt="Claudia Molla">
      </picture>
    `;

    image_47 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-01.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-01.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-01.webp">
        <img loading="lazy" src="./src/images/desktop/section-12-profile-01.webp" alt="Marta Malheiros - 58 anos.">
      </picture>
    `;

    image_48 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-02.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-02.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-02.webp">
        <img loading="lazy" src="./src/images/desktop/section-12-profile-02.webp" alt="Carla Agostino dos Santos - 48 anos">
      </picture>
    `;

    image_49 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-03.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-03.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-03.webp">
        <img loading="lazy" src="./src/images/desktop/section-12-profile-03.webp" alt="Paula Amorios - 61 anos">
      </picture>
    `;

    image_50 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-04.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-04.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-04.webp">
        <img loading="lazy" src="./src/images/desktop/section-12-profile-04.webp" alt="Clarice Almeida - 35 anos">
      </picture>
    `;

    image_51 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-05.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-05.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-05.webp">
        <img loading="lazy" src="./src/images/desktop/section-12-profile-05.webp" alt="Rogerio Albano Souza - 49 anos">
      </picture>
    `;

    image_52 = `
      <picture>
        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-06.webp">
        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-06.webp">
        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-06.webp">
        <img loading="lazy" src="./src/images/desktop/section-12-profile-06.webp" alt="Ricardo Miguel Ojeda - 43 anos">
      </picture>
    `;

    video = `
      <iframe src="https://www.youtube.com/embed/_BYsSHML8B4" title="Comprovação Científica" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
    `;
  };
    

  document.getElementById('image-01').innerHTML = image_01;  
  document.getElementById('image-02').innerHTML = image_02;  
  document.getElementById('image-03').innerHTML = image_03;  
  document.getElementById('image-04').innerHTML = image_04;  
  document.getElementById('image-05').innerHTML = image_05;  
  document.getElementById('image-06').innerHTML = image_06;  
  document.getElementById('image-07').innerHTML = image_07;  
  document.getElementById('image-08').innerHTML = image_08;  
  document.getElementById('image-09').innerHTML = image_09;  
  document.getElementById('image-10').innerHTML = image_10;  
  document.getElementById('image-11').innerHTML = image_11;  
  document.getElementById('image-12').innerHTML = image_12;  
  document.getElementById('image-13').innerHTML = image_13;  
  document.getElementById('image-14').innerHTML = image_14;  
  document.getElementById('image-15').innerHTML = image_15;  
  document.getElementById('image-16').innerHTML = image_16;  
  document.getElementById('image-17').innerHTML = image_17;  
  document.getElementById('image-18').innerHTML = image_18;  
  document.getElementById('image-19').innerHTML = image_19;  
  document.getElementById('image-20').innerHTML = image_20;  
  document.getElementById('image-21').innerHTML = image_21;  
  document.getElementById('image-22').innerHTML = image_22;  
  document.getElementById('image-23').innerHTML = image_23;  
  document.getElementById('image-24').innerHTML = image_24;  
  document.getElementById('image-25').innerHTML = image_25;  
  document.getElementById('image-26').innerHTML = image_26;  
  document.getElementById('image-27').innerHTML = image_26;  
  document.getElementById('image-28').innerHTML = image_26;  
  document.getElementById('image-29').innerHTML = image_29;  
  document.getElementById('image-30').innerHTML = image_29;  
  document.getElementById('image-31').innerHTML = image_31;  
  document.getElementById('image-32').innerHTML = image_29;  
  document.getElementById('image-33').innerHTML = image_29;  
  document.getElementById('image-34').innerHTML = image_34;  
  document.getElementById('image-35').innerHTML = image_35;  
  document.getElementById('image-36').innerHTML = image_36;  
  document.getElementById('image-37').innerHTML = image_37;  
  document.getElementById('image-38').innerHTML = image_38;  
  document.getElementById('image-39').innerHTML = image_39;  
  document.getElementById('image-40').innerHTML = image_40;  
  document.getElementById('image-41').innerHTML = image_41;  
  document.getElementById('image-42').innerHTML = image_42;  
  document.getElementById('image-43').innerHTML = image_43;  
  document.getElementById('image-44').innerHTML = image_44;  
  document.getElementById('image-45').innerHTML = image_45;  
  document.getElementById('image-46').innerHTML = image_46;  
  document.getElementById('image-47').innerHTML = image_47;  
  document.getElementById('image-48').innerHTML = image_48;  
  document.getElementById('image-49').innerHTML = image_49;  
  document.getElementById('image-50').innerHTML = image_50;  
  document.getElementById('image-51').innerHTML = image_51;  
  document.getElementById('image-52').innerHTML = image_52;  
  document.getElementById('iframe').innerHTML = video;  

  window.removeEventListener('scroll', loadSection);
}
  
// adicione um evento de scroll no objeto window para chamar a função de carga da seção
window.addEventListener('scroll', loadSection);