-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2019 at 08:02 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ement_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `company_address` varchar(100) NOT NULL,
  `company_phone` varchar(11) NOT NULL,
  `company_email` varchar(50) NOT NULL,
  `company_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `company_address`, `company_phone`, `company_email`, `company_description`) VALUES
(1, 'IT MarTX', '13 Sri Bodhiraja Mawatha, Colombo 01300', '011-3670717', 'itmartx.colombo@gmail.com', 'IT Martx, based in Colombo, Sri Lanka, specialise in web application development and mobile app development.'),
(2, 'EFutures Private Limited', '20, 54 Fairfield Gardens, Colombo 00800', '011-7842542', 'info@efuturesworld.com ', 'EFutures is a Sri Lankan full-cycle software development company with expertise in creating bespoke enterprise scale software and a focus on latest technologies.');

-- --------------------------------------------------------

--
-- Table structure for table `mentor`
--

CREATE TABLE `mentor` (
  `mentor_id` int(11) NOT NULL,
  `mentor_fname` varchar(50) NOT NULL,
  `mentor_lname` varchar(50) NOT NULL,
  `mentor_address` varchar(100) NOT NULL,
  `mentor_phone` varchar(11) NOT NULL,
  `mentor_email` varchar(80) NOT NULL,
  `mentor_imglink` varbinary(50) NOT NULL,
  `mentor_description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mentor`
--

INSERT INTO `mentor` (`mentor_id`, `mentor_fname`, `mentor_lname`, `mentor_address`, `mentor_phone`, `mentor_email`, `mentor_imglink`, `mentor_description`) VALUES
(2, 'Sachini', 'Chathurangi', 'No 29, Main Street, Thangalla', '077-1234567', 'sachinichathurangi@gmail.com', '', 'A mentor from the ABC company');

-- --------------------------------------------------------

--
-- Table structure for table `milestone`
--

CREATE TABLE `milestone` (
  `milestone_id` int(11) NOT NULL,
  `supposed_date` date NOT NULL,
  `archived_date` date NOT NULL,
  `description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `postId` int(11) NOT NULL,
  `postauthor` varchar(15) NOT NULL,
  `postheading` text NOT NULL,
  `postbody` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`postId`, `postauthor`, `postheading`, `postbody`) VALUES
(1, 'author 1', 'this is the first post', 'welcome to the fires post'),
(2, 'author 2', 'heading 2', 'body 2');

-- --------------------------------------------------------

--
-- Table structure for table `postsreply`
--

CREATE TABLE `postsreply` (
  `replyid` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `Author` varchar(100) NOT NULL,
  `body` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `postsreply`
--

INSERT INTO `postsreply` (`replyid`, `postId`, `Author`, `body`) VALUES
(1, 1, 'user 2', 'nice text');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `project_id` int(11) NOT NULL,
  `lead_mentor` varchar(100) NOT NULL,
  `starting_date` date NOT NULL,
  `duration` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_id`, `lead_mentor`, `starting_date`, `duration`) VALUES
(1, 'Aruna Jayakodi', '2019-01-05', '6');

-- --------------------------------------------------------

--
-- Table structure for table `project_ideas`
--

CREATE TABLE `project_ideas` (
  `idea_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `owner` varchar(80) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `skill_id` int(11) NOT NULL,
  `skill_name` varchar(50) NOT NULL,
  `level` varchar(80) NOT NULL,
  `category` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `student_id` int(11) NOT NULL,
  `student_fname` varchar(50) NOT NULL,
  `student_lname` varchar(50) NOT NULL,
  `student_address` varchar(255) NOT NULL,
  `student_phone` varchar(15) NOT NULL,
  `student_email` varchar(255) NOT NULL,
  `student_imglink` varchar(255) NOT NULL,
  `student_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`, `student_fname`, `student_lname`, `student_address`, `student_phone`, `student_email`, `student_imglink`, `student_description`) VALUES
(1, 'Ravindu', 'Sachintha', '640/57, 2nd Kurana, Colombo Road, Negombo', '077-2769963', 'ravindusachintha53@gmail.com', '37068095_458334591260493_8126988923386724352_o.jpg', 'A student of University of Colombo School of Computing');

-- --------------------------------------------------------

--
-- Table structure for table `student_project`
--

CREATE TABLE `student_project` (
  `std_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `marks` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_project`
--

INSERT INTO `student_project` (`std_id`, `project_id`, `marks`) VALUES
(1, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `task_id` int(11) NOT NULL,
  `responsible_student` varchar(60) NOT NULL,
  `archived_date` date NOT NULL,
  `supposed_date` date NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_type` set('S','M','CM','A') NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_type`, `user_name`, `user_password`) VALUES
(1, 'S', 'Sachintha', 'sachintha96'),
(2, 'M', 'Sachini', '1234'),
(3, 'S', 'Mario', '1234'),
(4, 'A', 'admin', 'admin'),
(7, 'S', 'marper', 'marper');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `mentor`
--
ALTER TABLE `mentor`
  ADD PRIMARY KEY (`mentor_id`);

--
-- Indexes for table `milestone`
--
ALTER TABLE `milestone`
  ADD PRIMARY KEY (`milestone_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`postId`);

--
-- Indexes for table `postsreply`
--
ALTER TABLE `postsreply`
  ADD PRIMARY KEY (`replyid`),
  ADD KEY `fk_posts_reply` (`postId`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `project_ideas`
--
ALTER TABLE `project_ideas`
  ADD PRIMARY KEY (`idea_id`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`skill_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `student_project`
--
ALTER TABLE `student_project`
  ADD PRIMARY KEY (`std_id`,`project_id`),
  ADD KEY `fk_project_to_sptable` (`project_id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`task_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `milestone`
--
ALTER TABLE `milestone`
  MODIFY `milestone_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `postId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `postsreply`
--
ALTER TABLE `postsreply`
  MODIFY `replyid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project_ideas`
--
ALTER TABLE `project_ideas`
  MODIFY `idea_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mentor`
--
ALTER TABLE `mentor`
  ADD CONSTRAINT `fk_user2mentor` FOREIGN KEY (`mentor_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `postsreply`
--
ALTER TABLE `postsreply`
  ADD CONSTRAINT `fk_posts_reply` FOREIGN KEY (`postId`) REFERENCES `posts` (`postId`) ON UPDATE NO ACTION;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `fk_user2student` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_project`
--
ALTER TABLE `student_project`
  ADD CONSTRAINT `fk_project_to_sptable` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_student_to_sptable` FOREIGN KEY (`std_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
