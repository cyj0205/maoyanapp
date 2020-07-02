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
import pager from "../util/pager.js";
//获取放映厅
export async function gettheaters() {
    const { data } = await axiosIns.get(
        "/api/theaters/",
        {
            params: { limit: pager.limit, page: pager.page }
        }
    )
    return data;
}
//获取影院
export async function getcinemas() {
    const { data } = await axiosIns.get("/api/Getcinema/")
    return data;
}

//删除放映厅
export async function deleteTheaters({ _id }) {
    const { data } = await axiosIns.delete("/api/theaters/" + _id)
    return data;
}
//修改放映
export async function updatetheater(_id, stuTxt) {
    console.log(_id, stuTxt);

    const { data } = await axiosIns.put(
        "/api/theaters/" + _id,
        stuTxt
    )
    return data;
}

//新增放映厅
export async function addtheater(newtheaters) {
    const { data } = await axiosIns.post(
        "/api/theaters/",
        newtheaters
    )
    console.log(data, "新增防御塔");
    return data;
}