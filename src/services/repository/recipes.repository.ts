import axiosInstance from "../axios-instance"

export const findRecipes = () => {
  return axiosInstance.get('/search.php?s=Arrabiata')
}