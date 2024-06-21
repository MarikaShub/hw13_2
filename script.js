const dateInput = document.getElementById("date_input");
const countDaysButton = document.getElementById("count_days");
const message = document.querySelector(".message");

function getDaysBeforeBirthday() {
  const dateInputValue = new Date(dateInput.value);
  const dateInputTimestamp = Date.parse(dateInputValue);
  const currentDate = Date.now();
  const countDays = Math.floor(
    (dateInputTimestamp - currentDate) / (1000 * 60 * 60 * 24)
  );
  
  if (dateInput.value === "") {
    message.textContent = "Введите, пожалуйста, дату";
    message.style.color = 'red'
  } else {
    message.textContent = `До вашего дня рождения осталось ${countDays} ${dayTitle(
      countDays
    )}`;
    message.style.color = 'black'
  }

  function dayTitle(countDays) {
    if (countDays % 10 === 1 && countDays !== 11) {
      return "день";
    } else if (
      countDays % 10 >= 2 &&
      countDays % 10 <= 4 &&
      (countDays % 100 < 10 || countDays % 100 >= 20)
    ) {
      return "дня";
    } else {
      return "дней";
    }
  }
}
countDaysButton.addEventListener("click", getDaysBeforeBirthday);
