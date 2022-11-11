import axios from "@/util/request";

export function getNavData(){
    return axios({
        method:'get',
        url:`/cMenuTest/findMenu`
    })
}