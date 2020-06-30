// import Login from "./views/login.js";
// import Reg from "./views/reg.js";
// import Info from "./views/students/info.js";
import UpdateSchedules from "./views/updateSchedules.js";
import AddSchedules from "./views/addSchedules.js";
import Main from "./views/main.js";
import Schedules from "./views/schedules.js";


const pages = {}//用来实时的保存挂载的页面有哪些 
var routes = {
//     // '/login': () => {
//     //     pages.Login = new Login("#root");
//     // },

//     // '/reg': () => {
//     //     pages.Reg = new Reg("#root");
//     // },
    '/admins': {
        on() {
            if ($("#students-main").length === 0) {
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
            // location.hash = "/login";
            location.hash = "/admins";
        })
    }
}

