//function that prompt user to input a date and checks if it is the correct format
const getValidDate = () => {
  let input = prompt(
    "What date would you like to input, please input in the format XXXX-XX-XX:"
  );

  if (input === null) {
    return;
  }

  let inputDate = new Date(input);
  if (inputDate.toString() === "Invalid Date") {
    alert(
      "You did not enter a valid date/used the wrong format, please try again."
    );
    return getValidDate();
  } else {
    return inputDate;
  }
};

//function to get the age difference between a given date and todays date
const ageFromToday = (inputDate) => {
  const age = new Date(Date.parse(Date()) - Date.parse(inputDate));
  return age.getFullYear() - 1970;
};

const main = () => {
  console.log(
    "This program will find the age difference between today's date and your desired date."
  );
  console.log(
    "The age difference between today's date and the date you entered is " +
      ageFromToday(getValidDate()) +
      " years!"
  );
};

main();
