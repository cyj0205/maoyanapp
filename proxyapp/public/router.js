<<<<<<< HEAD
// import Login from "./views/login.js";
// import Reg from "./views/reg.js";
import InfoMovies from "./views/movies/infomovies.js";
import UpdateMovies from "./views/movies/updatemovies.js";
import AddMovies from "./views/movies/addmovies.js";
=======
<<<<<<< HEAD

>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
import Main from "./views/main.js";
import InquireSeats from "./views/seats/inquireSeats.js";

const pages = {}//用来实时的保存挂载的页面有哪些 
var routes = {
<<<<<<< HEAD
    // '/login': () => {
    //     pages.Login = new Login("#root");
    // },
    // '/reg': () => {
    //     pages.Reg = new Reg("#root");
    // },
    '/admins': {
        on() {
            if ($("#admins-main").length === 0) {
                pages.Main = new Main("#root");
            }
        },
        "/infomovies": () => {
            const $wrap = $("#infomovies");
            if ($wrap.length === 1) {//首先包裹层（也就是挂载点）必须存在
                if ($wrap.find("*").length === 0) {//其次包裹层（也就是挂载点）内部没有元素
                    pages.InfoMovies = new InfoMoviess("#infomovies");
                } else {//如果包裹层（也就是挂载点）内部已经存在元素，不需要重新挂载，直接刷新列表即可
                    pages.InfoMovies.reloadList();
                }
            } else {//包裹层（也就是挂载点）不存在，模拟点击事件（点击事件中有创建包裹层（也就是挂载点）的代码）
                $("a[data-id='infomovies']")[0].click();
                pages.InfoMovies = new InfoMovies("#infomovies");
            }
            layui.element.tabChange('content', "infomovies");
        },
        "/addmovies": () => {
            // const $wrap = $("#add");
            // if ($wrap.length === 1) {
            //     if ($wrap.find("*").length === 0) {
            //         pages.Add = new Add("#add");
            //     }
            // } else {
            //     $("a[data-id='add']")[0].click();
            //     pages.Add = new Add("#add");
            // }
            // layui.element.tabChange('content', "add");
            pages.Add = new AddMovies("#test");
        },
        "/updatemovies": () => {
            // const $wrap = $("#update");
            // if ($wrap.length === 1) {
            //     if ($wrap.find("*").length === 0) {
            //         pages.Update = new Update("#update");
            //     }
            // } else {
            //     $("a[data-id='update']")[0].click();
            //     pages.Update = new Update("#update");
            // }
            // layui.element.tabChange('content', "update");
            pages.Update = new UpdateMovies("#test");
=======
    '/admins': {
        on() {
            if ($("#admins-main").length === 0) {
               new Main("#root");
            }
        }, 
        "/inquireSeats": () => {
            const $wrap = $("#inquireSeats");
            if ($wrap.length === 1) {
                if ($wrap.find("*").length === 0) {
                    pages.InquireSeats = new InquireSeats("#inquireSeats");
                }
            } else {
                $("a[data-id='inquireSeats']")[0].click();
                pages.InquireSeats = new InquireSeats("#inquireSeats");
            }
            layui.element.tabChange('content', "inquireSeats");
=======
// import Login from "./views/login.js";
// import Reg from "./views/reg.js";
// import Info from "./views/students/info.js";

import UpdateSchedules from "./views/updateSchedules.js";
import AddSchedules from "./views/addSchedules.js";

import Schedules from "./views/schedules.js";

// import Update from "./views/students/update.js";
// import Add from "./views/students/add.js";
import Main from "./views/main.js";
import Cinemas from "./views/cinemas.js";
import AddCinemas from "./views/addCinemas.js";
import UpdateCinemas from "./views/updateCinemas.js";



const pages = {}//用来实时的保存挂载的页面有哪些 
var routes = {

//     // '/login': () => {
//     //     pages.Login = new Login("#root");
//     // },

//     // '/reg': () => {
//     //     pages.Reg = new Reg("#root");
//     // },

    // '/login': () => {
    //     pages.Login = new Login("#root");
    // },
    // '/reg': () => {
    //     pages.Reg = new Reg("#root");
    // },

    '/admins': {
        on() {
            if ($("#admins-main").length === 0) {
                pages.Main = new Main("#root");
            }
        },
        // "/info": () => {
        //     const $wrap = $("#info");
        //     if ($wrap.length === 1) {//首先包裹层（也就是挂载点）必须存在
        //         if ($wrap.find("*").length === 0) {//其次包裹层（也就是挂载点）内部没有元素
        //             pages.Info = new Info("#info");
        //         } else {//如果包裹层（也就是挂载点）内部已经存在元素，不需要重新挂载，直接刷新列表即可
        //             pages.Info.reloadList();
        //         }
        //     } else {//包裹层（也就是挂载点）不存在，模拟点击事件（点击事件中有创建包裹层（也就是挂载点）的代码）
        //         $("a[data-id='info']")[0].click();
        //         pages.Info = new Info("#info");
        //     }
        //     layui.element.tabChange('content', "info");
        // },

        "/schedules": () => {
            // console.log('jinru schedules')
            const $wrap = $("#schedules");
            if ($wrap.length === 1) {//首先包裹层（也就是挂载点）必须存在
                if ($wrap.find("*").length === 0) {//其次包裹层（也就是挂载点）内部没有元素
                    pages.Schedules = new Schedules("#schedules");
                } else {//如果包裹层（也就是挂载点）内部已经存在元素，不需要重新挂载，直接刷新列表即可
                    pages.Schedules.reloadList();
                }
            } else {//包裹层（也就是挂载点）不存在，模拟点击事件（点击事件中有创建包裹层（也就是挂载点）的代码）
                $("a[data-id='schedules']")[0].click();
                pages.Schedules = new Schedules("#schedules");
            }
            layui.element.tabChange('content', "schedules");
        },
        // "/add": () => {
        //     const $wrap = $("#add");
        //     if ($wrap.length === 1) {
        //         if ($wrap.find("*").length === 0) {
        //             pages.Add = new Add("#add");
        //         }
        //     } else {
        //         $("a[data-id='add']")[0].click();
        //         pages.Add = new Add("#add");
        //     }
        //     layui.element.tabChange('content', "add");
        // },
        // "/update": () => {
        //     const $wrap = $("#update");
        //     if ($wrap.length === 1) {
        //         if ($wrap.find("*").length === 0) {
        //             pages.Update = new Update("#update");
        //         }
        //     } else {
        //         $("a[data-id='update']")[0].click();
        //         pages.Update = new Update("#update");
        //     }
        //     layui.element.tabChange('content', "update");
        // },
        "/cinemas": () => {
            const $wrap = $("#cinemas");
            if ($wrap.length === 1) {
                if ($wrap.find("*").length === 0) {
                    pages.Cinemas = new Cinemas("#cinemas");
                }
            } else {
                $("a[data-id='cinemas']")[0].click();
                pages.Cinemas = new Cinemas("#cinemas");
            }
            layui.element.tabChange('content', "cinemas");
        },
        "/addCinemas": () => {
            pages.AddCinemas = new AddCinemas("#test");
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
        },
        "/updateCinemas": () => {
            pages.UpdateCinemas = new UpdateCinemas("#test");
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
        },

        // "/addSchedules": () => {
        //     pages.AddSchedules = new AddSchedules("#test");
        // },
        
        // "/update": () => {
        //     pages.UpdateSchedules = new UpdateSchedules("#test");
        // },
    }
};
var router = Router(routes).configure({ recurse: 'forward' });
export default {
    init() {
        layui.use(['form', 'layer', "element", "table", "carousel", "upload"], function () {
            router.init();
<<<<<<< HEAD
            // location.hash = "/login";
            location.hash = "/admins";
=======
<<<<<<< HEAD
            location.hash = "#/admins";
=======
            // location.hash = "/login";
            location.hash = "/admins";
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
        })
    }
}

