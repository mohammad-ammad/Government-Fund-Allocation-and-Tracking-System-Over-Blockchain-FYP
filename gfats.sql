-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2022 at 12:23 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gfats`
--

-- --------------------------------------------------------

--
-- Table structure for table `department_details`
--

CREATE TABLE `department_details` (
  `office_id` varchar(100) NOT NULL,
  `office_name` text NOT NULL,
  `office_password` varchar(255) NOT NULL,
  `relevant_ministry_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department_details`
--

INSERT INTO `department_details` (`office_id`, `office_name`, `office_password`, `relevant_ministry_id`) VALUES
('1243', 'abc', '$2b$10$KWYj4wlhHkX6iNXW2AiN4emX7gDVNiYBOu8FlRv5F5TOYigYrcPiy', '49'),
('1z67a', 'Agriculture Department', '$2b$10$VP7Nz.hUCjvHNRD6mmuiOew5QS4sI/VYdOb/ZvkFVoTQvQobSvZvS', '47'),
('6734', 'Economics', '$2b$10$lOkkK8Z4Of4rIisPCdzg.eLgDG.C1G.Wr3hWMHpjkZDNGGNEoAQUa', '47'),
('7645', 'Stocks Exchange', '$2b$10$O3W5zcBaL6v/dzT79Q7oGOclKjuJGE1NBgF2lvJjf4L9GKiuO382u', '47'),
('8622', 'Private sector', '$2b$10$BBNKAQVq0GA4Qh5wBq6osuQSkwEfc/su58/ZlmdBMDnRHEuT2mpIS', '47');

-- --------------------------------------------------------

--
-- Table structure for table `department_funds_request_details`
--

CREATE TABLE `department_funds_request_details` (
  `id` int(11) NOT NULL,
  `department_id` varchar(100) NOT NULL,
  `status_approval` int(11) NOT NULL DEFAULT 0 COMMENT '0=pending\r\n1=processing\r\n2=completed\r\n3=rejected',
  `funds_amount` varchar(255) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `project_description` varchar(255) NOT NULL,
  `request_details` varchar(255) NOT NULL,
  `project_feedback` varchar(255) DEFAULT NULL,
  `relevant_ministry_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department_funds_request_details`
--

INSERT INTO `department_funds_request_details` (`id`, `department_id`, `status_approval`, `funds_amount`, `project_name`, `project_description`, `request_details`, `project_feedback`, `relevant_ministry_id`) VALUES
(1, '1z67a', 2, '30,00000', 'Agricultural project', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content', 'xyz', 'very good', '47'),
(6, '1z67a', 0, '10000', 'checking', 'check', 'deatisl', 'good', '47'),
(7, '6734', 3, '20000', 'Economics Fund', 'abc', 'xyz', NULL, '47'),
(9, '1243', 1, '1000', 'testing', 'abc', 'abc', 'let me check', '49'),
(10, '1z67a', 0, '0.00001', 'Medical Treatment', 'medical treatment for needy', 'abc', 'abc', '47'),
(11, '1z67a', 0, '0.00001', 'domestic fund', 'testing', 'abc', 'abc', '47'),
(12, '1z67a', 0, '0.0001', 'Charity', 'charity', 'abc', 'abc', '47'),
(13, '1z67a', 0, '0.0001', 'test', 'test', 'abc', 'abc', '47');

-- --------------------------------------------------------

--
-- Table structure for table `extra_funds_details`
--

CREATE TABLE `extra_funds_details` (
  `available_resource` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `finance_ministry`
--

CREATE TABLE `finance_ministry` (
  `finance_id` bigint(20) NOT NULL,
  `finance_name` varchar(255) NOT NULL,
  `finance_password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `finance_ministry`
--

INSERT INTO `finance_ministry` (`finance_id`, `finance_name`, `finance_password`) VALUES
(1, 'admin', '$2b$10$kgfw3jBlgbMsp4eFUSyyxOvTYPIrwLp4HaabQujGFLgdqbTru60cS');

-- --------------------------------------------------------

--
-- Table structure for table `funds_allocate`
--

