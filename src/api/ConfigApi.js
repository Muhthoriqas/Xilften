const ConfigAPi = {
  baseUrl: "http://api.themoviedb.org/3/",
  apiKey: "4977e12304026485f2b1c9b2a7b9f832",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default ConfigAPi;
