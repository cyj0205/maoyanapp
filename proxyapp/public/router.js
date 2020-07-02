
import Main from "./views/main.js";
import InquireSeats from "./views/seats/inquireSeats.js";

const pages = {}//用来实时的保存挂载的页面有哪些 
var routes = {
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
        },
    }
};
var router = Router(routes).configure({ recurse: 'forward' });
export default {
    init() {
        layui.use(['form', 'layer', "element", "table", "carousel", "upload"], function () {
            router.init();
            location.hash = "#/admins";
        })
    }
}

