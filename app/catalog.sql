-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:8889
-- Время создания: Май 04 2017 г., 10:39
-- Версия сервера: 5.6.35
-- Версия PHP: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- База данных: `catalog`
--

-- --------------------------------------------------------

--
-- Структура таблицы `notebooks`
--

CREATE TABLE `notebooks` (
  `id` mediumint(9) NOT NULL,
  `brand` varchar(150) DEFAULT NULL,
  `title` varchar(150) DEFAULT NULL,
  `image` varchar(150) DEFAULT 'images',
  `reviews` int(11) DEFAULT NULL,
  `rating` smallint(5) DEFAULT NULL,
  `sale_price` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `has_ssd` varchar(150) NOT NULL DEFAULT 'yes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `notebooks`
--

INSERT INTO `notebooks` (`id`, `brand`, `title`, `image`, `reviews`, `rating`, `sale_price`, `price`, `has_ssd`) VALUES
  (1, 'Acer', 'Ноутбук Acer EX2519-C4TE Cel N3050', 'images/acer.jpg', 2, 5, 18690, 17990, 'yes'),
  (2, 'HP', 'Ноутбук HP 15-ac011ur i3-4005U', 'images/hp.jpg', 14, 4, NULL, 33990, 'yes'),
  (3, 'Asus', 'Ноутбук Asus X540SC-XX040T N3700', 'images/samsung.jpg', 13, 3, 35990, 27990, 'no'),
  (4, 'Acer', 'Ноутбук Acer Extensa EX2508-P02W', 'images/acer_red.jpg', 5, 4, 23990, 18990, 'no'),
  (5, 'Asus', 'Ноутбук Asus X540SA-XX020T N3700', 'images/samsung_red.jpg', 17, 3, 25990, 21990, 'no'),
  (6, 'Acer', 'Ноутбук Acer Aspire ES1-512-P2UCE', 'images/acer.jpg', 2, 4, NULL, 21690, 'no'),
  (7, 'Acer', 'Ноутбук Acer Aspire E5-573G-7049 i7-5500U', 'images/acer_red.jpg', 1, 5, 61990, 52990, 'yes'),
  (8, 'HP', 'Ноутбук HP 15-ac102ur N3050', 'images/hp.jpg', 18, 4, 21990, 18790, 'no'),
  (9, 'Acer', 'Ноутбук Acer Aspire F5-573G-538V i5 6200U', 'images/acer_red.jpg', NULL, 0, 69990, 65990, 'yes'),
  (10, 'Acer', 'Ноутбук Acer Aspire V5-591G-59Y9 i5-6300HQ', 'images/acer.jpg', NULL, 0, NULL, 67990, 'yes'),
  (11, 'Asus', 'Ноутбук Asus F553SA-XX305T N3050', 'images/samsung.jpg', NULL, 0, 18990, 16999, 'no'),
  (12, 'Asus', 'Ноутбук Asus X553SA-XX137T N3050', 'images/samsung_blue.jpg', 3, 5, 19990, 17990, 'no'),
  (13, 'Asus', 'Ноутбук Asus X553SA-XX102T N3050', 'images/samsung.jpg', 6, 3, NULL, 20990, 'no'),
  (14, 'Acer', 'Ноутбук Acer Aspire VN7-572G-55J8 i5-6200U', 'images/acer_red.jpg', NULL, 0, NULL, 57990, 'yes'),
  (15, 'Acer', 'Ноутбук Acer Extensa EX2508-C6BE', 'images/acer.jpg', NULL, 0, NULL, 18990, 'no'),
  (16, 'Asus', 'Ноутбук Asus X540SC-XX033T N3700', 'images/samsung_red.jpg', 4, 3, NULL, 28990, 'no'),
  (17, 'Asus', 'Ноутбук Asus X556UQ-XO322T i5-6200U', 'images/samsung.jpg', 1, 4, 47990, 44990, 'yes'),
  (18, 'Asus', 'Ноутбук Asus X556UQ-XO256T i7 6500U', 'images/samsung_blue.jpg', 1, 4, NULL, 57490, 'yes'),
  (19, 'Asus', 'Ноутбук Asus K501UX-DM282T i7-6500U', 'images/samsung_red.jpg', 36, 4, NULL, 64990, 'yes'),
  (20, 'Asus', 'Ноутбук Asus ROG GL552VW-CN866T i5 6300HQ', 'images/samsung.jpg', 26, 4, 74990, 66990, 'yes'),
  (21, 'Asus', 'Ноутбук Asus GL752VW-T4474T i5 6300HQ', 'images/samsung_blue.jpg', 8, 4, NULL, 81990, 'yes'),
  (22, 'HP', 'Ноутбук HP 15-af155ur E2-6110', 'images/hp.jpg', 35, 4, NULL, 16790, 'no'),
  (23, 'Acer', 'Ноутбук Acer Packard Bell EasyNote ENTG81BA-C04G', 'images/acer.jpg', NULL, 0, 22990, 20990, 'no'),
  (24, 'Acer', 'Ноутбук Acer Aspire ES1-520-33YV E1-2500', 'images/acer.jpg', NULL, 0, NULL, 16990, 'no');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `notebooks`
--
ALTER TABLE `notebooks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `notebooks`
--
ALTER TABLE `notebooks`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;