import Login from "./views/login.js";
import Reg from "./views/reg.js";
import Infoadmins from "./views/admins/infoadmins.js";
import Updateadmins from "./views/admins/updateadmins.js";
import Addadmins from "./views/admins/addadmins.js";
import Main from "./views/main.js";
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
            // console.log('jinlaile!!!!!')
            // console.log($('#infoadmins'),'aaabbbccc')
            const $wrap = $("#infoadmins");
            if ($wrap.length === 1) {//首先包裹层（也就是挂载点）必须存在
                // console.log(123321123321)
                if ($wrap.find("*").length === 0) {//其次包裹层（也就是挂载点）内部没有元素
                    pages.Infoadmins = new Infoadmins("#infoadmins");
                } else {//如果包裹层（也就是挂载点）内部已经存在元素，不需要重新挂载，直接刷新列表即可
                    // console.log('aaabbbcccddd')
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
            // console.log('jinlaile!!!!!')
            // console.log($('#infoadmins'),'aaabbbccc')
            const $wrap = $("#infousers");
            if ($wrap.length === 1) {//首先包裹层（也就是挂载点）必须存在
                // console.log(123321123321)
                if ($wrap.find("*").length === 0) {//其次包裹层（也就是挂载点）内部没有元素
                    pages.Infousers = new Infousers("#infousers");
                } else {//如果包裹层（也就是挂载点）内部已经存在元素，不需要重新挂载，直接刷新列表即可
                    // console.log('aaabbbcccddd')
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
    },
};

var router = Router(routes).configure({ recurse: 'forward' });

export default {
    init() {
        layui.use(['form', 'layer', "element", "table", "carousel", "upload"], function () {
            router.init();
            location.hash = "/admins";
            // location.hash = "/students";
        })
    }
}