CREATE TABLE `funds_allocate` (
  `funds_amount` varchar(100) NOT NULL,
  `relevant_ministry(FK)` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `govt`
--

CREATE TABLE `govt` (
  `govt_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `relevant_ministry`
--

CREATE TABLE `relevant_ministry` (
  `relevant_id` int(11) NOT NULL,
  `relevant_ministry_id` varchar(100) NOT NULL,
  `relevant_ministry_name` varchar(255) NOT NULL,
  `relevant_ministry_pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `relevant_ministry`
--

INSERT INTO `relevant_ministry` (`relevant_id`, `relevant_ministry_id`, `relevant_ministry_name`, `relevant_ministry_pass`) VALUES
(47, '1238u3', 'ammad', '$2b$10$b4t61x9jTQphJSqt7qZ22eZo29q/wjaAJf9mpUUMl/Xrf7eGRNvXK'),
(49, '1h23', 'ayyan', '$2b$10$bpbhuUP3zgDXECsXf1h4reOM7naXJ6PG.dvvInwFlkncYVm/gmUOa');

-- --------------------------------------------------------

--
-- Table structure for table `relevant_ministry_funds_details`
--

CREATE TABLE `relevant_ministry_funds_details` (
  `id` int(11) NOT NULL,
  `relevant_ministry_id` varchar(100) NOT NULL,
  `stattus_approval` int(11) NOT NULL DEFAULT 0 COMMENT '0=pending\r\n1=processing\r\n2=accepted\r\n3=rejected',
  `funds_amount` varchar(255) NOT NULL,
  `project_name` text NOT NULL,
  `project_description` text NOT NULL,
  `fund_req_address` varchar(255) DEFAULT NULL,
  `ministry_approval_details` varchar(255) DEFAULT NULL,
  `rm_approval_date` datetime DEFAULT NULL,
  `rm_project_receive_date` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `relevant_ministry_funds_details`
--

INSERT INTO `relevant_ministry_funds_details` (`id`, `relevant_ministry_id`, `stattus_approval`, `funds_amount`, `project_name`, `project_description`, `fund_req_address`, `ministry_approval_details`, `rm_approval_date`, `rm_project_receive_date`) VALUES
(1, '47', 1, '30000', 'testing123456', 'abc', NULL, 'Checking', '2022-03-24 12:00:10', NULL),
(3, '47', 2, '30,00000', 'Agricultural project', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content', NULL, 'abc', '2022-03-27 08:20:34', '2022-03-27 06:43:36.075000'),
(4, '47', 0, '10000', 'checking', 'check', NULL, NULL, NULL, '2022-03-27 06:44:27.455000'),
(5, '49', 1, '1000', 'testing', 'abc', NULL, 'let me check', '2022-03-27 08:24:46', '2022-03-27 08:23:39.672000'),
(6, '47', 0, '0.00001', 'Medical Treatment', 'medical treatment for needy person. need funds', NULL, NULL, NULL, '2022-04-25 00:37:45.030000'),
(7, '47', 0, '0.00001', 'domestic fund', 'testing', '0x0682736cAE57c6b7a2b6A425D33d16d92C11E639', NULL, NULL, '2022-04-25 01:07:22.348000'),
(8, '47', 0, '0.0001', 'charity', 'abc', '0x3144ce144bE34f5C1B79B36ffC80E41BcF138aBe', NULL, NULL, '2022-04-26 00:35:45.991000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department_details`
--
ALTER TABLE `department_details`
  ADD UNIQUE KEY `office_id` (`office_id`);

--
-- Indexes for table `department_funds_request_details`
--
ALTER TABLE `department_funds_request_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finance_ministry`
--
ALTER TABLE `finance_ministry`
  ADD PRIMARY KEY (`finance_id`);

--
-- Indexes for table `relevant_ministry`
--
ALTER TABLE `relevant_ministry`
  ADD PRIMARY KEY (`relevant_id`);

--
-- Indexes for table `relevant_ministry_funds_details`
--
ALTER TABLE `relevant_ministry_funds_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department_funds_request_details`
--
ALTER TABLE `department_funds_request_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `finance_ministry`
--
ALTER TABLE `finance_ministry`
  MODIFY `finance_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `relevant_ministry`
--
ALTER TABLE `relevant_ministry`
  MODIFY `relevant_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `relevant_ministry_funds_details`
--
ALTER TABLE `relevant_ministry_funds_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
