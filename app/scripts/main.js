$( document ).ready(function() {

  const $ratingStar = $('.product-card-rating');

  $ratingStar.each((i, e) => {
    let rating = $(e).text();

    if (rating === 0) {
      rating = 0;
    }

    $(e).rateYo({
      rating: rating,
      starWidth: '10px',
      halfStar: true,
      normalFill: '#e4e4e4',
      ratedFill: '#f6c000',
      readOnly: true,
      spacing: '3px',
      starSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="4915.386 4934.4 23.598 22.662">
				            <defs> <style> .cls-1 {
                                stroke: #96999b;
                                margin-right:2px;
f			                    }
                                </style>
                                </defs>
                                <path id="path-3" class="cls-1" d="M12.686,1.138l2.477,5.428a.99.99,0,0,0,.843.58l5.955.685a1.06,1.06,0,0,1,.58,1.844l-4.374,4.111a1.165,1.165,0,0,0-.316,1l1.159,5.9A1.025,1.025,0,0,1,17.482,21.8l-5.217-2.951a1.229,1.229,0,0,0-1.054,0L5.993,21.8A1.038,1.038,0,0,1,4.465,20.69l1.159-5.9a1.165,1.165,0,0,0-.316-1L.882,9.728a1.06,1.06,0,0,1,.58-1.844L7.416,7.2a1.1,1.1,0,0,0,.843-.58l2.53-5.428A1.016,1.016,0,0,1,12.686,1.138Z" transform="translate(4915.473 4934.488)"/>
				            </svg>`

    });
  })
});
