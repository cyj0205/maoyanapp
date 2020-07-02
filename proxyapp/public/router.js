import Main from "./views/main.js";
import InquireSeats from "./views/seats/inquireSeats.js";
import InfoMovies from "./views/movies/infomovies.js";
import UpdateMovies from "./views/movies/updatemovies.js";
import AddMovies from "./views/movies/addmovies.js";
import Schedules from "./views/schedules.js";
import Cinemas from "./views/cinemas.js";
import AddCinemas from "./views/addCinemas.js";
import UpdateCinemas from "./views/updateCinemas.js";

const pages = {}//用来实时的保存挂载的页面有哪些 
var routes = {
 '/admins': {
        on() {
            if ($("#admins-main").length === 0) {
                pages.Main = new Main("#root");
            }
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
        }
    }
};
var router = Router(routes).configure({ recurse: 'forward' });

export default {
    init() {
        layui.use(['form', 'layer', "element", "table", "carousel", "upload"], function () {
            router.init();
            location.hash = "/admins";
        })
    }
}