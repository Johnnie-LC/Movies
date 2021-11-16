import imageDummy from './image/image_dummy.jpeg'

export const getMoviesImg = (path, width) =>
  path ? `https://image.tmdb.org/t/p/w${width}${path}` : imageDummy
