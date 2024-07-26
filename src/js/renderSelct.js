export function renderSelect(elementLinks, dataArr) {
  const sort = dataArr.sort();
  sort.forEach((data) => {
    const dataElement = `<option value="${data}">${data}</option>`;
    elementLinks.insertAdjacentHTML("beforeend", dataElement);
  });
}
