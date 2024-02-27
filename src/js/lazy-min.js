const headerSection=document.getElementById("header");function isElementVisible(e){const i=e.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth,t=i.top<=s&&i.top+i.height>=0,c=i.left<=n&&i.left+i.width>=0;return t&&c}function loadSection(){isElementVisible(headerSection)&&(image_01='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-02-book.webp">\n        \x3c!-- <source media="(min-width: 768px)" srcset="./src/images/tablet/section-02-book.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-02-book.webp"> --\x3e\n        <img loading="lazy" src="./src/images/desktop/section-02-book.webp" alt="Capa e página do livro S.O.S Biomagnetico">\n      </picture>\n    ',image_02='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-02-woman.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-02-woman.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-02-woman.webp">\n        <img loading="lazy" src="./src/images/desktop/section-02-woman.webp" alt="Mulher com dor aplicando os imãs">\n      </picture>\n    ',image_03='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-01.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-01.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-01.webp">\n        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-01.webp" alt="Impotência sexual">\n      </picture>\n    ',image_04='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-02.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-02.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-02.webp">\n        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-02.webp" alt="Resfriado/Gripe">\n      </picture>\n    ',image_05='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-03.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-03.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-03.webp">\n        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-03.webp" alt="Dores">\n      </picture>\n    ',image_06='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-04.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-04.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-04.webp">\n        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-04.webp" alt="Depressão">\n      </picture>\n    ',image_07='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-05.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-05.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-05.webp">\n        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-05.webp" alt="Obesidade">\n      </picture>\n    ',image_08='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-06.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-06.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-06.webp">\n        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-06.webp" alt="Asma">\n      </picture>\n    ',image_09='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-07.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-07.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-07.webp">\n        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-07.webp" alt="Aumento de energia">\n      </picture>\n    ',image_10='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-unsplash-08.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/desktop/section-03-unsplash-08.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-unsplash-08.webp">\n        <img loading="lazy" src="./src/images/desktop/section-03-unsplash-08.webp" alt="Medo">\n      </picture>\n    ',image_11='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-03-natural.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-03-natural.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-03-natural.webp">\n        <img loading="lazy" src="./src/images/desktop/section-03-natural.webp" alt="100% natural e indolor">\n      </picture>\n    ',image_12='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-anatomy.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-anatomy.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-anatomy.webp">\n        <img loading="lazy" src="./src/images/desktop/section-04-anatomy.webp" alt="Boneco de anatomia">\n      </picture>\n    ',image_13='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-bio+magnets.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-bio+magnets.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-bio+magnets.webp">\n        <img loading="lazy" src="./src/images/desktop/section-04-bio+magnets.webp" alt="Boneco + imãs">\n      </picture>\n    ',image_14='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-claudia.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-claudia.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-claudia.webp">\n        <img loading="lazy" src="./src/images/desktop/section-04-claudia.webp" alt="Claudia Molla">\n      </picture>\n    ',image_15='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-bio.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-bio.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-bio.webp">\n        <img loading="lazy" src="./src/images/desktop/section-04-bio.webp" alt="Boneco com pontos biomagneticos">\n      </picture>\n    ',image_16='\n      <picture>\n        <img loading="lazy" src="./src/images/desktop/section-04-curved-bg.webp" alt="Background curvado">\n      </picture>\n    ',image_17='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-unsplash-01.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-unsplash-01.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-unsplash-01.webp">\n        <img loading="lazy" src="./src/images/desktop/section-04-unsplash-01.webp" alt="Pessoas">\n      </picture>\n    ',image_18='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-unsplash-02.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-unsplash-02.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-unsplash-02.webp">\n        <img loading="lazy" src="./src/images/desktop/section-04-unsplash-02.webp" alt="Planta">\n      </picture>\n    ',image_19='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-book.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-book.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-book.webp">\n        <img loading="lazy" src="./src/images/desktop/section-04-book.webp" alt="Mãos segurando o livro S.O.S Biomagnetico">\n      </picture>\n    ',image_20='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-unsplash-03.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-unsplash-03.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-unsplash-03.webp">\n        <img loading="lazy" src="./src/images/desktop/section-04-unsplash-03.webp" alt="Cientista">\n      </picture>\n    ',image_21='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-04-unsplash-04.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-04-unsplash-04.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-04-unsplash-04.webp">\n        <img loading="lazy" src="./src/images/desktop/section-04-unsplash-04.webp" alt="Machucado">\n      </picture>\n    ',image_22='\n      <picture>\n        <img loading="lazy" src="./src/images/desktop/section-05-arrow.webp" alt="Vetor">\n      </picture>\n    ',image_23='\n      <picture>\n        <img loading="lazy" src="./src/images/desktop/section-05-arrow.webp" alt="Vetor">\n      </picture>\n    ',image_24='\n      <picture>\n        <img loading="lazy" src="./src/images/desktop/section-05-arrow.webp" alt="Vetor">\n      </picture>\n    ',image_25='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-05-book.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-05-book.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-05-book.webp">\n        <img loading="lazy" src="./src/images/desktop/section-05-book.webp" alt="Livro S.O.S Biomagnetico aberto">\n      </picture>\n    ',image_26='\n      <picture>\n        <img loading="lazy" src="./src/images/desktop/section-05-arrow.webp" alt="Vecor">\n      </picture>\n    ',image_29='\n      <picture>\n        <img loading="lazy" src="./src/images/desktop/section-06-arrow.webp" alt="Vetor">\n      </picture>\n    ',image_31='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-06-magnets.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-06-magnets.webp">\n        <img loading="lazy" src="./src/images/desktop/section-06-magnets.webp" alt="Dois imãs de brinde">\n      </picture>\n    ',image_34='\n      <picture>\n        <img loading="lazy" src="./src/images/desktop/section-07-bg.webp" alt="Background de imãs">\n      </picture>\n    ',image_35='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-01.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-01.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-01.webp">\n        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-01.webp" alt="Dores">\n      </picture>\n    ',image_36='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-02.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-02.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-02.webp">\n        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-02.webp" alt="Problemas físicos">\n      </picture>\n    ',image_37='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-03.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-03.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-03.webp">\n        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-03.webp" alt="Vírus">\n      </picture>\n    ',image_38='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-04.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-04.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-04.webp">\n        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-04.webp" alt="Fungos">\n      </picture>\n    ',image_39='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-05.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-05.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-05.webp">\n        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-05.webp" alt="Bactérias">\n      </picture>\n    ',image_40='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-06.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-06.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-06.webp">\n        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-06.webp" alt="Doenças">\n      </picture>\n    ',image_41='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-07-unsplash-07.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-07-unsplash-07.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-07-unsplash-07.webp">\n        <img loading="lazy" src="./src/images/desktop/section-07-unsplash-07.webp" alt="Problemas emocionais">\n      </picture>\n    ',image_42='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-08-book.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-08-book.webp">\n        <img loading="lazy" src="./src/images/desktop/section-08-book.webp" alt="Livro S.O.S Biomagnetico + Imãs">\n      </picture>\n    ',image_43='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-09-cells-close.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-09-cells-close.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-09-cells-close.webp">\n        <img loading="lazy" src="./src/images/desktop/section-09-cells-close.webp" alt="Celulas">\n      </picture>\n    ',image_44='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-09-cells-open.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-09-cells-open.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-09-cells-open.webp">\n        <img loading="lazy" src="./src/images/desktop/section-09-cells-open.webp" alt="Celulas">\n      </picture>\n    ',image_45='\n      <picture>\n        <img loading="lazy" src="./src/images/desktop/section-11-claudia.webp" alt="Claudia Molla">\n      </picture>\n    ',image_46='\n      <picture>\n        <img loading="lazy" src="./src/images/desktop/section-13-claudia.webp" alt="Claudia Molla">\n      </picture>\n    ',image_47='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-01.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-01.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-01.webp">\n        <img loading="lazy" src="./src/images/desktop/section-12-profile-01.webp" alt="Marta Malheiros - 58 anos.">\n      </picture>\n    ',image_48='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-02.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-02.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-02.webp">\n        <img loading="lazy" src="./src/images/desktop/section-12-profile-02.webp" alt="Carla Agostino dos Santos - 48 anos">\n      </picture>\n    ',image_49='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-03.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-03.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-03.webp">\n        <img loading="lazy" src="./src/images/desktop/section-12-profile-03.webp" alt="Paula Amorios - 61 anos">\n      </picture>\n    ',image_50='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-04.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-04.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-04.webp">\n        <img loading="lazy" src="./src/images/desktop/section-12-profile-04.webp" alt="Clarice Almeida - 35 anos">\n      </picture>\n    ',image_51='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-05.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-05.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-05.webp">\n        <img loading="lazy" src="./src/images/desktop/section-12-profile-05.webp" alt="Rogerio Albano Souza - 49 anos">\n      </picture>\n    ',image_52='\n      <picture>\n        <source media="(min-width: 1200px)" srcset="./src/images/desktop/section-12-profile-06.webp">\n        <source media="(min-width: 768px)" srcset="./src/images/tablet/section-12-profile-06.webp">\n        <source media="(min-width: 320px)" srcset="./src/images/mobile/section-12-profile-06.webp">\n        <img loading="lazy" src="./src/images/desktop/section-12-profile-06.webp" alt="Ricardo Miguel Ojeda - 43 anos">\n      </picture>\n    ',video='\n      <iframe src="https://www.youtube.com/embed/_BYsSHML8B4" title="Comprovação Científica" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>\n    '),document.getElementById("image-01").innerHTML=image_01,document.getElementById("image-02").innerHTML=image_02,document.getElementById("image-03").innerHTML=image_03,document.getElementById("image-04").innerHTML=image_04,document.getElementById("image-05").innerHTML=image_05,document.getElementById("image-06").innerHTML=image_06,document.getElementById("image-07").innerHTML=image_07,document.getElementById("image-08").innerHTML=image_08,document.getElementById("image-09").innerHTML=image_09,document.getElementById("image-10").innerHTML=image_10,document.getElementById("image-11").innerHTML=image_11,document.getElementById("image-12").innerHTML=image_12,document.getElementById("image-13").innerHTML=image_13,document.getElementById("image-14").innerHTML=image_14,document.getElementById("image-15").innerHTML=image_15,document.getElementById("image-16").innerHTML=image_16,document.getElementById("image-17").innerHTML=image_17,document.getElementById("image-18").innerHTML=image_18,document.getElementById("image-19").innerHTML=image_19,document.getElementById("image-20").innerHTML=image_20,document.getElementById("image-21").innerHTML=image_21,document.getElementById("image-22").innerHTML=image_22,document.getElementById("image-23").innerHTML=image_23,document.getElementById("image-24").innerHTML=image_24,document.getElementById("image-25").innerHTML=image_25,document.getElementById("image-26").innerHTML=image_26,document.getElementById("image-27").innerHTML=image_26,document.getElementById("image-28").innerHTML=image_26,document.getElementById("image-29").innerHTML=image_29,document.getElementById("image-30").innerHTML=image_29,document.getElementById("image-31").innerHTML=image_31,document.getElementById("image-32").innerHTML=image_29,document.getElementById("image-33").innerHTML=image_29,document.getElementById("image-34").innerHTML=image_34,document.getElementById("image-35").innerHTML=image_35,document.getElementById("image-36").innerHTML=image_36,document.getElementById("image-37").innerHTML=image_37,document.getElementById("image-38").innerHTML=image_38,document.getElementById("image-39").innerHTML=image_39,document.getElementById("image-40").innerHTML=image_40,document.getElementById("image-41").innerHTML=image_41,document.getElementById("image-42").innerHTML=image_42,document.getElementById("image-43").innerHTML=image_43,document.getElementById("image-44").innerHTML=image_44,document.getElementById("image-45").innerHTML=image_45,document.getElementById("image-46").innerHTML=image_46,document.getElementById("image-47").innerHTML=image_47,document.getElementById("image-48").innerHTML=image_48,document.getElementById("image-49").innerHTML=image_49,document.getElementById("image-50").innerHTML=image_50,document.getElementById("image-51").innerHTML=image_51,document.getElementById("image-52").innerHTML=image_52,document.getElementById("iframe").innerHTML=video,window.removeEventListener("scroll",loadSection)}window.addEventListener("scroll",loadSection);