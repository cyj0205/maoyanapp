let axiosIns;
function useToken() {
   axiosIns = axios.create({
        baseURL: 'http://'+location.host,
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

export async function getClazzs() {
    const {data} = await axiosIns.get("/api/clazzs/");
    return data;
}