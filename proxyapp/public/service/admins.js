let axiosIns;
function useToken() {
    axiosIns = axios.create({
        baseURL: 'http://' + location.host,
        timeout: 1000,
        headers: { "Authorization": `Bearer ${localStorage.user_token}` }
    });
};
useToken();
window.onstorage = function ({ key, newValue }) {
    if (key === "user_token") {
        useToken();
    }
}
// import pager from "../util/pager.js";66

//渲染
export async function getadmin(userTxt) {
    const { data } = await axiosIns.get(
        "/api/admins/",
        {
            params: { limit: pager.limit, page: pager.page }
        }
    )
    return data;
}


//删除
export async function delAdmin({ _id }) {
    const { data } = await axiosIns.delete("/api/admins/" + _id)
    return data;
}


//修改
export async function updateAdmin(stuTxt, _id) {
    const { data } = await axiosIns.put(
        "/api/admins/" + _id,
        stuTxt
    );
    return data;
}


//添加
export async function addAdmin(AdminsTxt) {
    const { data } = await axiosIns.post(
        "/api/admins/",
        AdminsTxt
    )
    return data;
}

export function upload(url, keyName, file) {
    //url:上传的服务器接口。
    //keyName：上传的文件的key。
    //file：上传的文件（由input[type='file']获取）
    return new Promise(r => {
        const fd = new FormData();
        fd.append(keyName, file);//键的名字必须与服务器对应
        $.ajax({
            url:"/admins/upload",
            type: "post",//*** 
            data: fd,//*** 
            cache: false,//上传文件无需缓存
            contentType: false,//*** //数据的解析类型，不需要，我们上传2进制数据，没有类型
            processData: false,//*** //用于对data参数进行序列化处理 这里必须false
            success(data) {
                r(data)
            }
        })
    })
}

export async function deletePic(file) {
    const { data } = await axiosIns.post(
        "/admins/deletePic",
        {file}
        )
    return data;
}

export async function searchAdmins(condition) {
    const {data} = await axiosIns.post(
        "/api/admins/searchAdmins",
        condition
    )
    return data;
}