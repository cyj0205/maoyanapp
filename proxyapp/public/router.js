import Add from "./views/Theaters/add.js";
import Main from "./views/main.js";
import Theaters from "./views/Theaters/theaters.js";
import Update from "./views/Theaters/update.js";
 
const pages = {}//用来实时的保存挂载的页面有哪些 
var routes = {
    '/admins': {
        on() {
            if ($("#admins-main").length === 0) {
                pages.Main = new Main("#root");
            }
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
      "/updatetheaters":()=>{
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
            // location.hash = "/login";
            location.hash = "/admins";
        })
    }
}

