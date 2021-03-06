import Base from "./base.js";
// let isExcute = false;


export default class extends Base {
    render() {
        const template =
            `
            <div class="layui-layout layui-layout-admin" id="students-main" >
            <div class="layui-header">
                <div class="layui-logo">学生管理系统</div>
                <!-- 头部区域（可配合layui已有的水平导航） -->
                <ul class="layui-nav layui-layout-right">
                    <li class="layui-nav-item">
                        <a href="javascript:;">
                            <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
                            贤心
                        </a>
                        <dl class="layui-nav-child">
                            <dd><a href="">基本资料</a></dd>
                            <dd><a href="">安全设置</a></dd>
                        </dl>
                    </li>
                    <li class="layui-nav-item"><a href="">退了</a></li>
                </ul>
            </div>
    
            <div class="layui-side layui-bg-black" style="width: 120px;">
                <div class="layui-side-scroll">
                    <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
                    <ul class="layui-nav layui-nav-tree" style="width: 120px;" lay-filter="aside">
                        <li class="layui-nav-item layui-nav-itemed">
                            <a class="" href="javascript:;">学生管理</a>
                            <dl class="layui-nav-child">
                                <dd><a data-name="学生信息" data-id="info" href="javascript:;"><i
                                            class="layui-icon layui-icon-table"
                                            style="margin-right: 5px;font-size: 16px; color: #1E9FFF;"></i>学生信息</a></dd>
                                <dd><a data-name="添加学生" data-id="add" href="javascript:;"><i
                                            class="layui-icon layui-icon-addition"
                                            style="margin-right: 5px;font-size: 16px; color: #1E9FFF;"></i>添加学生</a></dd>
                                <dd><a data-name="修改学生" data-id="update" href="javascript:;"><i
                                            class="layui-icon layui-icon-edit"
                                            style="margin-right: 5px;font-size: 16px; color: #1E9FFF;"></i>修改学生</a></dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="layui-body" style="left: 120px;">
                <!-- 内容主体区域 -->
                <div class="layui-tab" lay-allowClose="true" style="margin-top: 0px;" lay-filter="content">
                    <ul class="layui-tab-title">
                        <li class="layui-this" lay-id="first-page">网站设置</li>
                    </ul>
                    <div class="layui-tab-content">
                        <div class="layui-tab-item layui-show">内容1</div>
                    </div>
                </div>
            </div>
    
            <div class="layui-footer" style="left: 120px;">
                <!-- 底部固定区域 -->
                <marquee behavior="" direction="">© students.manage.system.com - 欢迎你的到来！</marquee>
            </div>
        </div>
           `;
        this.$el.html(template);
    }
    afterMount() {
        layui.element.render();
    }
    handler() {
        // if (isExcute) {
        //     return;
        // }
        // isExcute = true;
        const that = this;
        layui.element.on('nav(aside)', function ($elem) {
            const { id, name } = $elem[0].dataset
            if (!id) {
                return;
            }
            const existTab = $(`.layui-tab>.layui-tab-title>li[lay-id='${id}']`);
            if (!existTab.length) {
                layui.element.tabAdd('content', {
                    title: name
                    , content: `<div id="${id}"></div>`//支持传入html
                    , id
                });
            }
            location.hash = "#/students/"+id;
            
        });
        layui.element.on('tab(content)',function(data){
            location.hash = "/students"+$(this).attr("lay-id");
        })
        //暴力美学
        layui.element.on('tabdelete(content)',function(data){
            location.hash = "/students";
        })
    }
}