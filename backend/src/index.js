import express from 'express';
import cors from 'cors';
import uuidv4 from 'uuid/v4';

import 'dotenv/config';

import models, { sequelize } from './models';
import routes from './routes';


const app = express();
const PORT = 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(async (req, res, next) => {
    req.context = {
        models,
        me: await models.User.findByLogin('kentah'), 
    };
    next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/posts', routes.posts);
app.use('/tags', routes.tags);


const eraseDatabaseOnSync = false;

sequelize.sync().then(() => {
    //if(eraseDatabaseOnSync) {
    //    createUsersWithPosts();
    //}

    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
    });
});

//const createUsersWithPosts = async () => {
//    await models.User.create(
//        {
//            username: 'kentah',
//            posts: [
//                {
//                    title: 'Worked on this project',
//                    content: 'All the things said about working on this project',
//                },
//            ],
//        },
//        {
//            include: [models.Posts],
//        },
//    );
//    await models.User.create(
//        {
//            username: 'theCreator',
//            posts: [
//                {
//                    title: 'Happy to release...',
//                    content: 'This will show how happy we are to release.'
//                },
//                {
//                    title: 'Published complete....',
//                    content: 'Totally complete now.....or is it?'
//                },
//            ],
//        },
//        {
//            include: [models.Posts],
//        },
//    );
//};

//app.listen(process.env.PORT, () => 
//    console.log(`Server running on port: ${process.env.PORT}`),
//);
//
