import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA } from '../constants'  // 引入action类型名常量
// import 'whatwg-fetch'  // 可以引入fetch来进行Ajax
import fetch from 'isomorphic-fetch'
// const  jsonDatas = new Request('../../data.json');
// import jsonData from "../../data.json"
export const increase = n => {
	return {
		type:INCREASE,
		amount:n
	}
}

export const decrease = n => {
	return {
		type:DECREASE,
		amount:n
	}
}

export const getSuccess = (json) => {
	return {
		type:GETSUCCESS,
		json
	}
}

export const refreshData = () => {
	return {
		type:REFRESHDATA
	}
}

function fetchPosts(){
	return dispatch=>{
		return fetch('data.json')
		.then(response => {
			return response.json()
		}).then((data)=>{
			console.log(data);
			dispatch(getSuccess(data))
		})
		.catch((e)=>{
			console.log(e.message)
		})
	}
}

export function fetchPostsIfNeeded(){
	return (dispatch,getState)=>{
		return dispatch(fetchPosts())
	}
}