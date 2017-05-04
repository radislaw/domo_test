$(document).ready(() => {

  /* Склонение существительных  */
  const pluralize = (n, forms) => {
    return forms[n % 10 == 1 && n % 100 != 11 ?
        0 :
        n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ?
            1 :
            2];
  };

  /* Прелоадер */
  const $cardsContainer = $('#cards_container');

  const hidePreloader = () => {
    $cardsContainer.removeClass('preloader');
  };

  const showPreloader = () => {
    $cardsContainer.addClass('preloader');
  };

  /* Фильтрация, пагинация, сортировка */
  let page  = 1,
      sort  = 'asc',
      order = 'id';
  let html  = '';

  /* Карточка товара */
  const card = (item) => {
    let sale_price = '',
        reviews    = '';
    if (item.sale_price === null) {
      sale_price = '';
    } else
      sale_price = `<div class="card__sale">${item.sale_price} р.</div>`;

    if (item.reviews === null) {
      reviews = 'Нет отзывов';
    } else
      reviews = `Всего <span class="card__review__amount">${item.reviews} ${pluralize(
          item.reviews, ['отзыв', 'отзыва', 'отзывов'])}</span>`;

    return `<div class="card">
                    <img class="card__img" src="${item.image}"
                    alt=${item.title} width="171" height="140">
                    <div class="card__block">
                      <a href="#" class="card__title">${item.title}</a>
                      <div class="card__rating">
                        <div class="card__rating__stars">${item.rating}</div>
                        <a href="#" class="card__review__total">${reviews}</a>
                      </div>
                      <div class="card__deal">
                        <div class="card__prices">
                          ${sale_price}
                          <div class="card__price">${item.price} р.</div>
                        </div>
                        <button type="button" class="card__btn">В корзину</button>
                      </div>
                    </div>
                </div>`;
  };

  /* Формирование html */
  const addHtml = (data, page) => {
    /* Пагинация */
    let per_page    = 8,
        total_page  = Math.ceil(data.length / per_page),
        offset      = ((page - 1) * per_page),
        dataPerPage = data.splice(offset, per_page);

    let paginationHtml = `
          <ul class="pagination">
            <li class="page-item" data-page=${page - 1}>
              <a class="page-link" href="#" aria-label="Предыдущая страница">
                <span aria-hidden="true">&#8592 Предыдущая страница</span> 
                <span class="sr-only">Предыдущая страница</span>
              </a>
            </li>`;
    for (let i = 1; i <= total_page; i++) {
      let activeClass = 'page-item';
      if (i === page) {
        activeClass = 'page-item active';
      }
      paginationHtml += `
            <li class="${activeClass}" data-page=${i}>
              <a class="page-link" href="#">${i}</a>
            </li>`;
    }
    paginationHtml += `
            <li class="page-item" data-page=${+page + 1}>
              <a class="page-link" href="#" aria-label="Следующая страница">
                <span aria-hidden="true">Следующая страница &#8594</span>
                <span class="sr-only">Следующая страница</span>
              </a>
            </li>
          </ul>`;
    if (total_page < 2) {
      paginationHtml = '';
    }
    $('#pagination').html(paginationHtml);

    const $pageItem = $('.page-item');

    if ($pageItem.last().data('page') > total_page) {
      $pageItem.last().find('.page-link').hide();
    }

    $pageItem.click(function() {
      let page = $(this).data('page');
      loadData({page, sort}, page);
      $(this).addClass('active');
    });

    /* Каталог */
    let firstPart  = [];
    let secondPart = [];

    html = '<div class="card_deck">';

    dataPerPage.forEach(item => html += card(item));

    html += '</div>';

    if (dataPerPage.length > 4) {
      let firstPartLength = Math.ceil(dataPerPage.length / 2);
      if (dataPerPage.length > 7) {
        firstPartLength -= 1;
      }
      for (let i = 0; i <= firstPartLength; i++) {
        firstPart.push(dataPerPage[i]);
      }
      for (let i = 4; i < dataPerPage.length; i++) {
        secondPart.push(dataPerPage[i]);
      }
      html = '<div class="card_deck">';

      firstPart.forEach(item => html += card(item));

      html += '</div><div class="card_deck">';

      secondPart.forEach(item => html += card(item));

      html += '</div>';
    }
  };

  /* Загрузка данных с сервера и подстановка данных */
  const loadData = (postData, page = 1) => {
    $cardsContainer.empty();
    showPreloader();
    $.ajax({
      url: 'catalog.php',
      data: postData,
      dataType: 'json',
      cache: false,
      success(data) {

        /* html */
        addHtml(data, page);

        $('.page-link').click(function(e) {
          e.preventDefault();
        });

        $cardsContainer.html(html);

        /* Звезды рейтинка */
        const $ratingStar = $('.card__rating__stars');
        $ratingStar.each((i, e) => {

          let rating = $(e).text();

          if (rating === 0) {
            rating = 0;
          }

          $(e).rateYo({
            rating: rating,
            starWidth: '10px',
            normalFill: '#e4e4e4',
            ratedFill: '#f6c000',
            readOnly: true,
            spacing: '4px',
            starSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="4915.386 4934.4 23.598 22.662">
				            <defs> <style> .cls-1 {
                                stroke: #96999b;
                                margin-right:2px;
f			                    }
                                </style>
                                </defs>
                                <path id="path-3" class="cls-1" d="M12.686,1.138l2.477,5.428a.99.99,0,0,0,.843.58l5.955.685a1.06,1.06,0,0,1,.58,1.844l-4.374,4.111a1.165,1.165,0,0,0-.316,1l1.159,5.9A1.025,1.025,0,0,1,17.482,21.8l-5.217-2.951a1.229,1.229,0,0,0-1.054,0L5.993,21.8A1.038,1.038,0,0,1,4.465,20.69l1.159-5.9a1.165,1.165,0,0,0-.316-1L.882,9.728a1.06,1.06,0,0,1,.58-1.844L7.416,7.2a1.1,1.1,0,0,0,.843-.58l2.53-5.428A1.016,1.016,0,0,1,12.686,1.138Z" transform="translate(4915.473 4934.488)"/>
				            </svg>`,

          });
        });

        hidePreloader();
      },
    });
  };

  /* Фильтрация */
  const filterData = () => {
    let brand1  = '',
        brand2  = '',
        brand3  = '',
        yes_ssd = '',
        no_ssd  = '';

    const asus = $('input[name="brand1"]'),
          acer = $('input[name="brand2"]'),
          hp   = $('input[name="brand3"]'),
          yes  = $('input[value="yes"]'),
          no   = $('input[value="no"]');

    if (asus.is(':checked')) {
      brand1 = asus.val();
    }

    if (acer.is(':checked')) {
      brand2 = acer.val();
    }

    if (hp.is(':checked')) {
      brand3 = hp.val();
    }

    if (yes.is(':checked')) {
      yes_ssd = yes.val();
    }

    if (no.is(':checked')) {
      no_ssd = no.val();
    }

    loadData({
      brand1,
      brand2,
      brand3,
      yes_ssd,
      no_ssd,
    });
  };

  /* События */
    /* Загрузка страницы */
  loadData({page, sort});

    /* Фильтрация */
  $('input[type=\'checkbox\']').on('click', filterData);
  $('input[type=\'radio\']').on('click', filterData);

  /* Сортировка */
  const $sort     = $('.sorting__label');
  const $sortIcon = $sort.find('span');
  sort            = 'desc';
  $sort.click(() => {
    order = 'price';
    sort  = (sort === 'desc') ? 'asc' : 'desc';
    loadData({page, sort, order});
    $sortIcon.toggleClass('flipY');
  });

});
