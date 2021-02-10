-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 09.11.2020 klo 10:48
-- Palvelimen versio: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paitakauppa`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `tuoteluettelo`
--

CREATE TABLE `tuoteluettelo` (
  `id` int(10) NOT NULL,
  `vari` text COLLATE utf8_swedish_ci NOT NULL,
  `koko` text COLLATE utf8_swedish_ci NOT NULL,
  `hinta` float NOT NULL,
  `varastotilanne` int(10) NOT NULL,
  `kuva` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Vedos taulusta `tuoteluettelo`
--

INSERT INTO `tuoteluettelo` (`id`, `vari`, `koko`, `hinta`, `varastotilanne`, `kuva`) VALUES
(1, 'punainen', 'L', 9.99, 1, 0),
(2, 'sininen', 'M', 9.99, 1, 1),
(3, 'musta', 'XL', 9.99, 3, 2),
(4, 'valkoinen', 'S', 9.99, 1, 3),
(5, 'harmaa', 'XXL', 9.99, 2, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tuoteluettelo`
--
ALTER TABLE `tuoteluettelo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tuoteluettelo`
--
ALTER TABLE `tuoteluettelo`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
