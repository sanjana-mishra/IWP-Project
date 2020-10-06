const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const users = require('../Users');
const posts = require('../Posts');

const regexHome = /[a-zA-Z0-9]*[/]home$/
const regexLogin = /[a-zA-Z0-9]*[/]login$/
const regexSignup = /[a-zA-Z0-9]*[/]signup$/
const regexGallery = /[a-zA-Z0-9]*[/]gallery$/
const regexDashboard = /[a-zA-Z0-9]*[/]dashboard[/]$/


router.get('/dashboard/home', (req, res) => res.render('home'));
//handling arbitary routes
router.get(regexHome, (req, res) => res.render('home'));


//router.get('/login', (req, res) => res.render('login'));
//handling arbitary routes
//router.get(regexLogin, (req, res) => res.redirect('/login'));


//router.get('/sign-up', (req, res) => res.render('signup'));
//handling arbitary routes
//router.get(regexSignup, (req, res) => res.redirect('/sign-up'));


router.get('/photogallery', (req, res) => res.render('gallery'));

//handling arbitary routes
router.get(regexGallery, (req, res) => res.redirect('/photogallery'));

router.get('/store', (req, res) => res.render('store'));
router.get('/topnews', (req, res) => res.render('topnews'));
router.get('/forums', (req, res) => res.render('forums'));


//handling arbitary routes
//router.get(regexDashboard, (req, res) => res.redirect('/dashboard:id'));

// Post requests for signup
// router.post('/sign-up', async(req, res) => {
//     try {
//         const hashedPass = await bcrypt.hash(req.body.password, 10)
//         console.log(hashedPass)
//         const newUser = {
//             id: Math.floor(Math.random() * 10000),
//             username: req.body.username,
//             password: hashedPass,
//             firstname: req.body.firstname,
//             lastname: req.body.lastname,
//             email: req.body.email,
//             threads: []
//         }

//         if (!newUser.username || !newUser.email || !newUser.password || !newUser.firstname || !newUser.lastname || !req.body.cpassword) {
//             return res.status(400).json({ msg: 'Please fill all the fields' });
//         }
//         users.push(newUser);
//         res.json(users);
//         // res.render('signupdone', {
//         //     userid: newUser.id
//         // });
//         //res.redirect('/login')
//     } catch {
//         res.redirect('/sign-up')
//     }
// })


// Route to get all users from hard coded database
router.get('/allusers', (req, res) => res.json(users));

// router.post('/dashboard/:id', checkAuthenticated, (req, res) => {
//     const found = users.some(user => user.id === parseInt(req.params.id));

//     if (found) {
//         users.forEach(user => {
//             if (user.id === parseInt(req.params.id)) {
//                 usersusername = user.username;
//                 userthreads = user.threads;
//             }
//         });
//         const upvoteArray = [];
//         posts.forEach(post => {
//             upvoteArray.push(post.upvotes);
//         });
//         upvoteArray.sort((a, b) => b - a);

//         const hotposts = [];
//         upvoteArray.forEach(upvote => {
//             posts.forEach(post => {
//                 if (upvote === post.upvotes) {
//                     hotposts.push(post.title);
//                 }
//             })
//         });

//         res.render('dashboard', {
//             usersusername,
//             userthreads,
//             hotposts,
//         });
//     } else {
//         res.status(404).render('404');
//     }
// });






module.exports = router;