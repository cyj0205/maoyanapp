import Base from "./base.js";
export default class extends Base {
    render() {
<<<<<<< HEAD
        const template = `
            <div class="layui-layout layui-layout-admin" id="admins-main">
            <div class="layui-header">
                <div class="layui-logo">猫眼管理员系统</div>
=======
        const template =
            `
            <div class="layui-layout layui-layout-admin" id= "students-main" >
            <div class="layui-header">
<<<<<<< HEAD
                <div class="layui-logo">猫眼后台管理系统</div>
=======
<<<<<<< HEAD
                <div class="layui-logo">猫眼电影</div>
=======
                <div class="layui-logo">猫眼电影后台管理系统</div>
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee
                <!-- 头部区域（可配合layui已有的水平导航） -->
                <ul class="layui-nav layui-layout-right">
                    <li class="layui-nav-item">
                        <a href="javascript:;">
                            <img src="http://t.cn/RCzsdCq" class="layui-nav-img">贤心</a>
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
<<<<<<< HEAD
                            <a class="" href="javascript:;">功能选择</a>
                            <dl class="layui-nav-child">
                                <dd><a data-name="管理员管理" data-id="infoadmins" href="javascript:;"><i
                                            class="layui-icon layui-icon-table"
                                            style="margin-right: 5px;font-size: 16px; color: #1E9FFF;"></i>管理员管理</a></dd>
                                <dd><a data-name="前台用户管理" data-id="infousers" href="javascript:;"><i
                                            class="layui-icon layui-icon-table"
                                            style="margin-right: 5px;font-size: 16px; color: #1E9FFF;"></i>前台用户管理</a></dd>
=======
<<<<<<< HEAD
                            <a class="" href="javascript:;">影片管理</a>
                            <dl class="layui-nav-child">
<<<<<<< HEAD

                                <dd><a data-name="放映厅" data-id="theaters" href="javascript:;"><i
                                            class="layui-icon layui-icon-edit"
                                            style="margin-right: 5px;font-size: 16px; color: #1E9FFF;"></i>放映厅</a></dd>
=======
                                <dd><a data-name="影片信息" data-id="infomovies" href="javascript:;"><i
                                            class="layui-icon layui-icon-table"
                                            style="margin-right: 5px;font-size: 16px; color: #1E9FFF;"></i>影片信息</a></dd>
                               
                                        
=======
                            <a class="" href="javascript:;">功能选择</a>
                            <dl class="layui-nav-child">
<<<<<<< HEAD
                            
                                <dd><a data-name="座位查询" data-id="inquireSeats" href="javascript:;"><i
                                            class="layui-icon layui-icon-addition"
                                            style="margin-right: 5px;font-size: 16px; color: #1E9FFF;"></i>座位查询</a></dd>
                                                        </dl>
=======
                                <dd><a data-name="排片管理" data-id="schedules" href="javascript:;"><i
                                            class="layui-icon layui-icon-edit"
                                            style="margin-right: 5px;font-size: 16px; color: #1E9FFF;"></i>排片管理</a>
                                </dd>
                                
                                <dd>
                                    <a data-name="影院管理" data-id="cinemas" href="javascript:;">
                                    <i class="layui-icon layui-icon-edit"  style="margin-right: 5px;font-size: 16px; color: #1E9FFF;"></i>影院管理
                                    </a>
                                </dd>
                                            

>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee
                            </dl>
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
                        </li>
                    </ul>
                </div>
            </div>
    
<<<<<<< HEAD
            <div class="layui-body" style="left: 120px;" id="test">
=======
<<<<<<< HEAD
            <div class="layui-body" style="left: 120px;" id="test">
=======
<<<<<<< HEAD
            <div class="layui-body" style="left: 120px;" id="test" >
=======

            <div class="layui-body" style="left: 120px;" id="test">

            <div class="layui-body" style="left: 120px;" id="test" >

>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee
                <!-- 内容主体区域 -->
                <div class="layui-tab" lay-allowClose="true" style="margin-top: 0px;" lay-filter="content" >
                    <ul class="layui-tab-title">
                        <li class="layui-this" lay-id="first-page">网站设置</li>
                    </ul>
                    <div class="layui-tab-content">
<<<<<<< HEAD
                        <div class="layui-tab-item layui-show"><div class="layui-carousel" id="pics">
                      
                        </div></div>
=======
                        <div class="layui-tab-item layui-show">
                        
                        </div>
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee
                    </div>
                </div>
            </div>
    
            <div class="layui-footer" style="left: 120px;">
                <!-- 底部固定区域 -->
                <marquee behavior="" direction="" style="color:red">略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略略</marquee>
            </div>
        </div>
           `;
        this.$el.html(template);
    }
    afterMount() {
        layui.element.render();
    }
    handler() {
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
<<<<<<< HEAD
            location.hash = "#/admins/" + id;

        });
        layui.element.on('tab(content)', function (data) {
            location.hash = "/admins" + $(this).attr("lay-id");
        })
        //暴力美学
        layui.element.on('tabdelete(content)', function (data) {
=======
<<<<<<< HEAD
            location.hash = "#/admins/" + id;
=======
<<<<<<< HEAD
            location.hash = "#/admins/" + id;

        });
        layui.element.on('tab(content)', function (data) {
            location.hash = "/admins" + $(this).attr("lay-id");
        })
        //暴力美学
        layui.element.on('tabdelete(content)', function (data) {
=======
<<<<<<< HEAD
            location.hash = "#/admins/"+`${id}`;
=======
            location.hash = "#/admins/"+id;
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
            
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
        });
        layui.element.on('tab(content)',function(data){
<<<<<<< HEAD
            location.hash = "/admins" + $(this).attr("lay-id");
        })
        //暴力美学
        layui.element.on('tabdelete(content)',function(data){
=======
            location.hash = "/admins"+$(this).attr("lay-id");
        })
        //暴力美学
        layui.element.on('tabdelete(content)',function(data){
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee
            location.hash = "/admins";
        })
    }
}




