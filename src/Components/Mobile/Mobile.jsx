import React from 'react';
import mobile from './Mobile.module.css';
const Mobile = () => {
  return (
    <>
      <div className={mobile.container}>
        <header className={mobile.header}>
          <div className={mobile.header_elements}>
            <span>Услуги</span>
            <span>Виджеты</span>
            <span>Интеграции</span>
            <span>Кейсы</span>
          </div>
        </header>
        <main className={mobile.main}>
          <div className={mobile.purple_light}></div>
          <div className={mobile.red_light}></div>
          <div className={mobile.glass}></div>
          <div className={mobile.noise}></div>
          <div className={mobile.red_ball}></div>
          <div className={mobile.purple_ball}></div>
          <div className={mobile.main_info}>
            <div className={mobile.main_info_head}>
              <span className={mobile.main_info_head_title}>Зарабатывайте больше</span>
              <span className={mobile.main_info_head_title_orange}>с WELBEX</span>
              <span className={mobile.main_info_head_info}>Развиваем и контролируем продажи за вас</span>
            </div>
            <div className={mobile.main_info_list}>
              <p className={mobile.main_info_list_title}>
                Вместе c<span className={mobile.main_info_list_title_orange}> бесплатной консультацией </span>
                мы дарим:
              </p>
              <div className={mobile.main_info_list_ul}>
                <p>
                  <span className={mobile.color_dash_text}>
                    {}
                    <img alt={'linegradient'} src={'src/assets/Line gradient.png'} className={mobile.color_dash}></img>
                    <span>Skype аудит</span>
                  </span>
                  <span className={mobile.color_dash_text}>
                    {}
                    <img alt={'linegradient'} src={'src/assets/Line gradient.png'} className={mobile.color_dash}></img>
                    <span>Dashboard</span>
                  </span>
                </p>
                <p>
                  <span className={mobile.color_dash_text}>
                    {}
                    <img alt={'linegradient'} src={'src/assets/Line gradient.png'} className={mobile.color_dash}></img>
                    <span>30 виджетов</span>
                  </span>
                  <span className={mobile.color_dash_text}>
                    {}
                    <img alt={'linegradient'} src={'src/assets/Line gradient.png'} className={mobile.color_dash}></img>
                    <span>Месяц аmoCRM</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer className={mobile.footer}>
          <div className={mobile.footer_about_company}>
            <p className={mobile.footer_title}>О компании</p>
            <span className={mobile.footer_span}>Партнёрская программа</span>
            <span className={mobile.footer_span}>Вакансии</span>
          </div>
          <div className={mobile.footer_menu}>
            <p className={mobile.footer_title}>Меню</p>
            <p className={mobile.footer_p_main}>
              <p className={mobile.footer_p}>
                <span className={mobile.footer_span}>Расчёт стоимости</span>
                <span className={mobile.footer_span}>Услуги</span>
                <span className={mobile.footer_span}>Виджеты</span>
                <span className={mobile.footer_span}>Интеграции</span>
                <span className={mobile.footer_span}>Наши клиенты</span>
              </p>
              <p className={mobile.footer_p}>
                <span className={mobile.footer_span}>Благодарность клиентов</span>
                <span className={mobile.footer_span}>Кейсы</span>
                <span className={mobile.footer_span}>Сертификаты</span>
                <span className={mobile.footer_span}>Блог на Youtube</span>
                <span className={mobile.footer_span}>Вопрос / Ответ</span>
              </p>
            </p>
          </div>
          <div className={mobile.footer_contacts}>
            <p className={mobile.footer_title}>Контакты</p>
            <span className={mobile.footer_contacts_num}>+7 555 555-55-55</span>
            <span className={mobile.footer_contacts_icons}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.665 3.7178L2.93497 10.5548C1.72497 11.0408 1.73197 11.7158 2.71297 12.0168L7.26497 13.4368L17.797 6.7918C18.295 6.4888 18.75 6.6518 18.376 6.9838L9.84297 14.6848H9.84097L9.84297 14.6858L9.52897 19.3778C9.98897 19.3778 10.192 19.1668 10.45 18.9178L12.661 16.7678L17.26 20.1648C18.108 20.6318 18.717 20.3918 18.928 19.3798L21.947 5.1518C22.256 3.9128 21.474 3.3518 20.665 3.7178Z"
                    fill="#E4E5EA"
                  />
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12.9677 3C12.6114 3 12.3226 3.27441 12.3226 3.6129C12.3226 3.9514 12.6114 4.22581 12.9677 4.22581C17.2435 4.22581 20.7097 7.51868 20.7097 11.5806C20.7097 11.9191 20.9985 12.1935 21.3548 12.1935C21.7112 12.1935 22 11.9191 22 11.5806C22 6.84169 17.9561 3 12.9677 3Z"
                    fill="#E4E5EA"
                  />
                  <path
                    d="M4.70912 4.99957C5.07483 4.821 5.71892 4.73049 6.0881 5.05724C6.54956 5.46566 7.26077 6.18162 7.74938 6.80628C8.238 7.43094 8.92205 8.38235 9.01978 8.59378C9.1175 8.8052 9.22608 9.5548 8.73747 10.0065C8.34658 10.3678 7.83625 10.6888 7.62994 10.8041C7.43812 10.9643 7.12396 11.4346 7.40192 12.0342C7.74938 12.7838 8.49859 14.2542 9.7907 15.3497C11.0828 16.4453 12.4509 17.0219 13.3087 17.2045C13.3633 17.2045 13.4333 17.2169 13.5145 17.2312C13.8052 17.2826 14.2383 17.359 14.6117 16.9835C14.9939 16.5991 15.3428 16.1954 15.4695 16.0417C15.6685 15.8367 16.2469 15.4881 16.9679 15.7342C17.8691 16.0417 18.9006 16.7144 19.3675 17.0315C19.741 17.2852 20.5728 17.8868 20.9419 18.1559C21.1663 18.3193 21.5413 18.8056 21.246 19.4437C20.8768 20.2413 19.3024 22 17.8908 22C17.3697 22 12.3315 20.645 7.87968 16.8201C5.03602 14.3769 2.58817 10.1378 2.16833 8.7091C2.00908 8.36954 1.82087 7.53281 2.34206 6.90238C2.86325 6.27195 3.4496 5.61462 4.70912 4.99957Z"
                    fill="#E4E5EA"
                  />
                  <path
                    d="M12.9677 7.90323C12.6114 7.90323 12.3226 8.17763 12.3226 8.51613C12.3226 8.85463 12.6114 9.12903 12.9677 9.12903C14.393 9.12903 15.5484 10.2267 15.5484 11.5806C15.5484 11.9191 15.8372 12.1935 16.1935 12.1935C16.5499 12.1935 16.8387 11.9191 16.8387 11.5806C16.8387 9.54966 15.1056 7.90323 12.9677 7.90323Z"
                    fill="#E4E5EA"
                  />
                  <path
                    d="M12.3226 6.06452C12.3226 5.72602 12.6114 5.45161 12.9677 5.45161C16.5309 5.45161 19.4194 8.19567 19.4194 11.5806C19.4194 11.9191 19.1305 12.1935 18.7742 12.1935C18.4179 12.1935 18.129 11.9191 18.129 11.5806C18.129 8.87267 15.8182 6.67742 12.9677 6.67742C12.6114 6.67742 12.3226 6.40301 12.3226 6.06452Z"
                    fill="#E4E5EA"
                  />
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.8025 5.19097C17.9169 4.30376 16.8632 3.60028 15.7025 3.12127C14.5417 2.64226 13.297 2.39724 12.0405 2.40042C6.7714 2.40042 2.48202 6.66838 2.47989 11.9146C2.47989 13.5912 2.91969 15.2276 3.75563 16.6711L2.40002 21.6004L7.46783 20.2767C8.86965 21.0361 10.4402 21.4344 12.0362 21.4351H12.0405C17.3085 21.4351 21.5979 17.1671 21.6 11.9209C21.6036 10.6708 21.3582 9.43242 20.8781 8.27727C20.3979 7.12212 19.6925 6.07314 18.8025 5.19097ZM12.0405 19.8294H12.0373C10.6141 19.8296 9.21706 19.4485 7.99282 18.7261L7.70317 18.5544L4.69593 19.3398L5.49779 16.422L5.3093 16.1232C4.5136 14.8624 4.09238 13.4034 4.09426 11.9146C4.09639 7.5544 7.66058 4.00713 12.0437 4.00713C13.0875 4.00482 14.1215 4.20859 15.0857 4.60663C16.0499 5.00467 16.9252 5.58908 17.661 6.32605C18.4007 7.0595 18.9869 7.93159 19.386 8.89191C19.785 9.85223 19.9888 10.8817 19.9856 11.9209C19.9835 16.2811 16.4193 19.8294 12.0405 19.8294ZM16.3991 13.906C16.1595 13.7862 14.986 13.2118 14.7666 13.1323C14.5483 13.0528 14.3896 13.0136 14.2299 13.251C14.0701 13.4884 13.6122 14.0236 13.4727 14.1826C13.3332 14.3416 13.1937 14.3607 12.9552 14.242C12.7167 14.1233 11.9468 13.8721 11.0341 13.0624C10.3239 12.4318 9.84467 11.6538 9.70517 11.4154C9.56567 11.1769 9.69026 11.0487 9.81059 10.93C9.91814 10.824 10.0491 10.6523 10.1684 10.5135C10.2877 10.3746 10.3271 10.2761 10.4069 10.1171C10.4868 9.9581 10.4474 9.81927 10.3867 9.70056C10.3271 9.5808 9.84893 8.41075 9.64979 7.93488C9.45705 7.47385 9.26004 7.53532 9.11309 7.52896C8.96089 7.52277 8.80857 7.51994 8.65625 7.52048C8.53513 7.52356 8.41594 7.5515 8.30618 7.60257C8.19641 7.65363 8.09843 7.72672 8.01838 7.81724C7.79901 8.0557 7.18244 8.63013 7.18244 9.80019C7.18244 10.9702 8.03861 12.1011 8.15788 12.2601C8.27715 12.419 9.84254 14.8196 12.2385 15.8497C12.8093 16.0945 13.2544 16.2408 13.6005 16.351C14.1724 16.5323 14.6931 16.5058 15.1052 16.4454C15.5642 16.3775 16.5183 15.8709 16.7175 15.3156C16.9166 14.7602 16.9166 14.2844 16.857 14.1847C16.7973 14.0851 16.6365 14.0247 16.3991 13.906Z"
                    fill="#E4E5EA"
                  />
                </svg>
              </span>
            </span>
            <span className={mobile.footer_contacts_address}>Москва, Путевой проезд 3с1, к 902</span>
          </div>
          <div className={mobile.footer_copyright}>
            <span>©WELBEX 2022. Все права защищены.</span>
            <span className={mobile.footer_copyright_underline}>Политика конфиденциальности</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Mobile;
