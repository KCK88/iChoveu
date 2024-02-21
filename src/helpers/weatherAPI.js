// Remova os comentários a medida que for implementando as funções
const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();
  if (!response.ok || !data.length) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }
  return data;
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
// Swal.fire({
  // icon: "error",
  // title: "Oops...",
  // text: "Something went wrong!",
  // footer: '<a href="#">Why do I have this issue?</a>'
// });
