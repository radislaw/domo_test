$(document).ready(() => {
  /* Фильтрация, пагинация, сортировка */

  let page = 1,
      sort = 'asc';

  const loadData = (postData) => {
    $.ajax({
      url: 'catalog.php',
      data: postData,
      dataType: 'json',
      success: function(data) {
        let html = '<div class="card-deck">';

        let firstPart  = [];
        let secondPart = [];

        if (data.length > 4) {
          for (let i = 0; i < data.length / 2; i++) {
            firstPart.push(data[i]);
          }
          for (let i = 4; i < data.length; i++) {
            secondPart.push(data[i]);
          }
        }

        console.log(data.length);
        console.log(firstPart);
        console.log(secondPart);

        firstPart.forEach(item => {
          html += `
                <div class="card">
                  <img class="card__img" src="${item.image}" alt=${item.title}>
                  <div class="card__block">
                    <a href="#" class="card__title">${item.title}</a>
                    <div class="card__rating">
                      <div class="card__rating__stars">${item.rating}</div>
                      <a href="#" class="card__review__total">Всего
                        <span class="card__review__amount">${item.reviews} отзыв</span>
                      </a>
                    </div>
                    <div class="card__deal">
                      <div class="card__prices">
                        <div class="card__sale">${item.sale_price} р.</div>
                        <div class="card__price">${item.price} р.</div>
                      </div>
                      <button type="button" class="card__btn">В корзину</button>
                    </div>
                  </div>
                </div>`;
        });

        html += '</div><div class="card-deck">';

        secondPart.forEach(item => {
          // html += `<ul>
          //           <li>id: ${item.id}</li>
          //           <li>Brand: ${item.brand}</li>
          //           <li>Title: ${item.title}</li>
          //           <li>Image: ${item.image}</li>
          //           <li>Rating: ${item.rating}</li>
          //           <li>Reviews: ${item.reviews}</li>
          //           <li>Has SSD: ${item.has_ssd}</li>
          //           <li>Price: ${item.price}</li>
          //           <li>Sale Price: ${item.sale_price}</li>
          //        // </ul>`;
          html += `
                <div class="card">
                  <img class="card__img" src="${item.image}" alt=${item.title}>
                  <div class="card__block">
                    <a href="#" class="card__title">${item.title}</a>
                    <div class="card__rating">
                      <div class="card__rating__stars">${item.rating}</div>
                      <a href="#" class="card__review__total">Всего
                        <span class="card__review__amount">${item.reviews} отзыв</span>
                      </a>
                    </div>
                    <div class="card__deal">
                      <div class="card__prices">
                        <div class="card__sale">${item.sale_price} р.</div>
                        <div class="card__price">${item.price} р.</div>
                      </div>
                      <button type="button" class="card__btn">В корзину</button>
                    </div>
                  </div>
                </div>`;
        });

        html += '</div>';
        
        $('#content').html(html);

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
      },
    });
  };

  const showValues = () => {
    let brand1 = '',
        brand2 = '',
        brand3 = '';

    const asus = $('input[name="brand1"]'),
          acer = $('input[name="brand2"]'),
          hp   = $('input[name="brand3"]');

    if (asus.is(':checked')) {
      brand1 = asus.val();
    }

    if (acer.is(':checked')) {
      brand2 = acer.val();
    }

    if (hp.is(':checked')) {
      brand3 = hp.val();
    }

    loadData({
      brand1,
      brand2,
      brand3,
    });
  };

  loadData({page, sort});

  $('input[type=\'checkbox\']').on('click', showValues);

// Remove checked when checkbox is checked
  $('.checkboxes').click(() => {
    $(this).removeAttr('checked');
    showValues();
  });
  
  /**/
  const $sort     = $('.sorting__label');
  const $sortIcon = $sort.find('span');
  $sort.click(() => {
    $sortIcon.toggleClass('flipY');
  });
});
