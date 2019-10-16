export const addloaderForShowMore = (button)=>{
    $(button).addClass('loader').attr('disabled',true)
};
export const clearLoaderForShowMore = (button)=>{
    $(button).removeClass('loader').attr('disabled',false)
};
export const clearLoaders = (collection) => { //
    $(collection).slideUp(600).hide(200)
};
