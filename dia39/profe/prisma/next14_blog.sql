-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2024 at 04:11 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `next14_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `body` varchar(191) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `isPublicado` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `username` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `website` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `website`, `created_at`, `updated_at`) VALUES
(1, 'John Dough', 'Jhonny', 'john-0.3967580677696485@example.com', NULL, '2024-04-04 01:28:01.999', '2024-04-04 01:28:01.999'),
(2, 'John Dough', 'Jhonny', 'john-0.08496997910451065@example.com', NULL, '2024-04-04 01:30:40.730', '2024-04-04 01:30:40.730'),
(3, 'John Dough', 'Jhonny', 'john-0.9879357151380164@example.com', NULL, '2024-04-04 01:33:39.077', '2024-04-04 01:33:39.077'),
(4, 'John Dough', 'Jhonny', 'john-0.8350864516666425@example.com', NULL, '2024-04-04 01:34:12.772', '2024-04-04 01:34:12.772'),
(5, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'hildegard.org', '2024-04-04 01:34:12.861', '2024-04-04 01:34:12.861'),
(6, 'Ervin Howell', 'Antonette', 'Shanna@melissa.tv', 'anastasia.net', '2024-04-04 01:34:12.861', '2024-04-04 01:34:12.861'),
(7, 'Clementine Bauch', 'Samantha', 'Nathan@yesenia.net', 'ramiro.info', '2024-04-04 01:34:12.861', '2024-04-04 01:34:12.861'),
(8, 'Patricia Lebsack', 'Karianne', 'Julianne.OConner@kory.org', 'kale.biz', '2024-04-04 01:34:12.861', '2024-04-04 01:34:12.861'),
(9, 'Chelsey Dietrich', 'Kamren', 'Lucio_Hettinger@annie.ca', 'demarco.info', '2024-04-04 01:34:12.861', '2024-04-04 01:34:12.861'),
(10, 'Mrs. Dennis Schulist', 'Leopoldo_Corkery', 'Karley_Dach@jasper.info', 'ola.org', '2024-04-04 01:34:12.861', '2024-04-04 01:34:12.861'),
(11, 'Kurtis Weissnat', 'Elwyn.Skiles', 'Telly.Hoeger@billy.biz', 'elvis.io', '2024-04-04 01:34:12.861', '2024-04-04 01:34:12.861'),
(12, 'Nicholas Runolfsdottir V', 'Maxime_Nienow', 'Sherwood@rosamond.me', 'jacynthe.com', '2024-04-04 01:34:12.861', '2024-04-04 01:34:12.861'),
(13, 'Glenna Reichert', 'Delphine', 'Chaim_McDermott@dana.io', 'conrad.com', '2024-04-04 01:34:12.861', '2024-04-04 01:34:12.861'),
(14, 'Clementina DuBuque', 'Moriah.Stanton', 'Rey.Padberg@karina.biz', 'ambrose.net', '2024-04-04 01:34:12.861', '2024-04-04 01:34:12.861');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('516118b2-45a0-4439-a8a3-1299816ce91e', '2676b1ab8c028e49f138325f301a60b3eec53499fcb877c5250d6117342b2e91', '2024-04-04 01:09:19.762', '20240404010919_init', NULL, NULL, '2024-04-04 01:09:19.674', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Post_userId_fkey` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
