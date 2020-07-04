import Main from "./views/main.js";
import InquireSeats from "./views/seats/inquireSeats.js";
import InfoMovies from "./views/movies/infomovies.js";
import UpdateMovies from "./views/movies/updatemovies.js";
import AddMovies from "./views/movies/addmovies.js";
import Add from "./views/Theaters/add.js";
import Theaters from "./views/Theaters/theaters.js";
import Update from "./views/Theaters/update.js";
import Schedules from "./views/schedules.js";
import Cinemas from "./views/cinemas.js";
import AddCinemas from "./views/addCinemas.js";
import UpdateCinemas from "./views/updateCinemas.js";

import Login from "./views/login.js";
import Reg from "./views/reg.js";
import Infoadmins from "./views/admins/infoadmins.js";
import Updateadmins from "./views/admins/updateadmins.js";
import Addadmins from "./views/admins/addadmins.js";

import Infousers from "./views/users/infousers.js";
import Updateusers from "./views/users/updateusers.js";
import Addusers from "./views/users/addusers.js";


const pages = {}//用来实时的保存挂载的页面有哪些 
var routes = {
    '/login': () => {
        pages.Login = new Login("#root");
    },
    '/reg': () => {
        pages.Reg = new Reg("#root");
    },
    '/admins': {
        on() {
            if ($("#admins-main").length === 0) {
                pages.Main = new Main("#root");
            }
        },

        "/infoadmins": () => {
            const $wrap = $("#infoadmins");
            if ($wrap.length === 1) {//首先包裹层（也就是挂载点）必须存在
                if ($wrap.find("*").length === 0) {//其次包裹层（也就是挂载点）内部没有元素
                    pages.Infoadmins = new Infoadmins("#infoadmins");
                } else {//如果包裹层（也就是挂载点）内部已经存在元素，不需要重新挂载，直接刷新列表即可
                    // pages.Infoadmins.reloadList();
                    pages.Infoadmins = new Infoadmins("#infoadmins");
                }
            } else {//包裹层（也就是挂载点）不存在，模拟点击事件（点击事件中有创建包裹层（也就是挂载点）的代码）
                $("a[data-id='infoadmins']")[0].click();
                pages.Infoadmins = new Infoadmins("#infoadmins");
            }
            layui.element.tabChange('content', "infoadmins");
        },
        "/infousers": () => {
            const $wrap = $("#infousers");
            if ($wrap.length === 1) {//首先包裹层（也就是挂载点）必须存在
                if ($wrap.find("*").length === 0) {//其次包裹层（也就是挂载点）内部没有元素
                    pages.Infousers = new Infousers("#infousers");
                } else {//如果包裹层（也就是挂载点）内部已经存在元素，不需要重新挂载，直接刷新列表即可
                    pages.Infousers.reloadList();
                    // pages.Infousers = new Infousers("#infousers");
                }
            } else {//包裹层（也就是挂载点）不存在，模拟点击事件（点击事件中有创建包裹层（也就是挂载点）的代码）
                $("a[data-id='infousers']")[0].click();
                pages.Infousers = new Infousers("#infousers");
            }
            layui.element.tabChange('content', "infousers");
        },
        "/addAdmins": () => {
            pages.Add = new Addadmins("#test");
        },
        "/updateAdmins": () => {
            pages.Update = new Updateadmins("#test");
        },
        "/addUsers": () => {
            pages.Add = new Addusers("#test");
        },
        "/updateUsers": () => {
            pages.Update = new Updateusers("#test");
        },
        "/schedules": () => {
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
        },
        "/updateCinemas": () => {
            pages.UpdateCinemas = new UpdateCinemas("#test");

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
            pages.Add = new AddMovies("#test");
        },
        "/updatemovies": () => {
            pages.Update = new UpdateMovies("#test");
        },
        "/theaters": () => {
            const $wrap = $("#theaters");
            if ($wrap.length === 1) {
                if ($wrap.find("*").length === 0) {
                    pages.Theaters = new Theaters("#theaters");
                }
            } else {
                $("a[data-id='theaters']")[0].click();
                pages.Theaters = new Theaters("#theaters");
            }
            layui.element.tabChange('content', "theaters");
        },
        "/updatetheaters": () => {
            pages.Update = new Update("#test");
        },

        "/addtheaters": () => {
            // const $wrap = $("#add");
            pages.Add = new Add("#test");
        }

    }
};
var router = Router(routes).configure({ recurse: 'forward' });

export default {
    init() {
        layui.use(['form', 'layer', "element", "table", "carousel", "upload"], function () {
            router.init();
            location.hash = "/login";
        })
    }
}