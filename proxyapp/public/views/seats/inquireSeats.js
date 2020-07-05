import Base from "../base.js"
import { getSeats, updateSeats, getCinemas, getTheaters, getBadSeats, deleteBadSeats, addBadSeats } from "../../service/seats.js";
let rowFirst,colFirst,theatersSeatsId;
export default class extends Base {
  
  render() {
    const template =
      `
      <div style="display:flex;  justify-content: center;">
            <form class="layui-form layui-form-pane">
            <div class="layui-form-item">
            <div class="layui-input-block">
              <button class="layui-btn layui-btn-radius layui-btn-primary" lay-submit lay-filter="seatsChange" id="seatsChange">添加或编辑座位</button> 
            </div>
          </div>
            <div class="layui-form-item">
            <label class="layui-form-label layui-bg-red">影院</label>
            <div class="layui-input-block" style="width:300px;">
              <select name="cinemasSeats" lay-verify="required" id="cinemasSelect"  lay-filter="cinemasSelect">  
              <option value="">请选择 </option>
              </select>
            </div>
          </div> <div class="layui-form-item" style="">
          <label class="layui-form-label layui-bg-red">放映厅</label>
          <div class="layui-input-block" style="width:300px">
            <select name="theatersSeats" lay-verify="required" id="theatersSeats"  lay-filter="theatersSeats">
              <option value=""></option>
            </select>
          </div>
        </div>
 
</form>
</div>
<div style="margin-left:20px;margin-top:50px" id="seatsAll" >
<div style="margin-bottom:20px; display:none" id="seatsHint">
<h3 style="display:inline-block">点击座位可以更改状态:</h3>
<img src="../../images/seatsImages/seat16B.png" style="margin-left:20px;margin-right:5px"><span>正常</span>
<img src="../../images/seatsImages/seat16G.png"  style="margin-left:10px;margin-right:5px"><span>维修中</span>
</div>
<table id="seats-list" style="margin-left:50px;margin-top:50px"></table>
</div>
                  `;
    this.$el.html(template);
  }
  afterMount() {
    (async function () {
      const dataCinemas = await getCinemas();
      let str = `<option  id="selCinema">请选择</option>`;
      for (let i = 0; i < dataCinemas.length; i++) {
        str += ` <option value="${dataCinemas[i]._id}" data-cinemasId="${dataCinemas[i]._id}">${dataCinemas[i].name}</option>`
      }
      $("#cinemasSelect").html(`${str}`);
      layui.form.render();
    })()
  }
  handler() {
    //第一个下拉栏监听========================================================================================================================
    layui.form.on('select(cinemasSelect)', function (data) {
      let id = data.value;
      (async function () {
        let str = `<option  id="selTheater">请选择</option>`;
        const dataTheaters = await getTheaters(id);
        for (let i = 0; i < dataTheaters.length; i++) {
          str += ` <option value="${dataTheaters[i]._id}" data-cinemasId="${dataTheaters[i]._id}">${dataTheaters[i].name}</option>`
        }
        $("#theatersSeats").html(`${str}`);
        layui.form.render();
      })();
      return false;
    });
    //第二个下拉栏监听=======================================================================================================================
    layui.form.on('select(theatersSeats)', function (data) {
      $("#seatsInquire").attr("disabled", false);
      theatersSeatsId = data.value;
      (async function () {
        theatersSeatsId = `ObjectId("${theatersSeatsId}")`;
        const data = await getSeats(theatersSeatsId);
        rowFirst = `${data[0].row}`;
        colFirst = `${data[0].col}`;
        $("#rowSeats").val(`${data[0].row}`);
        $("#colSeats").val(`${data[0].col}`);
        layui.form.render();
      })();
      $("#seatsHint").css({
        "display":"block"
      })
      $("#seatsHint").html(`<h3 style="display:inline-block">点击座位可以更改状态:</h3>
      <img src="../../images/seatsImages/seat16B.png" style="margin-left:20px;margin-right:5px"><span>正常</span>
      <img src="../../images/seatsImages/seat16G.png"  style="margin-left:10px;margin-right:5px"><span>维修中</span>`
      )
      let arr = [];
      (async function () {
        const { data } = await getBadSeats(theatersSeatsId);
        for (let i = 0; i < data.length; i++) {
          arr.push(data[i].dataId)
        }
      })();
      (async function () {
        const data = await getSeats(theatersSeatsId);//获取座位数据库数据
        let str = "";
        for (let i = 1; i <= data[0].row; i++) {
          str += `<tr>`;
          for (let n = 1; n <= data[0].col; n++) {
            let F = false;
            for (let item of arr) {
              if (item == `${i}-${n}`) {
                F = true;
              }
            }
            if (F) {
              str += `<td style="width:40px;height:40px"><img src="../../images/seatsImages/seat4.png"  data-id="${i}-${n}"></td>`
            } else {
              str += `<td style="width:40px;height:40px"><img src="../../images/seatsImages/seat1.png"  data-id="${i}-${n}"></td>`
            }
          }
          str += `</tr>`;
        }
        document.querySelector("#seats-list").innerHTML = `${str}`;
        $("#seatsInquire").attr("disabled", true);
      })();
      return false;
    });


    //座位修改点击==========================================================================================================================
    $("#seats-list").on("click", "td", function (e) {
      let dataId = e.target.dataset.id;
      if (e.target.src == "http://localhost:3003/images/seatsImages/seat1.png") {
        $(e.target).attr("src", "../../images/seatsImages/seat4.png");
        (async function () {
          let addObj = {};
          addObj.dataId = dataId;
          addObj.theatersSeatsId = theatersSeatsId;
          const isChange = await addBadSeats(addObj);
          if (isChange) {
            layer.msg("设置成功")
          } else {
            layer.msg("设置失败")
          }
        })()
      } else if (e.target.src == "http://localhost:3003/images/seatsImages/seat4.png") {
        $(e.target).attr("src", "../../images/seatsImages/seat1.png");
        (async function () {
          const isDelete = await deleteBadSeats(dataId, theatersSeatsId);
          if (isDelete) {
            layer.msg("删除成功")
          } else {
            layer.msg("删除失败")
          }
        })()
      }
    })


    //编辑按钮监听>>>>========================================================================================================================
    layui.form.on('submit(seatsChange)', function (data) {
      // $("#seatsHint").html("");
      // $("#seats-list").html("");
      layer.open({
        type: 1,
        anim: 5,
        area: ['500px', '500px'],
        content: `<form class="layui-form layui-form-pane" action="" style="margin-left:20px;margin-top:40px">
  
<div class="layui-form-item">
<label class="layui-form-label layui-bg-red">行</label>
<div class="layui-input-block" style="width:350px">
<input type="text" name="rowSeats" id="rowSeats" lay-filter="rowSeats" required  lay-verify="required" placeholder="请输入行数" autocomplete="off" class="layui-input">
</div>
</div>
<div class="layui-form-item">
<label class="layui-form-label layui-bg-red">列</label>
<div class="layui-input-block" style="width:350px">
<input type="text" name="colSeats" id="colSeats" lay-filter="colSeats" required lay-verify="required" placeholder="请输入列数" autocomplete="off" class="layui-input">
</div>
</div>
<div class="layui-form-item">
<div class="layui-input-block">
<button class="layui-btn layui-bg-red" lay-submit lay-filter="updateSeats-btn" id="updateSeats-btn">立即提交</button>
<button type="reset" class="layui-btn layui-btn-primary">重置</button>
</div>
</div>
</form>`//这里content是一个普通的String
      });
      layui.form.verify({
        row: [
          /^[\S]{1,2}$/
        ],
        col: [
          /^[\S]{1,2}$/
        ]
      });
          $("#rowSeats").val(`${rowFirst}`)
          $("#colSeats").val(`${colFirst}`)
      //提交按钮监听================================================================
      layui.form.on('submit(updateSeats-btn)', function (data) {
        let Obj = {};
        let changedRow = $("#rowSeats").val();
        let changedCol = $("#colSeats").val();
        theatersSeatsId = `${theatersSeatsId}`;
        Obj.row = changedRow;
        Obj.col = changedCol;
        Obj.theaterId = theatersSeatsId;
        (async function () {
          const data = await updateSeats(Obj);//获取座位数据库数据
          if (data) {
            layer.msg("修改成功")
          } else {
            layer.mag("修改失败")
          }
          layer.closeAll();
          (async function () {
            const data = await getSeats(theatersSeatsId);
            rowFirst = `${data[0].row}`;
            colFirst = `${data[0].col}`;
            $("#rowSeats").val(`${data[0].row}`);
            $("#colSeats").val(`${data[0].col}`);
            layui.form.render();
          })();
          $("#seatsHint").css({
            "display":"block"
          })
          $("#seatsHint").html(`<h3 style="display:inline-block">点击座位可以更改状态:</h3>
          <img src="../../images/seatsImages/seat16B.png" style="margin-left:20px;margin-right:5px"><span>正常</span>
          <img src="../../images/seatsImages/seat16G.png"  style="margin-left:10px;margin-right:5px"><span>维修中</span>`
          )
          let arr = [];
          (async function () {
            const { data } = await getBadSeats(theatersSeatsId);
            for (let i = 0; i < data.length; i++) {
              arr.push(data[i].dataId)
            }
          })();
          (async function () {
            const data = await getSeats(theatersSeatsId);//获取座位数据库数据
            let str = "";
            for (let i = 1; i <= data[0].row; i++) {
              str += `<tr>`;
              for (let n = 1; n <= data[0].col; n++) {
                let F = false;
                for (let item of arr) {
                  if (item == `${i}-${n}`) {
                    F = true;
                  }
                }
                if (F) {
                  str += `<td style="width:40px;height:40px"><img src="../../images/seatsImages/seat4.png"  data-id="${i}-${n}"></td>`
                } else {
                  str += `<td style="width:40px;height:40px"><img src="../../images/seatsImages/seat1.png"  data-id="${i}-${n}"></td>`
                }
              }
              str += `</tr>`;
            }
            document.querySelector("#seats-list").innerHTML = `${str}`;
            $("#seatsInquire").attr("disabled", true);
          })();
        })();
        return false;
      })
      return false;
    })
    return false;
  }
}
