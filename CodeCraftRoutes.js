import {Outlet, createBrowserRouter} from 'react-router-dom'
import { AboutPage, ContactPage, CoursesPage, HomePage, SignInPage, SignUpPage, Tutorial,CoursePage, VideoTutorial, Javascript,Python,Java,Html,Css,BatchOne } from '../pages'
import { Header } from '../components';
import SideBar from '../components/sidbar';

const routes = createBrowserRouter([

    {
        path:'/',
        element:<> <Header/> <SideBar/>  <Outlet/> </>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/contact',
                element:<ContactPage/>
            },
            {
                path:'/about',
                element:<AboutPage/>
            },
            {
                path:'/signIn',
                element:<SignInPage/>
            },
            // {
            //     path:'/signOut'
            // },
            {
                path:'/signUp',
                element:<SignUpPage/>
            },
            // {
            //     path:'userDetails'
            // },
            {
                path:'/courses',
                element:<CoursesPage/>
            },
            {    
                path:'/courses/:courseName',
                element:<CoursesPage/>
            },

            {
                path:'/tutorial',
                element:<Tutorial/>,
                children:[
                    {
                        path:':tutorialName',
                        element:<VideoTutorial/>
                    },
                    {
                        path:':courseName/:videoId',
                        element:<CoursePage/>
                    }
                ]
            },
            //side bar
            {
                 path:"/javascript",
                 element:<Javascript/>,
                 children:[
                    {
                        path:'batchonejs',
                        element:<BatchOne/>
                    }
                 ]
            },
            {
                path:"/python",
                element:<Python/>
            },
            {
                path:"/java",
                element:<Java/>
            },
            {
                path:"/html",
                element:<Html/>
            },
            {
                path:"/css",
                element:<Css/>
            },
         ]
    },
    <Outlet/>
])

export default routes;