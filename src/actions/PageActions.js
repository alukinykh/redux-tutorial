export function setYear(year) {
    return {
        type: 'SET_YEAR',
        payload: year,
        fetching: false
    }
}

export function getPhotos(year) {

  return (dispatch) => {
    dispatch({
      type: 'GET_PHOTOS_REQUEST',
      payload: year
    })

    setTimeout(() => {
      dispatch({
        type: 'GET_PHOTOS_SUCCESS',
        payload: [1,2,3,4,5]
      })
    }, 1000)
  }
}