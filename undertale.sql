-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 28 mars 2024 à 17:59
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `undertale`
--

-- --------------------------------------------------------

--
-- Structure de la table `fight`
--

CREATE TABLE `fight` (
  `id` int(11) NOT NULL,
  `monster` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `flags`
--

CREATE TABLE `flags` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `shortname` varchar(255) DEFAULT NULL,
  `seriousname` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `item`
--

INSERT INTO `item` (`id`, `name`, `shortname`, `seriousname`, `description`) VALUES
(1, 'Monster Candy', 'MnstrCndy', 'MnstrCndy', 'Heals 10 HP Has a distinct, non-licorice flavor.'),
(2, 'Croquet Roll', 'CroqtRoll', 'CroqtRoll', 'Heals 15 HP Fried dough traditionally served with a mallet.'),
(3, 'Stick', 'Stick', 'Stick', 'Weapon AT 0 Its bark is worse than its bite.'),
(4, 'Bandage', 'Bandage', 'Bandage', 'Heals 10 HP It has already been used several times.'),
(5, 'Rock Candy', 'RockCandy', 'RockCandy', 'Heals 1 HP Here is a recipe to make this at home: 1. Find a rock'),
(6, 'Pumpkin Rings', 'PunkRings', 'PmknRings', 'Heals 8 HP A small pumpkin cooked like onion rings.'),
(7, 'Spider Donut', 'SpidrDont', 'SpdrDonut', 'Heals 12 HP A donut made with Spider Cider in the batter.'),
(8, 'Stoic Onion', 'StocOnoin', 'Onion', 'Heals 5 HP Even eating it raw, the tears just won\'t come.'),
(9, 'Ghost Fruit', 'GhostFrut', 'GhstFruit', 'Heals 16 HP If eaten, it will never pass to the other side.'),
(10, 'Spider Cider', 'SpidrCidr', 'SpdrCider', 'Heals 24 HP Made with whole spiders, not just the juice.'),
(11, 'Butterscotch Pie', 'ButtsPie', 'Pie', 'All HP Butterscotch-cinnamon pie, one slice.'),
(12, 'Faded Ribbon', 'Ribbon', 'Ribbon', 'Armor DF 3 If you\'re cuter, monsters won\'t hit you as hard.'),
(13, 'Toy Knife', 'Toy Knife', 'Toy Knife', 'Weapon AT 3 Made of plastic. A rarity nowadays.'),
(14, 'Tough Glove', 'TuffGlove', 'Glove', 'Weapon AT 5 A worn pink leather glove. For five-fingered folk.'),
(15, 'Manly Bandanna', 'Mandanna', 'Bandanna', 'Armor DF 7 It has seen some wear. It has abs drawn on it.'),
(16, 'Snowman Piece', 'SnowPiece', 'SnowPiece', 'Heals 45 HP Please take this to the ends of the earth.'),
(17, 'Nice Cream', 'NiceCream', 'NiceCream', 'Heals 15 HP Instead of a joke, the wrapper says something nice.'),
(18, 'Puppydough Icecream', 'PDIceCram', 'Ice Cream', 'Heals 28 HP. Made by young pups.'),
(19, 'Bisicle', 'Bisicle', 'Bisicle', 'Heals 11 HP It\'s a two-pronged popsicle, so you can eat it twice.'),
(20, 'Unisicle', 'Unisicle', 'Popsicle', 'Heals 11 HP It\'s a SINGLE-pronged popsicle. Wait, that\'s just normal...'),
(21, 'Cinnamon Bun', 'CinnaBun', 'C. Bun', 'Heals 22 HP A cinnamon roll in the shape of a bunny.'),
(22, 'Temmie Flakes', 'TemFlakes', 'TemFlakes', 'Heals 2 HP It\'s just torn up pieces of colored construction paper.'),
(23, 'Abandoned Quiche', 'Ab Quiche', 'Quiche', 'Heals 34 HP A psychologically damaged spinach egg pie.'),
(24, 'Old Tutu', 'Old Tutu', 'Tutu', 'Armor DF 10 Finally, a protective piece of armor.'),
(25, 'Ballet Shoes', 'BallShoes', 'Shoes', 'Wpn AT 7 These used shoes make you feel incredibly dangerous.'),
(26, 'Punch Card', 'PunchCard', 'PunchCard', 'Battle Item Use to make punching attacks stronger in one battle. Use outside of battle to look at the card.'),
(27, 'Annoying Dog', 'Annoy Dog', 'Dog', 'A little white dog. It\'s fast asleep...'),
(28, 'Dog Salad', 'Dog Salad', 'Dog Salad', 'Heals ?? HP Recovers HP. (Hit Poodles.)'),
(29, 'Dog Residue', 'DogResidu', 'D.Residue', 'Dog Item Shiny trail left behind by a dog.'),
(30, 'Dog Residue', 'DogResidu', 'D.Residue', 'Dog Item Dog-shaped husk shed from a dog\'s carapace.'),
(31, 'Dog Residue', 'DogResidu', 'D.Residue', 'Dog Item Dirty dishes left unwashed by a dog.'),
(32, 'Dog Residue', 'DogResidu', 'D.Residue', 'Dog Item Glowing crystals secreted by a dog.'),
(33, 'Dog Residue', 'DogResidu', 'D.Residue', 'Dog Item Jigsaw puzzle left unfinished by a dog.'),
(34, 'Dog Residue', 'DogResidu', 'D.Residue', 'Dog Item Web spun by a dog to ensnare prey.'),
(35, 'Astronaut Food', 'AstroFood', 'Astr.Food', 'Heals 21 HP For feeding a pet astronaut.'),
(36, 'Instant Noodles', 'InstaNood', 'I.Noodles', 'Heals HP Comes with everything you need for a quick meal!'),
(37, 'Crab Apple', 'CrabApple', 'CrabApple', 'Heals 18 HP An aquatic fruit that resembles a crustacean.'),
(38, 'Hot Dog...?', 'Hot Dog', 'Hot Dog', 'Heals 20 HP The \"meat\" is made of something called a \"water sausage.\"'),
(39, 'Hot Cat', 'Hot Cat', 'Hot Cat', 'Heals 21 HP Like a hot dog, but with little cat ears on the end.'),
(40, 'Glamburger', 'GlamBurg', 'G. Burger', 'Heals 27 HP A hamburger made of edible glitter and sequins.'),
(41, 'Sea Tea', 'Sea Tea', 'Sea Tea', 'Heals 10 HP Made from glowing marshwater. Increases SPEED for one battle.'),
(42, 'Starfait', 'Starfait', 'Starfait', 'Heals 14 HP A sweet treat made of sparkling stars.'),
(43, 'Legendary Hero', 'Leg,Hero', 'L. Hero', 'Heals 40 HP Sandwich shaped like a sword. Increases ATTACK when eaten.'),
(44, 'Butty Glasses', 'ClodGlass', 'Glasses', 'Armor DF 6 Glasses marred with wear. Increases INV by 9.'),
(45, 'Torn Notebook', 'TornNotbo', 'Notebook', 'Weapon AT 2 Contains illegible scrawls. Increases INV by 6.'),
(46, 'Stained Apron', 'StainApro', 'Apron', 'Armor DF 11 Heals 1 HP every other turn.'),
(47, 'Burnt Pan', 'Burnt Pan', 'Burnt Pan', 'Weapon AT 10 Damage is rather consistent. Consumable items heal 4 more HP.'),
(48, 'Cowboy Hat', 'CowboyHat', 'CowboyHat', 'Armor DF 12 This battle-worn hat makes you want to grow a beard. It also raises ATTACK by 5.'),
(49, 'Empty Gun', 'Empty Gun', 'Empty Gun', 'Weapon AT 12 An antique revolver. It has no ammo. Must be used precisely, or damage will be low.'),
(50, 'Heart Locket', '<--Locket', 'H. Locket', 'Armor DF 15 It says \"Best Friends Forever.\"'),
(51, 'Worn Dagger', 'WornDG', 'W. Dagger', 'Weapon AT 15 Perfect for cutting plants and vines.'),
(52, 'Real Knife', 'RealKnife', 'RealKnife', 'Weapon AT 99 Here we are!'),
(53, 'The Locket', 'TheLocket', 'TheLocket', 'Armor DF 99 You can feel it beating.'),
(54, 'Bad Memory', 'BadMemory', 'BadMemory', 'Hurts 1 HP ????'),
(55, 'Dream', 'LastDream', 'LastDream', 'Heals 12 HP The goal of \"Determination.\"'),
(56, 'Undyne\'s Letter', 'UndynLetr', 'Letter', 'Unique Letter written for Dr. Alphys.'),
(57, 'Undyne Letter EX', 'UndynLtrX', 'Letter', 'Unique It has DON\'T DROP IT written on it.'),
(58, 'Popato Chisps', 'PT Chisps', 'Chips', 'Heals 13 HP Regular old popato chisps.'),
(59, 'Junk Food', 'Junk Food', 'Junk Food', 'Heals 17 HP Food that was probably once thrown away.'),
(60, 'Mystery Key', 'MystryKey', 'Key', 'Unique It is too bent to fit on your keychain.'),
(61, 'Face Steak', 'FaceSteak', 'Steak', 'Heals 60 HP Huge steak in the shape of Mettaton\'s face.'),
(62, 'Hush Puppy', 'HushPupe', 'HushPuppy', 'Heals 65 HP This wonderful spell will stop a dog from casting magic.'),
(63, 'Snail Pie', 'Snail Pie', 'Snail Pie', 'Heals Some HP An acquired taste.'),
(64, 'temy armor', 'Temmie AR', 'Tem.Armor', 'Armor DF 20 The things you can do with a college education!');

-- --------------------------------------------------------

--
-- Structure de la table `monsters`
--

CREATE TABLE `monsters` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `maxhp` int(11) DEFAULT NULL,
  `attack` int(11) DEFAULT NULL,
  `defense` int(11) DEFAULT NULL,
  `xpreward` int(11) DEFAULT NULL,
  `goldreward` int(11) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `monsters`
--

INSERT INTO `monsters` (`id`, `name`, `maxhp`, `attack`, `defense`, `xpreward`, `goldreward`, `message`) VALUES
(1, 'TestFroggit', 23, 4, 1, 2, 2, 'TestMonster and its cohorts draw near!'),
(2, 'Dummy', 15, 0, -5, 0, 0, 'You encountered the Dummy.'),
(3, 'Froggit', 20, 4, 1, 10, 20, 'Froggit attacks you!'),
(4, 'Froggit', 30, 4, 4, 3, 2, 'Froggit hopped close!'),
(5, 'Whimsun', 10, 4, 0, 2, 2, 'Whimsun approached meekly!'),
(6, 'Moldsmal', 50, 4, 0, 3, 3, 'You walk into Moldsmal.'),
(7, 'Migosp', 40, 5, 4, 5, 4, 'Migosp crawled up close!'),
(8, 'Vegetoid', 72, 5, 0, 6, 1, 'Vegetoid came out of the earth!'),
(9, 'Loox', 50, 5, 4, 7, 5, 'Loox drew near!'),
(10, 'Toriel', 440, 6, 1, 0, 0, 'Toriel blocks the way!'),
(11, 'Napstablook', 88, 5, 4, -1, 0, 'Here comes Napstablook.'),
(12, 'Moldsmal', 50, 7, 0, 3, 3, 'You walk into Moldsmal.'),
(13, 'Doggo', 70, 6, 1, 30, 20, 'Doggo blocks the way!'),
(14, 'Lesser Dog', 60, 6, 0, 18, 15, 'Lesser Dog appears.'),
(15, 'Dogamy', 108, 6, 4, 30, 25, 'Dogi assault you!'),
(16, 'Dogaressa', 108, 6, 4, 30, 25, 'Dogi assault you!'),
(17, 'Greater Dog', 105, 6, 4, 80, 60, 'It\'s the Greater Dog.'),
(18, 'Snowdrake OR Chilldrake', 74, 6, 2, 22, 18, 'Snowdrake flutters forth!'),
(19, 'Ice Cap', 48, 6, 0, 17, 17, 'Icecap struts into view.'),
(20, 'Ice', 48, 0, -100, 25, 40, 'Jerry clings to you!'),
(21, 'Jerry', 80, 1, 8, 1, 55, 'Aaron flexes in!'),
(22, 'Gyftrot', 114, 7, 3, 35, 30, 'Gyftrot confronts you!'),
(23, 'Aaron', 98, 7, 2, 52, 25, 'Aaron flexes in!'),
(24, 'Temmie', 5, 7, -20, 40, 50, 'Special enemy Temmie appears here to defeat you!!'),
(25, 'Papyrus', 680, 8, 2, 0, 0, 'Papyrus blocks the way!'),
(26, 'Moldsmal', 70, 7, 4, 46, 30, 'You walk into Moldsmal.'),
(28, 'Woshua', 70, 7, 1, 52, 25, 'Woshua shuffles up.'),
(29, 'Shyren', 66, 7, 2, 52, 25, 'Shyren hides in the corner but somehow encounters you anyway.'),
(30, 'Agent', 98, 7, 2, 52, 20, 'Vulkin strolls in.'),
(31, 'Mad Dummy', 200, 7, -40, 0, 0, 'Mad Dummy blocks the way!'),
(32, 'Undyne', 1500, 7, 0, 0, 0, NULL),
(33, 'Mettaton', 9999, 10, 999, 0, 0, 'Mettaton attacks!'),
(34, 'RG 01', 150, 8, 4, 110, 60, 'Royal Guard attacks!'),
(35, 'RG 02', 150, 8, 4, 110, 60, 'Royal Guard attacks!'),
(36, 'Tsunderplane', 80, 8, 6, 95, 45, 'Tsunderplane gets in the way!&Not on purpose or anything.'),
(37, 'Vulkin', 20, 8, -10, 70, 50, 'Vulkin strolls in.'),
(38, 'Pyrope', 110, 8, 1, 80, 40, 'Pyrope bounds towards you!'),
(39, 'Muffet', 1250, 8, 0, 300, 0, 'Muffet traps you!'),
(40, 'Mettaton', 9999, 10, 999, 0, 0, 'Mettaton attacks!'),
(41, 'Undyne', 1500, 10, 10, 0, 0, NULL),
(42, 'Madjick', 190, 8, -1, 150, 120, 'Madjick pops out of its hat!'),
(43, 'Knight Knight', 230, 8, 2, 180, 150, 'Knight Knight blocks the way!'),
(44, 'Final Froggit', 100, 8, 0, 120, 80, 'Final Froggit was already there, waiting for you'),
(45, 'Astigmatism', 120, 8, -2, 130, 85, 'Astigmatism drew near.'),
(46, 'Whimsalot', 95, 8, -3, 110, 80, 'Whimsalot rushed in!'),
(47, 'Bomb', 99, 1, 0, 0, 0, NULL),
(48, 'RG 03', 100, 8, 4, 110, 60, NULL),
(49, 'RG 04', 100, 8, 4, 110, 60, 'Royal Guard attacks!'),
(50, 'Mettaton', 9999, 8, 999, 0, 0, 'Mettaton attacks!'),
(51, 'Mettaton EX', 1600, 8, 1, 0, 0, 'Vulkin strolls in.'),
(52, 'Asgore', 3500, 10, -30, 0, 0, 'ASGORE attacks!'),
(53, 'Lemon Bread', 100, 8, 9999, 0, 0, NULL),
(54, '', 100, 9, 9999, 0, 0, 'But nobody came.'),
(55, 'Amalgamate', 400, 0, 0, 0, 0, NULL),
(56, '', 100, 9, 999, 0, 0, 'But nobody came.'),
(57, 'Amalgamate', 100, 9, 999, 0, 0, 'Mettaton attacks!'),
(58, 'Lost Soul', 999, 7, 999, 0, 0, 'The Lost Souls appeared.'),
(59, 'Lost Soul', 999, 7, 999, 0, 0, 'The Lost Souls appeared.'),
(60, 'Lost Soul', 999, 7, 999, 0, 0, 'The Lost Souls appeared.'),
(61, 'Lost Soul', 999, 7, 999, 0, 0, 'The Lost Souls appeared.'),
(62, 'Lost Soul', 999, 7, 999, 0, 0, 'The Lost Souls appeared.'),
(63, 'Lost Soul', 999, 7, 999, 0, 0, 'The Lost Souls appeared.'),
(64, 'Monster Kid', 10, 1, -900, 0, 0, 'In my way.'),
(65, 'Undyne the Undying', 23000, 12, 5, 0, 0, 'The heroine appears.'),
(66, 'Glad Dummy', 5, 0, -5, 200, 100, 'Glad Dummy lets you go.'),
(67, 'Mettaton NEO', 30000, 10, -40000, 0, 0, 'Mettaton NEO blocks the way!'),
(68, 'Sans', 1, 1, 1, 0, 0, 'Mercenaries emerge from the shadows.'),
(70, 'Final Froggit', 32, 7, 2, 4, 2, 'Final Froggit was already there, waiting for you'),
(71, 'Astigmatism', 50, 7, 2, 8, 6, 'Astigmatism drew near.'),
(72, 'Whimsalot', 20, 7, 0, 3, 4, 'Whimsalot rushed in!'),
(73, 'Migospel', 45, 7, 3, 5, 4, NULL),
(74, 'Moldessa', 52, 7, -4, 5, 3, NULL),
(75, 'Parsnik', 72, 7, -2, 8, 2, NULL),
(76, 'Glyde', 220, 9, -20, 100, 140, NULL),
(80, 'So Sorry', 1100, 9, -6, 1, 300, NULL),
(81, 'Doodlebog', 100, 8, 999, 0, 0, NULL),
(99, 'Asriel Dreemurr', 9999, 8, 9999, 0, 0, 'It\'s the end.'),
(100, 'Asriel', 9999, 8, 9999, 0, 0, 'ASRIEL blocks the way!'),
(666, 'Gaster', 666666, 66666, 66666, -6666, -6666, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `save`
--

CREATE TABLE `save` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `data` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `save`
--

INSERT INTO `save` (`id`, `name`, `data`) VALUES
(1, 'charname', NULL),
(2, 'lv', NULL),
(3, 'maxhp', NULL),
(4, 'maxen', NULL),
(5, 'at', NULL),
(6, 'wstrength', NULL),
(7, 'df', NULL),
(8, 'adef', NULL),
(9, 'sp', NULL),
(10, 'xp', NULL),
(11, 'gold', NULL),
(12, 'kills', NULL),
(13, 'item1', NULL),
(14, 'item2', NULL),
(15, 'item3', NULL),
(16, 'item4', NULL),
(17, 'item5', NULL),
(18, 'item6', NULL),
(19, 'item7', NULL),
(20, 'item8', NULL),
(21, 'itemnumber', NULL),
(22, 'phone1', NULL),
(23, 'phone2', NULL),
(24, 'phone3', NULL),
(25, 'phone4', NULL),
(26, 'phone5', NULL),
(27, 'phone6', NULL),
(28, 'phone7', NULL),
(29, 'phone8', NULL),
(30, 'phonenumber', NULL),
(31, 'weapon', NULL),
(32, 'armor', NULL),
(546, 'plot', NULL),
(547, 'menuchoice1', NULL),
(548, 'menuchoice2', NULL),
(549, 'menuchoice3', NULL),
(550, 'currentsong', NULL),
(551, 'currentroom', NULL),
(552, 'time', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `tempsave`
--

CREATE TABLE `tempsave` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `data` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `tempsave`
--

INSERT INTO `tempsave` (`id`, `name`, `data`) VALUES
(1, 'charname', NULL),
(2, 'lv', NULL),
(3, 'maxhp', NULL),
(4, 'maxen', NULL),
(5, 'at', NULL),
(6, 'wstrength', NULL),
(7, 'df', NULL),
(8, 'adef', NULL),
(9, 'sp', NULL),
(10, 'xp', NULL),
(11, 'gold', NULL),
(12, 'kills', NULL),
(13, 'item1', NULL),
(14, 'item2', NULL),
(15, 'item3', NULL),
(16, 'item4', NULL),
(17, 'item5', NULL),
(18, 'item6', NULL),
(19, 'item7', NULL),
(20, 'item8', NULL),
(21, 'itemnumber', NULL),
(22, 'phone1', NULL),
(23, 'phone2', NULL),
(24, 'phone3', NULL),
(25, 'phone4', NULL),
(26, 'phone5', NULL),
(27, 'phone6', NULL),
(28, 'phone7', NULL),
(29, 'phone8', NULL),
(30, 'phonenumber', NULL),
(31, 'weapon', NULL),
(32, 'armor', NULL),
(546, 'plot', NULL),
(547, 'menuchoice1', NULL),
(548, 'menuchoice2', NULL),
(549, 'menuchoice3', NULL),
(550, 'currentsong', NULL),
(551, 'currentroom', NULL),
(552, 'time', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `fight`
--
ALTER TABLE `fight`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `flags`
--
ALTER TABLE `flags`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `monsters`
--
ALTER TABLE `monsters`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `save`
--
ALTER TABLE `save`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tempsave`
--
ALTER TABLE `tempsave`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
