import ListingPageView from "./ListingPageView"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { listItem } from '../../Services/ListingServices';
import { updateList } from "../../Core/Reducer";
const ListingPageContainer=()=>{

    const postList = useSelector((state) => state.updateList.list)
  const dispatch = useDispatch()
    const loadList=page=>{
        listItem(page).then(res=>{
            const newList= res?.page["content-items"]?.content
            dispatch(updateList(newList))
        })
    }
console.log(postList)
    const props= {
        postList:postList||[],

        loadList
    }
    return <ListingPageView {...props} />
}

export default ListingPageContainer