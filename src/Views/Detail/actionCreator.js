function HideNavbarActionCreator(){
    return {
        type:"HideMaoYanNavBar", //type属性 固定
        payload:false // payloadd 属性 非固定
    }
}

function ShowNavbarActionCreator(){
    return {
        type:"ShowMaoYanNavBar", //type属性 固定
        payload:true // payloadd 属性 非固定
    }
}

export {HideNavbarActionCreator,ShowNavbarActionCreator}