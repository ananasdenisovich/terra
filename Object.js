//JS object
$(document).ready(function () {
  $("#registerButton").on("click", function (event) {
    event.preventDefault();

    const selectedLanguage = $("#searchbox_language option:selected").text();
    const selectedCity = $("#searchbox_region option:selected").text();
    const selectedType = $("#searchbox_type option:selected").text();
    const selectedDuration = $("#searchbox_duration option:selected").text();
    const course = {
      language: selectedLanguage,
      city: selectedCity,
      type: selectedType,
      duration: selectedDuration,
    };

    const courseInfo = `You are registered for ${course.language} in ${course.city} as ${course.type} for ${course.duration}`;

    $("#courseInfo").text(courseInfo);
  });
});
