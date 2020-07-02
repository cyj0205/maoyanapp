// import Login from "./views/login.js";
// import Reg from "./views/reg.js";
import InfoMovies from "./views/movies/infomovies.js";
import UpdateMovies from "./views/movies/updatemovies.js";
import AddMovies from "./views/movies/addmovies.js";
import Main from "./views/main.js";

const pages = {}//用来实时的保存挂载的页面有哪些 
var routes = {
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
        },
    }
};

var router = Router(routes).configure({ recurse: 'forward' });

export default {
    init() {
        layui.use(['form', 'layer', "element", "table", "carousel", "upload"], function () {
            router.init();
            // location.hash = "/login";
            location.hash = "/admins";
        })
    }
}

