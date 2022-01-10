document.querySelector('form').addEventListener('submit', async e => {
	e.preventDefault();

	const city = e.target.elements.city.value;

	// send a request to the back end
	// const { data } = await axios(`/temperature/${city}`);
  // console.log(data);
  document.location.href = `/temperature/${city}`;
});
